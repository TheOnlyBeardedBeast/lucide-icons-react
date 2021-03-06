import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19 17h2l.64-2.54a6 6 0 000-2.92l-1.07-4.27A3 3 0 0017.66 5H4a2 2 0 00-2 2v10h2m10 0h-4" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
    </svg>
  );
});

Bus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bus.displayName = 'Bus';

export default Bus;
