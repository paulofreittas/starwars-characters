import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  max-width: 700px;

  display: flex;
  flex: 1;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 0;
    background: #aaa;
    color: #fff;
    font-size: 18px;

    &::placeholder {
      color: #fff;
    }

    @media (max-width: 500px) {
      width: 200px;
      position: relative;
    }
  }

  button {
    width: 200px;
    height: 70px;
    background: #ffe81f;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    color: #000;
    transition: background-color 0.2s;
    font-size: 18px;

    &:hover {
      background: ${shade(0.2, '#ffe81f')};
    }

    img {
      text-align: center;

      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 500px) {
    max-width: 300px;
    position: relative;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;

  margin-top: 50px;

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
