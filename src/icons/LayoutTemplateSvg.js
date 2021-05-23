import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LayoutTemplateSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M21 3H3v7h18V3z" />
        <path d="M21 14h-5v7h5v-7z" />
        <path d="M12 14H3v7h9v-7z" />
      </svg>
    </svg>
  );
});

LayoutTemplateSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayoutTemplateSvg.displayName = 'LayoutTemplateSvg';

export default LayoutTemplateSvg;
