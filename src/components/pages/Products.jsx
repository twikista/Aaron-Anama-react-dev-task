import { Component } from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import withRouter from "../utility/NavParamsHOC";
import { Get_CATEGORY } from "../../queries/queries";
import { Query } from "@apollo/client/react/components";

const LandingPage = styled.div`
  width: 100%;
`;
const ActiveCategory = styled.h2`
  font-size: 42px;
  font-weight: 400;
  color: #1d1f22;
  line-height: 1.6;
`;

const ProductsWarpper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(386px - 20px));
  justify-content: center;
  flex-wrap: wrap;
  gap: 103px 40px;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 103px;
`;

class Products extends Component {
  render() {
    const params = this.props.params;
    const title = Object.keys(params).length ? params.category : "all";

    return (
      <>
        {
          <Query query={Get_CATEGORY} variables={{ title }}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;
              if (error) console.log(error);

              return (
                <LandingPage>
                  <ActiveCategory>{title.toUpperCase()}</ActiveCategory>
                  <ProductsWarpper>
                    {data &&
                      data.category.products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          currentCurrency={this.props.currentCurrency}
                          activeCategory={title}
                          setCurrentPrice={this.props.setCurrentPrice}
                        />
                      ))}
                  </ProductsWarpper>
                </LandingPage>
              );
            }}
          </Query>
        }
      </>
    );
  }
}

export default withRouter(Products);
