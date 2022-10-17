import "./Request.scss";
import ReactAce from "react-ace/lib/ace";
import beautify from "ace-builds/src-noconflict/ext-beautify";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRequestBody } from "../../store/features/Tabs/tabsSlice";
import { RootState } from "../../store/store";

interface IRequestProps {
  index: number;
}

const Request = ({ index }: IRequestProps) => {
  const editorRef = useRef<any>();
  const dispatch = useDispatch();
  const allTabs = useSelector((state: RootState) => state.tabs.allTabs);
  const requestBody = allTabs[index].requestBody;

  const prettify = () => {
    beautify.beautify(editorRef.current.editor.session);
  };

  return (
    <div className="request-editor-container">
      <div className="header">
        <span>Request</span>
        <div role="presentation" onClick={prettify} className="beautify">
          Beautify
        </div>
      </div>
      <ReactAce
        mode="json"
        ref={editorRef}
        theme="tomorrow"
        name="unique-request"
        setOptions={{
          useWorker: false,
        }}
        className="request-editor"
        showPrintMargin={false}
        highlightActiveLine={false}
        enableBasicAutocompletion
        enableLiveAutocompletion
        value={requestBody}
        onChange={(value) =>
          dispatch(
            setRequestBody({
              index: index,
              value: value,
            })
          )
        }
        wrapEnabled
        commands={beautify.commands}
      />
    </div>
  );
};

export default Request;
