import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  links: {
    title: string;
    link: string;
  }[];
}

const MapLinks: React.FC<Props> = ({ links }) => {
  const { t } = useTranslation("common");
  const linksValue = links.length;
  return (
    <div className="border-y border-gray-400">
      <div className="flex !py-4 gap-4 container">
        {links.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={twMerge(
              "text-black-500 text-[15px]",
              i + 1 === linksValue && "opacity-50"
            )}
          >
            {t(item.title)}
            <span
              className={twMerge(
                "ml-4 opacity-50",
                i + 1 === linksValue && "hidden"
              )}
            >
              /
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MapLinks;
