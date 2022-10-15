import "./RequestResponse.scss";
import Request from "../Request/Request";
import Response from "../Response/Response";
import axios from "axios";
import { useState } from "react";

const RequestResponse = () => {
  const [protocol, setProtocol] = useState<string>("http://");
  const [url, setUrl] = useState<string>("");
  const [responseBody, setResponseBody] = useState<any>(undefined);
  const [responseStatus, setResponseStatus] = useState<string>("");

  const sendRequest = () => {
    axios
      .post(
        "http://localhost:3001/get",
        {
          url: protocol + url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setResponseBody(res.data);
        setResponseStatus(res.status + " " + res.statusText);
      })
      .catch((err) => {
        setResponseBody(err.response.data.message);
        setResponseStatus(err.response.status + " " + err.response.statusText);
      });
  };
  return (
    <div className="request-response">
      <Request
        url={url}
        setUrl={setUrl}
        protocol={protocol}
        setProtocol={setProtocol}
        sendRequest={sendRequest}
      />
      <Response responseBody={responseBody} responseStatus={responseStatus} />
    </div>
  );
};

export default RequestResponse;
