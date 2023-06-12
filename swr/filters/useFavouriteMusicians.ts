import React from "react";
import useSWR from "swr";

const useFavouriteMusicians = (_id: String) => {
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/people/likeBased`;

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
    // Manually trigger revalidation using mutate function
    mutate();
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      revalidate();
    }, 5000); // Revalidate every 5 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval on unmounting
    };
  }, []);

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
