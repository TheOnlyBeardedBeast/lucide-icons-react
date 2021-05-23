import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SeparatorVerticalSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <line x1="12" y1="3" x2="12" y2="21" />
        <polyline points="8 8 4 12 8 16" />
        <polyline points="16 16 20 12 16 8" />
      </svg>
    </svg>
  );
});

SeparatorVerticalSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SeparatorVerticalSvg.displayName = 'SeparatorVerticalSvg';

export default SeparatorVerticalSvg;
