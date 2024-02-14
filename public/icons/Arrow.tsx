import React from "react";

interface Props {
  stroke?: string;
}

const ArrowIcon: React.FC<Props> = ({ stroke = "#01040D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18.0001L9 12.0001L15 6.00012"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
