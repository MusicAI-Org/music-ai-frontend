import useSWR from "swr";

const useMLMusic = ({ id }: any) => {
  const fetcher = async (url: RequestInfo | URL) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

  const { data, error, isValidating, mutate, isLoading } = useSWR(
    `${"https://music-ai-backend.onrender.com"}/api/community/music/fetchMusic/${id}`,
    fetcher
  );
  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

  return {
    music: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useMLMusic;
