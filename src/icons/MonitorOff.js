import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MonitorOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17 17H4a2 2 0 01-2-2V5c0-1.5 1-2 1-2" />
      <path d="M22 15V5a2 2 0 00-2-2H9" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M2 2l20 20" />
    </svg>
  );
});

MonitorOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MonitorOff.displayName = 'MonitorOff';

export default MonitorOff;
