import { Component } from "react";
import styled from "styled-components";

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
    const { prices, currentCurrency, fontWeight, fontSize, lineHeight } =
      this.props;
    const activeCurrency = prices.find(
      (i) => i.currency.label === `${currentCurrency}`
    );
    return (
      <ProductPrice
        fontWeight={fontWeight}
        fontSize={fontSize}
        lineHeight={lineHeight}
      >
        {activeCurrency.currency.symbol}
        {activeCurrency.amount}
      </ProductPrice>
    );
  }
}

export default Price;
