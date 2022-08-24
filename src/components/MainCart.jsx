import { Component } from "react";
import styled from "styled-components";
import MainCartItems from "./MainCartItems";
import Price from "./Price";

const MainCartContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: grid;
  color: #1d1f22;
  font-family: "Raleway";
  margin-top: 80px;
  /* margin: 32px; */
  /* border: solid red 1px; */
`;

const CartHeading = styled.h2`
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  line-height: 40px;
`;

const CartTotalWrapper = styled.div`
  width: 279px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-top: 32px;
`;

const CartTotalItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const CartTotalAmount = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  flex: 1;
`;
const CartTotalLabel = styled(CartTotalAmount)`
  font-weight: 500;
  line-height: 28px;
  text-transform: capitalize;
  justify-content: flex-start;
`;

const CartSubTotalLabel = styled(CartTotalAmount)`
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
  flex: 1;
  width: 200px;
`;

const Label = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5ece7b;
  color: #ffffff;
  text-transform: uppercase;
  padding: 16px 32px;
  width: 279px;
  height: 43px;
  line-height: 17px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  border: none;
  outline: none;
  /* margin-top: 32px; */
`;

class MainCart extends Component {
  render() {
    const { symbol } = this.props.currentCurrency;
    console.log(this.props.currentCurrency.currentCurrency, symbol);
    return (
      <MainCartContainer>
        <CartHeading>cart</CartHeading>
        <MainCartItems currentCurrency={this.props.currentCurrency} />
        <CartTotalWrapper>
          <CartTotalItem>
            <CartSubTotalLabel>tax 21%:</CartSubTotalLabel>
            <CartTotalAmount>{symbol}42.00</CartTotalAmount>
          </CartTotalItem>
          <CartTotalItem>
            <CartSubTotalLabel>quantity:</CartSubTotalLabel>
            <CartTotalAmount>{symbol}3</CartTotalAmount>
          </CartTotalItem>
          <CartTotalItem>
            <CartTotalLabel>total:</CartTotalLabel>
            <CartTotalAmount>{symbol}200.00</CartTotalAmount>
          </CartTotalItem>
          <OrderButton>order</OrderButton>
        </CartTotalWrapper>
      </MainCartContainer>
    );
  }
}

export default MainCart;
