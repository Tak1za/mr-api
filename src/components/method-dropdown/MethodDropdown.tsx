import { Dropdown } from "primereact/dropdown";
import "./MethodDropdown.scss";

interface IMethodDropdownProps {
  allMethods: Array<any>;
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
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
    </div>
  );
}
