import "./ResponseBody.scss";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

interface IResponseBodyProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

function ResponseBody(props: IResponseBodyProps) {
  return (
    <div className="response-body">
      <CodeMirror
        value={props.data}
        extensions={[json()]}
        theme="dark"
        minHeight="65vh"
        maxHeight="65vh"
        minWidth="47vw"
        maxWidth="47vw"
        onChange={(value, _) => props.setData(value)}
      />
    </div>
  );
}

export default ResponseBody;
