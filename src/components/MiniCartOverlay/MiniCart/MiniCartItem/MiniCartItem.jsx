import { Component } from "react";
import ProductAttributes from "../../../ProductAttributes/ProductAtrributes";
import ProductName from "../../../ProductName/ProductName";
import Price from "../../../Price/Price";
import ProductImage from "../../../ProductImage/ProductImage";
import CartItemAmountControls from "../../../CartItemAmountControls/CartItemAmountControls";
import {
  CartItemContainer,
  CartItemDetailsWrapper,
  CartItemDetails,
} from "./MiniCartItem.styles";

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
            <Price
              prices={item.prices}
              fontWeight="500"
              fontSize="16px"
              lineHeight="26px"
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
        <ProductImage width="121px" gallery={[gallery[0]]} />
      </CartItemContainer>
    );
  }
}

export default MiniCartItem;
