import useSWR from "swr";

const useCommunityOfUser = ({ _id }: any) => {
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/community/features/data-user/${_id}`,
    fetcher
  );

  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

  return {
    communityData: data,
    isLoading,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useCommunityOfUser;
