import { Component } from "react";
import styled from "styled-components";
import MainCartItem from "./MainCartItem";
import { cart } from "../data";
import { connect } from "react-redux";

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
    console.log(cart);
    return (
      <CartItemsContainer gap={gap} width={width} maxHeight={maxHeight}>
        {cart.length ? (
          cart.map((item) => (
            <MainCartItem
              key={item.id}
              item={item}
              currentCurrency={this.props.currentCurrency}
            />
          ))
        ) : (
          <p>{`There are ${cart.length} items in your cart. Add items`}</p>
        )}
      </CartItemsContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(MainCartItems);
