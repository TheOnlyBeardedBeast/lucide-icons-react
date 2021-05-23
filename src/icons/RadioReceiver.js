import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RadioReceiver = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M5 16v2" />
      <path d="M19 16v2" />
      <rect x="2" y="8" width="20" height="8" rx="2" />
      <path d="M18 12h0" />
    </svg>
  );
});

RadioReceiver.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RadioReceiver.displayName = 'RadioReceiver';

export default RadioReceiver;
