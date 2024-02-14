import Header from "@/components/Header";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Image from "next/image";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

const TEAMS = [
  {
    image: "",
    name: "İskender Çalışkan",
    post: "post2",
    mail: "iskender.caliskan@aris-makina.com",
  },
  {
    image: "",
    name: "Yunus Emre Tanrıkulu",
    post: "post3",
    mail: "tanrikulu@aris-makina.com",
  },
  {
    image: "",
    name: "Ferhat Çalışkan",
    post: "post4",
    mail: "ferhat.caliskan@aris-makina.com",
  },
  {
    image: "",
    name: "Fatma Çakmak",
    post: "post1",
    mail: "fatma.cakmak@aris-makina.com",
  },
];

export default function Team() {
  const { t } = useTranslation("team");
  return (
    <>
      <NextSeo title="Our team" description="Our team" />
      <div className="h-full">
        <Header />
        <div className="max-w-[1080px] w-full mx-auto px-4 text-black-500 pb-[96px] max-sm:pb-16">
          <div className="border border-gray-400 mt-10 py-16 max-sm:py-6 px-8 max-sm:px-[18px] rounded-[10px]">
            <h1 className="text-center">{t("banner-title")}</h1>
            <p className="text-center mt-8 max-sm:mt-[18px] max-w-[650px] mx-auto text">
              {t("banner-description")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6 max-sm:grid-cols-1">
            {TEAMS.map((item, i) => (
              <ItemTeam
                key={i}
                image={item.image}
                name={item.name}
                post={item.post}
                mail={item.mail}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

const ItemTeam: React.FC<{
  image: string;
  name: string;
  post: string;
  mail: string;
}> = ({ image, name, post, mail }) => {
  const { t } = useTranslation("team");
  return (
    <div className="w-full p-16 max-sm:p-6 border border-gray-400 rounded-[10px] flex flex-col justify-center items-center gap-6">
      {/* <Image
        src={image}
        alt="team image"
        width={164}
        height={164}
        className="rounded-full object-contain max-sm:w-[108px] max-sm:h-[108px]"
      /> */}
      {/* <div className="w-[164px] h-[164px] rounded-full bg-gray-200" /> */}
      <div>
        <p className="mb-2 font-medium text-2xl max-sm:text-xl text-center">
          {name}
        </p>
        <p className="text text-center">{t(post)}</p>
      </div>
      <a href={"mailto:" + { mail }} className="text-blue-400 underline">
        {mail}
      </a>
    </div>
  );
};
