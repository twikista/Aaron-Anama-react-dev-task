import { Component } from "react";
import {
  ProductNameWrapper,
  ProductNameSpan,
  ProductNameHeading,
} from "./ProductName.styles";

class ProductName extends Component {
  render() {
    const { fontFamily, fontWeight, fontSize, lineHeight, color, item } =
      this.props;
    return (
      <ProductNameWrapper marginBottom={this.props.marginBottom}>
        <ProductNameHeading
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={fontSize}
          lineHeight={lineHeight}
          color={color}
        >
          <ProductNameSpan
            spanFontWeight={this.props.spanFontWeight}
            spanMarginBottom={this.props.spanMarginBottom}
          >
            {item.brand}
          </ProductNameSpan>
          &nbsp;{item.name}
        </ProductNameHeading>
      </ProductNameWrapper>
    );
  }
}

export default ProductName;
