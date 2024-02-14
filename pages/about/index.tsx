import Header from "@/components/Header";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import QualityImage from "../../public/images/quality.png";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import { NextSeo } from "next-seo";

const INFO = [
  {
    image: "/icons/calendar.svg",
    title: "More than 50 years of experience",
    text: "Evolving with our own style since 1966.",
  },
  {
    image: "/icons/travel.svg",
    title: "International presence",
    text: "Exporters since 1990 in more than 30 countries.",
  },
  {
    image: "/icons/clients.svg",
    title: "More than 400 clients",
    text: "A wide range of steel solutions for every need.",
  },
  {
    image: "/icons/connection.svg",
    title: "Quality and functionality",
    text: "Research and Development in-house.",
  },
];

export default function About() {
  const { t } = useTranslation("about");
  return (
    <>
      <NextSeo
        title="About Us"
        description="MRF has more than 50 years of experience"
      />
      <div className="h-full">
        <Header />
        <div className="h-[762px] max-sm:h-[414px] bg-[url('/images/bg/empresa.png')] bg-no-repeat bg-cover w-full text-white">
          <div className="container flex flex-col justify-center h-full">
            <h1 className="text-[52px] font-bold leading-[52px] max-sm:text-3xl max-sm:leading-[32px] max-sm:text-center max-w-[600px]">
              {t("banner-title")}
            </h1>
            <div className="max-w-[64px] w-full border-t border-gray-400 my-6 max-sm:max-w-full" />
            <p className="text !opacity-100 max-w-[800px]">
              {t("banner-description")}
            </p>
            <div />
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto py-[96px] max-sm:py-16 px-4 text-black-500">
          <div className="border border-gray-400 rounded-[10px] p-16 max-sm:p-[18px]">
            <h1 className="text-center">Mecanizados Rodriguez Fernandez SL</h1>
            <div
              dangerouslySetInnerHTML={{ __html: t("info") }}
              className="text-center flex flex-col gap-6 mt-8 max-w-[650px] mx-auto text"
            ></div>
          </div>
        </div>
        <div className="container text-black-500 !pb-[96px] max-sm:!pb-16">
          <div className="flex gap-6 max-sm:flex-col">
            <div className="border border-gray-400 rounded-[10px] py-[84px] px-8 flex-1 max-sm:py-6 max-sm:px-[18px]">
              <h1>{t("banner2-title")}</h1>
              <div className="w-[74px] border-t border-gray-400 my-6 max-sm:w-full" />
              <div
                dangerouslySetInnerHTML={{ __html: t("banner2-info") }}
                className="flex flex-col gap-6 text max-sm:text-center"
              ></div>
            </div>
            <Image
              src={"/images/mision.png"}
              alt="mission"
              width={420}
              height={439}
              className="flex-1 object-cover rounded-[10px]"
            />
          </div>
          <div className="flex gap-6 max-sm:flex-col-reverse mt-6">
            <Image
              src={"/images/values.png"}
              alt="mission"
              width={420}
              height={439}
              className="flex-1 object-cover rounded-[10px]"
            />
            <div className="border border-gray-400 rounded-[10px] py-[84px] px-8 flex-1 max-sm:py-6 max-sm:px-[18px]">
              <h1>{t("banner3-title")}</h1>
              <div className="w-[74px] border-t border-gray-400 my-6 max-sm:w-full" />
              <ul
                dangerouslySetInnerHTML={{ __html: t("banner3-info") }}
                className="text-base list-disc mt-5 opacity-50 ml-5 flex flex-col max-sm:items-center"
              ></ul>
            </div>
          </div>
          <div className="flex gap-6 max-sm:flex-col mt-6">
            <div className="border border-gray-400 rounded-[10px] py-[84px] px-8 flex-1 max-sm:py-6 max-sm:px-[18px]">
              {t("banner4-title")}
              <div
                dangerouslySetInnerHTML={{ __html: t("banner4-info") }}
                className="flex flex-col gap-6 text-base text mt-6 max-sm:text-center"
              ></div>
            </div>
            <Image
              src={"/images/rdi.png"}
              alt="mission"
              width={420}
              height={439}
              className="flex-1 object-cover rounded-[10px]"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
