import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ProductPrice = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
`;

// const ProductPrice = styled.span`
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 18px;
// `;
// const selectedCurrency = "USD";

class Price extends Component {
  render() {
    const { prices, fontWeight, fontSize, lineHeight } = this.props;
    // const { currentCurrency, symbol } = this.props.currentCurrency;
    const { label } = this.props.currencyDetails;
    const activePrice = prices.find((i) => i.currency.label === label);
    // const activePrice = this.props.activePrice;
    return (
      <ProductPrice
        fontWeight={fontWeight}
        fontSize={fontSize}
        lineHeight={lineHeight}
      >
        {activePrice.currency.symbol}
        {activePrice.amount}
      </ProductPrice>
    );
  }
}

const mapStateToProps = (state) => {
  return { currencyDetails: state.currencyDetails };
};

export default connect(mapStateToProps)(Price);
