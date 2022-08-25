import { Component } from "react";
import styled from "styled-components";
import MiniCartItem from "./MiniCartItem";

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 293px;
  max-height: 420px;
  overflow: hidden scroll;
`;

class MinicartItems extends Component {
  render() {
    const { cart = [] } = this.props;
    return (
      <CartItemsContainer>
        {cart.length ? (
          cart.map((item) => (
            <MiniCartItem
              key={item.id}
              item={item}
              currentCurrency={this.props.currentCurrency}
            />
          ))
        ) : (
          <p>{`There are ${cart.length} items in your cart.`}</p>
        )}
      </CartItemsContainer>
    );
  }
}

export default MinicartItems;
