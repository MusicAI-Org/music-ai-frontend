import React from "react";
import useSWR from "swr";

interface Props {
  email: string;
}

const useUser = ({ email }: Props) => {
  if (email === "") {
    return {
      user: null,
      isLoading: false,
      error: null,
      isValidating: false,
      mutate: null,
      revalidate: null,
    };
  }

  const fetcher = async (...args: [RequestInfo, RequestInit]) => {
    const res = await fetch(args[0], {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return await res.json();
  };

  const { data, error, isValidating, mutate, isLoading } = useSWR(
    `https://music-ai-backend.onrender.com/api/auth/getModel`,
    fetcher
  );

  const revalidate = () => {
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
    user: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useUser;
