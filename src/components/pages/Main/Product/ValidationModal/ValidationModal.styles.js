import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 350px;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 4px 5px rgb(99, 99, 99, 0.3);
  padding: 40px 20px;
  border-radius: 5px;
  font-weight: 400;
  font-family: "Roboto";
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Validationtext = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #f14c23;
`;

export const CloseModalButton = styled.button`
  font-family: "Roboto";
  text-transform: uppercase;
  font-size: 14px;
  width: 40%;
  min-width: 80px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #f14c23;
  outline: none;
  margin-top: 40px;
  border-radius: 5px;
  color: #fff;
  background-color: #f14c23;
  transition: ease 0.3s;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    background-color: #fff;
    color: #f14c23;
  }
`;
