import { Component } from "react";
import ProductAttributes from "../../../../../ProductAttributes/ProductAtrributes";
import ProductName from "../../../../../ProductName/ProductName";
import Price from "../../../../../Price/Price";
import ProductImage from "../../../../../ProductImage/ProductImage";
import CartItemAmountControls from "../../../../../CartItemAmountControls/CartItemAmountControls";
import {
  CartItemContainer,
  CartItemDetailsWrapper,
  CartItemDetails,
} from "./MainCartItem.styles";

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
  priceStyles: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
    fontFamily: "Raleway",
  },
};

const productNameStyles = {
  fontFamily: "Raleway",
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "27px",
  color: "#1d1f22",
  spanFontWeight: "400",
};

class MainCartItem extends Component {
  render() {
    const { item } = this.props;
    const { gallery } = item;

    return (
      <CartItemContainer>
        <CartItemDetailsWrapper>
          <CartItemDetails>
            <ProductName styles={productNameStyles} item={item} />
            <Price prices={item.prices} styles={styles.priceStyles} />
            <ProductAttributes
              attributes={item.attributes}
              styles={styles}
              disable={true}
              selectedAttributes={
                item.selectedAttributes ? item.selectedAttributes : null
              }
            />
          </CartItemDetails>
          <CartItemAmountControls amount={item.amount} id={item.id} />
        </CartItemDetailsWrapper>
        <ProductImage width="200px" gallery={gallery} />
      </CartItemContainer>
    );
  }
}

export default MainCartItem;
