import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SeparatorHorizontal = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline points="8 8 12 4 16 8" />
      <polyline points="16 16 12 20 8 16" />
    </svg>
  );
});

SeparatorHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SeparatorHorizontal.displayName = 'SeparatorHorizontal';

export default SeparatorHorizontal;
