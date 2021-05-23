import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MoveDiagonal2Svg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <polyline points="5 11 5 5 11 5" />
        <polyline points="19 13 19 19 13 19" />
        <line x1="5" y1="5" x2="19" y2="19" />
      </svg>
    </svg>
  );
});

MoveDiagonal2Svg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoveDiagonal2Svg.displayName = 'MoveDiagonal2Svg';

export default MoveDiagonal2Svg;
