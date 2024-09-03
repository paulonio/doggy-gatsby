import { Link } from 'gatsby';
import { css, styled } from 'styled-components';

export type Background = 'primary' | 'secondary';

type ButtonProps = { $background?: Background };

const styles = css<ButtonProps>`
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 19px 49px;
  font-size: 21px;
  line-height: 21px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ $background }) => ($background === 'primary' ? '#E89B93' : '#DFB2A9')};
  border-radius: 30px;
  transition: background-color 0.3s;
`;

export const StyledLink = styled(Link)<ButtonProps>`
  ${styles}
  text-decoration: none;

  &:hover {
    background-color: #b78e80;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  ${styles}
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #b78e80;
  }
`;
