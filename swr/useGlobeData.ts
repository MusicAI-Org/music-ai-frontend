import useSWR from "swr";

const useGlobeData = (_id?: string) => {
  const endpoint = _id
    ? // ? "https://music-ai-backend.onrender.com/api/music/authMusic/globeAuthData"
      // : "https://music-ai-backend.onrender.com/api/music/basicMusic/allGlobeData";
      "http://localhost:8000/api/music/authMusic/globeAuthData"
    : "http://localhost:8000/api/music/basicMusic/allGlobeData";

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

export default useGlobeData;
