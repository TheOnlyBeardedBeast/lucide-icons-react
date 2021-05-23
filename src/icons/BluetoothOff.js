import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BluetoothOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M17 17l-5 5V12l-5 5" />
        <path d="M2 2l20 20" />
        <path d="M14.5 9.5L17 7l-5-5v4.5" />
      </svg>
    </svg>
  );
});

BluetoothOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BluetoothOff.displayName = 'BluetoothOff';

export default BluetoothOff;
