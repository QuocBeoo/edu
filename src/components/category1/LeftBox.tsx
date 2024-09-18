import IconCalendar from "../icons/IconCalendar";
import IconComment from "../icons/IconComment";

function LeftBox() {
  return (
    <div className="w-full lg:w-[70%]">
      <div className="p-4 lg:p-0 flex-col lg:flex-row flex items-center justify-center box-news-effect cursor-pointer gap-0 border border-[#e1e1e1] dark:border-none rounded-md overflow-hidden mb-8">
        <div className="w-full h-[330px] min-h-[330px] md:w-full lg:w-[325px] min-w-[350px] lg:min-w-[325px] overflow-hidden border border-[#e1e1e1] rounded-md dark:border-none lg:border-none lg:rounded-none">
          <img
            className="img-effect w-full md:w-full lg:w-[325px] h-[330px] object-cover"
            src="./imgs/business.jpg"
            alt="business"
          />
        </div>
        <div className="px-4 pt-8 pb-4 lg:p-y-0 lg:px-8">
          <span className="tracking-widest font-dm-san inline-block mb-3 text-white text-xs border dark:border-none py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
            Business
          </span>
          <br />
          <a
            href="#"
            className="line-clamp-2 text-black-primary-news dark:text-white"
          >
            <span className="effect-hover-text font-bold text-[26px]">
              Emirates Palace Spends that a Hefty Sum For Emirates Palace Spends
              that a Hefty Sum ForEmirates Palace Spends that a Hefty Sum
              ForEmirates Palace Spends that a Hefty Sum ForEmirates Palace
              Spends that a Hefty Sum For
            </span>
          </a>
          <div className="my-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that
          </div>
          <div className="flex items-center justify-start text-black-second-news dark:text-d-sub-title-news font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm">
            <div className="flex gap-1">
              <span>by</span>
              <span>Justind</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconCalendar />
              </span>
              <span className="info-date">August 29, 2024</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconComment />
              </span>
              <span className="info-date">{`${11} comment`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-0 flex-col lg:flex-row flex items-center justify-center box-news-effect cursor-pointer gap-0 border border-[#e1e1e1] dark:border-none rounded-md overflow-hidden mb-8">
        <div className="w-full h-[330px] min-h-[330px] md:w-full lg:w-[325px] min-w-[350px] lg:min-w-[325px] overflow-hidden border border-[#e1e1e1] rounded-md dark:border-none lg:border-none lg:rounded-none">
          <img
            className="img-effect w-full md:w-full lg:w-[325px] h-[330px] object-cover"
            src="./imgs/news-1.jpg"
            alt="business"
          />
        </div>
        <div className="px-4 pt-8 pb-4 lg:p-y-0 lg:px-8">
          <span className="tracking-widest font-dm-san inline-block mb-3 text-white text-xs border dark:border-none py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-fashion hover:rounded-tl-full hover:rounded-tr-none">
            Fashion
          </span>
          <br />
          <a
            href="#"
            className="line-clamp-2 text-black-primary-news dark:text-white"
          >
            <span className="effect-hover-text font-bold text-[26px]">
              Emirates Palace Spends that a Hefty Sum For Emirates Palace Spends
              that a Hefty Sum ForEmirates Palace Spends that a Hefty Sum
              ForEmirates Palace Spends that a Hefty Sum ForEmirates Palace
              Spends that a Hefty Sum For
            </span>
          </a>
          <div className="my-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that
          </div>
          <div className="flex items-center justify-start text-black-second-news dark:text-d-sub-title-news font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm">
            <div className="flex gap-1">
              <span>by</span>
              <span>Justind</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconCalendar />
              </span>
              <span className="info-date">August 29, 2024</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconComment />
              </span>
              <span className="info-date">{`${11} comment`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-0 flex-col lg:flex-row flex items-center justify-center box-news-effect cursor-pointer gap-0 border border-[#e1e1e1] dark:border-none rounded-md overflow-hidden mb-8">
        <div className="w-full h-[330px] min-h-[330px] md:w-full lg:w-[325px] min-w-[350px] lg:min-w-[325px] overflow-hidden border border-[#e1e1e1] rounded-md dark:border-none lg:border-none lg:rounded-none">
          <img
            className="img-effect w-full md:w-full lg:w-[325px] h-[330px] object-cover"
            src="./imgs/news-2.jpg"
            alt="business"
          />
        </div>
        <div className="px-4 pt-8 pb-4 lg:p-y-0 lg:px-8">
          <span className="tracking-widest font-dm-san inline-block mb-3 text-white text-xs border dark:border-none py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-interview hover:rounded-tl-full hover:rounded-tr-none">
            Interview
          </span>
          <br />
          <a
            href="#"
            className="line-clamp-2 text-black-primary-news dark:text-white"
          >
            <span className="effect-hover-text font-bold text-[26px]">
              Emirates Palace Spends that a Hefty Sum For Emirates Palace Spends
              that a Hefty Sum ForEmirates Palace Spends that a Hefty Sum
              ForEmirates Palace Spends that a Hefty Sum ForEmirates Palace
              Spends that a Hefty Sum For
            </span>
          </a>
          <div className="my-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that
          </div>
          <div className="flex items-center justify-start text-black-second-news dark:text-d-sub-title-news font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm">
            <div className="flex gap-1">
              <span>by</span>
              <span>Justind</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconCalendar />
              </span>
              <span className="info-date">August 29, 2024</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconComment />
              </span>
              <span className="info-date">{`${11} comment`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-0 flex-col lg:flex-row flex items-center justify-center box-news-effect cursor-pointer gap-0 border border-[#e1e1e1] dark:border-none rounded-md overflow-hidden mb-8">
        <div className="w-full h-[330px] min-h-[330px] md:w-full lg:w-[325px] min-w-[350px] lg:min-w-[325px] overflow-hidden border border-[#e1e1e1] rounded-md dark:border-none lg:border-none lg:rounded-none">
          <img
            className="img-effect w-full md:w-full lg:w-[325px] h-[330px] object-cover"
            src="./imgs/news-3.jpg"
            alt="business"
          />
        </div>
        <div className="px-4 pt-8 pb-4 lg:p-y-0 lg:px-8">
          <span className="tracking-widest font-dm-san inline-block mb-3 text-white text-xs border dark:border-none py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-edu hover:rounded-tl-full hover:rounded-tr-none">
            education
          </span>
          <br />
          <a
            href="#"
            className="line-clamp-2 text-black-primary-news dark:text-white"
          >
            <span className="effect-hover-text font-bold text-[26px]">
              Emirates Palace Spends that a Hefty Sum For Emirates Palace Spends
              that a Hefty Sum ForEmirates Palace Spends that a Hefty Sum
              ForEmirates Palace Spends that a Hefty Sum ForEmirates Palace
              Spends that a Hefty Sum For
            </span>
          </a>
          <div className="my-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that
          </div>
          <div className="flex items-center justify-start text-black-second-news dark:text-d-sub-title-news font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm">
            <div className="flex gap-1">
              <span>by</span>
              <span>Justind</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconCalendar />
              </span>
              <span className="info-date">August 29, 2024</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconComment />
              </span>
              <span className="info-date">{`${11} comment`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-0 flex-col lg:flex-row flex items-center justify-center box-news-effect cursor-pointer gap-0 border border-[#e1e1e1] dark:border-none rounded-md overflow-hidden mb-8">
        <div className="w-full h-[330px] min-h-[330px] md:w-full lg:w-[325px] min-w-[350px] lg:min-w-[325px] overflow-hidden border border-[#e1e1e1] rounded-md dark:border-none lg:border-none lg:rounded-none">
          <img
            className="img-effect w-full md:w-full lg:w-[325px] h-[330px] object-cover"
            src="./imgs/articles-3.jpg"
            alt="business"
          />
        </div>
        <div className="px-4 pt-8 pb-4 lg:p-y-0 lg:px-8">
          <span className="tracking-widest font-dm-san inline-block mb-3 text-white text-xs border dark:border-none py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-health hover:rounded-tl-full hover:rounded-tr-none">
            health
          </span>
          <br />
          <a
            href="#"
            className="line-clamp-2 text-black-primary-news dark:text-white"
          >
            <span className="effect-hover-text font-bold text-[26px]">
              Emirates Palace Spends that a Hefty Sum For Emirates Palace Spends
              that a Hefty Sum ForEmirates Palace Spends that a Hefty Sum
              ForEmirates Palace Spends that a Hefty Sum ForEmirates Palace
              Spends that a Hefty Sum For
            </span>
          </a>
          <div className="my-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that
          </div>
          <div className="flex items-center justify-start text-black-second-news dark:text-d-sub-title-news font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm">
            <div className="flex gap-1">
              <span>by</span>
              <span>Justind</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconCalendar />
              </span>
              <span className="info-date">August 29, 2024</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconComment />
              </span>
              <span className="info-date">{`${11} comment`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-0 flex-col lg:flex-row flex items-center justify-center box-news-effect cursor-pointer gap-0 border border-[#e1e1e1] dark:border-none rounded-md overflow-hidden mb-8">
        <div className="w-full h-[330px] min-h-[330px] md:w-full lg:w-[325px] min-w-[350px] lg:min-w-[325px] overflow-hidden border border-[#e1e1e1] rounded-md dark:border-none lg:border-none lg:rounded-none">
          <img
            className="img-effect w-full md:w-full lg:w-[325px] h-[330px] object-cover"
            src="./imgs/articles-1.jpg"
            alt="business"
          />
        </div>
        <div className="px-4 pt-8 pb-4 lg:p-y-0 lg:px-8">
          <span className="tracking-widest font-dm-san inline-block mb-3 text-white text-xs border dark:border-none py-2 px-4 rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-business hover:rounded-tl-full hover:rounded-tr-none">
            Business
          </span>
          <br />
          <a
            href="#"
            className="line-clamp-2 text-black-primary-news dark:text-white"
          >
            <span className="effect-hover-text font-bold text-[26px]">
              Emirates Palace Spends that a Hefty Sum For Emirates Palace Spends
              that a Hefty Sum ForEmirates Palace Spends that a Hefty Sum
              ForEmirates Palace Spends that a Hefty Sum ForEmirates Palace
              Spends that a Hefty Sum For
            </span>
          </a>
          <div className="my-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that
          </div>
          <div className="flex items-center justify-start text-black-second-news dark:text-d-sub-title-news font-bold font-encode gap-4 xl:gap-8 uppercase text-xs xl:text-sm">
            <div className="flex gap-1">
              <span>by</span>
              <span>Justind</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconCalendar />
              </span>
              <span className="info-date">August 29, 2024</span>
            </div>
            <div className="flex gap-1">
              <span className="inline-block w-[15px] mr-1 mt-[2px]">
                <IconComment />
              </span>
              <span className="info-date">{`${11} comment`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBox;
