import { Component } from "react";
import styled from "styled-components";
import { item } from "../data";
import uniqid from "uniqid";
import ProductAttributes from "./ProductAtrributes";
import ProductName from "./ProductName";
import Price from "./Price";
import parse from "html-react-parser";
// import withRouter from "./NavParamsHOC";
// import { Link } from "react-router-dom";

const Container = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr;
  column-gap: 40px;
  /* padding-top: ; */
`;

const ImageThumbNails = styled.article`
  width: 100%;
  height: 440px;
  overflow: hidden scroll;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ImageThumbNail = styled.img`
  width: 80px;
  height: 80px;
  /* background-image: url(${(props) => props.url}); */
  /* background-size:contain; */
  cursor: pointer;
`;

const ProductDetailsWrapper = styled.div`
  margin-right: 119px;
  gap: 100px;
  display: flex;
  color: #1d1f22;
`;
const ImageWrapper = styled.div`
  width: 610px;
  height: 511px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  /* max-height: 511px; */
`;

const ProductNameWrapper = styled.div`
  width: 100%;
  margin-bottom: 43px;
`;

// const ProductNameSpan = styled.span`
//   font-weight: 600;
//   padding-bottom: 16px;
//   display: inline-block;
// `;

// const ProductName = styled.h2`
//   font-family: "Raleway";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 30px;
//   line-height: 27px;
// `;

const ProductDetails = styled.article`
  width: 292px;
  height: 595px;
`;

const ProductPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-top: 36px;
`;

const ProductpriceLabel = styled.h5`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
`;

// const ProductPrice = styled.p`
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 18px;
// `;

const AddToCartButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  width: 100%;
  height: 52px;
  background: #5ece7b;
  margin-top: 20px;
  text-transform: uppercase;
  border: none;
  outline: none;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
`;

const ProductDesriptionWrapper = styled.div`
  width: 100%;
  height: 103px;
  margin-top: 40px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  height: 103px;
  overflow-y: scroll;
`;

const ProductDescription = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  height: 103px;
  overflow-y: scroll;
`;

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
    color: "#292929",
  },
  colorAttributeValue: {
    width: "36px",
  },
};

class Product extends Component {
  state = {
    imageUrl: item.gallery[0],
    selectedAttributes: {},
  };

  imageToggler = (url) => {
    this.setState((prevState) => {
      return { ...prevState, imageUrl: url };
    });
  };

  selectedAttributesHandler = (attribute) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedAttributes: { ...prevState.selectedAttributes, ...attribute },
      };
    });
  };

  componentDidMount() {
    console.log(this.props.params);
  }

  render() {
    console.log(this.props, this.state);

    const { gallery } = item;
    return (
      <Container>
        <ImageThumbNails>
          {gallery.map((url, index) => (
            <ImageThumbNail
              key={uniqid()}
              src={url}
              alt={`${item.name} image-${index + 1}`}
              onClick={() => this.imageToggler(url)}
            />
          ))}
        </ImageThumbNails>
        <ProductDetailsWrapper>
          <ImageWrapper>
            <ProductImage src={this.state.imageUrl} alt={item.name} />
          </ImageWrapper>
          <ProductDetails>
            <ProductName
              fontFamily="Raleway"
              fontWeight="400"
              fontSize="30px"
              lineHeight="27px"
              color="#1d1f22"
              marginBottom="43px"
              spanFontWeight="600"
              spanMarginBottom="16px"
              item={item}
              {...this.props}
            />
            <ProductAttributes
              attributes={item.attributes}
              styles={styles}
              width="292px"
              uppercase="uppercase"
              selectedAttributesHandler={this.selectedAttributesHandler}
              {...this.props}
            />
            <ProductPriceWrapper>
              <ProductpriceLabel>price</ProductpriceLabel>
              {/* <ProductPrice>$50.00</ProductPrice> */}
              <Price
                prices={item.prices}
                currentCurrency={this.props.currentCurrency}
                fontWeight="700"
                fontSize="24px"
                lineHeight="18px"
              />
            </ProductPriceWrapper>
            <AddToCartButton>add to cart</AddToCartButton>
            <ProductDesriptionWrapper>
              {parse(item.description)}
            </ProductDesriptionWrapper>
          </ProductDetails>
        </ProductDetailsWrapper>
      </Container>
    );
  }
}

export default Product;
