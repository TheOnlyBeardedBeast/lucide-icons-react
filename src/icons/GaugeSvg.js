import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GaugeSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M12 15l3.5-3.5" />
        <path d="M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4" />
      </svg>
    </svg>
  );
});

GaugeSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GaugeSvg.displayName = 'GaugeSvg';

export default GaugeSvg;
