import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./Category.css";
import "../css/style.css";
import ProductBox from "../component/ProductBox/ProductBox";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showCartPopup: false
    };

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleMyCartClick = this.handleMyCartClick.bind(this);
  }

  componentDidMount() {
    //ToDo: in a production project, I will use axios to call a get from web server.
    //In real project, products.json should contain a key value. In my demo, since there is no key,
    // I use index of the array instead.
    //I may also use redux and save the result in a store for future use.

    fetch("/products.json")
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({ products });
      });
  }

  //ToDo: create a Header component for code re-use
  handleCloseClick() {
    this.setState({
      showCartPopup: false
    });
  }

  handleMyCartClick() {
    this.setState({
      showCartPopup: true
    });
  }

  render() {
    const { products, showCartPopup } = this.state;

    return (
      <div className="Category">
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
            <a href="#" onClick={this.handleMyCartClick}>
              My Cart (2) &#9660;
            </a>
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
            {products.map((item, index) => {
              return <ProductBox productInfo={item} productKey={index} />;
            })}
          </div>
        </div>

        <Modal show={showCartPopup} onHide={this.handleCloseClick}>
          <Modal.Header closeButton />
          <Modal.Body>
            <div class="popup">
              <div class="popup_products">
                <div class="popup_element">
                  <div class="popup_element-image">
                    <img src="media/heme.jpg" width="200px" alt="product" />
                  </div>
                  <div class="popup_element-description">
                    <h1>
                      hand painted blue flat dish <span>&#215; 1</span>
                    </h1>
                    <p>Kiriko</p>
                    <span>$28.00</span>
                  </div>
                  <div class="popup_element-action">&#215;</div>
                </div>
                <div class="popup_element">
                  <div class="popup_element-image">
                    <img
                      src="media/mashiko-yaki-green-small-plate.jpg"
                      width="200px"
                      alt="product"
                    />
                  </div>
                  <div class="popup_element-description">
                    <h1>
                      hand painted blue flat dish <span>&#215; 1</span>
                    </h1>
                    <p>Kiriko</p>
                    <span>$28.00</span>
                  </div>
                  <div class="popup_element-action">&#215;</div>
                </div>
              </div>
              <hr />

              <div class="popup_total">
                <span>total</span>
                <span>$56.00</span>
              </div>

              <div class="popup_buttons">
                <button>View cart</button>
                <button>Checkout</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Category;
