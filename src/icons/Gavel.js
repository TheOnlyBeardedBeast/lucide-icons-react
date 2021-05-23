import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gavel = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L11 10" />
      <path d="M16 16l6-6" />
      <path d="M8 8l6-6" />
      <path d="M9 7l8 8" />
      <path d="M21 11l-8-8" />
    </svg>
  );
});

Gavel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gavel.displayName = 'Gavel';

export default Gavel;
