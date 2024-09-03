import { styled } from 'styled-components';

type BurgerIconProps = {
  $isActive: boolean;
};

export const Overlay = styled.div<BurgerIconProps>`
  display: none;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #000000;
  opacity: ${({ $isActive }) => ($isActive ? '0.5' : '0')};
  transition: opacity 0.3s;
  position: absolute;
  top: 80px;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BurgerIcon = styled.div<BurgerIconProps>`
  display: none;
  z-index: 100;
  position: absolute;
  top: 33px;
  right: 50px;
  width: 30px;
  height: 22px;
  transform: ${({ $isActive }) => $isActive && `rotate(90deg)`};
  transition: transform 0.3s;

  @media screen and (max-width: 768px) {
    display: block;
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: black;
    top: 0;
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: black;
    bottom: 0;
  }
`;

export const Line = styled.span`
  display: inline-block;
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: black;
  top: calc(50% - 1px);
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 475px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  position: fixed;
  top: 80px;
  background-color: #ffffff;
`;
