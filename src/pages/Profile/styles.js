import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
      border: none;
    }

    button {
      height: 44px;
      color: #fff;
      background-color: #3b9eff;
      font-size: 16px;
      font-weight: 700;
      margin: 5px 0 0;
      border: none;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
      width: 100%;
      height: 44px;
      color: #fff;
      background-color: #f94d6a;
      font-size: 16px;
      font-weight: 700;
      margin: 10px 0 0;
      border: none;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#F94D6A')};
      }
    }
`;
