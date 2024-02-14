import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Custom404() {
  return (
    <div>
      <Header />
      <div className="max-w-[1080px] py-[96px] max-sm:py-16 px-4 mx-auto">
        <div className="border border-gray-400 rounded-[10px] py-16 max-sm:py-4 px-4">
          <p className="text-blue-400 text-[114px] font-bold text-center max-sm:text-4xl sm:leading-[114px]">
            404
          </p>
          <p className="text-center font-semibold text-4xl max-sm:text-xl my-8 max-sm:my-4">
            Oops! Page Not Found
          </p>
          <p className="text-center max-w-[650px] mx-auto text-base font-light opacity-50">
            We&apos;re sorry, but the page you are looking for might have been
            removed, had its name changed, or is temporarily unavailable.
          </p>
          <button className="mt-8 mx-auto block max-sm:mt-4">
            Go to the home page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
