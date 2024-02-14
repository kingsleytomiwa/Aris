"use client";

import Image from "next/image";
import Logo from "../../public/images/logo.jpg";
import mrf from "../../public/images/mrf.jpg";
import Input from "../ui/Input";
import Dropdown from "../ui/Dropdown";
import SearchIcon from "../../public/icons/search.svg";
import Link from "next/link";
import { Fragment, useState, useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { Disclosure, Transition } from "@headlessui/react";
import PlusIcon from "public/icons/plus.svg";
import MinusIcon from "public/icons/minus.svg";
import PhoneIcon from "public/icons/phone.svg";
import useTranslation from "next-translate/useTranslation";
import { Dialog } from "@headlessui/react";
import { PRODUCTS } from "../../data";

interface Props {}

export const LINKS_TOP = [
  {
    title: "header.nav.link1",
    link: "/",
  },
  {
    title: "header.nav.link2",
    link: "/about",
  },
  {
    title: "header.nav.link3",
    link: "/solutions",
  },
  {
    title: "header.nav.link4",
    link: "/team",
  },
  {
    title: "header.nav.link5",
    link: "/contact",
  },
];

export const LINKS = [
  {
    title: "header.link1",
    link: "/catalog?category=Locks&page=1",
    items: [
      {
        title: "27mm",
        link: "/catalog?category=Locks&subcategory=27mm&page=1",
      },
      {
        title: "25.4mm",
        link: "/catalog?category=Locks&subcategory=25.4mm&page=1",
      },
      {
        title: "22mm",
        link: "/catalog?category=Locks&subcategory=22mm&page=1",
      },
      {
        title: "20mm",
        link: "/catalog?category=Locks&subcategory=20mm&page=1",
      },
      {
        title: "16mm",
        link: "/catalog?category=Locks&subcategory=16mm&page=1",
      },
      {
        title: "16mm EMP",
        link: "/catalog?category=Locks&subcategory=16mmEMP&page=1",
      },
      {
        title: "Several Locks",
        link: "/catalog?category=Locks&subcategory=SeveralLocks&page=1",
      },
    ],
  },
  {
    title: "header.link2",
    link: "/catalog?category=Hinges&page=1",
    items: [
      {
        title: "Rear Hinges",
        link: "/catalog?category=Hinges&subcategory=RearHinges&page=1",
      },
      {
        title: "Side Door Hinges",
        link: "/catalog?category=Hinges&subcategory=SideDoorHinges&page=1",
      },
    ],
  },
  {
    title: "header.link3",
    link: "/catalog?category=Accessories&page=1",
  },
  {
    title: "header.link4",
    link: "/catalog?category=SpareParts&page=1",
    items: [
      {
        title: "27mm",
        link: "/catalog?category=SpareParts&subcategory=27mm&page=1",
      },
      {
        title: "25.4mm",
        link: "/catalog?category=SpareParts&subcategory=25.4mm&page=1",
      },
      {
        title: "22mm",
        link: "/catalog?category=SpareParts&subcategory=22mm&page=1",
      },
      {
        title: "20mm",
        link: "/catalog?category=SpareParts&subcategory=20mm&page=1",
      },
      {
        title: "16mm",
        link: "/catalog?category=SpareParts&subcategory=16mm&page=1",
      },
      {
        title: "16mm EMP",
        link: "/catalog?category=SpareParts&subcategory=16mmEMP&page=1",
      },
    ],
  },
];

const Header: React.FC<Props> = () => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     const disableScroll = (e: Event) => {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     };

  //     document.body.style.overflow = "hidden";
  //     document.addEventListener("touchmove", disableScroll, { passive: false });

  //     return () => {
  //       document.body.style.overflow = "auto";
  //       document.removeEventListener("touchmove", disableScroll);
  //     };
  //   }
  // }, [isOpen]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }, [searchTerm]);
  return (
    <>
      <div className="flex justify-center items-center bg-blue-400 gap-5 max-md:hidden text-white px-4">
        <div className="max-w-[1290px] w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            {LINKS_TOP.map((item, i) => (
              <Link href={item.link} key={i} className="text-[15px]">
                {t(item.title)}
              </Link>
            ))}
          </div>
          <div className="max-sm:hidden">
            <Dropdown />
          </div>
        </div>
      </div>
      <div className="sticky top-0 left-0 bg-white opacity-95 w-full px-4 py-5 z-10">
        <div className="max-w-[1290px] mx-auto flex items-center gap-5 justify-between">
          <div className="flex items-center gap-6">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logo"
                className="max-lg:w-[103px] max-lg:h-[35px]"
              />
            </Link>
            <div className="h-10 border-r border-[#E6E6E8]" />
            <Image
              src={mrf}
              alt="mrf"
              className="max-lg:w-[87px] max-lg:h-[14px]"
            />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden gap-3 z-[60] relative"
          >
            <button className="burgerButton bg-transparent p-0">
              <div
                className={twMerge(
                  "burger bg-blue-400 after:bg-blue-400 before:bg-blue-400",
                  isOpen && "active"
                )}
              ></div>
            </button>
          </div>

          <div className="flex items-center max-md:hidden">
            {LINKS.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="flex gap-2 items-center text-black-500 font-normal text-base duration-150 px-8 py-0 border-r border-[#E6E6E8] rounded-none"
              >
                <span>{t(item.title)}</span>
              </Link>
            ))}
          </div>
          <div className="max-w-[300px] max-xl:max-w-[200px] w-full relative max-md:hidden">
            <Input
              placeholder={t("header.inputSearch")}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute top-0 right-1 w-8 h-full flex items-center justify-center">
              <Image
                src={SearchIcon}
                alt="search"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div
              className={twMerge(
                "absolute top-[50px] z-[100] left-0 w-full border border-gray-400 rounded-[10px] p-6 bg-white opacity-0 duration-150 pointer-events-none overflow-y-scroll max-h-[264px]",
                searchTerm && "opacity-100 pointer-events-auto"
              )}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, i) => (
                  <Link
                    href={`/catalog/${item.reference}`}
                    key={i}
                    className="flex gap-4 items-center pb-4 mb-4 border-b border-gray-400 w-full last:border-none last:pb-0 last:mb-0"
                  >
                    <Image
                      src={item.image}
                      alt="image product"
                      width={42}
                      height={42}
                      className="border border-gray-400 rounded-[10px]"
                    />
                    <div>
                      <p className="text-base">{item.name}</p>
                      <p className="opacity-50 text-base">
                        Weight: {item.weight}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={() => {}}>
          <main
            className={twMerge(
              "fixed overflow-hidden bg-white duration-300 z-20 md:hidden inset-0"
            )}
          >
            <div className="relative w-screen max-w-full h-full overflow-y-scroll">
              <div className="flex justify-between px-4 py-5 items-center">
                <div className="flex items-center gap-6">
                  <Link href={"/"}>
                    <Image
                      src={Logo}
                      alt="logo"
                      className="max-lg:w-[103px] max-lg:h-[35px]"
                    />
                  </Link>
                  <div className="h-10 border-r border-[#E6E6E8]" />
                  <Image
                    src={mrf}
                    alt="mrf"
                    className="max-lg:w-[87px] max-lg:h-[14px]"
                  />
                </div>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex md:hidden gap-3 z-[60] relative"
                >
                  <button className="burgerButton bg-transparent p-0">
                    <div
                      className={twMerge(
                        "burger bg-blue-400 after:bg-blue-400 before:bg-blue-400",
                        isOpen && "active"
                      )}
                    ></div>
                  </button>
                </div>
              </div>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="flex flex-col justify-between menuContent">
                  <div>
                    <div className="p-4 border-y border-gray-400">
                      <div className="w-full relative">
                        <Input
                          placeholder={t("header.inputSearch")}
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute top-0 right-1 w-8 h-full flex items-center justify-center">
                          <Image
                            src={SearchIcon}
                            alt="search"
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                        <div
                          className={twMerge(
                            "absolute top-[50px] left-0 z-[100] w-full border border-gray-400 rounded-[10px] p-6 bg-white opacity-0 duration-150 pointer-events-none overflow-y-scroll max-h-[264px]",
                            searchTerm && "opacity-100 pointer-events-auto"
                          )}
                        >
                          {filteredProducts.length > 0 ? (
                            filteredProducts.map((item, i) => (
                              <Link
                                onClick={() => setIsOpen(false)}
                                href={`/catalog/${item.reference}`}
                                key={i}
                                className="flex gap-4 items-center pb-4 mb-4 border-b border-gray-400 w-full last:border-none last:pb-0 last:mb-0"
                              >
                                <Image
                                  src={item.image}
                                  alt="image product"
                                  width={42}
                                  height={42}
                                  className="border border-gray-400 rounded-[10px]"
                                />
                                <div>
                                  <p className="text-base">{item.name}</p>
                                  <p className="opacity-50 text-base">
                                    {item.weight}
                                  </p>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <p>No results found</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-black-500">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <div className="flex w-full justify-between items-center px-4 py-6 border-b border-gray-400 text-lg text-black-500 font-normal rounded-none">
                              <Link
                                href={"/catalog"}
                                className="w-full"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className={twMerge(open && "opacity-50")}>
                                  {t("header.nav.link6")}
                                </span>
                              </Link>
                              <Disclosure.Button className="p-3 -m-3 rounded-none">
                                {open ? (
                                  <Image src={MinusIcon} alt="minus" />
                                ) : (
                                  <Image src={PlusIcon} alt="plus" />
                                )}
                              </Disclosure.Button>
                            </div>
                            <Disclosure.Panel className="px-8">
                              {LINKS.map((item, i) => (
                                <Disclosure key={i} as="div" className={"py-4"}>
                                  {({ open }) => (
                                    <>
                                      <div className="flex w-full justify-between items-center px-4 text-base text-black-500 font-normal rounded-none">
                                        <Link
                                          href={item.link}
                                          onClick={() => setIsOpen(false)}
                                          className="w-full"
                                        >
                                          <span
                                            className={twMerge(
                                              open && "opacity-50"
                                            )}
                                          >
                                            {t(item.title)}
                                          </span>
                                        </Link>
                                        {item.items && (
                                          <Disclosure.Button className="p-3 -m-3 rounded-none">
                                            {open ? (
                                              <Image
                                                src={MinusIcon}
                                                alt="minus"
                                              />
                                            ) : (
                                              <Image
                                                src={PlusIcon}
                                                alt="plus"
                                              />
                                            )}
                                          </Disclosure.Button>
                                        )}
                                      </div>
                                      {item.items && (
                                        <Disclosure.Panel className="px-4 border-y border-gray-400 flex flex-col">
                                          {item.items.map((itemContent, i) => (
                                            <Link
                                              onClick={() => setIsOpen(false)}
                                              key={i}
                                              href={itemContent.link}
                                              className="py-4 text-base"
                                            >
                                              {itemContent.title}
                                            </Link>
                                          ))}
                                        </Disclosure.Panel>
                                      )}
                                    </>
                                  )}
                                </Disclosure>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                    {LINKS_TOP.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className={twMerge(
                          "px-4 py-6 border-b border-gray-400 text-lg w-full text-black-500 block",
                          i === 5 && "hidden"
                        )}
                      >
                        {t(item.title)}
                      </Link>
                    ))}
                    <Dropdown />
                  </div>
                  <a
                    href="tel:+34 988 519453"
                    className="flex justify-center items-center gap-3 py-6 bg-blue-400 w-full text-white mt-auto"
                  >
                    <Image src={PhoneIcon} alt="phone" width={24} height={24} />
                    +34 988 519453
                  </a>
                </div>
              </Transition.Child>
            </div>
          </main>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;
