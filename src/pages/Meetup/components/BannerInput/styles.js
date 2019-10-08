import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  align-self: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      object-fit: cover;
      background-color: #eee;
    }

    input {
      display: none;
    }
  }
`;
