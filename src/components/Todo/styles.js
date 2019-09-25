import styled from 'styled-components';
import { darken } from 'polished';

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 9px 6px;
  border-top: 1px solid #ddd;
  transition: background 0.2s;

  > div {
    display: none;
  }

  &:hover {
    background: ${darken(0.03, '#fafafa')};
    cursor: move;

    > div {
      display: block;
      svg {
        cursor: pointer;
        color: #424242;
        margin: 0 4px;

        &:hover {
          color: ${darken(0.03, '#424242')};
        }
      }
    }
  }
`;

export const Text = styled.span`
  margin-left: 14px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  font-style: ${props => (props.completed ? 'italic' : 'normal')};
  color: inherit;
`;
