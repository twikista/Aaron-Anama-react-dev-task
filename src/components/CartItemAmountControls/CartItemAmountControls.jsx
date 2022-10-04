import { PureComponent } from "react";
import plusIcon from "../../assets/plus-square.svg";
import minusIcon from "../../assets/minus-square.svg";
import { increaseAmount, decreaseAmount } from "../../redux/actionType";
import { connect } from "react-redux";
import {
  ControlWrapper,
  AmountControlIcon,
  Amount,
} from "./CartItemAmountControls.styles";

class CartItemAmountControls extends PureComponent {
  render() {
    const { id, amount } = this.props;
    return (
      <ControlWrapper>
        <AmountControlIcon
          src={`${plusIcon}`}
          alt="plus icon"
          onClick={() => this.props.increaseAmount({ id })}
        />
        <Amount>{amount}</Amount>
        <AmountControlIcon
          src={`${minusIcon}`}
          alt="minus icon"
          onClick={() => this.props.decreaseAmount({ id })}
        />
      </ControlWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increaseAmount: (id) => dispatch(increaseAmount(id)),
    decreaseAmount: (id) => dispatch(decreaseAmount(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemAmountControls);
