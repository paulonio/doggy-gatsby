import { Link } from 'gatsby';
import { styled } from 'styled-components';

type LinkProps = {
  $isActive?: boolean;
};

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    position: relative;
    z-index: 15;
  }
`;

export const StyledNav = styled.nav<{ $isActive: boolean }>`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ease-in-out 0.3s;

  @media screen and (max-width: 1250px) {
    width: 100%;
    padding: 0px 12px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: normal;
    right: ${({ $isActive }) => ($isActive ? '0px' : '-1000px')};

    max-width: 475px;
    height: 100vh;
    padding: 10px;
    row-gap: 16px;
    position: fixed;
    top: 80px;
    background-color: #ffffff;
    z-index: 10;
  }
`;

export const StyledLink = styled(Link)<LinkProps>`
  font-size: 26px;
  line-height: 31px;
  font-weight: bold;
  color: #4c4c4b;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    height: 6px;
    width: 100%;
    background: #e89b93;
    position: absolute;
    left: 0;
    bottom: -10px;
    border-radius: 100px;
    transition: 0.3s;
    pointer-events: none;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  }

  &:hover::after {
    opacity: 1;
  }
`;
