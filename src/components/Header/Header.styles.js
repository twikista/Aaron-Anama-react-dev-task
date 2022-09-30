import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppHeader = styled.header`
  width: 100%;
  height: 80px;
`;

export const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const Logo = styled.img`
  width: 41px;
  height: 41px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 2;
  margin-right: 13px;
`;
