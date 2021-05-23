import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EuroSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10h12" />
        <path d="M4 14h9" />
        <path d="M19 6a7.7 7.7 0 00-5.2-2A7.9 7.9 0 006 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
      </svg>
    </svg>
  );
});

EuroSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EuroSvg.displayName = 'EuroSvg';

export default EuroSvg;
