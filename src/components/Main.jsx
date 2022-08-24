import { Component } from "react";
import styled from "styled-components";
import CartOverlay from "./CartOverlay";

const MainContainer = styled.main`
  width: 100%;
  position: relative;
  height: 100%;
`;

const Wrapper = styled.div`
  width: calc(100% - 100px);
  max-width: 1220px;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 80px;
`;

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <CartOverlay
          currentCurrency={this.props.currentCurrency}
          isOpen={this.props.isOpen}
          overLayToggler={this.props.overLayToggler}
        />
        <Wrapper>{this.props.children}</Wrapper>
      </MainContainer>
    );
  }
}

export default Main;
