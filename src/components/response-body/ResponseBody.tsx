import "./ResponseBody.scss";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { IResponseBodyProps } from "./IResponseBodyProps";

function ResponseBody(props: IResponseBodyProps) {
  return (
    <div className="response-body">
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

export default ResponseBody;
