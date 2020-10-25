import styled from 'styled-components';
import { shade } from 'polished';

export const Card = styled.div`
  display: block;
  text-align: center;
  background: #f0f0f5;
  width: 300px;
  height: 610px;
  margin: 10px;

  border-radius: 10px;

  img {
    width: 100%;
    height: 380px;
    border: 0;
    border-radius: 10px 10px 0 0;
  }

  h2 {
    margin: 10px;
  }

  strong {
    font-size: 16px;
    margin: 5px;
    color: gray;
  }
`;

export const StarshipsButton = styled.button`
  width: 250px;
  border-radius: 5px;
  background: #ffe81f;
  margin: 10px;
  transition: background-color 0.2s;
  border: 1px solid #000;
  height: 25px;

  &:hover {
    background: ${shade(0.2, '#ffe81f')};
  }
`;
