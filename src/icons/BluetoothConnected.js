import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BluetoothConnected = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M7 7l10 10-5 5V2l5 5L7 17" />
      <line x1="18" y1="12" y2="12" x2="21" />
      <line x1="3" y1="12" y2="12" x2="6" />
    </svg>
  );
});

BluetoothConnected.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BluetoothConnected.displayName = 'BluetoothConnected';

export default BluetoothConnected;
