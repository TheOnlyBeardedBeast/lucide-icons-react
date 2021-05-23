import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSnow = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M8 15h0" />
      <path d="M8 19h0" />
      <path d="M12 17h0" />
      <path d="M12 21h0" />
      <path d="M16 15h0" />
      <path d="M16 19h0" />
    </svg>
  );
});

CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSnow.displayName = 'CloudSnow';

export default CloudSnow;
