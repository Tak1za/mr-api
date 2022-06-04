import { InputText } from "primereact/inputtext";
import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div className="search">
      <InputText placeholder="Search" type="text" />
    </div>
  );
}

export default Search;
