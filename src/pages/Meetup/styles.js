import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 30px;

    input {
      width: 100%;
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

    textarea {
      min-width: 100%;
      max-width: 100%;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 15px;
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

    .react-datepicker-wrapper {
      width: 100%;
    }

    button:not(.react-datepicker__navigation) {
      display: inline-block;
      height: 44px;
      color: #fff;
      background-color: #f94d6a;
      font-size: 16px;
      font-weight: 700;
      padding: 0 14px;
      margin: 5px 0 0;
      border: none;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#f94d6a')};
      }

      svg {
        vertical-align: middle;
      }
    }
  }
`;
