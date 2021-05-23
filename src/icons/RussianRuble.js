import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RussianRuble = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M14 11c5.333 0 5.333-8 0-8" />
      <path d="M6 11h8" />
      <path d="M6 15h8" />
      <path d="M9 21V3" />
      <path d="M9 3h5" />
    </svg>
  );
});

RussianRuble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RussianRuble.displayName = 'RussianRuble';

export default RussianRuble;
