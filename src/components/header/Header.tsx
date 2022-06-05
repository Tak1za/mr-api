import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Search from "../search/Search";
import "./Header.scss";
import { allRequests, IRequest } from "../../models/Request";

interface IHeaderProps {
  setRequest: React.Dispatch<React.SetStateAction<IRequest>>;
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
              title: "",
              method: "GET",
              route: "",
            }),
        },
      ],
    },
    {
      label: "Recent",
      items: allRequests.map((i) => ({
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
