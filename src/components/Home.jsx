import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex h-[100dvh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img src={Logo} className="w-[172px] md:w-[272px] mb-8 " />
          <SearchInput className="" />
          <div className="flex gap-2 mt-8 text-[#3c4043]">
            <button className="h-9 px-4 bg-[#eef4f8] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#eef4f8] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky!
            </button>
          </div>
        </div>
      </main>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
