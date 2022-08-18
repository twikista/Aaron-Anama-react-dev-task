import { Component } from "react";
import styled from "styled-components";

//Sytles

const CategoryLink = styled.button`
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

  &:hover,
  &.active {
    color: #5ece7b;
    font-weight: 600;
    font-size: 16px;
    border-bottom: 2px solid #5ece7b;
  }
`;

class Category extends Component {
  state = { activeCategory: this.props.defaultCategory };
  render() {
    console.log(this.state);
    const { category } = this.props;
    console.log(category);
    return (
      <CategoryLink as="a" href="#">
        {category}
      </CategoryLink>
    );
  }
}

export default Category;
