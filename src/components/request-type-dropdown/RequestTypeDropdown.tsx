import { Dropdown } from "primereact/dropdown";
import { allRequestTypes } from "../../models/RequestType";
import './RequestTypeDropdown.scss';

interface IRequestTypeDropdown {
  currentType: string;
  setCurrentType: React.Dispatch<React.SetStateAction<string>>;
}

function RequestTypeDropdown(props: IRequestTypeDropdown) {
  return (
    <div className="request-type-dropdown">
      <Dropdown
        options={allRequestTypes}
        value={props.currentType}
        onChange={(e) => props.setCurrentType(e.target.value)}
        optionLabel="method"
      />
    </div>
  );
}

export default RequestTypeDropdown;
