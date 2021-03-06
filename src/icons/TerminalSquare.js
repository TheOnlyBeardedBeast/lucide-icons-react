import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TerminalSquare = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M7 11l2-2-2-2" />
      <path d="M11 13h4" />
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  );
});

TerminalSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TerminalSquare.displayName = 'TerminalSquare';

export default TerminalSquare;
