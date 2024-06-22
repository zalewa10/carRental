"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

export default function SearchBar() {
  const [manufacturer, setmanufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
}
