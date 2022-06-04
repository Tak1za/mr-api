import "./ResponseBody.scss";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

function ResponseBody() {
  const [code, setCode] = useState("");

  return (
    <div className="response-body">
      <CodeMirror
        value={code}
        extensions={[json()]}
        theme="dark"
        minHeight="65vh"
        maxHeight="65vh"
        minWidth="47vw"
        maxWidth="47vw"
        onChange={(value, _) => setCode(value)}
      />
    </div>
  );
}

export default ResponseBody;
