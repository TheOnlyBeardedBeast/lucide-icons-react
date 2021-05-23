import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PipetteSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M2 22l2-2h3l7-7" />
        <path d="M4 20v-3l7-7" />
        <path d="M14.29 13.3a1 1 0 001.41 0l.8-.8c.27-.27.27-.72 0-1s-.28-.72 0-1l4.08-4.08a2 2 0 000-2.83l-.17-.17a2 2 0 00-2.83 0L13.5 7.51c-.28.27-.73.27-1 0s-.73-.28-1 0l-.8.79a1 1 0 000 1.41l3.59 3.59z" />
      </svg>
    </svg>
  );
});

PipetteSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PipetteSvg.displayName = 'PipetteSvg';

export default PipetteSvg;
