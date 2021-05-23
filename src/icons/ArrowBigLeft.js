import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowBigLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M3 12l7-7v4h11v6H10v4z" />
    </svg>
  );
});

ArrowBigLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowBigLeft.displayName = 'ArrowBigLeft';

export default ArrowBigLeft;
