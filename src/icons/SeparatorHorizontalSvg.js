import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SeparatorHorizontalSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <line x1="3" y1="12" x2="21" y2="12" />
        <polyline points="8 8 12 4 16 8" />
        <polyline points="16 16 12 20 8 16" />
      </svg>
    </svg>
  );
});

SeparatorHorizontalSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SeparatorHorizontalSvg.displayName = 'SeparatorHorizontalSvg';

export default SeparatorHorizontalSvg;
