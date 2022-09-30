import styled from "styled-components";
import selectArrowDown from "../../../assets/select_arrow_down.svg";
import selectArrowUp from "../../../assets/select_arrow_up.svg";

export const ActionContainer = styled.div`
  width: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const ActionItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  color: #1d1f22;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  border: solid lemon 1px;
`;

export const CurrencyLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CurrencySelector = styled.div`
  background-image: ${(props) =>
    props.isOpen ? `url(${selectArrowUp})` : `url(${selectArrowDown})`};
  background-color: #fff;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
  width: 15px;
  cursor: pointer;

  &:focus-within {
    background-image: url(${selectArrowUp});
  }

  &:active {
    background-image: url(${selectArrowUp});
  }
`;

export const CurrencyList = styled.ul`
  width: 114px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  top: 60px;
  position: absolute;
  z-index: 30;
  background-color: #fff;
`;

export const CurrencyOption = styled.li`
  width: 100%;
  padding: 10px 0 10px 20px;
  list-style: none;
  display: grid;
  grid-template-columns: 15px auto;
  gap: 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;
export const CurrencySymbol = styled.span`
  text-align: right;
  justify-self: flex-end;
  font-weight: 500;
`;
