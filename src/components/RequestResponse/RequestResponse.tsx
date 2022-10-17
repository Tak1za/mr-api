import "./RequestResponse.scss";
import Request from "../Request/Request";
import Response from "../Response/Response";
import axios from "axios";
import { Button, Input, Select } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  setIsLoading,
  setProtocol,
  setRequestType,
  setResponseBody,
  setResponseStatus,
  setUrl,
} from "../../store/features/Tabs/tabsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

interface IRequestResponseProps {
  index: number;
}

const RequestResponse = ({ index }: IRequestResponseProps) => {
  const dispatch = useDispatch();
  const allTabs = useSelector((state: RootState) => state.tabs.allTabs);
  const protocol = allTabs[index].protocol;
  const url = allTabs[index].url;
  const requestType = allTabs[index].requestType;
  const requestBody = allTabs[index].requestBody;

  const isLoading = useSelector((state: RootState) => state.tabs.isLoading);

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
        dispatch(
          setResponseBody({
            index: index,
            value: res.data,
          })
        );
        dispatch(
          setResponseStatus({
            index: index,
            value: res.status + " " + res.statusText,
          })
        );
      })
      .catch((err) => {
        console.error(err);
        if (err.response.data.stdErr) {
          dispatch(
            setResponseBody({
              index: index,
              value: null,
            })
          );
          dispatch(
            setResponseStatus({
              index: index,
              value: err.response.data.stdErr,
            })
          );
        } else {
          dispatch(
            setResponseBody({
              index: index,
              value: err.response.data.apiErr,
            })
          );
          dispatch(
            setResponseStatus({
              index: index,
              value: err.response.status + " " + err.response.statusText,
            })
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
      onChange={(p: string) =>
        dispatch(setProtocol({ index: index, value: p }))
      }
    >
      <Select.Option value="http://">http://</Select.Option>
      <Select.Option value="https://">https://</Select.Option>
    </Select>
  );

  const onPaste = async () => {
    let clipboardData = await navigator.clipboard.readText();
    if (clipboardData !== "") {
      if (clipboardData.startsWith("http")) {
        switch (clipboardData.substring(0, clipboardData.indexOf("://"))) {
          case "https":
            dispatch(setProtocol({ index: index, value: "https://" }));
            dispatch(
              setUrl({
                index: index,
                value: clipboardData.substring(
                  clipboardData.indexOf("://") + 3
                ),
              })
            );
            break;
          case "http":
            dispatch(setProtocol({ index: index, value: "http://" }));
            dispatch(
              setUrl({
                index: index,
                value: clipboardData.substring(
                  clipboardData.indexOf("://") + 3
                ),
              })
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
          onChange={(value: string) =>
            dispatch(
              setRequestType({
                index: index,
                value: value,
              })
            )
          }
          value={requestType}
          style={{ width: "100px" }}
        >
          <Select.Option value="get">GET</Select.Option>
          <Select.Option value="post">POST</Select.Option>
          <Select.Option value="put">PUT</Select.Option>
          <Select.Option value="delete">DELETE</Select.Option>
        </Select>
        <Input
          addonBefore={selectBefore}
          onPaste={onPaste}
          onCopy={onCopy}
          value={url}
          onChange={(e) =>
            dispatch(
              setUrl({
                index: index,
                value: e.target.value,
              })
            )
          }
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
        <Request index={index} />
        <Response index={index} />
      </div>
    </div>
  );
};

export default RequestResponse;
