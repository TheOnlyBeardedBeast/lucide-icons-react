import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PowerOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M18.36 6.64A9 9 0 0120.77 15M5.63 6.64A9 9 0 1018.706 19" />
        <path d="M12 2v4" />
        <path d="M2 2l20 20" />
      </svg>
    </svg>
  );
});

PowerOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PowerOff.displayName = 'PowerOff';

export default PowerOff;
