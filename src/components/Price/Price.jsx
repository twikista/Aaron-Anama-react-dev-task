import { Component } from "react";
import { connect } from "react-redux";
import { ProductPrice } from "./Price.styles";

class Price extends Component {
  render() {
    const {
      prices,
      fontWeight,
      fontSize,
      lineHeight,
      currencyDetails = {},
    } = this.props;
    if (currencyDetails) {
      const { label } = currencyDetails;
      const activePrice = prices.find((i) => i.currency.label === label);
      const { currency: { symbol } = {}, amount } = activePrice;
      return (
        <ProductPrice
          fontWeight={fontWeight}
          fontSize={fontSize}
          lineHeight={lineHeight}
        >
          {symbol}
          {amount}
        </ProductPrice>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { currencyDetails: state.currencyDetails };
};

export default connect(mapStateToProps)(Price);
