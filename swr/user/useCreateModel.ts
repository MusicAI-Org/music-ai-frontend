import useSWR from "swr";

const CreateModel = (dat: any) => {
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/createmodel`,
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

export default CreateModel;
