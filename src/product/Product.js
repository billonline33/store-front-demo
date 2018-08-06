import React, { Component } from "react";
import "./Product.css";
import "../css/style.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    };
  }

  render() {
    return (
      <div className="product">
        <div className="header">
          <div className="logo">
            <img src="img/logo3.png" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop &#9660;</a>
                <div className="dropdown-menu">
                  <a href="#">Dropdown shop</a>
                  <a href="#">Dropdown shop</a>
                </div>
              </li>
              <li>
                <a href="#">Journal</a>
              </li>
              <li>
                <a href="#">More &#9660;</a>
                <div className="dropdown-menu">
                  <a href="#">Dropdown more</a>
                  <a href="#">Dropdown more</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="cart">
            <a href="#">My Cart (2) &#9660;</a>
          </div>
        </div>

        <div className="product">
          <hr />
          <div className="breadcrumbs">
            <a href="#">home</a>
            <span> / </span>
            <a href="#">plates</a>
            <span> / </span>
            <a href="#">hand painted blue flat dish</a>
          </div>
          <div className="product-container">
            <div className="product-image">
              <img src="img/product-details.jpg" alt="product" />
            </div>
            <div className="product-description">
              <p>Kiriko</p>
              <h2>Hand Painted Blue Flat Dish</h2>
              <span>$28.00</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea
                et reprehenderit! Totam cum nemo consectetur sequi quo quibusdam
                velit...
              </p>
              <hr />
              <div className="addToCart">
                <div className="quantity">
                  <div className="quantity-number">1</div>
                  <div className="quantity-moreLess">
                    <span>+</span>
                    <span>-</span>
                  </div>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
