import { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import withRouter from "../../../utility/NavParamsHOC";
import { Get_CATEGORY } from "../../../../queries/queries";
import { Query } from "@apollo/client/react/components";
import {
  LandingPage,
  ActiveCategory,
  ProductsWarpper,
} from "./Products.styles";

class Products extends Component {
  render() {
    const {
      params: { category } = {},
      currentCurrency,
      setCurrentPrice,
    } = this.props;
    const title = category || "all";

    return (
      <>
        {
          <Query query={Get_CATEGORY} variables={{ title }}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;
              if (error) return <p>Error fecthing category data</p>;

              if (data) {
                const { category: { products } = {} } = data;
                return (
                  <LandingPage>
                    <ActiveCategory>{title.toUpperCase()}</ActiveCategory>
                    <ProductsWarpper>
                      {products.length ? (
                        products.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            currentCurrency={currentCurrency}
                            activeCategory={title}
                            setCurrentPrice={setCurrentPrice}
                          />
                        ))
                      ) : (
                        <p>No product found in this category</p>
                      )}
                    </ProductsWarpper>
                  </LandingPage>
                );
              }
            }}
          </Query>
        }
      </>
    );
  }
}

export default withRouter(Products);
