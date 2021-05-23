import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M2 2l20 20" />
        <path d="M10 5a7 7 0 015.7 5h1.8a4.5 4.5 0 014 6.5" />
        <path d="M18.8 18.8c-.4.2-.8.2-1.3.2H9A7 7 0 015.8 5.8" />
      </svg>
    </svg>
  );
});

CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudOff.displayName = 'CloudOff';

export default CloudOff;
