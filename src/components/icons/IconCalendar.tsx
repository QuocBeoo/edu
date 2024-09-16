import { TypeIcon } from "../../type";

function IconCalendar(props: TypeIcon) {
  const { color = "#232323" } = props;
  return (
    <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z"
      />
      <path fill={color} d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" />
      <path fill={color} d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
      <path fill={color} d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" />
      <path fill={color} d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
      <path fill={color} d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
      <path fill={color} d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
      <path fill={color} d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
    </svg>
  );
}

export default IconCalendar;
