import "./product.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
export default function Product({ data }) {
  return (
    <div
      className="productContainer"
      data-aos={data.dataAos}
      data-aos-duration={data.AosDuration}
    >
      <div className="circle" />
      <img className="image" src={data.img} />
      <div className="info">
        <div className="icon">
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <SearchOutlined />
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}