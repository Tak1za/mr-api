import ReactAce from 'react-ace/lib/ace';
import beautify from 'ace-builds/src-noconflict/ext-beautify';
import './Request.scss';
import { useRef, useState } from 'react';
import { Select, Input, Button } from 'antd';
import axios from 'axios';

const Request = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>();
  const [protocol, setProtocol] = useState<string>('http://');
  const [url, setUrl] = useState<string>('');

  const onJsonChange = (newValue: string) => {
    // eslint-disable-next-line no-console
    console.log('change: ', newValue);
  };

  const prettify = () => {
    beautify.beautify(editorRef.current.editor.session);
  };

  const { Option } = Select;

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
    if (clipboardData.getData('text') !== '') {
      const potentialURL = clipboardData.getData('text');
      if (potentialURL.startsWith('http')) {
        switch (potentialURL.substring(0, potentialURL.indexOf('://'))) {
          case 'https':
            setProtocol('https://');
            setUrl(potentialURL.substring(potentialURL.indexOf('://') + 3));
            e.preventDefault();
            break;
          case 'http':
            setProtocol('http://');
            setUrl(potentialURL.substring(potentialURL.indexOf('://') + 3));
            e.preventDefault();
            break;
          default:
            e.preventDefault();
            break;
        }
      }
    }
  };

  const sendRequest = () => {
    axios
      .post(
        'http://localhost:3001/get',
        {
          url: protocol + url,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      // eslint-disable-next-line no-console
      .then((res) => console.log(res.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  };

  return (
    <div className="request-editor-container">
      <Input.Group compact>
        <Input
          addonBefore={selectBefore}
          onPaste={onPaste}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: 'calc(100% - 64px)' }}
        />
        <Button type="primary" onClick={sendRequest}>
          Send
        </Button>
      </Input.Group>

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
        name="unique1"
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
