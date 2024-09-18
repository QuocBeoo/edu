function Navigation() {
  return (
    <ul className="w-full lg:w-auto navigation flex flex-col lg:flex-row items-center lg:gap-8 lg:dark:text-white">
      <li className="group w-full lg:w-auto cursor-pointer pt-3 lg:pt-0 lg:relative lg:flex lg:items-center lg:justify-center">
        <a
          className="relative uppercase lg:capitalize group-hover:ml-3 lg:group-hover:ml-auto group-hover:text-[#3b60fe] lg:group-hover:text-black"
          aria-current="page"
        >
          Home
          <img
            className="group-hover:rotate-90 transition ease-in-out duration-300 w-[15px] cursor-pointer ml-1 absolute right-[-20px] top-[5px] lg:absolute"
            src="./icons/icon-right.svg"
            alt="icon dropdown"
          />
        </a>
        <hr className="mt-6 lg:hidden" />

        <ul className="group-hover:scale-[scaleY(1)] scale-y-0 ease-in-out transition-all duration-400 origin-[center_top] lg:shadow-site-navigation sub-menu min-w-[250px] lg:block lg:absolute lg:left-0 lg:top-full lg:z-10 lg:rounded-b-md h-0 lg:h-auto group-hover:h-auto m-0 py-0 lg:py-3 left-0 top-full z-10 rounded-b-md bg-white lg:dark:bg-d-main-color">
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Home One
            </a>
          </li>
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Home Two
            </a>
          </li>
        </ul>
      </li>
      <li className="group w-full lg:w-auto cursor-pointer pt-3 lg:pt-0 lg:relative lg:flex lg:items-center lg:justify-center">
        <a
          className="relative uppercase lg:capitalize group-hover:ml-3 lg:group-hover:ml-auto group-hover:text-[#3b60fe] lg:group-hover:text-black"
          aria-current="page"
        >
          Features
          <img
            className="group-hover:rotate-90 transition ease-in-out duration-300 w-[15px] cursor-pointer ml-1 absolute right-[-20px] top-[5px] lg:absolute"
            src="./icons/icon-right.svg"
            alt="icon dropdown"
          />
        </a>
        <hr className="mt-6 lg:hidden" />

        <ul className="group-hover:scale-[scaleY(1)] scale-y-0 ease-in-out transition-all duration-400 origin-[center_top] lg:shadow-site-navigation sub-menu min-w-[250px] lg:block lg:absolute lg:left-0 lg:top-full lg:z-10 lg:rounded-b-md h-0 lg:h-auto group-hover:h-auto m-0 py-0 lg:py-3 left-0 top-full z-10 rounded-b-md bg-white lg:dark:bg-d-main-color">
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Feature One
            </a>
          </li>
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Feature Two
            </a>
          </li>
        </ul>
      </li>
      <li className="group w-full lg:w-auto cursor-pointer pt-3 lg:pt-0 lg:relative lg:flex lg:items-center lg:justify-center">
        <a
          className="relative uppercase lg:capitalize group-hover:ml-3 lg:group-hover:ml-auto group-hover:text-[#3b60fe] lg:group-hover:text-black"
          aria-current="page"
        >
          Categorys
          <img
            className="group-hover:rotate-90 transition ease-in-out duration-300 w-[15px] cursor-pointer ml-1 absolute right-[-20px] top-[5px] lg:absolute"
            src="./icons/icon-right.svg"
            alt="icon dropdown"
          />
        </a>
        <hr className="mt-6 lg:hidden" />

        <ul className="group-hover:scale-[scaleY(1)] scale-y-0 ease-in-out transition-all duration-400 origin-[center_top] lg:shadow-site-navigation sub-menu min-w-[250px] lg:block lg:absolute lg:left-0 lg:top-full lg:z-10 lg:rounded-b-md h-0 lg:h-auto group-hover:h-auto m-0 py-0 lg:py-3 left-0 top-full z-10 rounded-b-md bg-white lg:dark:bg-d-main-color">
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Category One
            </a>
          </li>
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Category One
            </a>
          </li>
        </ul>
      </li>
      <li className="group w-full lg:w-auto cursor-pointer pt-3 lg:pt-0 lg:relative lg:flex lg:items-center lg:justify-center">
        <a
          className="relative uppercase lg:capitalize group-hover:ml-3 lg:group-hover:ml-auto group-hover:text-[#3b60fe] lg:group-hover:text-black"
          aria-current="page"
        >
          Tags
          <img
            className="group-hover:rotate-90 transition ease-in-out duration-300 w-[15px] cursor-pointer ml-1 absolute right-[-20px] top-[5px] lg:absolute"
            src="./icons/icon-right.svg"
            alt="icon dropdown"
          />
        </a>
        <hr className="mt-6 lg:hidden" />

        <ul className="group-hover:scale-[scaleY(1)] scale-y-0 ease-in-out transition-all duration-400 origin-[center_top] lg:shadow-site-navigation sub-menu min-w-[250px] lg:block lg:absolute lg:left-0 lg:top-full lg:z-10 lg:rounded-b-md h-0 lg:h-auto group-hover:h-auto m-0 py-0 lg:py-3 left-0 top-full z-10 rounded-b-md bg-white lg:dark:bg-d-main-color">
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Tag One
            </a>
          </li>
          <li className="block relative cursor-pointer mt-3 border-b pb-4 lg:my-3 lg:border-none lg:pb-0">
            <a className="sub-menu px-3 block hover:ml-5 ml-3 lg:dark:text-white">
              Tag One
            </a>
          </li>
        </ul>
      </li>
      <li className="group w-full lg:w-auto cursor-pointer pt-3 lg:pt-0 lg:relative lg:flex lg:items-center lg:justify-center">
        <a
          className="relative uppercase lg:capitalize group-hover:ml-3 lg:group-hover:ml-auto group-hover:text-[#3b60fe] lg:group-hover:text-black"
          aria-current="page"
        >
          Contact Us
        </a>
        <hr className="mt-6 lg:hidden" />
      </li>
    </ul>
  );
}

export default Navigation;
