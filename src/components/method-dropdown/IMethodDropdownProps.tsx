import { IRequest } from "../../models/Request";
import React from "react";

export interface IMethodDropdownProps {
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
