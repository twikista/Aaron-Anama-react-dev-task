import { PureComponent } from "react";
import {
  ProductNameWrapper,
  ProductNameSpan,
  ProductNameHeading,
} from "./ProductName.styles";

class ProductName extends PureComponent {
  render() {
    const {
      styles: {
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        color,
        marginBottom,
        spanFontWeight,
        spanMarginBottom,
      } = {},
      item,
    } = this.props;
    return (
      <ProductNameWrapper marginBottom={marginBottom}>
        <ProductNameHeading
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={fontSize}
          lineHeight={lineHeight}
          color={color}
        >
          <ProductNameSpan
            spanFontWeight={spanFontWeight}
            spanMarginBottom={spanMarginBottom}
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
