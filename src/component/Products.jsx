import React from "react";
import { ProductData } from "../Data";
import "./Products.css";
import Product from "./Product";
export default function Products() {
  return (
    <div className="productsContainer">
      {ProductData.map((item) => {
        return <Product key={item.id} data={item} Duration="300" />;
      })}
    </div>
  );
}