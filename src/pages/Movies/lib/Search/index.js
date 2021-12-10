import { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const hendleFilter = (event) => {
    setType(event.target.value);
    if (search) searchMovies(search, event.target.value);
  };

  return (
    <div>
      <div className="input-field input-group">
        <i className="material-icons prefix">search</i>
        <input
          className="validate inline"
          type="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn grey darken-4"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>

      <div className="input-group mb-2">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="all"
            onChange={hendleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="movie"
            onChange={hendleFilter}
            checked={type === "movie"}
          />
          <span>Movie</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="series"
            onChange={hendleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
