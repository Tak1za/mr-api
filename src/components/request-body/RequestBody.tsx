import "./RequestBody.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

function RequestBody() {
  const [requestBody, setRequestBody] = useState("");
  return (
    <div className="request-body">
      <span className="p-float-label">
        <InputTextarea
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          rows={27}
          cols={30}
          id="request-body"
        />
        <label htmlFor="request-body">Request Body</label>
      </span>
    </div>
  );
}

export default RequestBody;
