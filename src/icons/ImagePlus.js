import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ImagePlus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8" />
      <path d="M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path d="M21 15l-5-5L5 21" />
      <path d="M19 2v6" />
      <path d="M22 5h-6" />
    </svg>
  );
});

ImagePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ImagePlus.displayName = 'ImagePlus';

export default ImagePlus;
