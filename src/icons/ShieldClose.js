import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShieldClose = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="9.5" y1="9" x2="14.5" y2="14" />
      <line x1="14.5" y1="9" x2="9.5" y2="14" />
    </svg>
  );
});

ShieldClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldClose.displayName = 'ShieldClose';

export default ShieldClose;
