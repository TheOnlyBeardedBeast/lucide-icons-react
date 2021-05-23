import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ticket = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 15v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
        <path d="M21 15a3 3 0 110-6" />
        <path d="M3 15a3 3 0 100-6" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    </svg>
  );
});

Ticket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ticket.displayName = 'Ticket';

export default Ticket;
