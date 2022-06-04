import "./ResponseBody.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

function ResponseBody() {
  const [responseBody, setResponseBody] = useState("");

  return (
    <div className="response-body">
      <span className="p-float-label">
        <InputTextarea
          value={responseBody}
          onChange={(e) => setResponseBody(e.target.value)}
          rows={27}
          cols={30}
          id="request-body"
        />
        <label htmlFor="request-body">Request Body</label>
      </span>
    </div>
  );
}

export default ResponseBody;
