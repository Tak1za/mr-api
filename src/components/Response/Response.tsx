import ReactAce from 'react-ace/lib/ace';
import './Response.scss';

const Response = () => {
  const onJsonChange = (newValue: string) => {
    // eslint-disable-next-line no-console
    console.log('change: ', newValue);
  };

  return (
    <div className="response-editor-container">
      <div className="header">
        <span>Response</span>
        <div role="presentation">Response Code</div>
      </div>
      <ReactAce
        mode="json"
        theme="tomorrow"
        onChange={onJsonChange}
        name="unique1"
        setOptions={{
          useWorker: false,
        }}
        className="response-editor"
        showPrintMargin={false}
        highlightActiveLine={false}
        enableBasicAutocompletion
        enableLiveAutocompletion
        readOnly
      />
    </div>
  );
};

export default Response;
