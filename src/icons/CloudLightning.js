import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudLightning = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17.5 17a4.5 4.5 0 100-9h-1.8a7 7 0 10-10.3 8" />
      <path d="M12 12l-3 5h5l-3 5" />
    </svg>
  );
});

CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudLightning.displayName = 'CloudLightning';

export default CloudLightning;
