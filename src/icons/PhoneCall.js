import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PhoneCall = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M14.05 6A5 5 0 0118 10m-3.95-8a9 9 0 018 7.94m0 7v3a2 2 0 01-2 2h-.19a19.79 19.79 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.82 19.82 0 01-3.11-8.69A2 2 0 013.93 2h3.18a2 2 0 012 1.72 13 13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13 13 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
});

PhoneCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneCall.displayName = 'PhoneCall';

export default PhoneCall;
