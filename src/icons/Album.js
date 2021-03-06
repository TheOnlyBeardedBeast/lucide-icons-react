import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Album = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="11 3 11 11 14 8 17 11 17 3" />
    </svg>
  );
});

Album.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Album.displayName = 'Album';

export default Album;
