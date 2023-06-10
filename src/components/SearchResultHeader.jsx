import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const clickHandler = (menuItem) => {
    setSelectedMenu(menuItem.name);
  };
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-3  border-b  border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white ">
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center grow">
          <Link to={"/"}>
            {" "}
            <img src={Logo} className="hidden md:block w-[200px] mr-10" />
          </Link>

          <SearchInput from="searchResult" />
        </div>
        <div>
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center p-3 text-[#5f6368] mb-2 transition-all relative cursor-pointer ${
              selectedMenu === menu.name ? "text-[#1a73e8] bg-[#eef4f8] italic font-bold shadow-lg rounded-full" : ""
            } `}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
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
