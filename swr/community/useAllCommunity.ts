import React from "react";
import useSWR from "swr";

const useAllCommunity = ({ _id }: any) => {
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/features/data-except-user-comm/${_id}`,
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
    communities: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useAllCommunity;
