import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudHailSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9" />
        <path d="M16 14v2" />
        <path d="M8 14v2" />
        <path d="M16 20h0" />
        <path d="M8 20h0" />
        <path d="M12 16v2" />
        <path d="M12 22h0" />
      </svg>
    </svg>
  );
});

CloudHailSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudHailSvg.displayName = 'CloudHailSvg';

export default CloudHailSvg;
