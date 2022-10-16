import "./RequestLabel.scss";
import { Input } from "antd";
import { useState } from "react";

const RequestLabel = () => {
  const [label, setLabel] = useState<string>("");
  return (
    <div className="request-label">
      <Input
        placeholder="New"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        autoFocus
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default RequestLabel;
