import { Component } from "react";
import styled from "styled-components";
import Price from "./Price";
import addAproductIcon from "../assets/add_product_icon.svg";
import withRouter from "./NavParamsHOC";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/actionType";
import uniqid from "uniqid";

const CardWrapper = styled.article`
  width: calc(386px - 20px);
  height: 444px;
  padding: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &:not(:last-child) {
  }
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover img {
    display: block;
  }
`;
const ProductImage = styled.div`
  width: 100%;
  height: 330px;
  margin-bottom: 24px;
  box-sizing: border-box;
  background-color: #c4c4c4;
  background-image: url(${(props) => props.url});
  background-position: 50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  position: relative;
`;
const AddToCartIcon = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  bottom: 15%;
  right: 25px;
  box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
  z-index: 15;
  border-radius: 50%;
  display: none;
`;

const CardContent = styled.div`
  width: 100%;
  height: 54px;
  color: #1d1f22;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.6;
`;

const ProductName = styled.h4`
  font-size: 18px;
  font-weight: 300;
`;

const OutOfStockOverlay = styled(CardWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;
  background: #ffffff;
  opacity: 0.5;
`;

const WrappingLink = styled(Link)`
  text-decoration: none;
  position: relative;
  /* z-index: 3; */
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
`;

class ProductCard extends Component {
  // setInitaitalState = () => {
  //   let defaultAttributes = {};
  //   const attributes = this.props.product.attributes;
  //   for (let i = 0; i < attributes.length; i++) {
  //     const attribute = {
  //       [attributes[i].name]: `${attributes[i].items[0].displayValue}`,
  //     };
  //     defaultAttributes = { ...defaultAttributes, ...attribute };
  //   }
  //   return defaultAttributes;
  // };
  state = { selectedAtrributes: {} };

  render() {
    const { name, inStock, gallery, prices, id, attributes } =
      this.props.product;
    const activeCategory = this.props.activeCategory;
    // const { currentCurrency } = this.props.currentCurrency;
    const activePrice = this.props.setCurrentPrice(prices);
    const content = (
      <Container>
        <ProductImage url={`${gallery[0]}`}></ProductImage>
        <CardContent>
          <ProductName>{name}</ProductName>
          {/* <ProductPrice>$50.58</ProductPrice> */}
          <Price
            prices={prices}
            // currentCurrency={this.props.currentCurrency}
            fontWeight="500"
            fontSize="18px"
            lineHeight="29px"
            // activePrice={activePrice}
          />
        </CardContent>
      </Container>
    );
    return (
      <>
        {inStock ? (
          <CardWrapper>
            <WrappingLink to={`/${activeCategory}/${id}`}>
              {content}
            </WrappingLink>
            {attributes.length === 0 && (
              <AddToCartIcon
                src={`${addAproductIcon}`}
                onClick={() =>
                  this.props.addToCart({
                    ...this.props.product,
                    id: uniqid(),
                    selectedAttributes: this.state.selectedAtrributes,
                    amount: 1,
                    activePrice: activePrice,
                  })
                }
              />
            )}
          </CardWrapper>
        ) : (
          <CardWrapper>
            {content}
            <OutOfStockOverlay>out of stock</OutOfStockOverlay>
          </CardWrapper>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (product) => dispatch(addToCart(product)) };
};

export default connect(null, mapDispatchToProps)(withRouter(ProductCard));
