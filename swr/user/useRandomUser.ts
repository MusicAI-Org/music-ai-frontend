import useSWR from "swr";

interface Props {
  id: string;
}
const useRandomUser = ({ id }: any) => {
  const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate, isLoading } = useSWR(
    // `https://music-ai-backend.onrender.com/api/auth/getfriendsdata/${id}`,
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/getrandomuserdata/${id}`,
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

export default useRandomUser;
