import React, { Component } from "react";
import styled from "styled-components";

const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: ${(props) => props.width};
  /* height: 48px; */
  /* border: solid purple 1px; */
`;
const AttributeTitle = styled.h5`
  font-weight: ${(props) => props.fontwWight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-family: ${(props) => props.fontFamily};
  text-transform: ${(props) => props.uppercase};
`;
const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: ${(props) =>
    props.height ? `${props.height}` : `${props.colorHeight}`};
`;

const AttributeValue = styled.button`
  flex: 1;
  /* max-height: ${(props) => props.width}; */
  width: 100%;
  height: 100%;
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: ${(props) => props.fontwWight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  border: 1px solid #1d1f22;
  background-color: transparent;
  flex-wrap: wrap;
  cursor: pointer;
  appearance: none;
  /* border: 1px solid ${(props) => props.border}; */

  &.active {
    background-color: #1d1f22;
    color: #fff;
  }
`;

const ColorAttributeValue = styled(AttributeValue)`
  flex: none;
  height: 100%;
  width: ${(props) => props.width};
  border: ${(props) => props.border} solid #ababab;
  background-color: ${(props) => props.value};
  &.active {
    outline: solid 1px #5ece7b;
    outline-offset: 1px;
    background-color: ${(props) => props.value};
  }
`;

//[this.props.name]: `${this.props.items[0].displayValue}`

class ProductAttribute extends Component {
  initialState = this.props.selectedAttributes
    ? this.props.selectedAttributes
    : {};
  state = this.initialState;
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    // this.props.selectedAttributesHandler(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      // this.props.attributesHandler(this.state);
      this.props.selectedAttributesHandler(this.state);
    }
  }

  componentDidMount() {
    // this.props.selectedAttributesHandler(this.state);
  }

  render() {
    console.log(this.state, this.initialState);

    const { name, type, items, width, styles } = this.props;
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
                >
                  {/* <AttributeRadioButton
                    type="radio"
                    id={id}
                    name={name}
                    value={displayValue}
                    checked={displayValue === this.state[name]}
                    onChange={this.changeHandler}
                  /> */}
                </ColorAttributeValue>
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
                  {/* <AttributeRadioButton
                    type="radio"
                    id={id}
                    name={name}
                    value={displayValue}
                    checked={displayValue === this.state[name]}
                    onChange={this.changeHandler}
                  /> */}
                </AttributeValue>
              );
            })}
          </Attributes>
        )}
        {/* <Attributes >
                        {items.map(({id, displayValue, value})=>{
                            const color = displayValue !=="White"? value:"black";
                            return type==="swatch"?<AttributeValue key={id} value={`${value}`} width="20px"  border={`${color}`} onClick={()=>this.setState({color:`${value}`})}/> : <AttributeValue key={id}>{value}</AttributeValue>          
                        })}
                </Attributes> */}
      </AttributeWrapper>
    );
  }
}

export default ProductAttribute;
