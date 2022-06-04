import "./Content.scss";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { MethodDropdown } from "../method-dropdown/MethodDropdown";
import RequestBody from "../request-body/RequestBody";
import ResponseBody from "../response-body/ResponseBody";

function Content() {
  const [route, setRoute] = useState("");
  return (
    <div className="content">
      <Fieldset legend={<MethodDropdown />}>
        <span className="p-float-label">
          <InputText
            id="route"
            value={route}
            className="p-inputtext p-component block mb-2"
            onChange={(e) => setRoute(e.target.value)}
          />
          <label htmlFor="route">Route</label>
        </span>
        <div className="method-details-container">
          <RequestBody />
          <ResponseBody />
        </div>
      </Fieldset>
    </div>
  );
}

export default Content;
