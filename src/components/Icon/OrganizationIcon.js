const OrganizationIcon = ({ width = 24, height = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m12 .856 10 5.556V9H2V6.412zM2 21h20v2H2zm5-2H5v-8h2zm6 0h-2v-8h2zm6 0h-2v-8h2z"
    />
  </svg>
);
export default OrganizationIcon;
