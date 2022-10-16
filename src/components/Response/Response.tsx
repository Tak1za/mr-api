import "./Response.scss";
import ReactAce from "react-ace/lib/ace";

interface IResponseProps {
  responseBody: any;
  responseStatus: string;
}

const Response = ({ responseBody, responseStatus }: IResponseProps) => {
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
