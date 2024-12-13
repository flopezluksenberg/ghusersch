const RepositoryIcon = ({ width = 24, height = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 5.5A4.5 4.5 0 0 1 7.5 1H21v22h-5v-2h3v-5h-2.5v-2H19V3H7.5A2.5 2.5 0 0 0 5 5.5v9.258A4.5 4.5 0 0 1 7.5 14h2v2h-2a2.5 2.5 0 0 0 0 5H10v2H7.5A4.5 4.5 0 0 1 3 18.5zM8 5h2.004v2.004H8zm0 3h2.004v2.004H8zm5 6.615 3.914 3.75-1.384 1.444L14 18.343V23h-2v-4.657l-1.53 1.466-1.384-1.445z"
    />
  </svg>
);
export default RepositoryIcon;