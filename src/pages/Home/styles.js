import styled from 'styled-components';
import { darken } from 'polished';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

export const Container = styled.div`
  padding: 30px;

  > h1 {
    font-size: 22px;
  }

  button {
    background: transparent;
    color: #333;
    border: 0;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
    font-size: 16px;

    display: flex;
    align-items: center;

    span {
      color: #262626;
      flex: 1;
      text-align: center;

      &:hover {
        color: ${darken(0.09, '#262626')};
      }
    }

    > div {
      display: flex;
      align-items: center;
      padding: 12px 6px;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const TodoContainer = styled(RLDD)`
  margin-top: 20px;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;
