import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Search from "../search/Search";
import "./Header.scss";
import { IRequest } from "../../models/Request";
import { v4 as uuidv4 } from "uuid";

interface IHeaderProps {
  setRequest: React.Dispatch<React.SetStateAction<IRequest>>;
  recentRequests: IRequest[];
  requestTypes: string[];
}

function Header(props: IHeaderProps) {
  const items: MenuItem[] = [
    {
      label: "New",
      items: props.requestTypes.map((rt) => ({
        label: rt,
        command: () =>
          props.setRequest({
            id: uuidv4(),
            type: rt,
            title: "",
            method: "GET",
            route: "",
          }),
      })),
    },
    {
      label: "Recent",
      items: props.recentRequests.map((i) => ({
        label: i.title,
        command: () => props.setRequest(i),
      })),
    },
  ];

  return (
    <div className="header">
      <Menubar
        model={items}
        end={Search}
        start={<div style={{ padding: "20px" }}>Mr. API</div>}
      />
    </div>
  );
}

export default Header;
