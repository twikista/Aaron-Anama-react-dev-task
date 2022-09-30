import styled from "styled-components";

export const LandingPage = styled.div`
  width: 100%;
`;
export const ActiveCategory = styled.h2`
  font-size: 42px;
  font-weight: 400;
  color: #1d1f22;
  line-height: 1.6;
`;

export const ProductsWarpper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(386px - 20px));
  justify-content: center;
  flex-wrap: wrap;
  gap: 103px 40px;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 103px;
`;
