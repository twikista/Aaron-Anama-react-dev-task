import styled from "styled-components";

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.wrapperWidth};
  align-self: stretch;
`;
export const AmountControlIcon = styled.img`
  width: 100%;
  height: ${(props) => props.iconHeight};
  cursor: pointer;
`;

export const Amount = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
`;
