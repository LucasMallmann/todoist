import styled from 'styled-components';

export const Container = styled.header`
  height: 55px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;

  span {
    font-size: 18px;
    text-transform: uppercase;
  }
`;
