import { Component } from "react";
import MainCart from "./components/MainCart";
import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";
import Products from "./components/Products";

class App extends Component {
  state = { currentCurrency: "USD", symbol: "$" };
  getSelectedCurrency = (currency) => {
    this.setState({ currentCurrency: currency.label, symbol: currency.symbol });
    // console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <Header getSelectedCurrency={this.getSelectedCurrency} />
        <Main>
          {/* <Products currentCurrency={this.state} /> */}
          <Product currentCurrency={this.state} />
          {/* <MainCart currentCurrency={this.state} /> */}
        </Main>
      </div>
    );
  }
}

export default App;
