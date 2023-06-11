import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className=" animate__animated animate__fadeIn bg-gradient-to-r from-blue-200 to-cyan-200 shadow-lg">
      <div className="flex justify-center py-[15px] px[15px] md:px-[30px]  ">
        <p className="md:px-0 px-2 text-[15px] cursor-pointer text-gray-600 leading-none font-bold text-center ">
          Desing and Developed by{" "}
          <span className=" hover:scale-150 transition-all hover:pl-8 inline-block">
            <a
              href="https://github.com/Shah-Hussain-Dev"
              className="text-black font-extrabold italic  text-lg"
              target="_blank"
            >
              Shah Husain 🦸{" "}
            </a>
          </span>{" "}
        </p>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
            <div className="flex justify-items-center">
                {quickLinks.map((menu,index)=>(
                    <span key={index} className="font-bold  text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                        {menu}
                    </span>
                ))}
            </div>
            <div className="flex justify-items-center">
                {settingMenu.map((menu,index)=>(
                    <span key={index} className="font-bold text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                        {menu}
                    </span>
                ))}
            </div>
        </div> */}
    </div>
  );
};

export default Footer;
