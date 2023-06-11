import Logo from "../assets/logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex h-[100dvh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center justify-center mb-32  md:mb-44">
          <img
            src={Logo}
            className="animate__animated animate__fadeInDown w-[80vw] md:w-[500px] mb-5 drop-shadow-lg hover:scale-110 transition-transform "
          />
          <SearchInput />
          <div className="flex gap-2 mt-8 text-[#3c4043]">
            <button className="animate__animated animate__fadeInDown h-9 hover:scale-105 font-bold transition-transform px-4 hover:text-white hover:bg-gradient-to-r  from-cyan-500 to-blue-500 text-sm  bg-[#eef4f8] rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-lg">
              Quick Search
            </button>
            <button className=" animate__animated animate__fadeInDown h-9 hover:scale-105  font-bold  transition-transform px-4 hover:text-white hover:bg-gradient-to-r  from-cyan-500 to-blue-500 text-sm  bg-[#eef4f8] rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-lg">
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
