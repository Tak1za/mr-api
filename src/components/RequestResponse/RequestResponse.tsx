import "./RequestResponse.scss";
import Request from "../Request/Request";
import Response from "../Response/Response";
import axios from "axios";
import { Button, Input, Select } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  resetResponse,
  setIsLoading,
  setResponseBody,
  setResponseStatus,
} from "../../store/features/Response/responseSlice";
import {
  resetRequest,
  setProtocol,
  setRequestType,
  setUrl,
} from "../../store/features/Request/requestSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";

const RequestResponse = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const protocol = useSelector((state: RootState) => state.request.protocol);
  const url = useSelector((state: RootState) => state.request.url);
  const requestType = useSelector(
    (state: RootState) => state.request.requestType
  );
  const requestBody = useSelector(
    (state: RootState) => state.request.requestBody
  );
  const isLoading = useSelector((state: RootState) => state.response.isLoading);

  useEffect(() => {
    dispatch(resetRequest());
    dispatch(resetResponse());
  }, [dispatch]);

  const sendRequest = () => {
    dispatch(setIsLoading(true));

    let bodyToSend: any = {};
    let urlAndHeaders: any = {};

    switch (requestType) {
      case "get":
        urlAndHeaders = {
          url: protocol + url,
        };
        bodyToSend = {
          ...urlAndHeaders,
        };
        break;
      case "post":
        urlAndHeaders = {
          url: protocol + url,
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (requestBody) {
          bodyToSend = {
            ...urlAndHeaders,
            data: requestBody,
          };
        } else {
          bodyToSend = {
            ...urlAndHeaders,
          };
        }
        break;
    }
    axios
      .post(`http://localhost:3001/${requestType.toLowerCase()}`, bodyToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(setResponseBody(res.data));
        dispatch(setResponseStatus(res.status + " " + res.statusText));
      })
      .catch((err) => {
        console.error(err);
        if (err.response.data.stdErr) {
          dispatch(setResponseBody(null));
          dispatch(setResponseStatus(err.response.data.stdErr));
        } else {
          dispatch(setResponseBody(err.response.data.apiErr));
          dispatch(
            setResponseStatus(
              err.response.status + " " + err.response.statusText
            )
          );
        }
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

  const selectBefore = (
    <Select
      defaultValue="http://"
      className="select-before"
      value={protocol}
      onChange={(p: string) => dispatch(setProtocol(p))}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const onPaste = async () => {
    let clipboardData = await navigator.clipboard.readText();
    if (clipboardData !== "") {
      if (clipboardData.startsWith("http")) {
        switch (clipboardData.substring(0, clipboardData.indexOf("://"))) {
          case "https":
            dispatch(setProtocol("https://"));
            dispatch(
              setUrl(clipboardData.substring(clipboardData.indexOf("://") + 3))
            );
            break;
          case "http":
            dispatch(setProtocol("http://"));
            dispatch(
              setUrl(clipboardData.substring(clipboardData.indexOf("://") + 3))
            );
            break;
          default:
            break;
        }
      }
    }
  };

  const onCopy = async () => {
    let clipboardData = await navigator.clipboard.readText();
    if (clipboardData === url) {
      await navigator.clipboard.writeText(protocol + url);
    }
  };

  return (
    <div className="request-response">
      <Input.Group compact style={{ display: "flex" }}>
        <Select
          defaultValue="get"
          onChange={(value: string) => dispatch(setRequestType(value))}
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
          onCopy={onCopy}
          value={url}
          onChange={(e) => dispatch(setUrl(e.target.value))}
          autoFocus
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
        <Response />
      </div>
    </div>
  );
};

export default RequestResponse;
