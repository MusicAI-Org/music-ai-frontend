import useSWR from "swr";

interface Props {
  value: string;
}

const useAvatar = (value: Props) => {
  if (value.value === "") {
    return {
      error: "Please Enter some prompt",
    };
  }

  const fetcher = async (...args: [RequestInfo, RequestInit]) => {
    const res = await fetch(args[0]);
    return await res.json();
  };

  const { data, error, isValidating, mutate, isLoading } = useSWR(
    `https://music-ai-stable-diffusion-api.onrender.com/generate-image/${value.value}`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );

  return {
    image: data,
    isLoading,
    error,
    isValidating,
    mutate,
  };
};

export default useAvatar;
