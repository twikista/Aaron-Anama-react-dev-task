import { Component } from "react";
import MinicartItems from "./MiniCartItems/MiniCartItems";
import { connect } from "react-redux";
import {
  MiniCartContainer,
  CartTop,
  CartHeader,
  CartHeading,
  HeadingSpan,
  CartTotal,
  CartTotalAmount,
  CartTotalLabel,
  CartBottom,
  ViweBagButton,
  CheckoutButton,
  LinkWrapper,
} from "./MiniCart.styles";

class MiniCart extends Component {
  render() {
    const { amount, total, cart, currencyDetails } = this.props.state;
    let symbol;
    if (currencyDetails) symbol = currencyDetails.symbol;
    return (
      <MiniCartContainer>
        <CartTop>
          <CartHeader>
            <CartHeading>
              my bag, &nbsp;
              <HeadingSpan>{amount} items</HeadingSpan>
            </CartHeading>
          </CartHeader>
          <MinicartItems cart={cart} />
          <CartTotal>
            <CartTotalLabel>total</CartTotalLabel>
            <CartTotalAmount>
              {symbol}
              {`${total.toFixed(2)}`}
            </CartTotalAmount>
          </CartTotal>
        </CartTop>
        <CartBottom>
          <LinkWrapper to="/cart" onClick={this.props.overLayToggler}>
            <ViweBagButton>view bag</ViweBagButton>
          </LinkWrapper>

          <CheckoutButton>check out</CheckoutButton>
        </CartBottom>
      </MiniCartContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(MiniCart);
