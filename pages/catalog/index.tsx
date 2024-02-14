import Footer from "@/components/Footer";
import Header, { LINKS } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, Fragment, useEffect } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import PlusIcon from "public/icons/plus.svg";
import MinusIcon from "public/icons/minus.svg";
import GridIcon from "public/icons/grid.svg";
import ListIcon from "public/icons/list.svg";
import { twMerge } from "tailwind-merge";
import { Listbox, Transition } from "@headlessui/react";
import Input from "@/components/ui/Input";
import ArrowIcon from "@/public/icons/Arrow";
import CrossIcon from "public/icons/cross.svg";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { PRODUCTS } from "../../data";
import { useSearchParams } from "next/navigation";

const sort = [
  "Product name: A to Z",
  "Product name: Z to A",
  "Reference: Lowest first",
  "Reference: Highest first",
];

const CATEGORIES = [
  "27mm",
  "25.4mm",
  "22mm",
  "20mm",
  "16mm",
  "16mm EMP",
  "Several Locks",
];

interface Links {
  image: string;
  title: string;
  quanity: number;
  link: string;
}

export default function Catalog({ links }: { links: Links[] }) {
  const { t } = useTranslation("common");

  const [data, setData] = useState(PRODUCTS);
  const [progress, setProgress] = useState(0);
  const [sortSelected, setSortSelected] = useState(sort[0]);
  const [grid, setGrid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleProgress = (swiper: any) => {
    const progress = swiper.progress * 100;
    setProgress(progress);
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    const saveCategory = searchParams.get("category");
    const saveSubcategory = searchParams.get("subcategory");
    const saveCurrentPage = searchParams.get("page");
    if (saveCategory) {
      const newData = PRODUCTS.filter((item) => {
        if (saveSubcategory) {
          return (
            item.category === saveCategory &&
            item.subcategory === saveSubcategory
          );
        }
        return item.category === saveCategory;
      });
      setData(newData);
    }

    if (saveCurrentPage) {
      setCurrentPage(parseInt(saveCurrentPage));
    }
  }, [searchParams]);

  useEffect(() => {
    if (sortSelected === "Product name: A to Z") {
      setData((prevData) => {
        const sortedData = [...prevData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return sortedData;
      });
    }
    if (sortSelected === "Product name: Z to A") {
      setData((prevData) => {
        const sortedData = [...prevData].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return sortedData;
      });
    }
    if (sortSelected === "Reference: Lowest first") {
      setData((prevData) => {
        const sortedData = [...prevData].sort(
          (a, b) =>
            parseFloat(a.weight.replace(".", "")) -
            parseFloat(b.weight.replace(".", ""))
        );
        return sortedData;
      });
    }
    if (sortSelected === "Reference: Highest first") {
      setData((prevData) => {
        const sortedData = [...prevData].sort(
          (a, b) =>
            parseFloat(b.weight.replace(".", "")) -
            parseFloat(a.weight.replace(".", ""))
        );
        return sortedData;
      });
    }
  }, [sortSelected, setData]);

  const indexLastProduct = currentPage * 48;
  const indexFirstProduct = indexLastProduct - 48;
  const currentData = data.slice(indexFirstProduct, indexLastProduct);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / 48); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <NextSeo title="Catalog" description="Catalog" />
      <div>
        <Header />
        <div className="container  max-sm:hidden">
          <div className="py-[50px] flex gap-6">
            {links.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="border border-gray-400 rounded-[10px] flex-1"
              >
                <div className="py-[31px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="catalog image"
                    width={120}
                    height={138}
                  />
                </div>
                <div className="py-6 w-full border-t border-gray-400">
                  <p className="text-blue-400 text-center text-xl font-medium">
                    {item.title}
                  </p>
                  <p className="mt-3 opacity-50 text-sm text-center">
                    {item.quanity}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Swiper
          className="sm:!hidden !pt-8 !px-4"
          spaceBetween={18}
          slidesPerView={1.72}
          onProgress={handleProgress}
        >
          {links.map((item, i) => (
            <SwiperSlide
              key={i}
              className="border border-gray-400 rounded-[10px]"
            >
              <Link href={item.link}>
                <div className="py-6 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="catalog image"
                    width={100}
                    height={110}
                  />
                </div>
                <div className="py-6 w-full border-t border-gray-400">
                  <p className="text-blue-400 text-center text-lg font-medium">
                    {item.title}
                  </p>
                  <p className="mt-2.5 opacity-50 text-base text-center font-light">
                    {item.quanity}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="px-4 pt-[18px] pb-8 sm:hidden">
          <div className="relative w-full border-t border-gray-400">
            <div
              className="absolute top-0 left-0 h-[5px] bg-blue-400 rounded-[10px] mt-[-2.5px]"
              style={
                progress < 100 ? { width: `${progress}%` } : { width: "100%" }
              }
            />
            <div className="absolute top-0 left-0 h-[5px] bg-blue-400 rounded-[10px] mt-[-2.5px] w-[25%]" />
          </div>
        </div>
        <div className="container">
          <div className="flex gap-8 pt-[52px] border-t border-gray-400 pb-[96px] max-sm:pb-16 max-sm:border-none max-sm:pt-0">
            <div className="w-[280px] border border-gray-400 rounded-[10px] p-8 h-fit max-sm:hidden">
              <p className="text-blue-400 text-2xl font-medium">Products</p>
              {LINKS.map((item, i) => (
                <Disclosure key={i} as="div" className={"py-2"}>
                  {({ open }) => (
                    <>
                      <div className="flex w-full justify-between items-center p-0 text-base text-black-500 font-medium rounded-none">
                        <Link
                          href={item.link}
                          className={twMerge("w-full", open && "opacity-50")}
                        >
                          {t(item.title)}
                        </Link>
                        {item.items && (
                          <Disclosure.Button
                            className={"p-3 -m-3 rounded-none"}
                          >
                            {open ? (
                              <Image src={MinusIcon} alt="minus" />
                            ) : (
                              <Image src={PlusIcon} alt="plus" />
                            )}
                          </Disclosure.Button>
                        )}
                      </div>
                      {item.items && (
                        <Disclosure.Panel className="px-4 border-y border-gray-400 flex flex-col mt-3">
                          {item.items.map((itemContent, i) => (
                            <Link
                              key={i}
                              href={itemContent.link}
                              className="py-3 text-base"
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
              <Link
                href={"/catalog?category=New&page=1"}
                className="font-medium text-base py-2 w-full block"
              >
                New
              </Link>
            </div>
            <div className="flex-1">
              <div className="flex justify-between gap-4 items-center">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <p className="text-base font-light opacity-50 max-sm:hidden">
                      Sort by:
                    </p>
                    <Listbox value={sortSelected} onChange={setSortSelected}>
                      {({ open }) => (
                        <div className="relative">
                          <Listbox.Button className="flex gap-2 items-center text-black-500 max-sm:text-blue-400 font-normal text-base duration-150 p-0 rounded-none max-sm:font-medium">
                            <span>{sortSelected}</span>
                            <div
                              className={twMerge(
                                "duration-150 -rotate-90 max-sm:hidden",
                                open && "rotate-90"
                              )}
                            >
                              <ArrowIcon />
                            </div>
                            <div
                              className={twMerge(
                                "duration-150 -rotate-90 sm:hidden",
                                open && "rotate-90"
                              )}
                            >
                              <ArrowIcon stroke="#005099" />
                            </div>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute left-0 mt-[15px] z-[5] flex flex-col bg-white p-6 rounded-[5px] border border-blue-400 whitespace-nowrap w-[220px]">
                              {sort.map((item, i) => (
                                <Listbox.Option
                                  key={i}
                                  value={item}
                                  className={
                                    "py-3 w-full first:pt-0 last:pb-0 cursor-pointer"
                                  }
                                >
                                  {item}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      )}
                    </Listbox>
                  </div>
                </div>
                <div className="flex items-center gap-3 max-sm:hidden">
                  <div
                    onClick={() => setGrid(true)}
                    className={twMerge(
                      "p-2 rounded-[5px] bg-opacity-10 duration-150 cursor-pointer",
                      grid && "bg-blue-400"
                    )}
                  >
                    <Image src={GridIcon} alt="grid icon" />
                  </div>
                  <div
                    onClick={() => setGrid(false)}
                    className={twMerge(
                      "p-2 rounded-[5px] bg-opacity-10 duration-150 cursor-pointer",
                      !grid && "bg-blue-400 "
                    )}
                  >
                    <Image src={ListIcon} alt="grid icon" />
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="blue underline border-none p-2 sm:hidden"
                >
                  Filters
                </button>
              </div>
              <div
                className={twMerge(
                  "grid grid-cols-4 gap-6 mt-6 max-sm:grid-cols-2",
                  !grid && "grid-cols-1"
                )}
              >
                {currentData.map((item, i) => (
                  <Link
                    href={`/catalog/${item.reference}`}
                    key={i}
                    className="border border-gray-400 rounded-[10px] flex-1 cursor-pointer"
                  >
                    <div className="py-[31px] flex items-center justify-center max-sm:py-0">
                      <div className="w-[120px] h-[138px]">
                        <Image
                          src={item.image}
                          alt="catalog image"
                          width={250}
                          height={250}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="py-6 max-sm:py-[18px] w-full border-t border-gray-400 px-2">
                      <p className="text-center text-lg max-sm:text-base">
                        {item.name}
                      </p>
                      {item.weight && (
                        <p className="mt-3 max-sm:mt-2.5 opacity-50 text-sm text-center">
                          Weight: {item.weight}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center max-sm:justify-center">
                <p className="text max-sm:hidden">
                  Showing{" "}
                  <strong>
                    {indexFirstProduct + 1} -{" "}
                    {currentData.length + indexFirstProduct}
                  </strong>{" "}
                  of {data.length} items
                </p>
                {data.length > 48 && (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setCurrentPage(
                          currentPage > 1 ? currentPage - 1 : currentPage
                        )
                      }
                      className="w-10 h-10 bg-transparent p-0"
                    >
                      <ArrowIcon
                        stroke={currentPage > 1 ? "#005099" : "black"}
                      />
                    </button>
                    {pageNumbers.map((item, i) => (
                      <button
                        onClick={() => setCurrentPage(item)}
                        key={i}
                        className={twMerge(
                          "p-[7px] font-medium text-base cursor-pointer bg-transparent text-black",
                          item === currentPage && "text-[#005099]"
                        )}
                      >
                        {item}
                      </button>
                    ))}
                    <button
                      onClick={() =>
                        setCurrentPage(
                          currentPage < pageNumbers.length
                            ? currentPage + 1
                            : currentPage
                        )
                      }
                      className="rotate-180 w-10 h-10 bg-transparent p-0"
                    >
                      <ArrowIcon
                        stroke={
                          currentPage < pageNumbers.length ? "#005099" : "black"
                        }
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog open={isOpen} onClose={() => {}}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <main
                className={twMerge(
                  "fixed top-0 w-screen h-screen bg-white right-[-100vw] duration-300 z-20 md:hidden overflow-y-auto",
                  isOpen && "right-0"
                )}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mt-5 px-4 border-b border-gray-400 pb-5">
                      <p className="font-semibold text-3xl">Filters</p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-0 border-none bg-transparent"
                      >
                        <Image src={CrossIcon} alt="cross icon" />
                      </button>
                    </div>
                    <div className="py-6 px-4 border-b border-gray-400">
                      <p className="text">Sort by</p>
                      {sort.map((item, i) => (
                        <div
                          onClick={() => setSortSelected(item)}
                          key={i}
                          className="flex items-center gap-2 py-3 first:pt-0 last:pb-0"
                        >
                          {sortSelected === item && (
                            <Image src={CrossIcon} alt="cross icon" />
                          )}
                          <p className="text-base font-light">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 px-4">
                      <p className="text">Categories</p>
                      {CATEGORIES.map((item, i) => (
                        <div
                          onClick={() => setCategories(i)}
                          key={i}
                          className="flex items-center py-3 first:pt-6 gap-3"
                        >
                          <div
                            className={twMerge(
                              "w-3.5 h-3.5 rounded-[2px] border-2 border-gray-400",
                              categories === i && "bg-blue-400"
                            )}
                          />
                          <p className="text-base font-light">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 pb-8">
                    <button className="w-full blue">Clear all filters</button>
                  </div>
                </div>
              </main>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const locks = PRODUCTS.filter((item) => item.category === "Locks");
  const hinges = PRODUCTS.filter((item) => item.category === "Hinges");
  const accessories = PRODUCTS.filter(
    (item) => item.category === "Accessories"
  );
  const spareParts = PRODUCTS.filter((item) => item.category === "SpareParts");
  const isNew = PRODUCTS.filter((item) => item.category === "New");

  const links: Links[] = [
    {
      image: "/images/catalog/locks.png",
      title: "Locks",
      quanity: locks.length,
      link: "/catalog?category=Locks&page=1",
    },
    {
      image: "/images/catalog/hinges.png",
      title: "Hinges",
      quanity: hinges.length,
      link: "/catalog?category=Hinges&page=1",
    },
    {
      image: "/images/catalog/accessories.png",
      title: "Accessories",
      quanity: accessories.length,
      link: "/catalog?category=Accessories&page=1",
    },
    {
      image: "/images/catalog/spare.png",
      title: "Spare Parts",
      quanity: spareParts.length,
      link: "/catalog?category=SpareParts&page=1",
    },
    {
      image: "/images/catalog/new.png",
      title: "New",
      quanity: isNew.length,
      link: "/catalog?category=New&page=1",
    },
  ];

  return {
    props: { links },
  };
}
