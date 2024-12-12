const SearchIcon = ({ width = 20, height = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill="rgb(101, 101, 126)"
      fillRule="evenodd"
      d="M10.667 6.667a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5.334 4a5.333 5.333 0 1 1 9.547 3.27l3.591 3.592a.667.667 0 0 1-.942.942l-3.592-3.591a5.333 5.333 0 0 1-8.604-4.213Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SearchIcon;
