import { Component } from "react";
import styled from "styled-components";
import plusIcon from "../assets/plus-square.svg";
import minusIcon from "../assets/minus-square.svg";

//increment/decrement amount controls
const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.wrapperWidth};
  align-self: stretch;
`;
const AmountControlIcon = styled.img`
  width: 100%;
  height: ${(props) => props.iconHeight};
`;

const Amount = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
`;

class CartItemAmountControls extends Component {
  render() {
    const {
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
        />
      </ControlWrapper>
    );
  }
}

export default CartItemAmountControls;
