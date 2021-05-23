import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BatteryChargingSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7H3.78A1.73 1.73 0 002 8.67v6.66A1.73 1.73 0 003.78 17H6m8-10h2.22A1.73 1.73 0 0118 8.67v6.66A1.73 1.73 0 0116.22 17H13" />
        <polyline points="11 7 8 12 12 12 9 17" />
        <line x1="22" x2="22" y1="11" y2="13" />
      </svg>
    </svg>
  );
});

BatteryChargingSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryChargingSvg.displayName = 'BatteryChargingSvg';

export default BatteryChargingSvg;
