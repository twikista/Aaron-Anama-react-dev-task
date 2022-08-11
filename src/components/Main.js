import { Component } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  width: 100%;
  position: relative;
`;

class Main extends Component {
  render() {
    return <MainWrapper>{this.props.children}</MainWrapper>;
  }
}

export default Main;
