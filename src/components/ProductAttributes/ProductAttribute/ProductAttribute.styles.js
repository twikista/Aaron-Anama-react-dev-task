import styled from "styled-components";

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: ${(props) => props.width};
`;
export const AttributeTitle = styled.h5`
  font-weight: ${(props) => props.fontwWight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-family: ${(props) => props.fontFamily};
  text-transform: ${(props) => props.uppercase};
`;
export const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: ${(props) =>
    props.height ? `${props.height}` : `${props.colorHeight}`};
`;

export const AttributeValue = styled.button`
  flex: 1;
  width: 100%;
  height: 100%;
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: ${(props) => props.fontwWight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  border: 1px solid #1d1f22;
  background-color: transparent;
  flex-wrap: wrap;
  cursor: pointer;
  appearance: none;

  &.active {
    background-color: #1d1f22;
    color: #fff;
  }
`;

export const ColorAttributeValue = styled(AttributeValue)`
  flex: none;
  height: 100%;
  width: ${(props) => props.width};
  border: ${(props) => props.border} solid #ababab;
  background-color: ${(props) => props.value};
  &.active {
    outline: solid 1px #5ece7b;
    outline-offset: 1px;
    background-color: ${(props) => props.value};
  }
`;
