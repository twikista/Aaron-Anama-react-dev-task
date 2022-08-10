import { Component } from "react";
import Categories from "./Categories";
import CurrencySelector from "./CurrencySelector";
import styled from "styled-components";
import logo from "../assets/logo.png";
import emptyCart from "../assets/empty_cart.svg";
import selectArrowDown from "../assets/select_arrow_down.svg";
import selectArrowUp from "../assets/select_arrow_up.svg";

const AppHeader = styled.header`
  width: 100%;
  height: 80px;
  /* background-color: yellow; */
`;

const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  height: 100%;
  /* border: solid red 1px; */
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

const CurrencyOptionsWrapper = styled.div`
  background-image: url(${selectArrowDown});
  background-color: #fff;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  position: relative;
  &:focus-within {
    background-image: url(${selectArrowUp});
  }
`;

const SelectCurrency = styled.select`
  border: none;
  outline: none;
  background-color: white;
  background-image: url(${selectArrowDown});
  background-position: 50% 70%;
  background-repeat: no-repeat;
  font-size: 18px;
  appearance: none;
  position: relative;
  text-transform: uppercase;
  width: 10px;
  opacity: 0;
`;
const CurrencyOptions = styled.option`
  background-color: white;
  &[value=""][disabled] {
    display: none;
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartWrapper = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 22px;
  position: relative;
  display: flex;
`;

const CartImage = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;

const CartAmout = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  background-color: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  left: 13px;
`;

class Header extends Component {
  render() {
    return (
      <AppHeader>
        <HeaderWrapper>
          <NavWrapper>
            <Categories/>
          </NavWrapper>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          <Action>
            <CurrencySelector/>
            <CartWrapper>
              <CartImage src={emptyCart} />
              <CartAmout>3</CartAmout>
            </CartWrapper>
          </Action>
        </HeaderWrapper>
      </AppHeader>
    );
  }
}

export default Header;
