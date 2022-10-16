import "./Request.scss";
import ReactAce from "react-ace/lib/ace";
import beautify from "ace-builds/src-noconflict/ext-beautify";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRequestBody } from "../../store/features/Request/requestSlice";
import { RootState } from "../../store/store";

const Request = () => {
  const editorRef = useRef<any>();

  const prettify = () => {
    beautify.beautify(editorRef.current.editor.session);
  };

  const dispatch = useDispatch();
  const requestBody = useSelector(
    (state: RootState) => state.request.requestBody
  );

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
        onChange={(value) => dispatch(setRequestBody(value))}
        wrapEnabled
        commands={beautify.commands}
      />
    </div>
  );
};

export default Request;
