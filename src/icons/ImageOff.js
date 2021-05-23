import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ImageOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M2 2l20 20" />
        <path d="M9 3h10a2 2 0 012 2v10M3.59 3.59A2 2 0 003 5v14c0 1.1.9 2 2 2h14a2 2 0 001.41-.59" />
        <path d="M9.56 9.56a1.5 1.5 0 01-2.12-2.12" />
        <path d="M21 15l-5-5M5 21l8-8" />
      </svg>
    </svg>
  );
});

ImageOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ImageOff.displayName = 'ImageOff';

export default ImageOff;
