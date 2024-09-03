import { Link } from 'gatsby';
import { styled } from 'styled-components';

import { sizeValues } from '@/constants/sizes';
import { Size } from '@/types/common';

type LinkSize = Extract<Size, 's' | 'm'>;

type LinkProps = {
  $size?: LinkSize;
};

export const Wrapper = styled.footer`
  width: 100%;
  padding-top: 12px;
  background-color: #dfb2a9;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: #f3ded7;
`;

export const Content = styled.div`
  margin-top: 12px;
  width: 100%;
  max-width: 1485px;
  margin: 12px auto 0;
  padding: 56px 12px 80px;
  display: grid;
  grid-template-columns: 5fr 8fr 4fr;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 32px;

    & > div {
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

  @media screen and (max-width: 768px) {
    padding: 24px 12px 32px;
    grid-row-gap: 32px;
    grid-template-columns: none;
    grid-auto-flow: row;

    & > div {
      &:nth-child(2) {
        order: 3;
        grid-column: 1;
      }
    }
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const ListItem = styled(Link)`
  color: #4c4c4b;
  font-size: 26px;
  line-height: 31px;
  font-weight: 400;
  text-decoration: none;
`;

export const StyledLink = styled(Link)<LinkProps>`
  color: #4c4c4b;
  font-size: 26px;
  line-height: 31px;
  font-weight: 400;
  text-decoration: none;

  ${({ $size }) =>
    $size &&
    `
        font-size: ${sizeValues[$size].fontSize};
        line-height: ${sizeValues[$size].lineHeight};
    `};

  @media screen and (max-width: 570px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SocialsWrapper = styled.div`
  width: 100%;
  max-width: 385px;
  display: flex;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  margin-top: 32px;

  & > svg {
    fill: #e89b93;
    transition: fill 0.3s;

    &:hover {
      fill: #b78e80;
    }
  }
`;
