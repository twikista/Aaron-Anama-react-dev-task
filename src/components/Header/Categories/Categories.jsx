import React, { PureComponent } from "react";
import uniqid from "uniqid";
import { GET_CATEGORIES } from "../../../queries/queries";
import { Query } from "@apollo/client/react/components";
import { Nav, CategoryLink } from "./Categories.styles";

class Categories extends PureComponent {
  render() {
    const { closeMiniCartOverlay } = this.props;
    return (
      <>
        {
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;

              return (
                <Nav>
                  {data &&
                    data.categories.map(({ name }) => {
                      return (
                        <CategoryLink
                          category={name}
                          key={uniqid()}
                          to={`/${name}`}
                          onClick={closeMiniCartOverlay}
                        >
                          {name}
                        </CategoryLink>
                      );
                    })}
                </Nav>
              );
            }}
          </Query>
        }
      </>
    );
  }
}

export default Categories;
