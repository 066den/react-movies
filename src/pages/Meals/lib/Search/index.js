import { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <>
      <div className="input-field input-group">
        <i className="material-icons prefix">search</i>
        <input
          className="validate inline"
          type="search"
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="btn grey darken-4" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
