import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ThermometerSun = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 9a4 4 0 00-2 7.5" />
      <path d="M12 3v2" />
      <path d="M6.6 18.4l-1.4 1.4" />
      <path d="M18 2a2 2 0 012 2v10.5a4 4 0 11-4 0V4c0-1.1.9-2 2-2z" />
      <path d="M4 13H2" />
      <path d="M6.6 7.6L5.2 6.2" />
    </svg>
  );
});

ThermometerSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThermometerSun.displayName = 'ThermometerSun';

export default ThermometerSun;
