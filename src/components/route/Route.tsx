import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Route.scss";

interface IRouteProps {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

function Route(props: IRouteProps) {
  return (
    <div className="route">
      <span className="p-float-label">
        <InputText
          id="route"
          value={props.route}
          className="p-inputtext p-component block mb-2"
          onChange={(e) => props.setRoute(e.target.value)}
        />
        <label htmlFor="route">Route</label>
      </span>
      <Button
        label="Send"
        className="p-button-sm p-button-rounded"
        onClick={props.handleSend}
      />
    </div>
  );
}

export default Route;
