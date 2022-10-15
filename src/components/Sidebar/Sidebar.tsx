import { Menu, MenuProps } from 'antd';
import './Sidebar.scss';

export type MenuItem = Required<MenuProps>['items'][number];

interface ISidebarProps {
  items: MenuItem[];
}

const Sidebar = ({ items }: ISidebarProps) => {
  return (
    <div className="sidebar">
      <Menu mode="inline" items={items} />
    </div>
  );
};

export default Sidebar;
