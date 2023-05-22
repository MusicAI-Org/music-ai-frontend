import useSWR from "swr";

const useAllCommunity = ({ _id }: any) => {
  // const fetcher = (...args: [RequestInfo, RequestInit]) =>
  //   fetch(...args).then((res) => res.json());
  // const { data, error, isValidating, mutate, isLoading } = useSWR(
  //   // `https://music-ai-backend.onrender.com/api/community/features/data`,
  //   `http://localhost:8000/api/community/features/data`,
  //   fetcher
  // );

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
    `http://localhost:8000/api/community/features/data-except-user-comm/${_id}`,
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
