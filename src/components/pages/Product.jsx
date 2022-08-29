import { Component } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import ProductAttributes from "../ProductAtrributes";
import ProductName from "../ProductName";
import Price from "../Price";
import parse from "html-react-parser";
import withRouter from "../utility/NavParamsHOC";
import { GET_PRODUCT } from "../../queries/queries";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actionType";
import ValidationModal from "../ValidationModal";

const Container = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr;
  column-gap: 40px;
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
`;

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

  render() {
    const id = this.props.params.product;

    return (
      <>
        {
          <Query query={GET_PRODUCT} variables={{ id }}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;
              if (error) console.log(error);
              if (data) {
                const { label } = this.props.currencyDetails;
                const activePrice = data.product.prices.find(
                  (i) => i.currency.label === label
                );

                return (
                  <>
                    <Container>
                      <ImageThumbNails>
                        {data.product.gallery.map((url, index) => (
                          <ImageThumbNail
                            key={uniqid()}
                            src={url}
                            alt={`${data.product.name} image-${index + 1}`}
                            onClick={() => this.imageToggler(url)}
                          />
                        ))}
                      </ImageThumbNails>
                      <ProductDetailsWrapper>
                        <ImageWrapper>
                          <ProductImage
                            src={
                              this.state.imageUrl
                                ? this.state.imageUrl
                                : data.product.gallery[0]
                            }
                            alt={data.product.name}
                          />
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
                            item={data.product}
                            {...this.props}
                          />
                          <ProductAttributes
                            attributes={data.product.attributes}
                            styles={styles}
                            width="292px"
                            uppercase="uppercase"
                            selectedAttributesHandler={
                              this.selectedAttributesHandler
                            }
                            {...this.props}
                          />
                          <ProductPriceWrapper>
                            <ProductpriceLabel>price</ProductpriceLabel>
                            <Price
                              prices={data.product.prices}
                              fontWeight="700"
                              fontSize="24px"
                              lineHeight="18px"
                            />
                          </ProductPriceWrapper>
                          <AddToCartButton
                            onClick={() =>
                              this.props.addToCart({
                                ...data.product,
                                id: uniqid(),
                                selectedAttributes:
                                  this.state.selectedAttributes,
                                amount: 1,
                                activePrice: activePrice,
                              })
                            }
                          >
                            add to cart
                          </AddToCartButton>
                          <ProductDesriptionWrapper>
                            {parse(data.product.description)}
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
