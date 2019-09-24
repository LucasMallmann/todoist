import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 100px;
  left: 190px;
  width: 250px;
`;

export const Navigation = styled(Link)`
  text-decoration: none;
  color: ${props => (props.active ? '#000' : '#333')};
  display: block;

  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.07, '#f2f2f2')};
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;

    > div {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 12px;
      font-size: 14px;
    }

    small {
      margin-left: 8px;
    }
  }
`;

export const Separator = styled.hr`
  margin: 12px 0;
  color: #ddd;
`;
