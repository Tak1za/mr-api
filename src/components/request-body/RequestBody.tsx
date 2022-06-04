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
        minHeight="550px"
        maxHeight="550px"
        minWidth="48vw"
        maxWidth="48vw"
        onChange={(value, _) => setCode(value)}
      />
    </div>
  );
}

export default RequestBody;
