import useTranslation from "next-translate/useTranslation";
import Input from "../ui/Input";

interface Props {}

const Form: React.FC<Props> = ({}) => {
  const { t } = useTranslation("contact");
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        <Input
          label={t("form1.label")}
          forms
          placeholder={t("form1.placeholder")}
        />
        <Input
          label={t("form2.label")}
          forms
          placeholder={t("form2.placeholder")}
        />
        <Input
          label={t("form3.label")}
          forms
          placeholder={t("form3.placeholder")}
        />
        <Input
          label={t("form4.label")}
          forms
          placeholder={t("form4.placeholder")}
        />
      </div>
      <Input
        label={t("form5.label")}
        forms
        className="mt-6"
        placeholder={t("form5.placeholder")}
      />
      <Input
        label={t("form6.label")}
        forms
        className="mt-6"
        placeholder={t("form6.placeholder")}
      />
      <Input
        textarea
        forms
        label={t("form7.label")}
        inputClassName="h-[140px]"
        className="mt-6"
      />
      <div className="flex gap-4 items-center mt-6">
        <Input type="checkbox" className="w-fit" />
        <p className="text-base font-light">
          I have read and accept{" "}
          <a href="#!" className="underline font-normal">
            the terms and conditions of the RGPD
          </a>
        </p>
      </div>
      <button className="mt-10 w-full">{t("button")}</button>
    </div>
  );
};

export default Form;
