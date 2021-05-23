import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Haze = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M5.2 6.2l1.4 1.4" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
      <path d="M17.4 7.6l1.4-1.4" />
      <path d="M22 17H2" />
      <path d="M22 21H2" />
      <path d="M16 13a4 4 0 00-8 0" />
      <path d="M12 5V2.5" />
    </svg>
  );
});

Haze.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Haze.displayName = 'Haze';

export default Haze;
