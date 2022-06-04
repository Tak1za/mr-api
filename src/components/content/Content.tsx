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
  const [responseBody, setResponseBody] = useState<string>("");

  const handleSend = () => {
    console.log("route: ", route);
    console.log("method: ", method);
    setResponseBody("");
    fetch(route, {
      method: method,
    })
      .then((res) => res.json())
      .then((data) => {
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
        <div className="method-details-container">
          <RequestBody />
          <ResponseBody data={responseBody} setData={setResponseBody} />
        </div>
      </Fieldset>
    </div>
  );
}

export default Content;
