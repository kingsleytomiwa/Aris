import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogItem: React.FC<Props> = ({ image, date, title, description }) => {
  return (
    <div className="border border-gray-400 rounded-[10px]">
      <Image
        src={image}
        alt="blog image"
        width={1000}
        height={250}
        className="w-full object-cover rounded-t-[10px] max-sm:h-[225px]"
      />
      <div className="p-8 max-sm:p-[18px]">
        <p className="text-lg font-light text-black-500 opacity-50 max-sm:text-sm pb-4">
          {date}
        </p>
        <h1 className="text-black-500 mb-4 max-sm:text-left">{title}</h1>
        <p className="text-black-500 text-lg font-light opacity-50">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
