import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileDigit = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4" />
      <path d="M14 2v6h6" />
      <path d="M10 12h2v6" />
      <rect x="2" y="12" width="4" height="6" />
      <path d="M10 18h4" />
    </svg>
  );
});

FileDigit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileDigit.displayName = 'FileDigit';

export default FileDigit;
