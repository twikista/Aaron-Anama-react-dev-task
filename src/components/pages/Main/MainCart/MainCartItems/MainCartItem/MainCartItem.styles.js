import styled from "styled-components";

export const CartItemContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 24px 0;
  min-height: 200px;
`;

export const CartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  width: 279px;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 279px;
  height: 100%;
  gap: 20px;
`;
