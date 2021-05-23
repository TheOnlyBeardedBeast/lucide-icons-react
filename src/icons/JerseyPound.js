import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const JerseyPound = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
        <path d="M6 15h12" />
        <path d="M6 11h12" />
      </svg>
    </svg>
  );
});

JerseyPound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

JerseyPound.displayName = 'JerseyPound';

export default JerseyPound;
