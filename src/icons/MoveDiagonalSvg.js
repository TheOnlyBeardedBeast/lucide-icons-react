import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MoveDiagonalSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <polyline points="13 5 19 5 19 11" />
        <polyline points="11 19 5 19 5 13" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </svg>
    </svg>
  );
});

MoveDiagonalSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoveDiagonalSvg.displayName = 'MoveDiagonalSvg';

export default MoveDiagonalSvg;
