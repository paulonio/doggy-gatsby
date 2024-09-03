import { FC } from 'react';

import { StyledPlate } from './styled';

import Typography from '@/components/typography';

type Props = {
  description?: string;
};

const DiscountPlate: FC<Props> = ({ description }) => {
  return (
    <StyledPlate>
      <Typography size="l" weight="bold">
        {description}
      </Typography>
    </StyledPlate>
  );
};

export default DiscountPlate;
