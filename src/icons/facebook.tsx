import React, { FC, SVGProps } from 'react';

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="19"
      height="29"
      viewBox="0 0 19 29"
      {...props}
    >
      <path d="M18.2247 16.6165L19.2057 11.4462H13.0739V8.09098C13.0739 6.67675 13.9301 5.29734 16.6766 5.29734H19.4639V0.895724C19.4639 0.895724 16.9348 0.546631 14.5161 0.546631C9.46676 0.546631 6.16639 3.02332 6.16639 7.50618V11.4471H0.553223V16.6174H6.16639V29.1169H13.0739V16.6174L18.2247 16.6165Z" />
    </svg>
  );
};

export default FacebookIcon;
