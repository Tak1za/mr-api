import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "./MethodDropdown.scss";

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

export function MethodDropdown() {
  const [method, setMethod] = useState<string>(allMethods[0].value);

  const onMethodChange = (e: { value: string }) => {
    setMethod(e.value);
  };

  return (
    <div className="method-dropdown">
      <Dropdown
        value={method}
        options={allMethods}
        onChange={onMethodChange}
        optionLabel="method"
      />
    </div>
  );
}
