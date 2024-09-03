import { styled } from 'styled-components';

import { sizeValues } from '@/constants/sizes';
import { TypographySize } from '@/types/common';

export type FontWeight = 'regular' | 'bold';

type Props = {
  $size: TypographySize;
  $wieght?: FontWeight;
};

export const StyledTypography = styled.p<Props>`
  color: #4c4c4b;
  font-weight: ${({ $wieght }) => ($wieght === 'bold' ? '700' : '400')};

  ${({ $size }) =>
    $size &&
    `
        font-size: ${sizeValues[$size].fontSize};
        line-height: ${sizeValues[$size].lineHeight};
    `};
`;
