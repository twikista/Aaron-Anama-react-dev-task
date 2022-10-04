import { PureComponent } from "react";
import emptyCart from "../../../assets/empty_cart.svg";
import { connect } from "react-redux";
import { CartWrapper, CartImage, CartAmout } from "./CartBadge.styles";

class CartBadge extends PureComponent {
  render() {
    const { overLayToggler, amount } = this.props;
    return (
      <CartWrapper onClick={overLayToggler}>
        <CartImage src={emptyCart} />
        <CartAmout>{amount}</CartAmout>
      </CartWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { amount: state.amount };
};

export default connect(mapStateToProps)(CartBadge);
