import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BluetoothSearching = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M20.83 14.83a4 4 0 000-5.66" />
      <path d="M18 12h.01" />
    </svg>
  );
});

BluetoothSearching.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BluetoothSearching.displayName = 'BluetoothSearching';

export default BluetoothSearching;
