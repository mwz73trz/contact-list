import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };
  return (
    <header className="search-container">
      <div className="home-container">
        <a href="/">Home</a>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First or Last Name to Search"
          value={text}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </header>
  );
};

export default Search;
