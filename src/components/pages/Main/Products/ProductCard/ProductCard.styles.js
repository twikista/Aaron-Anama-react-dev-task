import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled.article`
  width: calc(386px - 20px);
  height: 444px;
  padding: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover img {
    display: block;
  }
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 330px;
  margin-bottom: 24px;
  box-sizing: border-box;
  background-color: #c4c4c4;
  background-image: url(${(props) => props.url});
  background-position: 50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  position: relative;
`;
export const AddToCartIcon = styled.img`
  position: absolute;
  width: 52px;
  height: 52px;
  bottom: 15%;
  right: 25px;
  box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
  z-index: 15;
  border-radius: 50%;
  display: none;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 54px;
  color: #1d1f22;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.6;
`;

export const ProductName = styled.h4`
  font-size: 18px;
  font-weight: 300;
`;

export const OutOfStockOverlay = styled(CardWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;
  background: #ffffff;
  opacity: 0.5;
`;

export const WrappingLink = styled(Link)`
  text-decoration: none;
  position: relative;
  width: 100%;
  color: #1d1f22;
  &:visited {
    color: #1d1f22;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
