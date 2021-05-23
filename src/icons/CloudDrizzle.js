import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudDrizzle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9" />
      <path d="M8 19v1" />
      <path d="M8 14v1" />
      <path d="M16 19v1" />
      <path d="M16 14v1" />
      <path d="M12 21v1" />
      <path d="M12 16v1" />
    </svg>
  );
});

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudDrizzle.displayName = 'CloudDrizzle';

export default CloudDrizzle;
