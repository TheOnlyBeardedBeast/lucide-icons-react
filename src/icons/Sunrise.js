import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sunrise = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 2v8" />
      <path d="M5.2 11.2l1.4 1.4" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="M17.4 12.6l1.4-1.4" />
      <path d="M22 22H2" />
      <path d="M8 6l4-4 4 4" />
      <path d="M16 18a4 4 0 00-8 0" />
    </svg>
  );
});

Sunrise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sunrise.displayName = 'Sunrise';

export default Sunrise;
