import "./Request.scss";
import ReactAce from "react-ace/lib/ace";
import beautify from "ace-builds/src-noconflict/ext-beautify";
import React, { useRef } from "react";

interface IRequestProps {
  requestBody: any;
  setRequestBody: React.Dispatch<React.SetStateAction<any>>;
}

const Request = ({ requestBody, setRequestBody }: IRequestProps) => {
  const editorRef = useRef<any>();

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
        onChange={(value) => setRequestBody(value)}
        wrapEnabled
        commands={beautify.commands}
      />
    </div>
  );
};

export default Request;
