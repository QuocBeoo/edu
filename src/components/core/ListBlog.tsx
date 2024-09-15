function ListBlog() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="box-news-effect flex items-center justify-center gap-4 mb-6 cursor-pointer">
        <div className="h-[85px] min-h-[85px] w-[110px] min-w-[110px] overflow-hidden rounded-lg">
          <img
            className="img-effect w-[110px] h-[85px] object-cover"
            src="./imgs/news-1.jpg"
            alt="news 1"
          />
        </div>
        <div>
          <div className="uppercase font-dm-san font-semibold text-sm mb-2">
            <span className="text-business tracking-[1px] ">Business</span>
            <div className="relative pl-2 inline-block ml-2">
              <img
                className="inline-block w-[15px] mr-2"
                src="./icons/icon-calendar.svg"
                alt="icon calendar"
              />
              <span className="info-date text-sub-title-news dark:text-d-sub-title-news font-encode">
                August 29, 2024
              </span>
            </div>
          </div>
          <span className="effect-hover-text font-bold text-black-primary-news dark:text-white">
            We Believe Announce Will the iPhone this
          </span>
        </div>
      </div>
      <div className="box-news-effect flex items-center justify-center gap-4 mb-6 cursor-pointer">
        <div className="h-[85px] min-h-[85px] w-[110px] min-w-[110px] overflow-hidden rounded-lg">
          <img
            className="img-effect w-[110px] h-[85px] object-cover"
            src="./imgs/news-2.jpg"
            alt="news 2"
          />
        </div>
        <div>
          <div className="uppercase font-dm-san font-semibold text-sm mb-2">
            <span className="text-fashion tracking-[1px]">Fashion</span>
            <div className="relative pl-2 inline-block ml-2">
              <img
                className="inline-block w-[15px] mr-2"
                src="./icons/icon-calendar.svg"
                alt="icon calendar"
              />
              <span className="info-date text-sub-title-news dark:text-d-sub-title-news font-encode">
                August 29, 2024
              </span>
            </div>
          </div>
          <span className="effect-hover-text font-bold text-black-primary-news dark:text-white">
            We Believe Announce Will the iPhone this
          </span>
        </div>
      </div>
      <div className="box-news-effect flex items-center justify-center gap-4 mb-6 cursor-pointer">
        <div className="h-[85px] min-h-[85px] w-[110px] min-w-[110px] overflow-hidden rounded-lg">
          <img
            className="img-effect w-[110px] h-[85px] object-cover"
            src="./imgs/news-3.jpg"
            alt="news 3"
          />
        </div>
        <div>
          <div className="uppercase font-dm-san font-semibold text-sm mb-2">
            <span className="text-interview tracking-[1px] ">interview</span>
            <div className="relative pl-2 inline-block ml-2">
              <img
                className="inline-block w-[15px] mr-2"
                src="./icons/icon-calendar.svg"
                alt="icon calendar"
              />
              <span className="info-date text-sub-title-news dark:text-d-sub-title-news font-encode">
                August 29, 2024
              </span>
            </div>
          </div>
          <span className="effect-hover-text font-bold text-black-primary-news dark:text-white">
            We Believe Announce Will the iPhone this
          </span>
        </div>
      </div>
      <div className="box-news-effect flex items-center justify-center gap-4 mb-6 cursor-pointer">
        <div className="h-[85px] min-h-[85px] w-[110px] min-w-[110px] overflow-hidden rounded-lg">
          <img
            className="img-effect w-[110px] h-[85px] object-cover"
            src="./imgs/news-4.jpg"
            alt="news 4"
          />
        </div>
        <div>
          <div className="uppercase font-dm-san font-semibold text-sm mb-2">
            <span className="text-edu tracking-[1px] ">education</span>
            <div className="relative pl-2 inline-block ml-2">
              <img
                className="inline-block w-[15px] mr-2"
                src="./icons/icon-calendar.svg"
                alt="icon calendar"
              />
              <span className="info-date text-sub-title-news dark:text-d-sub-title-news font-encode">
                August 29, 2024
              </span>
            </div>
          </div>
          <span className="effect-hover-text font-bold text-black-primary-news dark:text-white">
            We Believe Announce Will the iPhone this
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListBlog;
