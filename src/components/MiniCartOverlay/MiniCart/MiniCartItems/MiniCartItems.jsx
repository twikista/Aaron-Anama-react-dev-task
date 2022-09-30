import { Component } from "react";
import MiniCartItem from "../MiniCartItem/MiniCartItem";
import { CartItemsContainer } from "./MiniCartItems.styles";

class MinicartItems extends Component {
  render() {
    const { cart = [] } = this.props;
    return (
      <CartItemsContainer>
        {cart.length ? (
          cart.map((item) => <MiniCartItem key={item.id} item={item} />)
        ) : (
          <p>{`There are ${cart.length} items in your cart.`}</p>
        )}
      </CartItemsContainer>
    );
  }
}

export default MinicartItems;
