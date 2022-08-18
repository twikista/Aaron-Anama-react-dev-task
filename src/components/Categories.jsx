import React, { Component } from "react";
import Category from "./Category";
import styled from "styled-components";
import { categoriesData } from "../data";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
  margin-top: 24px;
`;

class Categories extends Component {
  render() {
    const { categories } = categoriesData;
    console.log(categories);
    return (
      <Nav>
        {categories.map((i, index) => {
          return (
            <Category
              key={index}
              category={i.name}
              const
              defaultCategory={categories[0].name}
            />
          );
        })}
      </Nav>
    );
  }
}

export default Categories;
