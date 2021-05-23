import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MousePointer2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
    </svg>
  );
});

MousePointer2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MousePointer2.displayName = 'MousePointer2';

export default MousePointer2;
