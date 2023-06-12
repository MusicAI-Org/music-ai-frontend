import React from "react";
import useSWR from "swr";

interface Props {
  id: string;
}
const useFriends = ({ id }: Props) => {
  const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate, isLoading } = useSWR(
    // `https://music-ai-backend.onrender.com/api/auth/getfriendsdata/${id}`,
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/getfriendsdata/${id}`,
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
    friends: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useFriends;
