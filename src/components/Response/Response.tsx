import "./Response.scss";
import ReactAce from "react-ace/lib/ace";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Response = () => {
  const responseStatus = useSelector(
    (state: RootState) => state.response.responseStatus
  );
  const responseBody = useSelector(
    (state: RootState) => state.response.responseBody
  );
  return (
    <div className="response-editor-container">
      <div className="header">
        <span>Response</span>
        <div role="presentation">{responseStatus}</div>
      </div>
      <ReactAce
        mode="json"
        theme="tomorrow"
        name="unique-response"
        setOptions={{
          useWorker: false,
        }}
        className="response-editor"
        showPrintMargin={false}
        readOnly
        value={JSON.stringify(responseBody, null, 4)}
        wrapEnabled
      />
    </div>
  );
};

export default Response;
