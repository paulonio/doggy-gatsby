import { styled } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1485px;
  margin: 0 auto;
  padding: 12px 96px;
  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr;
  background-color: transparent;

  & > p {
    text-align: center;
  }

  @media screen and (max-width: 1250px) {
    padding: 0;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 16px;

    & > div,
    p {
      &:nth-child(1) {
        order: 1;
      }
      &:nth-child(2) {
        order: 3;
        grid-column: 1 / 3;
      }
      &:nth-child(3) {
        order: 2;
      }
    }
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: none;
    grid-auto-flow: row;

    & > div,
    p {
      &:nth-child(2) {
        order: 3;
        grid-column: 1;
      }
    }

    & > p {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const PolicyItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
