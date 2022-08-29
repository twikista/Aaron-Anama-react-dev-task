import { Component } from "react";
import MainCart from "./components/pages/MainCart";
import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { sumCartAmount } from "./redux/actionType";

class App extends Component {
  state = { open: false };

  overLayToggler = (e) => {
    this.setState((prevState) => {
      return { ...this.state, open: !prevState.open };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.cart !== this.props.state.cart) {
      this.props.dispatch(sumCartAmount());
    }
  }

  render() {
    return (
      <div className="App">
        <Header overLayToggler={this.overLayToggler} />
        <Main isOpen={this.state.open} overLayToggler={this.overLayToggler}>
          <Routes>
            <Route path={"/"} element={<Navigate to="all" />} />
            <Route
              path="/:category"
              element={<Products isOpen={this.state.open} />}
            />
            <Route path="/:category/:product" element={<Product />} />
            <Route path="/cart" element={<MainCart />} />
          </Routes>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
