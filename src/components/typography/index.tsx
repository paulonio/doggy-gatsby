import { FC, ReactNode } from 'react';

import { FontWeight, StyledTypography } from './styled';

import { TypographySize } from '@/types/common';

type Props = {
  size: TypographySize;
  children: ReactNode;
  weight?: FontWeight;
  dataTestId?: string;
};

const Typography: FC<Props> = ({ size, weight, children, dataTestId }) => {
  return (
    <StyledTypography $size={size} $wieght={weight} data-testid={dataTestId}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
