import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Strikethrough = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M16 4H9a3 3 0 00-2.83 4" />
      <path d="M14 12a4 4 0 010 8H6" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  );
});

Strikethrough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Strikethrough.displayName = 'Strikethrough';

export default Strikethrough;
