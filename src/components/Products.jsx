import { Component } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { productData } from "../data";
import CartOverlay from "./CartOverlay";

const LandingPage = styled.div`
  width: 100%;
`;
const ActiveCategory = styled.h2`
  font-size: 42px;
  font-weight: 400;
  color: #1d1f22;
  line-height: 1.6;
  /* padding-top: 80px; */
`;

const ProductsWarpper = styled.section`
  /* display: flex; */
  display: grid;
  /* flex-direction: row; */
  grid-template-columns: repeat(auto-fill, calc(386px - 20px));
  justify-content: center;
  flex-wrap: wrap;
  gap: 103px 40px;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 103px;
  /* position: relative; */
`;

class Products extends Component {
  render() {
    const categories = productData.categories;
    const { products } = categories.find((category) => category.name === "all");
    return (
      <LandingPage>
        <ActiveCategory>{categories[0].name.toUpperCase()}</ActiveCategory>
        <ProductsWarpper>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              currentCurrency={this.props.currentCurrency}
            />
          ))}
        </ProductsWarpper>
        <CartOverlay currentCurrency={this.props.currentCurrency} />
      </LandingPage>
    );
  }
}

export default Products;
