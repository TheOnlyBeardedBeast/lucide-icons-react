import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Rss = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 11a9 9 0 019 9" />
      <path d="M4 4a16 16 0 0116 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
});

Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rss.displayName = 'Rss';

export default Rss;
