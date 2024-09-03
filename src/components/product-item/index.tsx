import { FC } from 'react';

import { Image, ImageWrapper, ItemContent } from './styled';

import Typography from '@/components/typography';
import { Dog } from '@/utils/api';

type Props = {
  dogInfo: Dog;
};

const ProductItem: FC<Props> = ({ dogInfo }) => {
  return (
    <ItemContent key={dogInfo.name}>
      <ImageWrapper $borderWidth="xs" $borderColor="medium">
        <Image src={dogInfo.image_link} alt={dogInfo.name} />
      </ImageWrapper>
      <div>
        <Typography size="s">{dogInfo.name}</Typography>
        <Typography size="s">
          Energy:&nbsp;{dogInfo.energy} Barking:&nbsp;{dogInfo.barking} Protectiveness:&nbsp;
          {dogInfo.protectiveness}
        </Typography>
      </div>
      <Typography size="s">Max life expectancy:&nbsp;{dogInfo.max_life_expectancy}</Typography>
    </ItemContent>
  );
};

export default ProductItem;
