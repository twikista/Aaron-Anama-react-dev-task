import React, { Component } from "react";
import Category from "./Category";
import styled from "styled-components";
import { data } from "../data";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
  margin-top: 24px;
`;

class Categories extends Component {

  render() {
    const categories = data.category.products;
    const uniqueCategories = [
      "all",
      ...new Set(categories.map((i) => i.category)),
    ];

    return (
      <Nav>
      {uniqueCategories.map((i, index)=>{
      return <Category key={index} category={i}/>
      
      })} 
      </Nav>
    );
  }
}

export default Categories;
