function Business() {
  return (
    <>
      <section className="max-w-[1320px] mx-auto flex items-center justify-center font-lora my-16 gap-6">
        <div className="w-[70%]">
          <div className="w-full border-b border-b-line-d7 pb-8 mb-10">
            <h3 className="font-bold text-4xl dark:text-white">Business</h3>
          </div>
          <div className="flex items-center justify-center box-news-effect cursor-pointer gap-8">
            <div className="h-[330px] min-h-[330px] w-[500px] min-w-[500px] overflow-hidden">
              <img
                className="img-effect w-[500px] h-[330px] object-cover"
                src="./imgs/business.jpg"
                alt="business"
              />
            </div>
            <div>
              <div className="uppercase font-dm-san font-semibold text-sub-title-news dark:text-d-sub-title-news tracking-[1px] mb-4 mt-8">
                July 16, 2022
              </div>
              <span className="effect-hover-text font-bold text-3xl text-black-primary-news dark:text-white">
                The Ultimate Guide to New York’s Favorite Food
              </span>
              <div className="mt-3 text-detail-gray leading-7 dark:text-d-sub-title-news">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in that
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 font-lora my-8 gap-4">
              <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer">
                <div className="h-[110px] min-h-[110px] w-[130px] min-w-[130px] overflow-hidden">
                  <img
                    className="w-[130px] h-[110px] object-cover"
                    src="./imgs/news-1.jpg"
                    alt="news 1"
                  />
                </div>
                <div>
                  <div className="uppercase font-dm-san font-medium text-sm text-info-news tracking-[1px] mb-2 dark:text-d-sub-title-news">
                    July 16, 2022
                  </div>
                  <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                    The Ultimate Guide to New York’s
                  </span>
                </div>
              </div>
              <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer">
                <div className="h-[110px] min-h-[110px] w-[130px] min-w-[130px] overflow-hidden">
                  <img
                    className="w-[130px] h-[110px] object-cover"
                    src="./imgs/news-2.jpg"
                    alt="news 2"
                  />
                </div>
                <div>
                  <div className="uppercase font-dm-san font-medium text-sm text-info-news tracking-[1px] mb-2 dark:text-d-sub-title-news">
                    July 16, 2022
                  </div>
                  <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                    The Ultimate Guide to New York’s
                  </span>
                </div>
              </div>
              <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer">
                <div className="h-[110px] min-h-[110px] w-[130px] min-w-[130px] overflow-hidden">
                  <img
                    className="w-[130px] h-[110px] object-cover"
                    src="./imgs/news-3.jpg"
                    alt="news 3"
                  />
                </div>
                <div>
                  <div className="uppercase font-dm-san font-medium text-sm text-info-news tracking-[1px] mb-2 dark:text-d-sub-title-news">
                    July 16, 2022
                  </div>
                  <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                    The Ultimate Guide to New York’s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex-1 flex flex-col items-center justify-center bg-[#f1f2f6] py-6 px-6">
          <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer border-b border-b-line-d7 pb-6">
            <div className="rounded-full h-[70px] min-h-[70px] w-[70px] min-w-[70px] overflow-hidden">
              <img
                className="w-[70px] h-[70px] object-cover"
                src="./imgs/news-1.jpg"
                alt="news 1"
              />
            </div>
            <div>
              <div className="uppercase font-dm-san font-semibold text-sm text-sub-title-news dark:text-d-sub-title-news tracking-[1px] mb-2">
                Education
              </div>
              <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                We Believe Announce Will the iPhone this
              </span>
            </div>
          </div>
          <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer border-b border-b-line-d7 pb-6">
            <div>
              <div className="uppercase font-dm-san font-semibold text-sm text-sub-title-news dark:text-d-sub-title-news tracking-[1px] mb-2">
                Education
              </div>
              <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                We Believe Announce Will the iPhone this
              </span>
            </div>
          </div>
          <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer border-b border-b-line-d7 pb-6">
            <div>
              <div className="uppercase font-dm-san font-semibold text-sm text-sub-title-news dark:text-d-sub-title-news tracking-[1px] mb-2">
                Education
              </div>
              <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                We Believe Announce Will the iPhone this
              </span>
            </div>
          </div>
          <div className="box-news-effect flex items-center justify-center gap-4 my-6 cursor-pointer">
            <div>
              <div className="uppercase font-dm-san font-semibold text-sm text-sub-title-news dark:text-d-sub-title-news tracking-[1px] mb-2">
                Education
              </div>
              <span className="effect-hover-text font-bold text-xl text-black-primary-news dark:text-white">
                We Believe Announce Will the iPhone this
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Business;
