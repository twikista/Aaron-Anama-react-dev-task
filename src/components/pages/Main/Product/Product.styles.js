import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr;
  column-gap: 40px;
`;

export const ImageThumbNails = styled.article`
  width: 100%;
  height: 440px;
  overflow: hidden auto;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const ImageThumbNail = styled.img`
  width: 80px;
  max-height: 80px;
  object-fit: cover;
  object-position: 50% 0%;
  cursor: pointer;
`;

export const ProductDetailsWrapper = styled.div`
  margin-right: 119px;
  gap: 100px;
  display: flex;
  color: #1d1f22;
`;
export const ImageWrapper = styled.div`
  width: 610px;
  height: 511px;
`;
export const ProductImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: 50% 10%;
`;

export const ProductDetails = styled.article`
  width: 292px;
  height: 595px;
`;

export const ProductPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-top: 36px;
`;

export const ProductpriceLabel = styled.h5`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const AddToCartButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  width: 100%;
  height: 52px;
  background: #5ece7b;
  margin-top: 20px;
  text-transform: uppercase;
  border: none;
  outline: none;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
`;

export const ProductDesriptionWrapper = styled.div`
  width: 100%;
  height: 103px;
  margin-top: 40px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  height: 103px;
  overflow-y: auto;
`;
