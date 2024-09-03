import styled from 'styled-components';

import { Size } from '@/types/common';

type Color = 'light' | 'medium' | 'dark';

type BorderWidth = Extract<Size, 'xs' | 's' | 'm'>;

type ImageWrapperProps = {
  $borderColor?: Color;
  $borderWidth?: BorderWidth;
};

const borderWidthValues: Record<BorderWidth, string> = {
  xs: '6',
  s: '9',
  m: '12',
};

const borderColorsMap: Record<Color, string> = {
  light: '#DFB2A9',
  medium: '#E89B93',
  dark: '#B78E80',
};

export const ItemContent = styled.div`
  width: 30%;
  max-width: 435px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: max-content;
  }
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  margin-bottom: 42px;
  width: 100%;
  max-width: 572px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-width: ${({ $borderWidth }) => $borderWidth && `${borderWidthValues[$borderWidth]}px`};
  border-color: ${({ $borderColor }) => $borderColor && borderColorsMap[$borderColor]};
  border-style: solid;

  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
