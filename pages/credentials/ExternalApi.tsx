import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  // const [message, setMessage] = useState("");
  // const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const { user } = useAuth0();

  // const callApi = async () => {
  //   try {
  //     // const response = await fetch(`${serverUrl}/public`);
  //     const response = await fetch(`http://localhost:8000/public`);

  //     const responseData = await response.json();

  //     setMessage(responseData);
  //   } catch (error) {
  //     setMessage("error");
  //   }
  // };

  // const callSecureApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();
  //     console.log("token", token);

  //     const response = await fetch(`http://localhost:8000/private`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const responseData = await response.json();

  //     setMessage(responseData);
  //   } catch (error) {
  //     setMessage("error");
  //   }
  // };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
      }}
    >
      <h1>External API</h1>
      <p>{user}</p>
      {/* <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="btn btn-primary" onClick={callApi}>
          Get Public Message
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          Get Protected Message
        </button>
      </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{user}</code>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ExternalApi;
