import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GlassesSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="6" cy="15" r="4" />
        <circle cx="18" cy="15" r="4" />
        <path d="M14 15a2 2 0 00-2-2 2 2 0 00-2 2" />
        <path d="M2.5 13L5 7c.7-1.3 1.4-2 3-2" />
        <path d="M21.5 13L19 7c-.7-1.3-1.5-2-3-2" />
      </svg>
    </svg>
  );
});

GlassesSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GlassesSvg.displayName = 'GlassesSvg';

export default GlassesSvg;
