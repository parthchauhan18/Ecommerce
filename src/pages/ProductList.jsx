import "./ProductList.css";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar"
import Products from "../component/Products";
import NewsLatter from "../component/NewsLatter";
import Footer from "../component/Footer";

export default function ProductList() {
  return (
    <div className="productListFilterContainer">
      <Announcement />
      <Navbar />
      <div className="productListFilter">
        <div className="rightSide">
            <h3>Filter Products:</h3>
          <div className="color">
            <select name="" id="">
              <option value="">Color</option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Yellow</option>
              <option value="">Green</option>
            </select>
          </div>
          <div className="size">
            <select name="" id="">
              <option value="">Size</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
          </div>
        </div>
        <div className="leftSide">
            <h3>Sort Products:</h3>
          <div className="color">
            <select name="" id="">
              <option value="">Regular</option>
              <option value="">Newest</option>
              <option value="">Price(asc)</option>
              <option value="">Price(desc)</option>
            </select>
          </div>
        </div>
      </div>
     
    </div>
  );
}