import ListBlog from "../core/ListBlog";

function FooterLayout() {
  return (
    <footer className="bg-white dark:bg-d-main-color pt-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-4 xl:flex items-start justify-between py-4 px-6 2xl:px-2 mx-auto max-w-[1320px]">
        <div className="xl:w-[20%] inline-block xl:flex flex-col items-start justify-center gap-6">
          <img
            src="https://itcroctheme.com/wp/benqu-wp/newspaper/wp-content/uploads/sites/5/2022/09/logo-news.png"
            alt="Logo"
          />
          <div className="text-black-primary-news dark:text-white mt-4">
            There are many variations of the majority alteration in that some
            slightly believable.
          </div>
          <div className="text-sm text-black-primary-news dark:text-white">
            <div className="mb-4">
              <img
                className="inline-block w-[14px] mr-2"
                src="./icons/icon-location.svg"
                alt="icon location"
              />
              <span>15 Cliff St, New York 10038, USA</span>
            </div>
            <div className="mb-4">
              <img
                className="inline-block w-[14px] mr-2"
                src="./icons/icon-phone.svg"
                alt="icon phone"
              />
              <span>+1819-602-9641</span>
            </div>
            <div className="mb-4">
              <img
                className="inline-block w-[14px] mr-2"
                src="./icons/icon-envelope.svg"
                alt="icon envelope"
              />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center justify-start gap-4 mt-8">
              <div className="hover:bg-[url('./icons/icon-fb-active.svg')] bg-[url('./icons/icon-fb.svg')] dark:bg-[url('./icons/icon-fb-dark.svg')] w-[20px] h-[20px] bg-contain bg-no-repeat cursor-pointer ease-in duration-300"></div>
              <div className="hover:bg-[url('./icons/icon-twitter-active.svg')] bg-[url('./icons/icon-twitter.svg')] w-[20px] h-[20px] bg-contain bg-no-repeat cursor-pointer ease-in duration-300"></div>
              <div className="hover:bg-[url('./icons/icon-instagram-active.svg')] bg-[url('./icons/icon-instagram.svg')] w-[20px] h-[20px] bg-contain bg-no-repeat cursor-pointer ease-in duration-300"></div>
              <div className="hover:bg-[url('./icons/icon-linkedIn-active.svg')] bg-[url('./icons/icon-linkedIn.svg')] w-[20px] h-[20px] bg-contain bg-no-repeat cursor-pointer ease-in duration-300"></div>
              <div className="hover:bg-[url('./icons/icon-youTube-active.svg')] bg-[url('./icons/icon-youTube.svg')] w-[20px] h-[20px] bg-contain bg-no-repeat cursor-pointer ease-in duration-300"></div>
            </div>
          </div>
        </div>
        <div className="xl:w-[15%] inline-block xl:flex flex-col items-start justify-center gap-4">
          <div className="text-black-primary-news dark:text-white font-bold text-2xl mb-3">
            Useful Links
          </div>
          <ul>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Blog Index
              </span>
            </li>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Company About
              </span>
            </li>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Contact With Us
              </span>
            </li>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Health Tips
              </span>
            </li>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Business & Talkshow
              </span>
            </li>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Top Interview
              </span>
            </li>
            <li className="pl-3 relative mb-3 dark:text-white">
              <span className="cursor-pointer hover:text-primary-active duration-400">
                Education & Tech
              </span>
            </li>
          </ul>
        </div>
        <div className="xl:w-[30%] inline-block xl:flex flex-col items-start justify-center gap-4">
          <div className="text-black-primary-news dark:text-white font-bold text-2xl mb-3">
            Populer Posts
          </div>
          <ListBlog />
        </div>
        <div className="xl:w-[25%] inline-block xl:block">
          <div className="text-black-primary-news dark:text-white font-bold text-2xl mb-3">
            Broese Tags
          </div>
          <div>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Apps
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Asia
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Design
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Fashion
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              game
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              food
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Tech
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Apps
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Asia
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Design
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Fashion
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              game
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              food
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Tech
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Apps
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Asia
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Design
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Fashion
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              game
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              food
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              Tech
            </span>
            <span className="inline-block mb-3 mr-3 font-encode text-[#818181] text-sm border border-[#41464e] py-2 px-4 rounded-full font-semibold uppercase rounded-tl-none ease-in duration-500 cursor-pointer hover:rounded-tl-full hover:rounded-tr-none hover:bg-primary-active hover:border-primary-active hover:text-white">
              world
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#d9d9d9]"></div>
      <div className="flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 flex justify-between py-6 px-6 2xl:px-2 mx-auto max-w-[1320px] text-black-primary-news dark:text-white">
        <div className="flex items-center justify-center gap-6">
          <div className="hover:text-primary-active cursor-pointer">
            Business
          </div>
          <div className="hover:text-primary-active cursor-pointer">
            Education
          </div>
          <div className="hover:text-primary-active cursor-pointer">
            Fashion
          </div>
          <div className="hover:text-primary-active cursor-pointer">Health</div>
          <div className="hover:text-primary-active cursor-pointer">
            Interview
          </div>
        </div>
        <div>© 2024, benqu All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default FooterLayout;
