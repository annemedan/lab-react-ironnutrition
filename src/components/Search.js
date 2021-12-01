import { useState } from "react";

function Search({ searchFoodList }) {
  const [searchContent, setSearchContent] = useState("");

  const submitClick = (event) => {
    event.preventDefault();
    searchFoodList(searchContent);
  };

  const handleSearch = (event) => setSearchContent(event.target.value);

  return (
    <div className="filter-foods">
      <form onSubmit={submitClick}>
        <input type="text" value={searchContent} onChange={handleSearch} />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
