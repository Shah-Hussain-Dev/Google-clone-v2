const SearchedImageItemTemplate = ({ data }) => {
  return (
    <div
      className=" animate__animated animate__fadeInUp hover:scale-110 transition-transform group flex flex-col py-3 cursor-pointer"
      onClick={() => window.open(data.image.contextLink)}
    >
      <div className="rounded-xl overflow-hidden bg-black/[0.1] h-[100px] md:h-[120px] lg:h-[220px]  group-hover:shadow-c ">
        <img
          src={data.link}
          className="h-full w-full object-contain animate__animated animate__fadeInUp"
        />
      </div>

      <div className="text-xs text-[#70757a] pt-2">{data.displayLink}</div>
      <div className="text-sm font-bold text-[#3c4043] animate__animated animate__fadeInUp truncate pt-1 ">
        {data.title}
      </div>
    </div>
  );
};

export default SearchedImageItemTemplate;
