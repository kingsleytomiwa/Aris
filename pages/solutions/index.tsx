import Header from "@/components/Header";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import { NextSeo } from "next-seo";
import Link from "next/link";

const INFO = [
  {
    image: "/icons/solutions/1.png",
    text: "info-menu1.item1",
  },
  {
    image: "/icons/solutions/2.png",
    text: "info-menu1.item2",
  },
  {
    image: "/icons/solutions/3.png",
    text: "info-menu1.item3",
  },
  {
    image: "/icons/solutions/4.png",
    text: "info-menu1.item4",
  },
  {
    image: "/icons/solutions/5.png",
    text: "info-menu1.item5",
  },
  {
    image: "/icons/solutions/6.png",
    text: "info-menu1.item6",
  },
];

const INFO2 = [
  {
    image: "/icons/solutions/8.png",
    text: "info-menu2.item1",
  },
  {
    image: "/icons/solutions/9.png",
    text: "info-menu2.item2",
  },
  {
    image: "/icons/solutions/10.png",
    text: "info-menu2.item3",
  },
];

const SOLUTIONS = [
  {
    title: "info-menu3.item1.title",
    description: "info-menu3.item1.description",
  },
  {
    title: "info-menu3.item2.title",
    description: "info-menu3.item2.description",
  },
  {
    title: "info-menu3.item3.title",
    description: "info-menu3.item3.description",
  },
  {
    title: "info-menu3.item4.title",
    description: "info-menu3.item4.description",
  },
  {
    title: "info-menu3.item5.title",
    description: "info-menu3.item5.description",
  },
  {
    title: "info-menu3.item6.title",
    description: "info-menu3.item6.description",
  },
];

const WHY = [
  {
    image: "/icons/solutions/11.png",
    text: "info-menu4.item1",
  },
  {
    image: "/icons/solutions/12.png",
    text: "info-menu4.item2",
  },
  {
    image: "/icons/solutions/13.png",
    text: "info-menu4.item3",
  },
  {
    image: "/icons/solutions/14.png",
    text: "info-menu4.item4",
  },
  {
    image: "/icons/solutions/15.png",
    text: "info-menu4.item5",
  },
  {
    image: "/icons/solutions/16.png",
    text: "info-menu4.item6",
  },
];

