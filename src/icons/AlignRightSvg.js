import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignRightSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <line x1="21" y1="6" x2="3" y2="6" />
        <line x1="21" y1="12" x2="9" y2="12" />
        <line x1="21" y1="18" x2="7" y2="18" />
      </svg>
    </svg>
  );
});

AlignRightSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignRightSvg.displayName = 'AlignRightSvg';

export default AlignRightSvg;
