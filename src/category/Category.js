import React, { Component } from "react";
import "./Category.css";
import "../css/style.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.handleProductClick = this.handleProductClick.bind(this);
  }

  componentDidMount() {
    fetch("products.json")
      .then(response => {
        console.log("response=", Response);
        return response.json();
      })
      .then(products => {
        console.log("products=", products);
        this.setState({ products });
      });
  }

  handleProductClick() {
    console.log("product clicked");
  }

  render() {
    const { products } = this.state;

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
            {products.map(item => {
              console.log("item=", item);
              return (
                <div
                  className="category-element"
                  onClick={this.handleProductClick}
                >
                  <img src="../img/" alt="pictures" />
                  <p>{item.brand}</p>
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
