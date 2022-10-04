import { PureComponent } from "react";
import Categories from "./Categories/Categories";
import logo from "../../assets/logo.png";
import ActionItems from "./NavActionItems/NavActionItems";
import {
  AppHeader,
  HeaderWrapper,
  NavWrapper,
  LogoContainer,
  Logo,
  HomeLink,
  Action,
} from "./Header.styles";

class Header extends PureComponent {
  render() {
    return (
      <AppHeader>
        <HeaderWrapper>
          <NavWrapper>
            <Categories {...this.props} />
          </NavWrapper>
          <LogoContainer>
            <HomeLink to={`/all`}>
              <Logo src={logo} onClick={this.props.closeMiniCartOverlay} />
            </HomeLink>
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
