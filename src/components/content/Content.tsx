import "./Content.scss";
import { Fieldset } from "primereact/fieldset";
import { MethodDropdown } from "../method-dropdown/MethodDropdown";
import RequestBody from "../request-body/RequestBody";
import ResponseBody from "../response-body/ResponseBody";
import Route from "../route/Route";

function Content() {
  return (
    <div className="content">
      <Fieldset legend={<MethodDropdown />}>
        <Route />
        <div className="method-details-container">
          <RequestBody />
          <ResponseBody />
        </div>
      </Fieldset>
    </div>
  );
}

export default Content;
