import React, { Component } from "react";
// import Category from "./Category";
import styled from "styled-components";
import { categoriesData, item } from "../data";
import { NavLink } from "react-router-dom";
import uniqid from "uniqid";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
  margin-top: 24px;
`;

const CategoryLink = styled(NavLink)`
  text-transform: uppercase;
  color: #1d1f22;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 20px;
  min-width: 64.47px;
  display: flex;
  justify-content: center;

  &:not(:first-child) {
    margin-left: 20px;
  }

  &:hover {
    color: #5ece7b;
    font-weight: 600;
    font-size: 16px;
    border-bottom: 2px solid #5ece7b;
  }

  &.active {
    color: #5ece7b;
    font-weight: 600;
    font-size: 16px;
    border-bottom: 2px solid #5ece7b;
  }
`;

class Categories extends Component {
  render() {
    console.log(this.state);
    const categories = categoriesData.categories.map(
      (category) => category.name
    );
    return (
      <Nav>
        {categories.map((i) => {
          return (
            <CategoryLink
              category={i}
              key={uniqid()}
              to={i === "all" ? "/" : `/${i}`}
            >
              {i}
            </CategoryLink>
          );
        })}
      </Nav>
    );
  }
}

export default Categories;
