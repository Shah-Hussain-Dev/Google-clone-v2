import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5 ">
      <div className="flex gap-4">
        <span className=" animate__animated animate__fadeInDown text-[13px] inline-block  hover:scale-125 transition-all line-height hover:underline cursor-pointer font-extrabold text-transparent  bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
          Qmail
        </span>
        <span className="animate__animated animate__fadeInDown text-[13px] inline-block  hover:scale-125 transition-all line-height hover:underline cursor-pointer font-extrabold text-transparent  bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
