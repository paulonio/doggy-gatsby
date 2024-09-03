import { FC, ReactNode } from 'react';

import { StyledItems, StyledTitle, Wrapper } from './styled';

type Props = {
  title: string;
  isOneChild?: boolean;
  children?: ReactNode;
  button?: ReactNode;
};

const ItemsView: FC<Props> = ({ title, isOneChild, children, button }) => {
  return (
    <Wrapper>
      <StyledTitle data-testid={title}>{title}</StyledTitle>
      <StyledItems $isOneChild={isOneChild}>{children}</StyledItems>
      {button}
    </Wrapper>
  );
};

export default ItemsView;
