import "./Content.scss";
import { Fieldset } from "primereact/fieldset";
import { MethodDropdown } from "../method-dropdown/MethodDropdown";
import RequestBody from "../request-body/RequestBody";
import ResponseBody from "../response-body/ResponseBody";
import Route from "../route/Route";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IRequest } from "../../models/Request";

const allMethods = [
  {
    method: "GET",
    value: "GET",
  },
  {
    method: "PUT",
    value: "PUT",
  },
  {
    method: "POST",
    value: "POST",
  },
  {
    method: "DELETE",
    value: "DELETE",
  },
];

interface IContentProps {
  currentRequest: IRequest;
}

function Content(props: IContentProps) {
  const [route, setRoute] = useState<string>("");
  const [method, setMethod] = useState<string>(allMethods[0].method);
  const [requestBody, setRequestBody] = useState<string>("");
  const [responseBody, setResponseBody] = useState<string>("");
  const [responseCode, setResponseCode] = useState<string>("");
  const [isBadRoute, setIsBadRoute] = useState<boolean>(false);

  useEffect(() => {
    setMethod(props.currentRequest.method);
    setRoute(props.currentRequest.route);
    setRequestBody(props.currentRequest.body ? props.currentRequest.body : "");
    setResponseBody("");
    setResponseCode("");
  }, [props.currentRequest]);

  function timeTaken(responseTime: number): string {
    let timeInSec = "";

    if (responseTime < 1000) {
      timeInSec = responseTime + "ms";
    } else if (responseTime === 1000) {
      timeInSec = "1s";
    } else {
      timeInSec = (responseTime / 1000).toFixed(2) + "s";
    }

    return timeInSec;
  }

  function handleSend(): void {
    if (route === "") {
      setIsBadRoute(true);
      return;
    }

    setIsBadRoute(false);
    setResponseBody("");
    let startTime = Date.now();

    axios({
      method: method,
      url: `http://localhost:8080/${route}`,
      data: requestBody,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res: AxiosResponse) => {
        setResponseCode(
          `Status Code: ${res.status} | ${timeTaken(Date.now() - startTime)}`
        );
        setResponseBody(JSON.stringify(res.data, null, "\t"));
      })
      .catch((err: AxiosError) => {
        setResponseCode(
          `Status Code: ${err.response?.status} | ${timeTaken(
            Date.now() - startTime
          )}`
        );
        setResponseBody(JSON.stringify(err.response?.data, null, "\t"));
      });
  }

  return (
    <div className="content">
      <Fieldset
        legend={
          <MethodDropdown
            allMethods={allMethods}
            method={method}
            setMethod={setMethod}
            requestTitle={props.currentRequest.title}
          />
        }
      >
        <Route
          route={route}
          setRoute={setRoute}
          handleSend={handleSend}
          isBadRoute={isBadRoute}
        />
        <div className="status-code">{responseCode}</div>
        <div className="method-details-container">
          <RequestBody data={requestBody} setData={setRequestBody} />
          <ResponseBody data={responseBody} setData={setResponseBody} />
        </div>
      </Fieldset>
    </div>
  );
}

export default Content;
