import styled from "styled-components";
import { Link } from "react-router-dom";

export const MiniCartContainer = styled.article`
  width: 325px;
  max-height: 677px;
  background-color: #ffffff;
  position: absolute;
  right: 72px;
  padding: 32px 16px;
  display: grid;
  gap: 32px;
  color: #1d1f22;
  line-height: 1.6;
  z-index: 21;
`;

export const CartTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto, 1fr auto;
  width: 293px;
  max-height: 538px;
  gap: 32px;
`;

export const CartHeader = styled.div``;

export const CartHeading = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
  text-transform: capitalize;
`;
export const HeadingSpan = styled.span`
  font-weight: 500;
  text-transform: lowercase;
  font-size: 16px;
  display: inline-block;
`;

export const CartTotal = styled.div`
  width: 289px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const CartTotalAmount = styled.span`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
export const CartTotalLabel = styled(CartTotalAmount)`
  font-family: "Roboto";
  font-weight: 500;
  line-height: 1.12;
  text-transform: capitalize;
  justify-content: flex-start;
`;

export const CartBottom = styled.div`
  width: 292px;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  font-family: "Raleway", sans-serif;
`;

export const ViweBagButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  text-transform: uppercase;
  padding: 16px 32px;
  width: 140px;
  height: 43px;
  border: 1px solid #1d1f22;
  line-height: 1.68;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
`;

export const CheckoutButton = styled(ViweBagButton)`
  background: #5ece7b;
  color: #ffffff;
  line-height: 1.2;
  top: center;
  border: none;
  font-family: "Raleway", sans-serif;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
