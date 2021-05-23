import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LightbulbOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M2 2l20 20" />
      <path d="M8.91 14a4.61 4.61 0 00-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 01.084-1M9 2.804A6 6 0 0118 8a4.651 4.651 0 01-1.031 3" />
    </svg>
  );
});

LightbulbOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LightbulbOff.displayName = 'LightbulbOff';

export default LightbulbOff;
