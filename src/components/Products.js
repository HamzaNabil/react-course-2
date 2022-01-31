import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
// /products?name=value
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));
  console.log(searchParams.get("filter"));
  return (
    <div>
      <Link to="/products/1"> Product 1</Link>
      <Link to="/products/2"> Product 2</Link>
      <Link to="/products/3"> Product 3</Link>

      <button onClick={() => setSearchParams({ sort: "asc", filter: "true" })}>
        {" "}
        Filter{" "}
      </button>

      {/* {searchParams.get("filter") == "true" ? "Yes" : "No"} */}
      {searchParams.get("sort") == "asc" ? "Yes ASC" : "DESC"}
      <Outlet />
    </div>
  );
}

export default Products;
