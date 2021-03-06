import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Thermometer = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z" />
    </svg>
  );
});

Thermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Thermometer.displayName = 'Thermometer';

export default Thermometer;
