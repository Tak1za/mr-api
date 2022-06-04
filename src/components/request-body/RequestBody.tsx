import "./RequestBody.scss";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

interface IRequestBodyProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

function RequestBody(props: IRequestBodyProps) {
  return (
    <div className="request-body">
      <CodeMirror
        value={props.data}
        extensions={[json()]}
        theme="dark"
        minHeight="62vh"
        maxHeight="62vh"
        minWidth="47vw"
        maxWidth="47vw"
        onChange={(value, _) => props.setData(value)}
      />
    </div>
  );
}

export default RequestBody;
