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
  gap: 8px;
  width: 293px;
`;

const CartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  width: 164px;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const styles = {
  attributeWrapper: {
    width: "120px",
  },
  attributeTitle: {
    fontweight: "400",
    fontSize: "14px",
    lineHeight: "1.46",
    fontFamily: "Raleway",
  },
  attributes: {
    colorHeight: "20px",
    height: "24px",
  },
  attributeValue: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#1d1f22",
  },
  colorAttributeValue: {
    width: "20px",
  },
};

//increment/decrement amount controls
// const CartItemcontrols = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   width: 24px;
//   align-self: stretch;
// `;
// const AmountControlIcon = styled.img`
//   width: 24px;
//   height: 24px;
// `;

// const Amount = styled.span`
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.6;
// `;

// const CartItemRight = styled.div`
//   width: 121px;
//   background: url(${(props) => props.url});
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
// `;

class MiniCartItem extends Component {
  render() {
    const { item } = this.props;
    const { gallery } = item;
    return (
      <CartItemContainer>
        <CartItemDetailsWrapper>
          <CartItemDetails>
            <ProductName
              fontFamily="Raleway"
              fontWeight="300"
              fontSize="16px"
              lineHeight="1.6"
              color="#1d1f22"
              spanFontWeight="300"
              item={item}
            />
            {/* <CartItemPrice>
                {prices[0].currency.symbol}
                {prices[0].amount}
              </CartItemPrice> */}
            <Price
              prices={item.prices}
              currentCurrency={this.props.currentCurrency}
              fontWeight="500"
              fontSize="16px"
              lineHeight="26px"
              fontFamily="Raleway"
            />
            <ProductAttributes
              attributes={item.attributes}
              styles={styles}
              disable={true}
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
            amount="6"
          />
        </CartItemDetailsWrapper>
        {/* <CartItemRight url={`${gallery[0]}`} /> */}
        <ProductImage width="121px" gallery={[gallery[0]]} />
      </CartItemContainer>
    );
  }
}

export default MiniCartItem;
