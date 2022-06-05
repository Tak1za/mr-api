import { Dropdown } from "primereact/dropdown";
import "./MethodDropdown.scss";

interface IMethodDropdownProps {
  allMethods: Array<any>;
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  requestTitle: string;
}

export function MethodDropdown(props: IMethodDropdownProps) {
  return (
    <div className="method-dropdown">
      <Dropdown
        options={props.allMethods}
        value={props.method}
        onChange={(e) => props.setMethod(e.target.value)}
        optionLabel="method"
      />
      <div className="request-title">{props.requestTitle}</div>
      <i
        className="pi pi-save request-save"
        onClick={() => console.log("save clicked")}
      />
      <i
        className="pi pi-trash request-delete"
        onClick={() => console.log("delete clicked")}
      />
    </div>
  );
}
