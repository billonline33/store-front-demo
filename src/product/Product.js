import React, { Component } from "react";
import "./Product.css";
import "../css/style.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      product: {}
    };
  }

  componentDidMount() {
    //ToDo: The code below is for demo only, in the real proejct, I would use axios to make a web service call
    //pass productId as parameter.
    const productIndex = this.state.id;
    fetch("/products.json")
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({ product: products[productIndex] });
      });
  }

  render() {
    const product = this.state.product;
    const imagePath = "\\media\\" + product.image;
    return (
      <div className="product">
        <div className="header">
          <div className="logo">
            <img src="\media\logo.png" alt="logo" />
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
            <a href="#">{product.brand}</a>
            <span> / </span>
            <a href="#">{product.title}</a>
          </div>
          <div className="product-container">
            <div className="product-image">
              <img src={imagePath} alt="product" />
            </div>
            <div className="product-description">
              <p>{product.brand}</p>
              <h2>{product.title}</h2>
              <span>${product.price}</span>
              <p>{product.description}</p>
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
