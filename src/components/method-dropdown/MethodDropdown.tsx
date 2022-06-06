import { Dropdown } from "primereact/dropdown";
import "./MethodDropdown.scss";
import { IRequest } from "../../models/Request";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface IMethodDropdownProps {
  id: string;
  route: string;
  method: string;
  requestBody: string;
  title: string;
  requestTitle: string;
  type: string;
  allMethods: Array<any>;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  recentRequests: IRequest[];
  setRecentRequests: React.Dispatch<React.SetStateAction<IRequest[]>>;
  setCurrentRequest: React.Dispatch<React.SetStateAction<IRequest>>;
}

export function MethodDropdown(props: IMethodDropdownProps) {
  const handleSave = () => {
    props.setRecentRequests((res) => [
      ...res,
      {
        id: props.id,
        type: props.type,
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
      type: "REST",
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
