import useSWR from "swr";

interface Props {
  id: string;
}

const useAuthData = ({ id }: Props) => {
  console.log("its hereeeee ", id);
  const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate, isLoading } = useSWR(
    // `https://music-ai-backend.onrender.com/api/music/basicMusic/getBasicMusic`,
    `http://localhost:8000/api/music/authMusic/getAuthMusic/${id}`,
    fetcher
  );

  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

  return {
    allTypeGenre: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useAuthData;
