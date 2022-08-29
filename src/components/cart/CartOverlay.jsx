import React, { Component } from "react";
import MiniCart from "./MiniCart";
import Overlay from "../Overlay";

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
