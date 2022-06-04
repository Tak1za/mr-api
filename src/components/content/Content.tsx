import "./Content.scss";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

function Content() {
  const [route, setRoute] = useState("");
  return (
    <div className="content">
      <Fieldset legend="GET">
        <span className="p-float-label">
          <InputText
            id="route"
            value={route}
            className="p-inputtext p-component block mb-2"
            onChange={(e) => setRoute(e.target.value)}
          />
          <label htmlFor="route">Route</label>
        </span>
      </Fieldset>
    </div>
  );
}

export default Content;
