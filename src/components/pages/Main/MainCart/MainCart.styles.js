import styled from "styled-components";

export const MainCartContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: grid;
  color: #1d1f22;
  font-family: "Raleway";
  margin-top: 80px;
  padding-bottom: 42px;
`;

export const CartHeading = styled.h2`
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  line-height: 40px;
`;

export const CartTotalWrapper = styled.div`
  width: 279px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-top: 32px;
`;

export const CartTotalItem = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const CartTotalAmount = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  flex: 1;
`;
export const CartTotalLabel = styled(CartTotalAmount)`
  font-weight: 500;
  line-height: 28px;
  text-transform: capitalize;
  justify-content: flex-start;
`;

export const CartSubTotalLabel = styled(CartTotalAmount)`
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
  flex: 1;
  width: 200px;
`;

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5ece7b;
  color: #ffffff;
  text-transform: uppercase;
  padding: 16px 32px;
  width: 279px;
  height: 43px;
  line-height: 17px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  border: none;
  outline: none;
`;

export const EmptyCartMessage = styled.p`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;
