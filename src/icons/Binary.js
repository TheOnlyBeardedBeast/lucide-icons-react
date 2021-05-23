import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Binary = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M10 4H6v6h4V4z" />
        <path d="M18 14h-4v6h4v-6z" />
        <path d="M14 4h2v6m-2 0h4" />
        <path d="M6 14h2v6m-2 0h4" />
      </svg>
    </svg>
  );
});

Binary.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Binary.displayName = 'Binary';

export default Binary;
