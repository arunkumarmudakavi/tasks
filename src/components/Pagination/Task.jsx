import React, { useEffect, useState } from "react";
import "./Task.css";

const Task = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    await fetch("https://dummyjson.com/products/?limit=100")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products) {
          setProducts(data.products);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products?.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <>
      {products?.length > 0 && (
        <div className="products__container">
          {/* Ex: if the page value is 3 then 3*10-10 = 20 to 3*10 = 30 then slice(20,30) = 10 products syntax: slice(start, end) */}
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span className="products__single">
                <img src={product?.images[0]} alt={product?.title} />
                <span key={product?.id}>{product?.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products?.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disable"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(products?.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__activepage" : ""}
                key={i}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              page < products?.length / 10 ? "" : "pagination__disable"
            }
            onClick={() => selectPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </>
  );
};

export { Task };
