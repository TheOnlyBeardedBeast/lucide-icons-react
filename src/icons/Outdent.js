import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Outdent = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <polyline points="7 8 3 12 7 16" />
      <line x1="21" y1="12" x2="11" y2="12" />
      <line x1="21" y1="6" x2="11" y2="6" />
      <line x1="21" y1="18" x2="11" y2="18" />
    </svg>
  );
});

Outdent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Outdent.displayName = 'Outdent';

export default Outdent;
