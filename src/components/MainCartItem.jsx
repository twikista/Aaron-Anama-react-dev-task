import { Component } from "react";
import styled from "styled-components";
import ProductAttributes from "./ProductAtrributes";
import ProductName from "./ProductName";
import Price from "./Price";
import ProductImage from "./ProductImage";
import CartItemAmountControls from "./CartItemAmountControls";

const CartItemContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 24px 0;
  min-height: 200px;
  /* max-height: 288px; */
`;

const CartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  width: 279px;
  /* border: solid green 1px; */
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: ${(props) => props.itemGap}; //gap: 8px; */
  width: 279px;
  height: 100%;
  gap: 20px;
  /* border: solid blue 1px; */
`;

const styles = {
  attributeWrapper: {
    width: "279px",
  },
  attributeTitle: {
    fontweight: "700",
    fontSize: "18px",
    lineHeight: "18px",
    fontFamily: '"Roboto Condensed", sans-serif',
  },
  attributes: {
    colorHeight: "36px",
    height: "45px",
  },
  attributeValue: {
    fontWeight: "400",
    fontSize: "16x",
    lineHeight: "18px",
    color: "#1D1F22",
  },
  colorAttributeValue: {
    width: "36px",
  },
};

class MainCartItem extends Component {
  render() {
    const { item } = this.props;
    const { gallery } = item;

    return (
      <CartItemContainer>
        <CartItemDetailsWrapper>
          <CartItemDetails>
            <ProductName
              fontFamily="Raleway"
              fontWeight="600"
              fontSize="30px"
              lineHeight="27px"
              color="#1d1f22"
              spanFontWeight="400"
              item={item}
            />
            {/* <CartItemPrice>
                {prices[0].currency.symbol}
                {prices[0].amount}
              </CartItemPrice> */}
            <Price
              prices={item.prices}
              // currentCurrency={this.props.currentCurrency}
              fontWeight="700"
              fontSize="24px"
              lineHeight="24px"
              fontFamily="Raleway"
            />
            <ProductAttributes
              attributes={item.attributes}
              styles={styles}
              disable={true}
              selectedAttributes={
                item.selectedAttributes ? item.selectedAttributes : null
              }
            />
          </CartItemDetails>
          {/* <CartItemcontrols>
            <AmountControlIcon src={`${plusIcon}`} alt="plus icon" />
            <Amount>4</Amount>
            <AmountControlIcon src={`${minusIcon}`} alt="minus icon" />
          </CartItemcontrols> */}
          <CartItemAmountControls
            wrapperWidth="24px"
            iconHeight="24px"
            fontWeight="500"
            fontSize="16px"
            lineHeight="1.6"
            amount={item.amount}
            id={item.id}
          />
        </CartItemDetailsWrapper>
        {/* <CartItemRight url={`${gallery[0]}`} /> */}
        <ProductImage width="200px" gallery={gallery} />
      </CartItemContainer>
    );
  }
}

export default MainCartItem;
