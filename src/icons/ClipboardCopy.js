import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ClipboardCopy = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M16 4h2a2 2 0 012 2v4M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M21 14H11" />
      <path d="M15 10l-4 4 4 4" />
    </svg>
  );
});

ClipboardCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ClipboardCopy.displayName = 'ClipboardCopy';

export default ClipboardCopy;
