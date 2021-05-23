import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PlugZapSvg = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M13 2l-2 2.5h3L12 7" />
        <path d="M12 22v-3" />
        <path d="M10 13v-2.5" />
        <path d="M10 12.5v-2" />
        <path d="M14 12.5v-2" />
        <path d="M16 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2z" />
      </svg>
    </svg>
  );
});

PlugZapSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlugZapSvg.displayName = 'PlugZapSvg';

export default PlugZapSvg;
