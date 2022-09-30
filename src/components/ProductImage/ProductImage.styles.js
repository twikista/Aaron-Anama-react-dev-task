import styled from "styled-components";

export const Image = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const ImageControlWrapper = styled.div`
  width: 56px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const CaretWrapper = styled.button`
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);
  justify-content: center;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const Caret = styled.img``;
