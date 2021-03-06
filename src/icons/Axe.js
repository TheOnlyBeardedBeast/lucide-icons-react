import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Axe = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M14 12l-8.501 8.501a2.12 2.12 0 01-2.998 0h-.002a2.12 2.12 0 010-2.998L11 9.002" />
      <path d="M9 7l4-4 6 6h3l-.13.648a7.648 7.648 0 01-5.081 5.756L15 16v-3z" />
    </svg>
  );
});

Axe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Axe.displayName = 'Axe';

export default Axe;
