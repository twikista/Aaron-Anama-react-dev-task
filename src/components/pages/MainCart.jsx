import { Component } from "react";
import styled from "styled-components";
import MainCartItems from "../cart/MainCartItems";
import { connect } from "react-redux";

const MainCartContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: grid;
  color: #1d1f22;
  font-family: "Raleway";
  margin-top: 80px;
  padding-bottom: 42px;
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
`;

const EmptyCartMessage = styled.p`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;

class MainCart extends Component {
  render() {
    const { amount, tax, total, cart, currencyDetails } = this.props.state;
    const { symbol } = currencyDetails;
    return (
      <MainCartContainer>
        <CartHeading>cart</CartHeading>
        {cart.length ? (
          <>
            <MainCartItems cart={cart} />
            <CartTotalWrapper>
              <CartTotalItem>
                <CartSubTotalLabel>tax 21%:</CartSubTotalLabel>
                <CartTotalAmount>
                  {symbol}
                  {`${tax.toFixed(2)}`}
                </CartTotalAmount>
              </CartTotalItem>
              <CartTotalItem>
                <CartSubTotalLabel>quantity:</CartSubTotalLabel>
                <CartTotalAmount>{amount}</CartTotalAmount>
              </CartTotalItem>
              <CartTotalItem>
                <CartTotalLabel>total:</CartTotalLabel>
                <CartTotalAmount>
                  {symbol}
                  {`${total.toFixed(2)}`}
                </CartTotalAmount>
              </CartTotalItem>
              <OrderButton>order</OrderButton>
            </CartTotalWrapper>
          </>
        ) : (
          <EmptyCartMessage>{`There are ${cart.length} items in your cart. Add items`}</EmptyCartMessage>
        )}
      </MainCartContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(MainCart);
