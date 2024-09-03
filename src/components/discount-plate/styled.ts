import styled from 'styled-components';

export const StyledPlate = styled.section`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3ded7;

  @media screen and (max-width: 768px) {
    & > p {
      font-size: 20px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 570px) {
    & > p {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
