import { Component } from "react";
import styled from "styled-components";
import Minicart from "./Minicart";

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(57, 55, 72, 0.22);
  /* display: none; */
`;

class CartOverlay extends Component {
  render() {
    return (
      <Overlay>
        <Minicart currentCurrency={this.props.currentCurrency} />
      </Overlay>
    );
  }
}

export default CartOverlay;
