import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Flashlight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M18 6c0 2-2 2-2 4v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4V2h12z" />
      <line x1="6" y1="6" x2="18" y2="6" />
      <line x1="12" y1="12" x2="12" y2="12" />
    </svg>
  );
});

Flashlight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flashlight.displayName = 'Flashlight';

export default Flashlight;
