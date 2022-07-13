import { IRequest } from "../../models/Request";

export interface IHeaderProps {
  setRequest: React.Dispatch<React.SetStateAction<IRequest>>;
  recentRequests: IRequest[];
}