import { styled } from 'styled-components';

import dogImage from '@/assets/images/main.jpg';

export const Wrapper = styled.section`
  height: calc(100vh - 132px);
  padding: 140px 80px;
  display: flex;
  align-items: end;
  background: url(${dogImage}) no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    padding: 8px;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 64px;
  text-align: center;

  @media screen and (max-width: 1250px) {
    padding: 16px;
    background: rgba(237, 200, 191, 0.5);
    border-radius: 8px;
  }
`;
