import { Component } from "react";
import ProductAttribute from "./ProductAttribute/ProductAttribute";
import { AttributeContainer } from "./ProductAttributes.styles";

class ProductAttributes extends Component {
  state = {};

  render() {
    const { attributes, styles } = this.props;

    return (
      <AttributeContainer>
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
      </AttributeContainer>
    );
  }
}

export default ProductAttributes;
