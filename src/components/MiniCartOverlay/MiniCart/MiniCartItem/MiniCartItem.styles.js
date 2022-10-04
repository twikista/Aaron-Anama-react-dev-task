import styled from "styled-components";

export const CartItemContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 24px 121px;
  grid-template-rows: 1fr;
  flex-direction: row;
  gap: 8px;
  width: 293px;
  min-height: ${(props) => props.minHeight};
`;

export const CartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  width: 164px;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
