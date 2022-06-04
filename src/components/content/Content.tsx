import "./Content.scss";
import { Fieldset } from "primereact/fieldset";
import { MethodDropdown } from "../method-dropdown/MethodDropdown";
import RequestBody from "../request-body/RequestBody";
import ResponseBody from "../response-body/ResponseBody";
import Route from "../route/Route";
import { useState } from "react";

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

function Content() {
  const [route, setRoute] = useState<string>("");
  const [method, setMethod] = useState<string>(allMethods[0].method);
  const [requestBody, setRequestBody] = useState<string>("");
  const [responseBody, setResponseBody] = useState<string>("");
  const [responseCode, setResponseCode] = useState<string>("");

  const handleSend = () => {
    console.log("method: ", method);
    console.log("route: ", route);
    setResponseBody("");
    let startTime = Date.now();
    fetch(route, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: requestBody ? requestBody : null,
    })
      .then((res) => {
        let responseTime = Date.now() - startTime;
        let timeInSec = "";
        if (responseTime < 1000) {
          timeInSec = responseTime + "ms";
        } else if (responseTime == 1000) {
          timeInSec = "1s";
        } else {
          timeInSec = (responseTime / 1000).toFixed(2) + "s";
        }
        setResponseCode(`Status Code: ${res.status} | ${timeInSec}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setResponseBody(JSON.stringify(data, null, "\t"));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="content">
      <Fieldset
        legend={
          <MethodDropdown
            allMethods={allMethods}
            method={method}
            setMethod={setMethod}
          />
        }
      >
        <Route route={route} setRoute={setRoute} handleSend={handleSend} />
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
