import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate, Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {
  console.log(queries);
  const { query } = useParams();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const paginationClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };

  return (
    <div className="flex flex-col items-center py-14 max-w-[700px]">
      <div className="relative text-[#4285f4]">
        {/* {queries.nextPage[0].startIndex > 1 && (
          <div
            className="absolute left-[-30px] md:left-[-40px] top-[10px]"
            onClick={() =>
              paginationClickHandler(queries.nextPage[0].startIndex - 1)
            }
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              Prev
            </span>
          </div>
        )} */}

        <Link to={"/"}>
          <img
            className="w-[250px] animate__animated animate__fadeInUp  md:w-[300px] my-2 hover:scale-125 transition-all"
            src={Logo}
          />
        </Link>
        {/* {queries.nextPage && (
          <div
            className="absolute right-[-30px] md:right-[-40px] top-[10px]"
            onClick={() =>
              paginationClickHandler(queries.nextPage[0].startIndex)
            }
          >
            <FiChevronRight size={20} className="cursor-pointer" />
            <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              Next
            </span>
          </div>
        )} */}
      </div>
      <div className="flex gap-3 flex-wrap  justify-center text-[#4285f4] text-sm">
        {pagination.map((p) => (
          <span
            key={p.page}
            onClick={() => paginationClickHandler(p.startIndex)}
            className={` animate__animated animate__fadeInUp cursor-pointer mt-2 mb-2 hover:scale-125 transition-all text-[16px] inline-block px-4 shadow-lg py-2 rounded-full ${
              page === p.startIndex
                ? "text-[#fff] bg-gradient-to-r  from-cyan-500 to-blue-500  italic font-bold shadow-lg rounded-full  "
                : "text-blue"
            }`}
          >
            {p.page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
