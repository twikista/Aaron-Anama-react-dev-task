import { Component } from "react";
import styled from "styled-components";
import Price from "./Price";
import addAproductIcon from "../assets/add_product_icon.svg";
import withRouter from "./NavParamsHOC";
import { Link } from "react-router-dom";

const CardWrapper = styled.article`
  width: calc(386px - 20px);
  height: 444px;
  /* flex: calc(1 - 500px); */
  padding: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid 1px red; */
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
const AddToCardIcon = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  bottom: -26px;
  right: 15px;
  box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
  z-index: 10;
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
// const ProductPrice = styled.h3`
//   font-size: 18px;
//   font-weight: 500;
// `;

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

class ProductCard extends Component {
  render() {
    console.log(this.props);
    const { name, inStock, gallery, prices } = this.props;
    const activeCategory = this.props.activeCategory;
    console.log(activeCategory);
    return (
      <CardWrapper>
        <ProductImage url={`${gallery[0]}`}>
          {inStock && (
            <Link to={`/${activeCategory}/${this.props.id}}`}>
              <AddToCardIcon src={`${addAproductIcon}`} />
            </Link>
          )}
        </ProductImage>
        <CardContent>
          <ProductName>{name}</ProductName>
          {/* <ProductPrice>$50.58</ProductPrice> */}
          <Price
            prices={this.props.prices}
            currentCurrency={this.props.currentCurrency}
            fontWeight="500"
            fontSize="18px"
            lineHeight="29px"
          />
        </CardContent>
        {!inStock && <OutOfStockOverlay>out of stock</OutOfStockOverlay>}
      </CardWrapper>
    );
  }
}

export default withRouter(ProductCard);
