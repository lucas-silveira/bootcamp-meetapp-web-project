import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  height: 64px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  padding-left: 20px;
  margin-left: 20px;

  div {
    text-align: right;
    margin-right: 14px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      color: #999;
      font-size: 12px;
      margin-top: 2px;
    }
  }

  button {
    color: #fff;
    background-color: #d44059;
    padding: 0 16px;
    border-radius: 4px;
    border: none;
  }
`;
