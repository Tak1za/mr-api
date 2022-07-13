import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Search from "../search/Search";
import "./Header.scss";
import { v4 as uuidv4 } from "uuid";
import { allRequestTypes } from "../../models/RequestType";
import { IHeaderProps } from "./IHeaderProps";

function Header(props: IHeaderProps) {
  const items: MenuItem[] = [
    {
      label: "New",
      items: allRequestTypes.map((rt) => ({
        label: rt.value,
        command: () =>
          props.setRequest({
            id: uuidv4(),
            type: rt.value,
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
        start={<div style={{ padding: "20px" }}>Mr. API</div>}
        end={Search}
      />
    </div>
  );
}

export default Header;
