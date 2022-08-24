import { Component } from "react";
import styled from "styled-components";
import { item } from "../data";
import ProductAttribute from "./ProductAttribute";

const AtributeContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 136px;
  /* border: solid limegreen 1px; */
`;

class ProductAttributes extends Component {
  state = {};

  // itemsHandler = (attribute, index) => {
  //   const data = [...this.state];
  //   data[index] = attribute;
  //   this.setState((prevState) => [...prevState, ...data]);
  //   this.props.updateAttributeHandler(this.state.attributes);
  // };

  render() {
    const { attributes, styles } = this.props;
    // console.log(attributes);
    // const styles = {
    //   attributeTitle: {
    //     fontweight: "400",
    //     fontSize: "14px",
    //     lineHeight: "1.46",
    //     fontFamily: "Raleway",
    //   },
    //   attributes: {
    //     colorHeight: "20px",
    //     height: "24px",
    //   },
    //   attributeValue: {
    //     fontWeight: "400",
    //     fontSize: "14px",
    //     lineHeight: "1.6",
    //     color: "#1d1f22",
    //   },
    //   colorAttributeValue: {
    //     width: "20px",
    //   },
    // };
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
              // itemsHandler={this.itemsHandler}
            />
            // <AttributeWrapper key={id}>
            //     <AttributeTitle>{name}</AttributeTitle>
            //         <Attributes >
            //             {items.map(({id, displayValue, value})=>{
            //                 const color = displayValue !=="White"? value:"black";
            //                 return type==="swatch"?<AttributeValue key={id} value={`${value}`} width="20px" htmlFor={`${displayValue}`} border={`${color}`} onClick={()=>this.setState({color:`${value}`})}/> : <AttributeValue key={id}>{value}</AttributeValue>
            //             })}
            //         </Attributes>
            // </AttributeWrapper>
          );
        })}
      </AtributeContainer>
    );
  }
}

export default ProductAttributes;
