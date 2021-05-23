import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GitBranchPlusSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M6 3v12" />
        <path d="M18 9a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M6 21a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M15 6a9 9 0 00-9 9" />
        <path d="M18 15v6" />
        <path d="M21 18h-6" />
      </svg>
    </svg>
  );
});

GitBranchPlusSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitBranchPlusSvg.displayName = 'GitBranchPlusSvg';

export default GitBranchPlusSvg;
