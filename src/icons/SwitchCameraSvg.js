import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SwitchCameraSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5" />
        <path d="M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M18 22l-3-3 3-3" />
        <path d="M6 2l3 3-3 3" />
      </svg>
    </svg>
  );
});

SwitchCameraSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SwitchCameraSvg.displayName = 'SwitchCameraSvg';

export default SwitchCameraSvg;
