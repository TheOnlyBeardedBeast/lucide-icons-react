import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BellMinus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M13.73 21a2 2 0 01-3.46 0" />
      <path d="M21 5h-6" />
      <path d="M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916" />
    </svg>
  );
});

BellMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BellMinus.displayName = 'BellMinus';

export default BellMinus;
