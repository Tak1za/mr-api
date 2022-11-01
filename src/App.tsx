import "./App.scss";
import Container from "./components/Container/Container";
import Middle from "./components/Middle/Middle";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="main-container">
          <Middle />
          <Container />
        </div>
      </div>
      {/* <div className="main-top">
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
      </div> */}
    </div>
  );
}

export default App;
