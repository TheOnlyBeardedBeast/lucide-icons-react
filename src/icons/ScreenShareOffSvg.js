import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ScreenShareOffSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M22 3l-5 5" />
        <path d="M17 3l5 5" />
      </svg>
    </svg>
  );
});

ScreenShareOffSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ScreenShareOffSvg.displayName = 'ScreenShareOffSvg';

export default ScreenShareOffSvg;
