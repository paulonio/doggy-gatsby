import { styled } from 'styled-components';

type ItemsProps = { $isOneChild?: boolean };

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1485px;
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1250px) {
    margin: 24px auto;
  }
`;

export const StyledTitle = styled.h2`
  text-align: center;
`;

export const StyledItems = styled.div<ItemsProps>`
  width: 100%;
  margin: 56px auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: ${({ $isOneChild }) => ($isOneChild ? 'center' : 'space-between')};

  @media screen and (max-width: 1250px) {
    margin: 32px auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 24px;
  }
`;
