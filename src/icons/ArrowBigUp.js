import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowBigUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M9 21V10H5l7-7 7 7h-4v11z" />
    </svg>
  );
});

ArrowBigUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowBigUp.displayName = 'ArrowBigUp';

export default ArrowBigUp;
