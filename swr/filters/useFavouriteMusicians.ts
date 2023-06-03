import useSWR from "swr";

const useFavouriteMusicians = (_id: String) => {
  const endpoint = "http://localhost:8000/api/community/people/likeBased";

  const fetcher = async (...args: [RequestInfo, RequestInit]) => {
    const res = await fetch(args[0], {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({ _id }), // Pass the email as request body
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

export default useFavouriteMusicians;
