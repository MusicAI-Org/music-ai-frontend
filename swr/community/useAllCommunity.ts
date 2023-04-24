import useSWR from "swr";

const useAllCommunity = () => {
  const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate, isLoading } = useSWR(
    `https://music-ai-backend.onrender.com/api/community/features/data`,
    fetcher
  );

  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

  return {
    communities: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useAllCommunity;
