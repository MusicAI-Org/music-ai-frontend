import useSWR from "swr";

interface Props {
  email: string;
}

const useUser = ({ email }: Props) => {
  if (email == "") {
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
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({ email }), // Pass the email as request body
    });
    return await res.json();
  };

  const { data, error, isValidating, mutate, isLoading } = useSWR(
    `https://music-ai-backend.onrender.com/api/auth/getModel`,
    // `http://localhost:8000/api/auth/getModel`,
    fetcher
  );

  const revalidate = () => {
    // Manually trigger revalidation using mutate function
    mutate();
  };

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
