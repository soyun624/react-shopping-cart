import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
        cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice().filter((x) => x._id !== product._id);
    this.setState({
      cartItems: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  createOrder = (order) => {
    alert('Need to save order for ' + order.name);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
              </div>
            </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
