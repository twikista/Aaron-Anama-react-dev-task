import { Component } from "react";
import styled from "styled-components";
import emptyCart from "../assets/empty_cart.svg";

const CartWrapper = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 22px;
  position: relative;
  display: flex;
  cursor: pointer;
`;

const CartImage = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;

const CartAmout = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  background-color: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  left: 13px;
`;

class CartBadge extends Component {
  state = { open: false };
  handler = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };

  componentDidUpdate(prevprops, prevState) {
    if (prevState !== this.state) {
      this.props.overLaytoggle(this.state.open);
    }
  }
  render() {
    console.log(this.state);
    return (
      <CartWrapper onClick={this.handler}>
        <CartImage src={emptyCart} />
        <CartAmout>3</CartAmout>
      </CartWrapper>
    );
  }
}

export default CartBadge;
