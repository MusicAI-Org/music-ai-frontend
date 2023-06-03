import useSWR from "swr";

const useNearByFetch = (dat: any) => {
  const endpoint =
    "https://music-ai-backend.onrender.com/api/community/people/nearBy";

  const fetcher = async (...args: [RequestInfo, RequestInit]) => {
    const res = await fetch(args[0], {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(dat), // Pass the email as request body
    });
    return await res.json();
  };

  const { data, error, isValidating, mutate, isLoading } = useSWR(
    endpoint,
    fetcher
  );

  const revalidate = () => {
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

export default useNearByFetch;
