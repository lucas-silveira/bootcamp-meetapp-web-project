import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      color: #fff;
      font-size: 26px;
      font-weight: 400;
    }

    a {
      display: flex;
      align-items: center;
      color: #fff;
      background-color: #d44059;
      padding: 0 16px;
      border-radius: 4px;
      border: none;

      svg {
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }

  ul {
    margin-top: 40px;
  }
`;

export const Meetup = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & + a {
    margin-top: 10px;
  }

  strong {
    color: #fff;
  }

  aside {
    span {
      color: #999;
      font-size: 12px;
      font-weight: 700;
      margin-right: 20px;
    }

    svg {
      color: #fff;
      vertical-align: middle;
    }
  }
`;
