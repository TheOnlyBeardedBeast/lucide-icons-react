import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FlaskConical = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M10 2v8L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45L14 10V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    </svg>
  );
});

FlaskConical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FlaskConical.displayName = 'FlaskConical';

export default FlaskConical;
