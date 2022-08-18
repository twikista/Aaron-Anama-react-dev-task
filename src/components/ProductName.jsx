import { Component } from "react";
import styled from "styled-components";

//fs, fw, lh, clr
//container - mb

const ProductNameWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom}; //optional
`;

const ProductNameSpan = styled.span`
  font-weight: ${(props) => props.spanFontWeight};
  display: inline-block;
  margin-bottom: ${(props) => props.spanMarginBottom};
`;

const ProductNameHeading = styled.h2`
  font-family: "Raleway"; //optional
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.fontColor};
  text-align: left;
`;

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
