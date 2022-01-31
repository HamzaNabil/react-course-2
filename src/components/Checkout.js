import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      Form <button onClick={() => navigate("/products")}> Submit Order </button>
    </div>
  );
}

export default Checkout;
