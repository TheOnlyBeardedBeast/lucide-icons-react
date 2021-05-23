import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ThermometerSnowflake = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M2 12h10" />
      <path d="M9 4v16" />
      <path d="M3 9l3 3-3 3" />
      <path d="M12 6L9 9 6 6" />
      <path d="M6 18l3-3 1.5 1.5" />
      <path d="M18 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z" />
    </svg>
  );
});

ThermometerSnowflake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ThermometerSnowflake.displayName = 'ThermometerSnowflake';

export default ThermometerSnowflake;
