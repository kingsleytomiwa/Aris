import Footer from "@/components/Footer";
import Header, { LINKS } from "@/components/Header";
import MapLinks from "@/components/MapLinks";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import PlusIcon from "public/icons/plus.svg";
import MinusIcon from "public/icons/minus.svg";
import Link from "next/link";
import ArrowIcon from "@/public/icons/Arrow";
import { useState, Fragment } from "react";
import PdfIcon from "public/icons/pdf.svg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { PRODUCTS } from "../../data";
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

interface Product {
  image: string;
  name: string;
  reference: number;
  weight: string;
  category: string;
  material?: string[];
  pdfLink?: string;
}

export default function Product({
  product,
  otherProductsInCategory,
}: {
  product: Product;
  otherProductsInCategory: [Product];
}) {
  const { t } = useTranslation("common");

  const [isMaterial, setIsMaterial] = useState(
    product.material ? product.material[0] : ""
  );

  const otherProductsInCategorySlider = [];
  for (let i = 0; i < otherProductsInCategory.length; i += 8) {
    otherProductsInCategorySlider.push(otherProductsInCategory.slice(i, i + 8));
  }
  const swiper = useSwiper();
  const [swiperInstance, setSwiperInstance] = useState(swiper);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex gap-8 pt-[52px] pb-[96px] max-sm:pb-16 max-sm:pt-0">
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
                        <Disclosure.Button className={"p-3 -m-3 rounded-none"}>
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
            <div className="flex gap-6 max-sm:flex-col">
              <div className="border border-gray-400 rounded-[10px] px-[60px] flex items-center justify-center max-sm:mx-[-16px] max-sm:rounded-none">
                <Image
                  src={product.image}
                  alt="product image"
                  width={350}
                  height={400}
                />
              </div>
              <div className="border border-gray-400 rounded-[10px] py-[60px] px-10 flex-1 max-sm:border-none max-sm:px-0 max-sm:py-8">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-3xl max-sm:text-xl max-sm:font-medium">
                    {product.name}
                  </p>
                </div>
                <div className="max-w-[216px] w-full my-8 border-t border-gray-400 max-sm:max-w-[120px] max-sm:my-[18px]" />
                <p className="text-lg opacity-50 max-sm:text-base">
                  Reference: {product.reference}
                </p>
                <p className="text-lg opacity-50 mt-6 max-sm:text-base max-sm:mt-[18px]">
                  Weight: {product.weight}
                </p>
                {product.material && (
                  <>
                    <div className="max-w-[216px] w-full my-8 border-t border-gray-400 max-sm:max-w-[120px] max-sm:my-[18px]" />
                    <div className="flex items-center gap-3">
                      <p className="text-lg opacity-50">Pa_material:</p>
                      <Listbox value={isMaterial} onChange={setIsMaterial}>
                        {({ open }) => (
                          <div className="relative">
                            <Listbox.Button className="flex gap-2 items-center text-black-500 max-sm:text-blue-400 font-normal text-base duration-150 py-[5px] px-2 rounded-[3px] border border-gray-400 max-sm:font-medium max-sm:text-sm">
                              <span>{isMaterial}</span>
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
                              <Listbox.Options className="absolute left-0 mt-[15px] z-[5] flex flex-col bg-white p-2 rounded-[5px] border border-blue-400 whitespace-nowrap w-full">
                                {product.material?.map((item, i) => (
                                  <Listbox.Option
                                    key={i}
                                    value={item}
                                    className={
                                      "py-1 w-full first:pt-0 last:pb-0 cursor-pointer"
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
                  </>
                )}
                <div className="max-w-[216px] w-full my-8 border-t border-gray-400 max-sm:max-w-[120px] max-sm:my-[18px]" />
                {product.pdfLink && (
                  <a href={product.pdfLink} target="_blanck">
                    <button className="flex items-center justify-center w-full gap-3">
                      <Image src={PdfIcon} alt="pdf icon" />
                      <p>See Technical data sheet</p>
                    </button>
                  </a>
                )}
                <a href="mailto:info@aris-makina.com">
                  <button className="blue mt-4 w-full">
                    Request more information
                  </button>
                </a>
              </div>
            </div>
            <div className="border border-gray-400 rounded-[10px] p-8 mt-8 max-sm:border-none max-sm:p-0 max-sm:mt-16">
              <div className="flex items-center justify-between pb-5 border-b border-gray-400 relative max-sm:pb-0 max-sm:border-none">
                <p className="text-blue-400 text-2xl font-medium max-sm:text-black-500 max-sm:text-xl max-sm:text-center">
                  Other products in the same category:
                </p>
                <div className="flex items-center max-sm:hidden">
                  <button
                    onClick={() => swiperInstance.slidePrev()}
                    className="w-10 h-10 bg-transparent p-0"
                  >
                    <ArrowIcon stroke="#005099" />
                  </button>
                  <button
                    onClick={() => swiperInstance.slideNext()}
                    className="rotate-180 w-10 h-10 bg-transparent p-0"
                  >
                    <ArrowIcon stroke="#005099" />
                  </button>
                </div>
              </div>
              <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                spaceBetween={18}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                className="max-w-[978px] w-full"
              >
                {otherProductsInCategorySlider.map((itemArray, index) => (
                  <SwiperSlide
                    key={index}
                    className="!grid grid-cols-4 gap-6 mt-8 max-lg:grid-cols-2 max-sm:gap-2 h-full !w-full"
                  >
                    {itemArray.map((item, i) => (
                      <Link
                        key={i}
                        href={`/catalog/${item.reference}`}
                        className="border border-gray-400 rounded-[10px]"
                      >
                        <div className="py-[31px] flex items-center justify-center max-sm:py-0">
                          <Image
                            src={item.image}
                            alt="catalog image"
                            width={120}
                            height={138}
                          />
                        </div>
                        <div className="py-6 max-sm:py-[18px] w-full border-t border-gray-400">
                          <p className="text-center text-lg max-sm:text-base">
                            {item.name}
                          </p>
                          <p className="mt-3 max-sm:mt-2.5 opacity-50 text-sm text-center">
                            Weight: {item.weight}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = PRODUCTS.map((product) => ({
    params: { productId: String(product.reference) },
  }));

  return { paths, fallback: false };
}

type Params = {
  params: {
    productId: String;
  };
};

export async function getStaticProps({ params }: Params) {
  const { productId } = params || {};
  // @ts-ignore
  const parsedProductId = parseInt(productId, 10);
  const product = PRODUCTS.find((item) => item.reference === parsedProductId);
  const otherProductsInCategory = PRODUCTS.filter(
    (item) =>
      item.category === product?.category &&
      item.reference !== product?.reference
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product, otherProductsInCategory },
  };
}
