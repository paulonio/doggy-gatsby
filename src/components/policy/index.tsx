import { PolicyItem, Wrapper } from './styled';

import { StyledLink } from '@/components/footer/styled';
import Typography from '@/components/typography';

const Policy = () => {
  return (
    <Wrapper>
      <PolicyItem>
        <StyledLink to="/" $size="s">
          Cookie Policy
        </StyledLink>
        <StyledLink to="/" $size="s">
          Cookies Settings
        </StyledLink>
      </PolicyItem>
      <Typography size="m" weight="regular">
        Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
      </Typography>
      <PolicyItem>
        <StyledLink to="/" $size="s">
          Terms
        </StyledLink>
        <StyledLink to="/" $size="s">
          Privacy
        </StyledLink>
        <StyledLink to="/" $size="s">
          Security
        </StyledLink>
      </PolicyItem>
    </Wrapper>
  );
};

export default Policy;
