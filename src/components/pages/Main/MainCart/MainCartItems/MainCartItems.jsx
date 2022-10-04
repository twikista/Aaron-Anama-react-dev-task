import { PureComponent } from "react";
import MainCartItem from "./MainCartItem/MainCartItem";
import { CartItemsContainer } from "./MainCartaItems.styles";

class MainCartItems extends PureComponent {
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
