import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  post: string;
}

const ItemTeam: React.FC<Props> = ({ image, name, post }) => {
  return (
    <div className="w-[278px] flex flex-col items-center">
      <Image
        src={image}
        alt="team image"
        width={180}
        height={180}
        className="mb-5"
      />
      <p className="text-blue-400 mb-2  font-medium text-[23px]">{name}</p>
      <p className="text-center text-[#777777]  font-medium text-[17px]">
        {post}
      </p>
    </div>
  );
};

export default ItemTeam;
