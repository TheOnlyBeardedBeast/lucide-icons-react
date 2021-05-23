import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LayoutTemplate = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M21 3H3v7h18V3z" />
      <path d="M21 14h-5v7h5v-7z" />
      <path d="M12 14H3v7h9v-7z" />
    </svg>
  );
});

LayoutTemplate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutTemplate.displayName = 'LayoutTemplate';

export default LayoutTemplate;
