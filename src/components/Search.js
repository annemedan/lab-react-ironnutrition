import { useState } from "react";
import { Divider, Input } from "antd";

function Search({ searchFoodList }) {
  const [searchContent, setSearchContent] = useState("");

  const submitClick = (event) => {
    event.preventDefault();
    searchFoodList(searchContent);
  };

  const handleSearch = (event) => setSearchContent(event.target.value);

  return (
    <div className="filter-foods">
      <Divider>Search</Divider>

      <form onSubmit={submitClick}>
        <Input type="text" value={searchContent} onChange={handleSearch} />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
