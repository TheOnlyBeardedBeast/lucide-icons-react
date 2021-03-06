import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlarmMinus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 21a8 8 0 100-16 8 8 0 000 16z" />
      <path d="M5 3L2 6" />
      <path d="M22 6l-3-3" />
      <path d="M6 19l-2 2" />
      <path d="M18 19l2 2" />
      <path d="M9 13h6" />
    </svg>
  );
});

AlarmMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlarmMinus.displayName = 'AlarmMinus';

export default AlarmMinus;
