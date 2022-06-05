import { Dropdown } from "primereact/dropdown";
import "./MethodDropdown.scss";
import { IRequest } from "../../models/Request";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface IMethodDropdownProps {
  allMethods: Array<any>;
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  requestTitle: string;
  currentRequest: IRequest;
  recentRequests: IRequest[];
  setRecentRequests: React.Dispatch<React.SetStateAction<IRequest[]>>;
  requestBody: string;
  route: string;
  title: string;
  id: string;
  setCurrentRequest: React.Dispatch<React.SetStateAction<IRequest>>;
}

export function MethodDropdown(props: IMethodDropdownProps) {
  const handleSave = () => {
    props.setRecentRequests((res) => [
      ...res,
      {
        id: props.id,
        title: props.title,
        method: props.method,
        route: props.route,
        body: props.requestBody,
      },
    ]);
  };

  const handleDelete = () => {
    console.log("current id: ", props.id);
    props.setRecentRequests(
      props.recentRequests.filter((r) => r.id !== props.id)
    );
    props.setCurrentRequest({
      id: uuidv4(),
      title: "",
      method: "GET",
      route: "",
    });
  };

  return (
    <div className="method-dropdown">
      <Dropdown
        options={props.allMethods}
        value={props.method}
        onChange={(e) => props.setMethod(e.target.value)}
        optionLabel="method"
      />
      <div className="request-title">{props.requestTitle}</div>
      <i className="pi pi-save request-save" onClick={handleSave} />
      <i className="pi pi-trash request-delete" onClick={handleDelete} />
    </div>
  );
}