export default function Solutions() {
  const { t } = useTranslation("solutions");
  return (
    <>
      <NextSeo title="Solutions" description="Solutions for your needs" />
      <div className="h-full">
        <Header />
        <div className="h-[762px] max-sm:h-[414px] bg-[url('/images/solutions.jpg')] bg-no-repeat bg-cover w-full text-white">
          <div className="container flex flex-col justify-center h-full">
            <h1 className="text-[52px] font-bold leading-[52px] max-sm:text-3xl max-sm:leading-[32px] max-sm:text-center">
              {t("banner-title1")}
            </h1>
            <div className="max-w-[64px] w-full border-t border-gray-400 my-6" />
            <p className="text !opacity-100">{t("banner-description1")}</p>
            <div />
          </div>
        </div>
        <div className="max-w-[1080px] w-full py-[96px] max-sm:py-16 px-4 mx-auto text-black-500">
          <div className="border border-gray-400 rounded-[10px] p-16 max-sm:p-[18px]">
            <p className="text text-center py-8 max-w-[650px] mx-auto">
              <strong>{t("info-text1")}</strong>
            </p>
            <p className="text-2xl font-medium text-center max-sm:text-xl">
              {t("info-title1")}
            </p>
            <div className="grid grid-cols-3 mt-6 gap-6 max-sm:grid-cols-1">
              {INFO.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center border border-gray-400 rounded-[10px] p-10 max-sm:p-[18px]"
                >
                  <Image
                    src={item.image}
                    alt="info image"
                    width={72}
                    height={72}
                    className="max-sm:w-[52px] max-sm:h-[52px]"
                  />
                  <p className="text-blue-400 text-xl max-sm:text-lg mt-6 max-sm:mt-[18px] text-center">
                    {t(item.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={"/images/solutions-banner.jpg"}
          alt="banner"
          height={400}
          width={0}
          sizes="100vw"
          className="w-full h-[400px] object-cover"
        />
        <div className="container">
          <div className="py-[96px] max-sm:py-16">
            <div className="flex gap-6 max-sm:flex-col">
              {INFO2.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center flex-1 p-10 max-sm:p-[18px] border border-gray-400 rounded-[10px]"
                >
                  <Image
                    src={item.image}
                    alt="info image"
                    width={76}
                    height={76}
                  />
                  <p className="text-black-500 font-medium text-xl mt-6 text-center max-sm:text-lg max-sm:mt-[18px]">
                    {t(item.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1080px] w-full pb-[96px] max-sm:pb-16 px-4 mx-auto text-black-500">
          <div className="border border-gray-400 rounded-[10px] py-16 px-[128px] max-sm:py-6 max-sm:px-[18px]">
            <p className="text text-center max-w-[650px] mx-auto mt-8 max-sm:mt-[18px]">
              <strong>{t("info-text3")}</strong>
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8 max-sm:grid-cols-1 max-sm:gap-[18px] max-sm:mt-6">
              {SOLUTIONS.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-400 rounded-[10px] p-10 max-sm:p-[18px]"
                >
                  <p className="text-blue-400 font-medium text-xl max-sm:text-lg max-sm:text-center">
                    {t(item.title)}
                  </p>
                  <div className="w-[72px] border-t border-gray-400 my-4 max-sm:w-full" />
                  <p
                    className="font-light text-base max-sm:text-center"
                    dangerouslySetInnerHTML={{ __html: t(item.description) }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 h-[416px]">
            <iframe
              src="https://www.youtube.com/embed/U_gTGmDWz2k?feature=oembed&amp;rel=0&amp;controls=1&amp;showinfo=1&amp;wmode=opaque&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.mrfsolutions.com&amp;autoplay=1"
              loading="lazy"
              data-gtm-yt-inspected-32932664_20="true"
              id="305064994"
              title="MRF: INDUSTRIAL CO-DEVELOPMENT EN"
              width={"100%"}
              height={"100%"}
            ></iframe>
          </div>
        </div>
        <div className="py-[96px] max-sm:py-16 bg-blue-400 px-4 text-white">
          <div className="max-w-[780px] w-full mx-auto flex flex-col items-center">
            <p className="font-bold text-[52px] text-white text-center max-sm:text-3xl max-sm:font-semibold leading-[52px] max-sm:leading-[28px]">
              {t("blue-banner-text")}
            </p>
            <Link href={"/contact"}>
              <button className="white mt-8">{t("blue-banner-button")}</button>
            </Link>
          </div>
        </div>
        <div className="max-w-[1080px] w-full py-[96px] max-sm:py-16 px-4 mx-auto text-black-500">
          <div className="border border-gray-400 rounded-[10px] p-16 max-sm:p-[18px]">
            <h1 className="text-center">{t("info-title4")}</h1>
            <p className="text text-center py-8 max-w-[650px] mx-auto">
              <strong>{t("info-description4")}</strong>
            </p>
            <div className="grid grid-cols-3 mt-6 gap-6 max-sm:grid-cols-1">
              {WHY.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center border border-gray-400 rounded-[10px] p-10 max-sm:p-[18px]"
                >
                  <Image
                    src={item.image}
                    alt="info image"
                    width={72}
                    height={72}
                    className="max-sm:w-[52px] max-sm:h-[52px]"
                  />
                  <p className="text-xl max-sm:text-lg mt-6 max-sm:mt-[18px] text-center">
                    {t(item.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={"/images/solutions-banner2.jpg"}
          alt="solutions"
          width={0}
          height={656}
          sizes="100vw"
          className="w-full h-[656px] max-sm:h-[414px] object-cover"
        />
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
