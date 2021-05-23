import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DivideCircleSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
        <line x1="12" y1="8" x2="12" y2="8" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    </svg>
  );
});

DivideCircleSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DivideCircleSvg.displayName = 'DivideCircleSvg';

export default DivideCircleSvg;
