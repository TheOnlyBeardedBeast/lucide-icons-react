import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Indent = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <polyline points="3 8 7 12 3 16" />
      <line x1="21" y1="12" x2="11" y2="12" />
      <line x1="21" y1="6" x2="11" y2="6" />
      <line x1="21" y1="18" x2="11" y2="18" />
    </svg>
  );
});

Indent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Indent.displayName = 'Indent';

export default Indent;
