import { Component } from "react";
import MainCart from "./components/pages/Main/MainCart/MainCart";
import Header from "./components/Header/Header";
import Main from "./components/pages/Main/Main";
import Product from "./components/pages/Main/Product/Product";
import Products from "./components/pages/Main/Products/Products";
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

  closeMiniCartOverlay = () => {
    return this.setState({ open: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.cart !== this.props.state.cart) {
      this.props.dispatch(sumCartAmount());
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <Header
          overLayToggler={this.overLayToggler}
          closeMiniCartOverlay={this.closeMiniCartOverlay}
        />
        <Main isOpen={open} overLayToggler={this.overLayToggler}>
          <Routes>
            <Route path={"/"} element={<Navigate to="all" />} />
            <Route path="/:category" element={<Products isOpen={open} />} />
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
