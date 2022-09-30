import styled from "styled-components";

export const CartItemsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 293px;
  max-height: 420px;
  overflow: hidden auto;

  &::-webkit-scrollbar {
    width: 2vw;
    max-width: 0px;
  }

  &:hover::-webkit-scrollbar {
    max-width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border: 1px solid rgb(29, 31, 34, 0.2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(77, 77, 77, 0.3);
    border-radius: 8px;
    box-shadow: inset 1px 1px 5px rgba(96, 96, 97, 0.4);
  }
`;
