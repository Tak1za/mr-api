import "./App.scss";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="main">
      <div className="main-top">
        <div className="main-left">
          <div className="title">Mr. API</div>
          <Sidebar />
        </div>
        <div className="main-right">
          <Content />
        </div>
      </div>
      <div className="main-bottom">
        <Input placeholder="Search..." prefix={<SearchOutlined />} />
      </div>
    </div>
  );
}

export default App;
