import { useState } from "react";
import "./Product.css";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar";
import NewsLetter from "../component/NewsLatter";
import Footer from "../component/Footer";
export default function Product() {
  let [action, setAction] = useState(false);
  let [val, setVal] = useState("");
  function colorHandler(colorIndex) {
    setAction(true);
    setVal(colorIndex);
    console.log(val);
  }
  return (
    <div className="productPageContainer">
      <Announcement />
      <Navbar />
      <div className="productPageLayout">
        <div className="leftSide">
          <img src="./public/pp.jpg" alt="" />
        </div>
        <div className="rightSide">
          <h1 className="title">Denim Jumsuit</h1>
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            repellat, laboriosam, maxime voluptatem mollitia aperiam
            exercitationem a ab voluptas nesciunt maiores? Sint dolor, voluptas
            nemo expedita accusantium itaque cumque impedit!
          </div>
          <div className="price">$ 20</div>
          <div className="colorAndSizeContainer">
            <div className="colorOption">
              <h3>color</h3>
              <div
                className="colorO1"
                onClick={() => colorHandler("c1")}
                style={{
                  border: action && val === "c1" ? "3px solid white" : "none",
                }}
              ></div>
              <div
                className="colorO2"
                onClick={() => colorHandler("c2")}
                style={{
                  border: action && val === "c2" ? "3px solid white" : "none",
                }}
              ></div>
              <div
                className="colorO3"
                onClick={() => colorHandler("c3")}
                style={{
                  border: action && val === "c3" ? "3px solid white" : "none",
                }}
              ></div>
            </div>
            <div className="sizeOption">
              <h3>Size</h3>
              <select name="" id="">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
            </div>
          </div>
          <div className="qtyAndCart">
            <div className="qty">
              <div className="plus">-</div>
              <div className="counter">1</div>
              <div className="minus">+</div>
            </div>
            <div className="cart">
              <button className="btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}