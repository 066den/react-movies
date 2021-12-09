import { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  hendleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="input-field input-group">
          <i className="material-icons prefix">search</i>
          <input
            className="validate inline"
            type="search"
            placeholder="search"
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn grey darken-4"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
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
              onChange={this.hendleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              onChange={this.hendleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              onChange={this.hendleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
