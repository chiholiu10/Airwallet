import styled from "styled-components";

export const ModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: 450px;
  width: 100%;
  min-height: 260px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LoaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OpenModal = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
`;