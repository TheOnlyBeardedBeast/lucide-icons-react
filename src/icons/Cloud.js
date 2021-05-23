import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cloud = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17.5 19a4.5 4.5 0 100-9h-1.8A7 7 0 109 19h8.5z" />
    </svg>
  );
});

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloud.displayName = 'Cloud';

export default Cloud;
