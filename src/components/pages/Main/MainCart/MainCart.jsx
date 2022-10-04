import { PureComponent } from "react";
import MainCartItems from "./MainCartItems/MainCartItems";
import { connect } from "react-redux";
import {
  MainCartContainer,
  CartHeading,
  CartTotalWrapper,
  CartTotalItem,
  CartTotalAmount,
  CartTotalLabel,
  CartSubTotalLabel,
  OrderButton,
  EmptyCartMessage,
} from "./MainCart.styles";

class MainCart extends PureComponent {
  renderTotalTax = (currencySymbol, taxAmount) => {
    return (
      <CartTotalItem>
        <CartSubTotalLabel>tax 21%:</CartSubTotalLabel>
        <CartTotalAmount>
          {currencySymbol}
          {`${taxAmount.toFixed(2)}`}
        </CartTotalAmount>
      </CartTotalItem>
    );
  };

  renderTotalQuantity = (amount) => {
    return (
      <CartTotalItem>
        <CartSubTotalLabel>quantity:</CartSubTotalLabel>
        <CartTotalAmount>{amount}</CartTotalAmount>
      </CartTotalItem>
    );
  };

  renderCartTotal = (symbol, total) => {
    return (
      <CartTotalItem>
        <CartTotalLabel>total:</CartTotalLabel>
        <CartTotalAmount>
          {symbol}
          {`${total.toFixed(2)}`}
        </CartTotalAmount>
      </CartTotalItem>
    );
  };
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
              {this.renderTotalTax(symbol, tax)}
              {this.renderTotalQuantity(amount)}
              {this.renderCartTotal(symbol, total)}
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
