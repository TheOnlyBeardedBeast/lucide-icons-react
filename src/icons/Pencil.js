import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pencil = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <line x1="18" y1="2" x2="22" y2="6" />
      <path d="M7.5 20.5L19 9l-4-4L3.5 16.5 2 22l5.5-1.5z" />
    </svg>
  );
});

Pencil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pencil.displayName = 'Pencil';

export default Pencil;
