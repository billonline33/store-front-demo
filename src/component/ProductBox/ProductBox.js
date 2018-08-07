import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./ProductBox.css";

class ProductBox extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleProductClick() {
    const productKey = this.props.productKey;
    this.setState({
      redirect: true
    });
  }

  render() {
    const item = this.props.productInfo;
    const imagePath = "\\media\\" + item.image;
    const redirectTo = "/product/" + this.props.productKey;

    if (this.state.redirect) return <Redirect to={redirectTo} />;
    else
      return (
        <div className="category-element" onClick={this.handleProductClick}>
          <a>
            <img src={imagePath} alt={item.title} />
          </a>
          <p>{item.brand}</p>
          <h2>{item.title}</h2>
          <span>${item.price}</span>
        </div>
      );
  }
}

export default ProductBox;
