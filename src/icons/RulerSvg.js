import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RulerSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M16 2l6 6L8 22l-6-6L16 2" />
        <path d="M7.5 10.5l2 2" />
        <path d="M10.5 7.5l2 2" />
        <path d="M13.5 4.5l2 2" />
        <path d="M4.5 13.5l2 2" />
      </svg>
    </svg>
  );
});

RulerSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RulerSvg.displayName = 'RulerSvg';

export default RulerSvg;
