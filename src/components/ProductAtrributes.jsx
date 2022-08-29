import { Component } from "react";
import styled from "styled-components";
import ProductAttribute from "./ProductAttribute";

const AtributeContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 136px;
`;

class ProductAttributes extends Component {
  state = {};

  render() {
    const { attributes, styles } = this.props;

    return (
      <AtributeContainer>
        {attributes.map((attribute, index) => {
          return (
            <ProductAttribute
              key={attribute.id}
              {...attribute}
              width="120px"
              styles={styles}
              {...this.props}
            />
          );
        })}
      </AtributeContainer>
    );
  }
}

export default ProductAttributes;
