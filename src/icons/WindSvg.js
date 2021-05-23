import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WindSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1111 8H2" />
        <path d="M12.6 19.4A2 2 0 1014 16H2" />
      </svg>
    </svg>
  );
});

WindSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WindSvg.displayName = 'WindSvg';

export default WindSvg;
