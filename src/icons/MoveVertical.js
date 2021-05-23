import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MoveVertical = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <polyline points="8 18 12 22 16 18" />
        <polyline points="8 6 12 2 16 6" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    </svg>
  );
});

MoveVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoveVertical.displayName = 'MoveVertical';

export default MoveVertical;
