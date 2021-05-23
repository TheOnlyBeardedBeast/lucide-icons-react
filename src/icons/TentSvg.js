import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TentSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M19 20L10 4" />
        <path d="M5 20l9-16" />
        <path d="M3 20h18" />
        <path d="M12 15l-3 5" />
        <path d="M12 15l3 5" />
      </svg>
    </svg>
  );
});

TentSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TentSvg.displayName = 'TentSvg';

export default TentSvg;
