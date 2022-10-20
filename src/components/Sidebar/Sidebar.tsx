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
  let allCollections: MenuItem[] = [];
  const allItems = allTabs
    .map((t) => getItem(t.name, t.id, undefined))
    .reverse();
  let collection1 = getItem("New Collection", "collection1", allItems);
  allCollections.push(collection1);
  return (
    <div className="sidebar">
      <Menu
        mode="inline"
        items={allTabs.length === 0 ? [] : allCollections}
        defaultOpenKeys={["collection1"]}
      />
    </div>
  );
};

export default Sidebar;
