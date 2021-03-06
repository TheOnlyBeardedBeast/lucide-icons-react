import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Asterisk = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 6v12" />
      <path d="M17.196 9L6.804 15" />
      <path d="M6.804 9l10.392 6" />
    </svg>
  );
});

Asterisk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Asterisk.displayName = 'Asterisk';

export default Asterisk;
