import React from "react";

function ProductDetails(props) {
  const { item } = props;

  return (
    <div>
      {item.id} {item.title} {item.price}
    </div>
  );
}

export default ProductDetails;
