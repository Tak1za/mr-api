import { useEffect } from "react";
import "./App.scss";
import { Input } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./App.scss";
import Sidebar, { MenuItem } from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/get", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: "https://jsonplaceholder.typicode.com/todos/1",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
  ];

  return (
    <div className="main">
      <div className="main-top">
        <div className="main-left">
          <div className="title">Mr. API</div>
          <Sidebar items={items} />
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
