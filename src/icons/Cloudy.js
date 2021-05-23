import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cloudy = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17.5 21a4.5 4.5 0 100-9h-1.8A7 7 0 109 21h8.5z" />
      <path d="M22 10c0-1.5-1.5-3-3.5-3H17c-.7-2.3-2.9-4-5.4-4-2.7 0-5 2-5.5 4.5" />
    </svg>
  );
});

Cloudy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloudy.displayName = 'Cloudy';

export default Cloudy;
