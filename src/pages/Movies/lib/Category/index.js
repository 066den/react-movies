import Card from "../Card";
import style from "../../style.module.scss";

const Category = (props) => {
  const { movies = [] } = props;
  return (
    <div className={style.cards}>
      {movies.length ? (
        movies.map((item) => <Card key={item.imdbID} {...item} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export default Category;
