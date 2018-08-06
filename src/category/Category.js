import React, { Component } from "react";
import "./Category.css";
import "../css/style.css";

class Category extends Component {
  render() {
    return (
      <div className="Category">
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

        <div className="banner">
          <div className="banner_text">
            <h1 className="banner_text-title">Plates</h1>
            <hr />
            <p className="banner_text-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati quos atque minus, mollitia dicta similique natus at
              corporis. Modi soluta eos harum ipsum sed ducimus optio non nulla
              earum similique voluptate voluptas porro a quisquam debitis,
              dolorum expedita iste nam at totam odit atque facilis dolores,
              beatae. Voluptatem, esse, perspiciatis.
            </p>
          </div>
        </div>

        <div className="category">
          <div className="category-row">
            <div className="category-element">
              <img src="../img/" alt="pictures" />
              <p>Kiriko</p>
              <h2>Blue stripe stone ware plate</h2>
              <span>$40.00</span>
            </div>
            <div className="category-element">
              <img src="img/product.jpg" alt="pictures" />
              <p>Kiriko</p>
              <h2>Blue stripe stone ware plate</h2>
              <span>$40.00</span>
            </div>
            <div className="category-element">
              <img src="img/product.jpg" alt="pictures" />
              <p>Kiriko</p>
              <h2>Blue stripe stone ware plate</h2>
              <span>$40.00</span>
            </div>
          </div>
          <div className="category-row">
            <div className="category-element">
              <img src="img/product.jpg" alt="pictures" />
              <p>Kiriko</p>
              <h2>Blue stripe stone ware plate</h2>
              <span>$40.00</span>
            </div>
            <div className="category-element">
              <img src="img/product.jpg" alt="pictures" />
              <p>Kiriko</p>
              <h2>Blue stripe stone ware plate</h2>
              <span>$40.00</span>
            </div>
            <div className="category-element">
              <img src="img/product.jpg" alt="pictures" />
              <p>Kiriko</p>
              <h2>Blue stripe stone ware plate</h2>
              <span>$40.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
