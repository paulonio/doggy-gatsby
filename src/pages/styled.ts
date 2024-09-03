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

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1495px;
  margin: 0 auto;
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

export const TrendingPackageWrapper = styled.div`
  padding: 56px 72px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media screen and (max-width: 1250px) {
    padding: 0;
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const TrendingPackageContent = styled.div`
  width: 50%;
  max-width: 650px;
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 64px;

  @media screen and (max-width: 1250px) {
    width: 100%;
    row-gap: 32px;
  }

  @media screen and (max-width: 570px) {
    padding: 0;
  }
`;

export const PageWrapper = styled.section`
  height: calc(100vh - 132px);
  display: grid;
  place-items: center;
`;
