import { Component } from "react";
import Categories from "./header/Categories";
import styled from "styled-components";
import logo from "../assets/logo.png";
import ActionItems from "./header/NavActionItems";

const AppHeader = styled.header`
  width: 100%;
  height: 80px;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 2;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Logo = styled.img`
  width: 41px;
  height: 41px;
`;

const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 2;
  margin-right: 13px;
`;

class Header extends Component {
  render() {
    return (
      <AppHeader>
        <HeaderWrapper>
          <NavWrapper>
            <Categories />
          </NavWrapper>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          <Action>
            <ActionItems {...this.props} />
          </Action>
        </HeaderWrapper>
      </AppHeader>
    );
  }
}

export default Header;
