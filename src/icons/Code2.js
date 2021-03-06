import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Code2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M18 16L22 12L18 8" />
      <path d="M6 8L2 12L6 16" />
      <path d="M14.5 4L9.5 20" />
    </svg>
  );
});

Code2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Code2.displayName = 'Code2';

export default Code2;
