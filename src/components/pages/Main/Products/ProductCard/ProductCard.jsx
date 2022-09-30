import { Component } from "react";
import Price from "../../../../Price/Price";
import addAproductIcon from "../../../../../assets/add_product_icon.svg";
import { connect } from "react-redux";
import { addToCart } from "../../../../../redux/actionType";
import uniqid from "uniqid";
import {
  CardWrapper,
  ProductImage,
  AddToCartIcon,
  CardContent,
  ProductName,
  OutOfStockOverlay,
  WrappingLink,
  Container,
} from "./ProductCard.styles";

class ProductCard extends Component {
  state = { selectedAtrributes: {} };

  render() {
    const { name, inStock, gallery, prices, id, attributes } =
      this.props.product;
    const activeCategory = this.props.activeCategory;
    const { label } = this.props.currencyDetails;
    const activePrice = prices.find((i) => i.currency.label === label);

    const content = (
      <Container>
        <ProductImage url={`${gallery[0]}`} />
        <CardContent>
          <ProductName>{name}</ProductName>
          <Price
            prices={prices}
            fontWeight="500"
            fontSize="18px"
            lineHeight="29px"
          />
        </CardContent>
        {inStock || <OutOfStockOverlay>out of stock</OutOfStockOverlay>}
      </Container>
    );
    return (
      <>
        <CardWrapper>
          <WrappingLink to={`/${activeCategory}/${id}`}>{content}</WrappingLink>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { currencyDetails: state.currencyDetails };
};

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (product) => dispatch(addToCart(product)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
