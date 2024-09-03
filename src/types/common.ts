import { FC } from 'react';

export type Link = {
  href: string;
  text: string;
};

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export type TypographySize = Extract<Size, 's' | 'm' | 'l'>;

export type SocialLinks = {
  href: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
};
