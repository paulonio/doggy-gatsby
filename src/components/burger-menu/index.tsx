import { FC, useEffect } from 'react';

import { BurgerIcon, Line, Overlay } from './styled';

type Props = {
  isActive: boolean;
  onToggle: () => void;
  onHideBurgerMenu: () => void;
};

const BurgerMenu: FC<Props> = ({ isActive, onToggle, onHideBurgerMenu }) => {
  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      html.style.overflow = isActive ? 'hidden' : 'auto';
    }
  }, [isActive]);

  return (
    <>
      <Overlay $isActive={isActive} onClick={onHideBurgerMenu} />
      <BurgerIcon $isActive={isActive} onClick={onToggle}>
        <Line />
      </BurgerIcon>
    </>
  );
};

export default BurgerMenu;
