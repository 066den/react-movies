import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../api/api";
import Loading from "../../lib/Loading";
import CategoryList from "./lib/CategoryList";
import Search from "./lib/Search";

const Meals = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  let navigate = useNavigate();
  let { pathname, search } = useLocation();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate(pathname + `?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <div className="container">
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Loading />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </div>
  );
};

export default Meals;
