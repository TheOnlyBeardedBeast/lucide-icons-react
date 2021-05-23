import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Inspect = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M19 11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2h7" />
        <path d="M12 12l4.166 10 1.48-4.355L22 16.166 12 12z" />
        <path d="M18 18l3 3" />
      </svg>
    </svg>
  );
});

Inspect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Inspect.displayName = 'Inspect';

export default Inspect;
