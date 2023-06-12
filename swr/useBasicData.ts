import useSWR from "swr";

const useBasicData = () => {
  const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate, isLoading } = useSWR(
    // `https://music-ai-backend.onrender.com/api/music/basicMusic/getBasicMusic`,
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/music/basicMusic/getBasicMusic`,
    fetcher
  );

  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useBasicData;
