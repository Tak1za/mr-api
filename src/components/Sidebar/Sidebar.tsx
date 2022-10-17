import "./Sidebar.scss";
import { Menu, MenuProps } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    label,
    children,
  } as MenuItem;
}

const Sidebar = () => {
  const allTabs = useSelector((state: RootState) => state.tabs.allTabs);
  const allItems = allTabs.map((t) => getItem(t.name, t.id, [])).reverse();
  return (
    <div className="sidebar">
      <Menu mode="inline" items={allItems} />
    </div>
  );
};

export default Sidebar;
