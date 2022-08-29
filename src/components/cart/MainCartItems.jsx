import { Component } from "react";
import styled from "styled-components";
import MainCartItem from "./MainCartItem";

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 55px;
`;

class MainCartItems extends Component {
  render() {
    const { gap, width, maxHeight, cart = [] } = this.props;
    return (
      <CartItemsContainer gap={gap} width={width} maxHeight={maxHeight}>
        {cart.map((item) => (
          <MainCartItem key={item.id} item={item} />
        ))}
      </CartItemsContainer>
    );
  }
}

export default MainCartItems;
