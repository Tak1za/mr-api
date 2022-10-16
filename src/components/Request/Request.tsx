import "./Request.scss";
import ReactAce from "react-ace/lib/ace";
import beautify from "ace-builds/src-noconflict/ext-beautify";
import { useRef } from "react";

const Request = () => {
  const editorRef = useRef<any>();

  const onJsonChange = (newValue: string) => {
    console.log("change: ", newValue);
  };

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
        onChange={onJsonChange}
        name="unique-request"
        setOptions={{
          useWorker: false,
        }}
        className="request-editor"
        showPrintMargin={false}
        highlightActiveLine={false}
        enableBasicAutocompletion
        enableLiveAutocompletion
        wrapEnabled
        commands={beautify.commands}
      />
    </div>
  );
};

export default Request;
