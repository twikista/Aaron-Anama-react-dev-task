import styled from "styled-components";

export const ProductNameWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom}; //optional
`;

export const ProductNameSpan = styled.span`
  font-weight: ${(props) => props.spanFontWeight};
  display: inline-block;
  margin-bottom: ${(props) => props.spanMarginBottom};
`;

export const ProductNameHeading = styled.h2`
  font-family: "Raleway"; //optional
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.fontColor};
  text-align: left;
`;
