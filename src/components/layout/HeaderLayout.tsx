import Navigation from "../core/Navigation";

function HeaderLayout() {
  return (
    <header className="bg-white sticky top-0 z-20 dark:bg-d-main-color">
      <div className="flex items-center justify-between py-4 px-6 2xl:px-2 mx-auto max-w-[1320px] min-h-[75px]">
        <div className="mr-[50px]">
          <img
            src="https://itcroctheme.com/wp/benqu-wp/newspaper/wp-content/uploads/sites/5/2022/09/logo-news.png"
            alt="Logo"
          />
        </div>

        {/* Navigation Desktop */}
        <div className="site-navigation hidden lg:flex items-center justify-center !font-encode font-bold">
          <Navigation />
        </div>
        <div className="h-0">
          <div className="box-search relative min-w-[300px] lg:min-w-[200px]">
            <input
              className="peer transition-all duration-1000 text-xs absolute m-auto top-1/2 lg:top-0 right-[-185px] lg:right-[-180px] 2xl:right-[-250px] bottom-0 left-0 w-[40px] h-[40px] font-bold tracking-widest outline-none border-[#8d8d8d] bg-white text-[#222] rounded-[30px] opacity-0 z-[5] border cursor-pointer focus:right-[-55px] lg:focus:right-[-50px] focus:w-[180px] 2xl:focus:w-[250px] focus:opacity-100 focus:cursor-text focus:pr-[3rem] focus:pl-[1rem] placeholder:text-white placeholder:opacity-50 placeholder:font-bold"
              type="text"
              placeholder="Search..."
            />
            <div className="peer-focus:z-[6] peer-focus:size-[30px] transition-all duration-1000 search absolute m-auto top-1/2 lg:top-0 right-[-185px] lg:right-[-180px] 2xl:right-[-250px] left-0 bottom-0 w-[40px] h-[40px] border border-[#dddedf] rounded-full cursor-pointer bg-white dark:bg-transparent"></div>
          </div>
          <div className="hamburger-menu block lg:hidden">
            <input
              id="menu-toggle"
              type="checkbox"
              className="opacity-0 peer"
            />
            <label
              className="group menu-btn absolute top-1/2 right-[20px] w-[26px] h-[26px] cursor-pointer z-10"
              htmlFor="menu-toggle"
            >
              <span className="peer-checked:group-[]:rotate-45"></span>
            </label>

            {/* Navigation Mobie */}
            <div className="peer-checked:right-0 site-navigation flex lg:hidden items-start justify-center !font-encode font-bold menu__box fixed top-0 right-[-100%] w-[300px] h-full m-0 py-[80px] px-6 list-none bg-white duration-250 shadow-hamburger-menu z-[5]">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;
