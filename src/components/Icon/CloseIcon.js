import * as React from 'react';
const CloseIcon = ({ width = 20, height = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill="#242433"
      fillRule="evenodd"
      d="M6.274 6.274a.556.556 0 0 1 .786 0L10 9.214l2.94-2.94a.556.556 0 0 1 .786.785L10.786 10l2.94 2.94a.556.556 0 0 1-.785.786L10 10.786l-2.941 2.94a.555.555 0 1 1-.786-.786L9.214 10l-2.94-2.94a.556.556 0 0 1 0-.786Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CloseIcon;
