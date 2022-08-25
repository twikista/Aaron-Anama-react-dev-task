import { Component } from "react";
import MainCart from "./components/MainCart";
import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";
import Products from "./components/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import withRouter from "./components/NavParamsHOC";
import { connect } from "react-redux";
import { sumCartAmount } from "./redux/actionType";

class App extends Component {
  state = { currentCurrency: "USD", symbol: "$", open: false };
  getSelectedCurrency = (currency) => {
    this.setState({
      ...this.state,
      currentCurrency: currency.label,
      symbol: currency.symbol,
    });
    // console.log(this.state);
  };

  overLayToggler = () => {
    this.setState((prevState) => {
      return { ...this.state, open: !prevState.open };
    });
  };

  setCurrentPrice = (pricesArray) => {
    const activePrice = pricesArray.find(
      (price) => price.currency.label === `${this.state.currentCurrency}`
    );
    return activePrice;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.cart !== this.props.state.cart) {
      this.props.dispatch(sumCartAmount());
    }
  }

  render() {
    console.log(this.props);
    const path = "" ? "/all" : null;
    return (
      <div className="App">
        <Header
          getSelectedCurrency={this.getSelectedCurrency}
          overLayToggler={this.overLayToggler}
        />
        <Main
          currentCurrency={this.state}
          setCurrentPrice={this.setCurrentPrice}
          isOpen={this.state.open}
          overLayToggler={this.overLayToggler}
        >
          <Routes>
            <Route path={"/"} element={<Navigate to="all" />} />
            {/* <Route path="all" element={<Navigate to="/" />} /> */}
            <Route
              path="/:category"
              element={
                <Products
                  currentCurrency={this.state}
                  isOpen={this.state.open}
                  setCurrentPrice={this.setCurrentPrice}
                />
              }
            />
            {/* <Route
              path="/all"
              element={
                <Products
                  currentCurrency={this.state}
                  isOpen={this.state.open}
                />
              }
            /> */}
            <Route
              path="/:category/:product"
              element={
                <Product
                  currentCurrency={this.state}
                  setCurrentPrice={this.setCurrentPrice}
                />
              }
            />
            {/* <Route
              path="/product/:produt"
              element={<Product currentCurrency={this.state} />}
            /> */}
            <Route
              path="/cart"
              element={
                <MainCart
                  currentCurrency={this.state}
                  setCurrentPrice={this.setCurrentPrice}
                />
              }
            />
          </Routes>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { state: state };
};

export default connect(mapStateToProps)(withRouter(App));
