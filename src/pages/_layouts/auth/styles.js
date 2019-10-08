import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background: linear-gradient(#22202c, #402845);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 44px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 0 15px;
      margin: 0 0 10px;
      border: none;
      border-radius: 4px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      align-self: flex-start;
      color: #fb6f91;
      font-weight: 700;
      margin: 0 0 10px;
    }

    button {
      height: 44px;
      color: #fff;
      background-color: #f94d6a;
      font-size: 16px;
      font-weight: 700;
      margin: 5px 0 0;
      border: none;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#F94D6A')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
