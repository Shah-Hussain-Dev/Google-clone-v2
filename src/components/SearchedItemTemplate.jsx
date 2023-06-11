const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { _html: html };
  }
  return (
    <div className="flex animate__animated animate__fadeInUp flex-col py-3 max-w-[700px] md:hover:scale-115 hover:scale-105 hover:shadow-2xl transition-transform shadow-lg px-4  rounded-lg my-3">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124]">{data.formatted}</div>
        <div className="text-xl group-hover:underline text-[#1a0dab] pt-2  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500 drop-shadow-lg">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-6 pt-1 "
        dangerouslySetInnerHTML={{ __html: data.htmlSnippet }}
      />
    </div>
  );
};

export default SearchedItemTemplate;
