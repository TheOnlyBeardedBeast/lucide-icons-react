import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileSearch = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v3" />
      <path d="M14 2v6h6" />
      <path d="M5 17a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M9 18l-1.5-1.5" />
    </svg>
  );
});

FileSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileSearch.displayName = 'FileSearch';

export default FileSearch;
