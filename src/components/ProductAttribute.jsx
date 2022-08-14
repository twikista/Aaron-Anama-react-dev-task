import { Component } from "react";
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

const AttributeValue = styled.label`
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
  background-color: ${(props) => props.value};

  flex-wrap: wrap;
  cursor: pointer;
`;

const ColorAttributeValue = styled(AttributeValue)`
  flex: none;
  height: 100%;
  width: ${(props) => props.width};
  border: ${(props) => props.border} solid #ababab;
`;

class ProductAttribute extends Component {
  render() {
    console.log(this.props);
    const { name, type, items, width, styles } = this.props;
    const { attributeTitle, attributes, attributeValue, colorAttributeValue } =
      styles;
    console.log(items);
    return (
      <AttributeWrapper width={width}>
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
                  onClick={() => this.setState({ color: `${value}` })}
                />
              );
            })}
          </Attributes>
        ) : (
          <Attributes height={attributes.height}>
            {items.map(({ id, value }) => {
              return (
                <AttributeValue
                  key={id}
                  width="20px"
                  onClick={() => this.setState({ color: `${value}` })}
                  fontWeight={attributeValue.fontWeight}
                  lineHeight={attributeValue.lineHeight}
                  fontSize={attributeValue.fontSize}
                  color={attributeValue.color}
                >
                  {value}
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
