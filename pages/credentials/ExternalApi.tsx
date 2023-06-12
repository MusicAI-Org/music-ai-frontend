import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const { user } = useAuth0();

  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
      }}
    >
      <h1>External API</h1>
      <p>{user}</p>
    </div>
  );
};

export default ExternalApi;
