import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RefreshCwSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 2v6h-6" />
        <path d="M3 12a9 9 0 0115-6.7L21 8" />
        <path d="M3 22v-6h6" />
        <path d="M21 12a9 9 0 01-15 6.7L3 16" />
      </svg>
    </svg>
  );
});

RefreshCwSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RefreshCwSvg.displayName = 'RefreshCwSvg';

export default RefreshCwSvg;
