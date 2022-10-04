import { PureComponent } from "react";
import uniqid from "uniqid";
import ProductAttributes from "../../../ProductAttributes/ProductAtrributes";
import ProductName from "../../../ProductName/ProductName";
import Price from "../../../Price/Price";
import parse from "html-react-parser";
import withRouter from "../../../utility/NavParamsHOC";
import { GET_PRODUCT } from "../../../../queries/queries";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { addToCart } from "../../../../redux/actionType";
import ValidationModal from "./ValidationModal/ValidationModal";
import {
  Container,
  ImageThumbNails,
  ImageThumbNail,
  ProductDetailsWrapper,
  ImageWrapper,
  ProductImage,
  ProductDetails,
  ProductPriceWrapper,
  ProductpriceLabel,
  AddToCartButton,
  ProductDesriptionWrapper,
} from "./Product.styles";

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
  priceStyles: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "18px",
  },
};

const productNameStyles = {
  fontFamily: "Raleway",
  fontWeight: "400",
  fontSize: "30px",
  lineHeight: "27px",
  color: "#1d1f22",
  marginBottom: "43px",
  spanFontWeight: "600",
  spanMarginBottom: "16px",
};

class Product extends PureComponent {
  state = {
    imageUrl: "",
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

  renderImageThumbnail = (gallery, name) => {
    return gallery.map((url, index) => {
      return (
        <ImageThumbNail
          key={uniqid()}
          src={url}
          alt={`${name} image-${index + 1}`}
          onClick={() => this.imageToggler(url)}
        />
      );
    });
  };

  renderProductImage = (imageUrl, gallery, name) => {
    return (
      <ImageWrapper>
        <ProductImage src={imageUrl ? imageUrl : gallery[0]} alt={name} />
      </ImageWrapper>
    );
  };

  renderProductName = (style, data) => {
    return <ProductName styles={style} item={data.product} {...this.props} />;
  };

  renderProductAttributes = (attributes, inStock) => {
    return (
      <ProductAttributes
        attributes={attributes}
        styles={styles}
        width="292px"
        uppercase="uppercase"
        selectedAttributesHandler={this.selectedAttributesHandler}
        disable={!inStock}
        {...this.props}
      />
    );
  };

  renderProductPrice = (prices) => {
    return (
      <ProductPriceWrapper>
        <ProductpriceLabel>price</ProductpriceLabel>
        <Price prices={prices} styles={styles.priceStyles} />
      </ProductPriceWrapper>
    );
  };

  cartItem = (data, activePrice) => {
    return {
      ...data.product,
      id: uniqid(),
      selectedAttributes: this.state.selectedAttributes,
      amount: 1,
      activePrice: activePrice,
    };
  };

  render() {
    const {
      params: { product: id },
      currencyDetails,
      addToCart,
    } = this.props;

    const { imageUrl } = this.state;

    return (
      <>
        {
          <Query query={GET_PRODUCT} variables={{ id }}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;
              if (error) return <p>Error fecthing product details</p>;
              if (data) {
                const { label } = currencyDetails;
                const {
                  product: {
                    gallery,
                    name,
                    attributes,
                    inStock,
                    prices,
                    description,
                  } = {},
                } = data;
                const activePrice = prices.find(
                  (i) => i.currency.label === label
                );
                const length = gallery.length;

                return (
                  <>
                    <Container>
                      <ImageThumbNails>
                        {length > 1 && this.renderImageThumbnail(gallery, name)}
                      </ImageThumbNails>
                      <ProductDetailsWrapper>
                        {this.renderProductImage(imageUrl, gallery, name)}
                        <ProductDetails>
                          {this.renderProductName(productNameStyles, data)}
                          {this.renderProductAttributes(attributes, inStock)}
                          {this.renderProductPrice(prices)}
                          <AddToCartButton
                            onClick={() =>
                              addToCart(this.cartItem(data, activePrice))
                            }
                            disabled={!inStock}
                          >
                            add to cart
                          </AddToCartButton>
                          <ProductDesriptionWrapper>
                            {parse(description)}
                          </ProductDesriptionWrapper>
                        </ProductDetails>
                      </ProductDetailsWrapper>
                    </Container>
                  </>
                );
              }
            }}
          </Query>
        }
        <ValidationModal />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Product));
