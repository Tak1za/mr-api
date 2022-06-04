import "./RequestBody.scss";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

function RequestBody() {
  const [code, setCode] = useState("");

  return (
    <div className="request-body">
      <CodeMirror
        value={code}
        extensions={[json()]}
        theme="dark"
        minHeight="62vh"
        maxHeight="62vh"
        minWidth="47vw"
        maxWidth="47vw"
        onChange={(value, _) => setCode(value)}
      />
    </div>
  );
}

export default RequestBody;
