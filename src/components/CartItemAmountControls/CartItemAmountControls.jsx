import { Component } from "react";
import plusIcon from "../../assets/plus-square.svg";
import minusIcon from "../../assets/minus-square.svg";
import { increaseAmount, decreaseAmount } from "../../redux/actionType";
import { connect } from "react-redux";
import {
  ControlWrapper,
  AmountControlIcon,
  Amount,
} from "./CartItemAmountControls.styles";

class CartItemAmountControls extends Component {
  render() {
    const {
      id,
      wrapperWidth,
      iconHeight,
      fontWeight,
      fontSize,
      lineHeight,
      amount,
    } = this.props;
    return (
      <ControlWrapper wrapperWidth={wrapperWidth}>
        <AmountControlIcon
          src={`${plusIcon}`}
          alt="plus icon"
          iconHeight={iconHeight}
          onClick={() => this.props.increaseAmount({ id })}
        />
        <Amount
          fontWeight={fontWeight}
          fontSize={fontSize}
          lineHeight={lineHeight}
        >
          {amount}
        </Amount>
        <AmountControlIcon
          src={`${minusIcon}`}
          alt="minus icon"
          iconHeight={iconHeight}
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
