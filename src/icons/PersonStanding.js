import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PersonStanding = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="12" cy="5" r="1" />
        <path d="M9 20L12 14L15 20" />
        <path d="M6 8L12 10L18 8" />
        <path d="M12 10V14" />
      </svg>
    </svg>
  );
});

PersonStanding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PersonStanding.displayName = 'PersonStanding';

export default PersonStanding;
