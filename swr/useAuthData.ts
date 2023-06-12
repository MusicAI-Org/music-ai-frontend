import React from "react";
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/music/authMusic/getAuthMusic/${id}`,
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
    allTypeGenre: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useAuthData;
