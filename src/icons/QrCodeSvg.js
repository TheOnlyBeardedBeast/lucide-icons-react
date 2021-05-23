import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const QrCodeSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <rect x="2" y="2" width="8" height="8" />
        <path d="M6 6h.01" />
        <rect x="14" y="2" width="8" height="8" />
        <path d="M18 6h.01" />
        <rect x="2" y="14" width="8" height="8" />
        <path d="M6 18h.01" />
        <path d="M14 14h.01" />
        <path d="M18 18h.01" />
        <path d="M18 22h4v-4" />
        <path d="M14 18v4" />
        <path d="M22 14h-4" />
      </svg>
    </svg>
  );
});

QrCodeSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

QrCodeSvg.displayName = 'QrCodeSvg';

export default QrCodeSvg;
