import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { imageSearch, setImageSearch } = useContext(Context);
  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    setImageSearch(isTypeImage ? true : false);
  };
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-3 z-10  border-b  border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white ">
      <div className="flex items-center justify-between w-full ">
        <Link to={"/"}>
          <img
            src={Logo}
            className="hidden md:block w-[200px] mr-10  animate__animated animate__fadeInDown hover:scale-110 transition-transform"
          />
        </Link>
        <div className="flex items-center  grow ">
          <SearchInput from="searchResult" />
        </div>
        <div>
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] justify-center  mt-4 gap-3">
        {menu.map((menu, index) => (
          <div
            key={index}
            className={`flex animate__animated animate__fadeInDown items-center  p-3 text-[#5f6368] hover:bg-[#eef4f8] hover:shadow-lg  mb-2 transition-all  rounded-full hover:scale-110 relative cursor-pointer ${
              selectedMenu === menu.name
                ? "text-[#fff] bg-gradient-to-r  from-cyan-500 to-blue-500  italic font-bold shadow-lg rounded-full"
                : ""
            } `}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2  ">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {/* { selectedMenu === menu.name && (
                <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left=[10px]"></span>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
