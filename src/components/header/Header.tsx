import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Search from "../search/Search";
import "./Header.scss";
import { IRequest } from "../../models/Request";
import { v4 as uuidv4 } from "uuid";

interface IHeaderProps {
  setRequest: React.Dispatch<React.SetStateAction<IRequest>>;
  recentRequests: IRequest[];
}

function Header(props: IHeaderProps) {
  const items: MenuItem[] = [
    {
      label: "New",
      items: [
        {
          label: "REST",
          command: () =>
            props.setRequest({
              id: uuidv4(),
              title: "",
              method: "GET",
              route: "",
            }),
        },
      ],
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
