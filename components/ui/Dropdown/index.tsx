import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import setLanguage from "next-translate/setLanguage";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const LANG = [
  {
    title: "English",
    lang: "en",
    icon: "/icons/flag-england.svg",
  },
  {
    title: "Türkçe",
    lang: "tr",
    icon: "/icons/flag-turkey.svg",
  },
];

interface Props {}

const Dropdown: React.FC<Props> = ({}) => {
  const { lang } = useTranslation("common");
  return (
    <Listbox>
      <div className="relative text-blue-400 z-[100]">
        <Listbox.Button className="relative w-full text-[15px] max-md:text-base rounded-none max-md:py-6 max-md:px-4 font-normal flex items-center gap-2 max-md:text-black-500">
          <Image
            src={
              lang === "en"
                ? "/icons/flag-england.svg"
                : "/icons/flag-turkey.svg"
            }
            alt="lang icon"
            width={20}
            height={20}
          />
          <span>{lang === "en" ? "English" : "Türkçe"}</span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="sm:absolute w-full overflow-auto bg-white text-black border border-gray-400">
            {LANG.map((item, i) => (
              <Listbox.Option
                key={i}
                value={item}
                onClick={() => setLanguage(item.lang)}
                className="cursor-pointer p-1 text-center border-b border-gray-400 last:border-none flex gap-2 items-center w-full pl-10"
              >
                <Image src={item.icon} alt="lang icon" width={20} height={20} />
                {item.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
