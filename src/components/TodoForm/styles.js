import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  display: flex;
  flex-direction: column;

  input {
    padding: 8px 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    outline: none;
  }

  div {
    display: block;
    button {
      display: inline-block;
      margin-right: 16px;
      font-size: 14px;
      &:first-child {
        background: tomato;
        padding: 6px 14px;
        border-radius: 4px;
        color: #fff;
      }
    }
  }
`;
