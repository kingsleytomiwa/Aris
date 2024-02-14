import Header from "@/components/Header";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import QualityImage from "../public/images/quality.png";
import Footer from "@/components/Footer";
import ArrowIcon from "public/icons/arrow-big.svg";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import BlogItem from "@/components/BlogItem";
import { NextSeo } from "next-seo";

export default function Home() {
  const { t } = useTranslation("index");

  const BANNER_TOP = [
    {
      image: "/icons/calendar.svg",
      title: t("why-item1"),
    },
    {
      image: "/icons/travel.svg",
      title: t("why-item2"),
    },
    {
      image: "/icons/connection.svg",
      title: t("why-item3"),
    },
  ];
  return (
    <>
      <NextSeo
        title="Main"
        description="Steel solutions for bodywork and other industrial sectors"
      />
      <div className="h-full">
        <Header />
        <div className="h-[762px] max-sm:h-[414px] bg-[url('/images/index-image.jpg')] bg-no-repeat bg-cover w-full text-white">
          <div className="container flex flex-col justify-center h-full">
            <h1 className="text-[52px] font-bold leading-[52px] max-sm:text-3xl max-sm:leading-[32px] max-sm:text-center max-w-[850px]">
              {t("banner-title")}
            </h1>
            <div className="flex gap-6 mt-8 max-sm:gap-4 max-sm:flex-col">
              <Link href={"/contact"}>
                <button className="white max-sm:w-full">{t("button1")}</button>
              </Link>
              <Link href={"/catalog"}>
                <button className="transperent max-sm:w-full">
                  {" "}
                  {t("button2")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex gap-6 py-[96px] max-sm:py-16 max-sm:flex-col max-sm:gap-[18px]">
            {BANNER_TOP.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-center justify-center max-sm:justify-start gap-6 py-8 px-3 max-sm:p-[18px] rounded-[10px] border border-gray-400"
              >
                <div className="p-5 max-sm:p-3 bg-blue-400 rounded-[10px]">
                  <Image
                    src={item.image}
                    alt="banner top image"
                    width={42}
                    height={42}
                    className="max-sm:w-[28px] max-sm:h-[28px]"
                  />
                </div>
                <p className="text-center text-2xl max-sm:text-lg max-sm:font-normal font-medium text-black-500 max-w-[170px] max-sm:max-w-full">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[url('/images/bg/2.jpg')] bg-no-repeat bg-cover h-[700px] flex items-center max-sm:h-[414px] text-white">
          <div className="container">
            <div className="w-1/2 max-sm:w-full mx-auto text-center">
              <h1>{t("banner2-title")}</h1>
              <div className="my-6 border-b border-white max-w-[64px] max-sm:max-w-full mx-auto" />
              <p className="text-base mb-8 font-light max-sm:text-center">
                {t("banner2-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/images/bg/3.jpg')] bg-no-repeat bg-cover h-[700px] flex items-center max-sm:h-[414px] text-white mt-20">
          <div className="container">
            <div className="w-1/2 max-sm:w-full mx-auto text-center">
              <h1>{t("banner3-title")}</h1>
              <div className="my-6 border-b border-white max-w-[64px] max-sm:max-w-full mx-auto" />
              <p className="text-base mb-8 font-light max-sm:text-center">
                {t("banner3-description")}
              </p>
            </div>
          </div>
        </div>
        <div className="py-[96px] max-sm:hidden">
          <Marquee className="!w-auto">
            {["1.jfif", "2.jfif", "3.jfif", "4.jpg", "5.jfif", "6.jfif"].map(
              (file) => (
                <div
                  key={file}
                  className="py-[17px] px-[45px] rounded-[10px] border border-gray-400 mr-10"
                >
                  <Image
                    src={`/images/clients/${file}`}
                    alt="client images"
                    width={190}
                    height={86}
                    className="w-[190px] h-[86px] object-cover"
                  />
                </div>
              )
            )}
          </Marquee>
        </div>
        <div className="sm:hidden !py-16 grid grid-cols-2 gap-[18px] container">
          {["1.jfif", "2.jfif", "3.jfif", "4.jpg", "5.jfif", "6.jfif"].map(
            (file) => (
              <div
                key={file}
                className="py-2.5 px-6 rounded-[10px] border border-gray-400 flex justify-center"
              >
                <Image
                  src={`/images/clients/${file}`}
                  alt="client images"
                  width={115}
                  height={51}
                  className="h-[51px] object-cover"
                />
              </div>
            )
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
