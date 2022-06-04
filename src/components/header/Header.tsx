import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import Search from "../search/Search";
import "./Header.scss";

const items = [
  {
    label: "New",
    items: [
      {
        label: "New",
      },
      {
        label: "Delete",
      },
      {
        label: "Export",
      },
    ],
  },
  {
    label: "Recent",
    items: [
      {
        label: "Left",
      },
      {
        label: "Right",
      },
      {
        label: "Center",
      },
      {
        label: "Justify",
      },
    ],
  },
];

function Header() {
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
