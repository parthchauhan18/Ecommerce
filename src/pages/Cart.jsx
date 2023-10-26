import "./Cart.css";
import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";

export default function Cart() {
  return (
    <div className="cartContainer">
      <Navbar />
      <Announcement />
      <h1
        style={{
          textAlign: "center",
          fontWeight: "400",
          fontSize: "35px",
          padding: "15px 0px",
        }}
      >
        YOUR BAG
      </h1>
      <div className="mainContainer">
        <div className="mainTop">
          <button className="btnLeft">CONTINUE SHOPPING</button>
          <div className="center">
            <div className="left">Shopping Bag(2)</div>
            <div className="right">Your Wishlist(0)</div>
          </div>
          <button className="btnRight">CHECKOUT NOW</button>
        </div>
        <div className="cartProductContainer">
          <div className="product">
            <img
              className="cartProductImage"
              src="./public/shoese1.jpg"
              alt=""
            />
            <div className="productInfo">
              <div className="productName">
                <b style={{ color: "black" }}>Product:</b> Jimmy Choo Shoes
                </div>
                
              <div className="qtyID">
                <div className="id">
                  <b>ID:</b> 9975732723
                </div>
                <div className="qty">
                  <div className="minus">-</div>
                  <div className="counter">1</div>
                  <div className="plus">+</div>
                </div>
              </div>
              <div className="priceColorandSize">
                <div className="colorSize">
                  <div className="color"></div>
                  <div className="size">
                    <b>Size:</b> 37.5
                  </div>
                </div>
                <div className="price">$30</div>
              </div>
            </div>
          </div>
          <div
            className="bill"
            style={{
              border: "2px solid grey",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <h1>ORDER SUMMARY</h1>
            <table className="tb" style={{ width: "300px" }}>
              <tr className="row">
                <td>Subtotal</td>
                <td>$80</td>
              </tr>
              <tr className="row">
                <td>Estimated Shipping</td>
                <td>$5.90</td>
              </tr>
              <tr className="row">
                <td>Shipping Discount</td>
                <td>$-5.90</td>
              </tr>
              <tr className="row">
                <td>Total</td>
                <td>$80</td>
              </tr>
            </table>
            <button
              style={{
                width: "100%",
                marginTop: "30px",
                padding: "7px 0px",
                backgroundColor: "black",
                color: "white",
                letterSpacing: "1px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}