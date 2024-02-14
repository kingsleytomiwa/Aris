import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

export const metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
  },
};

export default function Contact() {
  const { t } = useTranslation("contact");
  return (
    <>
      <NextSeo
        title="Contacts"
        description="In compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679."
      />
      <div>
        <Header />
        <div className="container">
          <div className="border border-gray-400 rounded-[10px] p-16 max-sm:p-[18px] my-[96px] max-sm:my-16">
            <div className="max-w-[952px] mx-auto text-black-500">
              <h1 className="text-center">{t("title")}</h1>
              {/* <p className="text text-center max-w-[650px] mx-auto mt-8 max-sm:mt-[18px]">
                Lorem ipsum dolor sit amet consectetur. Rhoncus ut aliquet dolor
                sed vitae risus. Imperdiet ac pellentesque enim quis. Nunc sit
                pulvinar nulla dictum eget nisi enim. Quam sed mi sed malesuada
                penatibus adipiscing pellentesque varius.
              </p> */}
              <Form />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
