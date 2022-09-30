import React, { Component } from "react";
import {
  AttributeWrapper,
  AttributeTitle,
  Attributes,
  AttributeValue,
  ColorAttributeValue,
} from "./ProductAttribute.styles";

class ProductAttribute extends Component {
  initialState = this.props.selectedAttributes
    ? this.props.selectedAttributes
    : {};
  state = this.initialState;
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.selectedAttributesHandler(this.state);
    }
  }

  render() {
    const { name, type, items, styles } = this.props;
    const {
      attributeTitle,
      attributes,
      attributeValue,
      colorAttributeValue,
      attributeWrapper,
    } = styles;
    return (
      <AttributeWrapper width={attributeWrapper.width}>
        <AttributeTitle
          fontWeight={attributeTitle.fontWeight}
          lineHeight={attributeTitle.lineHeight}
          fontSize={attributeTitle.fontSize}
          fontFamily={attributeTitle.fontFamily}
          uppercase={this.props.uppercase}
        >
          {name}
        </AttributeTitle>
        {type === "swatch" ? (
          <Attributes colorHeight={attributes.colorHeight}>
            {items.map(({ id, displayValue, value }) => {
              const borderSize = displayValue !== "White" ? "0" : "1px";
              return (
                <ColorAttributeValue
                  key={id}
                  value={`${value}`}
                  width={colorAttributeValue.width}
                  border={`${borderSize}`}
                  htmlFor={id}
                  onClick={() => this.setState({ [name]: displayValue })}
                  className={displayValue === this.state[name] ? "active" : ""}
                  disabled={this.props.disable ? true : false}
                ></ColorAttributeValue>
              );
            })}
          </Attributes>
        ) : (
          <Attributes height={attributes.height}>
            {items.map(({ id, value, displayValue }) => {
              return (
                <AttributeValue
                  key={id}
                  width="20px"
                  fontWeight={attributeValue.fontWeight}
                  lineHeight={attributeValue.lineHeight}
                  fontSize={attributeValue.fontSize}
                  color={attributeValue.color}
                  htmlFor={id}
                  className={displayValue === this.state[name] ? "active" : ""}
                  onClick={() => this.setState({ [name]: displayValue })}
                  disabled={this.props.disable ? true : false}
                >
                  {value}
                </AttributeValue>
              );
            })}
          </Attributes>
        )}
      </AttributeWrapper>
    );
  }
}

export default ProductAttribute;
