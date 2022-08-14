import { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  position: relative;
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
        <Wrapper>{this.props.children}</Wrapper>
      </MainContainer>
    );
  }
}

export default Main;
