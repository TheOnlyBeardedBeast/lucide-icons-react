import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Podcast = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="12" cy="11" r="1" />
        <path d="M17.03 18.46a9 9 0 10-10.02.03" />
        <path d="M16.06 13.91a5 5 0 10-7.97.2" />
        <path d="M11.11 17a.9.9 0 111.78 0l-.52 4.67a.37.37 0 01-.74 0l-.52-4.68z" />
      </svg>
    </svg>
  );
});

Podcast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Podcast.displayName = 'Podcast';

export default Podcast;
