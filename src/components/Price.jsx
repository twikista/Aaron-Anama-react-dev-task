import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ProductPrice = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
`;

class Price extends Component {
  render() {
    const { prices, fontWeight, fontSize, lineHeight } = this.props;
    if (this.props.currencyDetails) {
      const { label } = this.props.currencyDetails;
      const activePrice = prices.find((i) => i.currency.label === label);
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
}

const mapStateToProps = (state) => {
  return { currencyDetails: state.currencyDetails };
};

export default connect(mapStateToProps)(Price);
