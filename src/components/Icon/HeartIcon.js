import * as React from 'react';

const HeartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.fill}
      stroke="currentColor"
      d="M1 8.4C1 4 4.5 3 6.5 3 9 3 11 5 12 6.5 13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"
    />
  </svg>
);
export default HeartIcon;
