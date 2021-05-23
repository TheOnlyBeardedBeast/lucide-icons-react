import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlarmCheck = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M12 21a8 8 0 100-16 8 8 0 000 16z" />
        <path d="M5 3L2 6" />
        <path d="M22 6l-3-3" />
        <path d="M6 19l-2 2" />
        <path d="M18 19l2 2" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    </svg>
  );
});

AlarmCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlarmCheck.displayName = 'AlarmCheck';

export default AlarmCheck;
