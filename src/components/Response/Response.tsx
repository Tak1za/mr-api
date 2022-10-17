import "./Response.scss";
import ReactAce from "react-ace/lib/ace";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IResponseProps {
  index: number;
}

const Response = ({ index }: IResponseProps) => {
  const allTabs = useSelector((state: RootState) => state.tabs.allTabs);
  const responseStatus = allTabs[index].responseStatus;
  const responseBody = allTabs[index].responseBody;

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
