import IconCalendar from "../icons/IconCalendar";
import IconComment from "../icons/IconComment";

function LeftBox() {
  return (
    <div className="w-full lg:w-[70%]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 font-lora my-8 gap-4">
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-news-effect flex items-center justify-start lg:justify-center gap-4 my-6 cursor-pointer">
          <div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg">
            <img
              className="img-effect w-full h-[360px] object-cover"
              src="./imgs/news-1.jpg"
              alt="news 1"
            />
            <div className="absolute inset-0 bg-dark-opacity opacity-50 z-0 ease-in duration-300 border-none"></div>
            <div className="px-4 py-10 lg:p-y-0 lg:px-8 absolute inset-0 place-content-end">
              <span className="tracking-widest font-dm-san inline-block mb-4 text-white text-xs py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
                Business
              </span>
              <br />
              <a href="#" className="line-clamp-2 text-white">
                <span className="effect-hover-text effect-hover-text-white font-bold text-[26px] mb-6">
                  Emirates Palace Spends that a Hefty Sum For Emirates Palace
                  Spends that a Hefty Sum For
                </span>
              </a>
              <div className="flex items-center justify-start text-white font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm mt-6">
                <div className="flex gap-1">
                  <span>by</span>
                  <span>Justind</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconCalendar color="#fff" />
                  </span>
                  <span className="info-date">August 29, 2024</span>
                </div>
                <div className="flex gap-1">
                  <span className="inline-block w-[15px] mr-1 mt-[2px]">
                    <IconComment color="#fff" />
                  </span>
                  <span className="info-date">{`${11} comment`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBox;
