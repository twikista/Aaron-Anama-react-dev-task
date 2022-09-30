import React, { Component } from "react";
import { OverlayContainer } from "./Overlay.style";

class Overlay extends Component {
  render() {
    return (
      <OverlayContainer {...this.props}>{this.props.children}</OverlayContainer>
    );
  }
}

export default Overlay;
