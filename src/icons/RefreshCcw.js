import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RefreshCcw = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M3 2v6h6" />
        <path d="M21 12A9 9 0 006 5.3L3 8" />
        <path d="M21 22v-6h-6" />
        <path d="M3 12a9 9 0 0015 6.7l3-2.7" />
      </svg>
    </svg>
  );
});

RefreshCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RefreshCcw.displayName = 'RefreshCcw';

export default RefreshCcw;
