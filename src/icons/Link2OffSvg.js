import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Link2OffSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M15 7h2a5 5 0 014 8M9 17H7A5 5 0 017 7" />
        <line x1="8" y1="12" x2="12" y2="12" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    </svg>
  );
});

Link2OffSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link2OffSvg.displayName = 'Link2OffSvg';

export default Link2OffSvg;
