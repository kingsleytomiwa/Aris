import Image from "next/image";
import Link from "next/link";
import PhoenIcon from "../../public/icons/phoneFooter.svg";
import MailIcon from "../../public/icons/mail.svg";
import YoutubeIcon from "../../public/icons/youtube.svg";
import FacebookIcon from "../../public/icons/facebook.svg";
import LinkedinIcon from "../../public/icons/linkedin.svg";
import InstagramIcon from "../../public/icons/instagram.svg";
import Logo from "public/images/logo.jpg";
import GeoIcon from "public/icons/geo.svg";
import { LINKS, LINKS_TOP } from "../Header";
import { twMerge } from "tailwind-merge";
import useTranslation from "next-translate/useTranslation";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="py-12 border-t border-gray-400 text-black-500">
        <div className="container flex justify-between gap-5 max-sm:flex-col">
          <div className="flex-1">
            <Image src={Logo} alt="logo" />
            <p className="mt-6 text-base font-light opacity-50">
              {t("footer-description")}
            </p>
            <div className="flex mt-[51px] gap-3">
              <a href="#!">
                <Image src={LinkedinIcon} alt="linkedin icon" />
              </a>
              <a href="#!">
                <Image src={InstagramIcon} alt="instagram icon" />
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-xl font-medium opacity-50 pb-5">
              {t("footer-links-title.title1")}
            </p>
            {LINKS_TOP.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className={twMerge("py-3", i === 5 && "hidden")}
              >
                {t(item.title)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col flex-1 max-sm:hidden">
            <p className="text-xl font-medium opacity-50 pb-5">
              {t("footer-links-title.title2")}
            </p>
            {LINKS.map((item, i) => (
              <Link key={i} href={item.link} className={twMerge("py-3")}>
                {t(item.title)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-xl font-medium opacity-50 pb-5">
              {t("footer-links-title.title3")}
            </p>
            <a
              href="tel:+90(552) 305 24 50"
              className="flex items-center gap-3 py-3"
            >
              <Image src={PhoenIcon} alt="phone icon" />
              <p className="text-base">+90(552) 305 24 50 </p>
            </a>
            <a
              href="mailto:info@aris-makina.com"
              className="flex items-center gap-3 py-3"
            >
              <Image src={MailIcon} alt="mail icon" />
              <p className="text-base">info@aris-makina.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="!py-3 bg-black-500">
        <p className="text-white text-center">{t("footer-title")}</p>
      </div>
    </>
  );
};

export default Footer;
