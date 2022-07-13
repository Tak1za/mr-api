import { IRequest } from "../../models/Request";

export interface IContentProps {
  currentRequest: IRequest;
  setCurrentRequest: React.Dispatch<React.SetStateAction<IRequest>>;
  recentRequests: IRequest[];
  setRecentRequests: React.Dispatch<React.SetStateAction<IRequest[]>>;
}