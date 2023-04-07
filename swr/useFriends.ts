import useSWR from "swr";

interface Props {
  id: string;
}
const useFriends = ({ id }: Props) => {
  const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate, isLoading } = useSWR(
    `https://music-ai-backend.onrender.com/api/auth/getfriendsdata/${id}`,
    fetcher
  );

  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

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
