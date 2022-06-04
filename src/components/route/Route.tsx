import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import "./Route.scss";

function Route() {
  const [route, setRoute] = useState("");

  return (
    <span className="p-float-label">
      <InputText
        id="route"
        value={route}
        className="p-inputtext p-component block mb-2"
        onChange={(e) => setRoute(e.target.value)}
      />
      <label htmlFor="route">Route</label>
    </span>
  );
}

export default Route;
