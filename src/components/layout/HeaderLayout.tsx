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
        <div className="site-navigation hidden lg:flex items-center justify-center !font-encode font-bold">
          <ul className="navigation flex items-center gap-4 dark:text-white">
            <li className="relative menu-item-has-children flex items-center justify-center cursor-pointer">
              <a aria-current="page">Home</a>
              <ul className="sub-menu min-w-[250px] block m-0 py-3 h-auto absolute left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                <li className="block relative cursor-pointer my-3">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white">
                    Home One
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Home Two
                  </a>
                </li>
              </ul>
              <img
                className="w-[15px] ic-dropdown cursor-pointer ml-1"
                src="./icons/icon-right.svg"
                alt="icon dropdown"
              />
            </li>
            <li className="relative menu-item-has-children flex items-center justify-center cursor-pointer">
              <a aria-current="page">Features</a>
              <ul className="sub-menu min-w-[250px] block m-0 py-3 h-auto absolute left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                <li className="block relative cursor-pointer my-3">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white">
                    Feature One
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Feature Two
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Feature Three
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Feature For
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Feature Five
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Feature Six
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Feature Seven
                  </a>
                </li>
              </ul>
              <img
                className="w-[15px] ic-dropdown cursor-pointer ml-1"
                src="./icons/icon-right.svg"
                alt="icon dropdown"
              />
            </li>
            <li className="relative menu-item-has-children flex items-center justify-center cursor-pointer">
              <a aria-current="page">Categorys</a>
              <ul className="sub-menu min-w-[250px] block m-0 py-3 h-auto absolute left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                <li className="block relative cursor-pointer my-3">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white">
                    Category One
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Category Two
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Category Three
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Category For
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Category Five
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Category Six
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Category Seven
                  </a>
                </li>
              </ul>
              <img
                className="w-[15px] ic-dropdown cursor-pointer ml-1"
                src="./icons/icon-right.svg"
                alt="icon dropdown"
              />
            </li>
            <li className="relative menu-item-has-children flex items-center justify-center cursor-pointer">
              <a aria-current="page">Tags</a>
              <ul className="sub-menu min-w-[250px] block m-0 py-3 h-auto absolute left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                <li className="block relative cursor-pointer my-3">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white">
                    Tag One
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Tag Two
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Tag Three
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Tag For
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Tag Five
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Tag Six
                  </a>
                </li>
                <li className="block relative cursor-pointer">
                  <a className="px-3 block hover:ml-5 ml-3 dark:text-white my-3">
                    Tag Seven
                  </a>
                </li>
              </ul>
              <img
                className="w-[15px] ic-dropdown cursor-pointer ml-1"
                src="./icons/icon-right.svg"
                alt="icon dropdown"
              />
            </li>
            <li className="relative menu-item-has-children flex items-center justify-center cursor-pointer">
              <a aria-current="page">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="h-0">
          <div className="box-search relative min-w-[300px] lg:min-w-[200px]">
            <input
              className="text-xs absolute m-auto top-1/2 lg:top-0 right-[-185px] lg:right-[-180px] 2xl:right-[-250px] bottom-0 left-0 w-[40px] h-[40px] font-bold tracking-widest outline-none border-[#8d8d8d] bg-white text-[#222] rounded-[30px] opacity-0 z-[5] border cursor-pointer focus:right-[-55px] lg:focus:right-[-50px] focus:w-[180px] 2xl:focus:w-[250px] focus:opacity-100 focus:cursor-text focus:pr-[3rem] focus:pl-[1rem] placeholder:text-white placeholder:opacity-50 placeholder:font-bold"
              type="text"
              placeholder="Search..."
            />
            <div className="search absolute m-auto top-1/2 lg:top-0 right-[-185px] lg:right-[-180px] 2xl:right-[-250px] left-0 bottom-0 w-[40px] h-[40px] border border-[#dddedf] rounded-full cursor-pointer bg-white dark:bg-transparent"></div>
          </div>
          <div className="hamburger-menu block lg:hidden">
            <input id="menu-toggle" type="checkbox" className="opacity-0" />
            <label
              className="menu-btn absolute top-1/2 right-[20px] w-[26px] h-[26px] cursor-pointer z-10"
              htmlFor="menu-toggle"
            >
              <span></span>
            </label>

            <div className="site-navigation flex lg:hidden items-start justify-center !font-encode font-bold menu__box fixed top-0 right-[-100%] w-[300px] h-full m-0 py-[80px] px-6 list-none bg-white duration-250 shadow-hamburger-menu z-[5]">
              <ul className="w-full navigation flex flex-col items-center dark:text-white">
                <li className="group w-full menu-item-has-children cursor-pointer pt-3">
                  <a
                    className="relative uppercase group-hover:ml-3 group-hover:text-[#3b60fe]"
                    aria-current="page"
                  >
                    Home
                    <img
                      className="w-[15px] ic-dropdown cursor-pointer ml-1 absolute right-[-20px] top-[5px]"
                      src="./icons/icon-right.svg"
                      alt="icon dropdown"
                    />
                  </a>
                  <hr className="mt-6" />

                  <ul className="sub-menu !shadow-none min-w-[250px] h-0 group-hover:h-auto m-0 py-0 left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Home One
                      </a>
                    </li>
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Home Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group w-full menu-item-has-children cursor-pointer pt-3">
                  <a
                    className="relative uppercase group-hover:ml-3 group-hover:text-[#3b60fe]"
                    aria-current="page"
                  >
                    Features
                    <img
                      className="w-[15px] ic-dropdown cursor-pointer ml-1 absolute right-[-20px] top-[5px]"
                      src="./icons/icon-right.svg"
                      alt="icon dropdown"
                    />
                  </a>
                  <hr className="mt-6" />

                  <ul className="sub-menu !shadow-none min-w-[250px] h-0 group-hover:h-auto m-0 py-0 left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Feature One
                      </a>
                    </li>
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Feature Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group w-full menu-item-has-children cursor-pointer pt-3">
                  <a
                    className="relative uppercase group-hover:ml-3 group-hover:text-[#3b60fe]"
                    aria-current="page"
                  >
                    Category
                  </a>
                  <hr className="mt-6" />

                  <ul className="sub-menu !shadow-none min-w-[250px] h-0 group-hover:h-auto m-0 py-0 left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Category One
                      </a>
                    </li>
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Category Two
                      </a>
                    </li>
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Category Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group w-full menu-item-has-children cursor-pointer pt-3">
                  <a
                    className="relative uppercase group-hover:ml-3 group-hover:text-[#3b60fe]"
                    aria-current="page"
                  >
                    Tags
                    <img
                      className="w-[15px] ic-dropdown cursor-pointer ml-1 absolute right-[-20px] top-[5px]"
                      src="./icons/icon-right.svg"
                      alt="icon dropdown"
                    />
                  </a>
                  <hr className="mt-6" />

                  <ul className="sub-menu !shadow-none min-w-[250px] h-0 group-hover:h-auto m-0 py-0 left-0 top-full z-10 rounded-b-md bg-white dark:bg-d-main-color">
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Tag One
                      </a>
                    </li>
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Tag Two
                      </a>
                    </li>
                    <li className="block relative cursor-pointer mt-3 border-b pb-4">
                      <a className="effect-sub-menu px-3 block hover:ml-5 ml-3 dark:text-white">
                        Tag Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group w-full menu-item-has-children cursor-pointer pt-3">
                  <a
                    className="relative uppercase group-hover:ml-3 group-hover:text-[#3b60fe]"
                    aria-current="page"
                  >
                    Contact Us
                  </a>
                  <hr className="mt-6" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;
