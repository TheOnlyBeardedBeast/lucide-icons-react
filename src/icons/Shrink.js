import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Shrink = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8" />
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <path d="M9 4.2V9m0 0H4.2M9 9L3 3" />
    </svg>
  );
});

Shrink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shrink.displayName = 'Shrink';

export default Shrink;
