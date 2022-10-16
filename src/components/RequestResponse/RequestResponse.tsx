import "./RequestResponse.scss";
import Request from "../Request/Request";
import Response from "../Response/Response";
import axios from "axios";
import { useState } from "react";
import { Button, Input, Select } from "antd";
import { SendOutlined } from "@ant-design/icons";

const RequestResponse = () => {
  const [protocol, setProtocol] = useState<string>("http://");
  const [url, setUrl] = useState<string>("");
  const [responseBody, setResponseBody] = useState<any>(undefined);
  const [responseStatus, setResponseStatus] = useState<string>("");
  const [requestType, setRequestType] = useState<string>("GET");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { Option } = Select;

  const sendRequest = () => {
    setIsLoading(true);
    axios
      .post(
        "http://localhost:3001/get",
        {
          url: protocol + url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setResponseBody(res.data);
        setResponseStatus(res.status + " " + res.statusText);
      })
      .catch((err) => {
        setResponseBody(err.response.data.message);
        setResponseStatus(err.response.status + " " + err.response.statusText);
      })
      .finally(() => setIsLoading(false));
  };

  const selectBefore = (
    <Select
      defaultValue="http://"
      className="select-before"
      value={protocol}
      onChange={(p: string) => setProtocol(p)}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const onPaste = (e: React.ClipboardEvent) => {
    const { clipboardData } = e;
    if (clipboardData.getData("text") !== "") {
      const potentialURL = clipboardData.getData("text");
      if (potentialURL.startsWith("http")) {
        switch (potentialURL.substring(0, potentialURL.indexOf("://"))) {
          case "https":
            setProtocol("https://");
            setUrl(potentialURL.substring(potentialURL.indexOf("://") + 3));
            e.preventDefault();
            break;
          case "http":
            setProtocol("http://");
            setUrl(potentialURL.substring(potentialURL.indexOf("://") + 3));
            e.preventDefault();
            break;
          default:
            e.preventDefault();
            break;
        }
      }
    }
  };

  return (
    <div className="request-response">
      <Input.Group compact style={{ display: "flex" }}>
        <Select
          defaultValue="get"
          onChange={(value: string) => setRequestType(value)}
          value={requestType}
          style={{ width: "100px" }}
        >
          <Option value="get">GET</Option>
          <Option value="post">POST</Option>
          <Option value="put">PUT</Option>
          <Option value="delete">DELETE</Option>
        </Select>
        <Input
          addonBefore={selectBefore}
          onPaste={onPaste}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          type="primary"
          onClick={sendRequest}
          icon={<SendOutlined />}
          loading={isLoading}
          disabled={url === ""}
        >
          Send
        </Button>
      </Input.Group>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          height: "calc(100vh - 500px)",
        }}
      >
        <Request />
        <Response responseBody={responseBody} responseStatus={responseStatus} />
      </div>
    </div>
  );
};

export default RequestResponse;
