import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BatteryMedium = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
      <line x1="6" x2="6" y1="10" y2="14" />
      <line x1="10" x2="10" y1="10" y2="14" />
    </svg>
  );
});

BatteryMedium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryMedium.displayName = 'BatteryMedium';

export default BatteryMedium;
