import React, { Component } from "react";
import styled from "styled-components";

const OverlayContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(57, 55, 72, 0.22);
  z-index: 19;
  width: 100vw;
`;

class Overlay extends Component {
  render() {
    return (
      <OverlayContainer {...this.props}>{this.props.children}</OverlayContainer>
    );
  }
}

export default Overlay;
