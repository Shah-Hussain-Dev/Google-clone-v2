import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div className="animate__animated animate__fadeInDown h-[46px] md:w-[584px] px-2 flex items-center justify-center md:gap-3 md:mr-0 mr-2 border border-[#dfe1e5] px-4 rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c  focus-within:outline-0">
      <AiOutlineSearch size={18} color="#9aa0a6" className="mr-1" />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            className="cursor-pointer "
            color="#70757a"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img src={MicIcon} className="h-6 w-6 cursor-pointer" />
        <img src={ImageIcon} className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchInput;
