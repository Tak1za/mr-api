export interface IRouteProps {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
  isBadRoute: boolean;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}
