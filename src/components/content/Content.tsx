import "./Content.scss";
import { Fieldset } from "primereact/fieldset";
import { MethodDropdown } from "../method-dropdown/MethodDropdown";
import RequestBody from "../request-body/RequestBody";
import ResponseBody from "../response-body/ResponseBody";
import Route from "../route/Route";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { allRequestTypes } from "../../models/RequestType";
import { allMethods } from "../../models/Method";
import { IContentProps } from "./IContentProps";

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

function Content(props: IContentProps) {
  const [id, setId] = useState<string>("");
  const [route, setRoute] = useState<string>("");
  const [method, setMethod] = useState<string>(allMethods[0].method);
  const [requestType, setRequestType] = useState<string>(allRequestTypes[0].method);
  const [requestBody, setRequestBody] = useState<string>("");
  const [responseBody, setResponseBody] = useState<string>("");
  const [responseCode, setResponseCode] = useState<string>("");
  const [isBadRoute, setIsBadRoute] = useState<boolean>(false);

  useEffect(() => {
    setId(props.currentRequest.id);
    setRoute(props.currentRequest.route);
    setMethod(props.currentRequest.method);
    setRequestType(props.currentRequest.type);
    setRequestBody(props.currentRequest.body ? props.currentRequest.body : "");
    setResponseBody("");
    setResponseCode("");
    setIsBadRoute(false);
  }, [props.currentRequest]);

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
            id={id}
            route={route}
            allMethods={allMethods}
            title="new request"
            method={method}
            setMethod={setMethod}
            requestTitle={props.currentRequest.title}
            recentRequests={props.recentRequests}
            setRecentRequests={props.setRecentRequests}
            requestBody={requestBody}
            type={requestType}
            setCurrentRequest={props.setCurrentRequest}
          />
        }
      >
        <Route
          route={route}
          setRoute={setRoute}
          handleSend={handleSend}
          isBadRoute={isBadRoute}
          type={requestType}
          setType={setRequestType}
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
