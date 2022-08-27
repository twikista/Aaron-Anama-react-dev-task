import React, { Component } from "react";
import styled from "styled-components";
import MiniCart from "./MiniCart";

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(57, 55, 72, 0.22);
  z-index: 19;
  width: 100%;
  /* display: none; */
`;

class CartOverlay extends Component {
  closeOnOverLayClick = (e) => {
    if (e.currentTarget !== e.target) return;
    this.props.overLayToggler();
  };

  render() {
    return (
      <>
        {this.props.isOpen && (
          <Overlay onClick={this.closeOnOverLayClick}>
            <MiniCart {...this.props} />
          </Overlay>
        )}
      </>
    );
  }
}

export default CartOverlay;
