import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShovelSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M2 22v-5l5-5 5 5-5 5z" />
        <path d="M9.5 14.5L16 8" />
        <path d="M17 2l5 5-.5.5a3.53 3.53 0 01-5 0s0 0 0 0a3.53 3.53 0 010-5L17 2" />
      </svg>
    </svg>
  );
});

ShovelSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShovelSvg.displayName = 'ShovelSvg';

export default ShovelSvg;
