import ListBlog from "./ListBlog";

function RightBox() {
  return (
    <div className="w-full lg:w-[30%] flex-1 flex flex-col items-start lg:items-center justify-center sticky top-0">
      <div className="w-full mx-auto flex items-center justify-center mb-8">
        <div className="w-[30px] bg-line-d7 h-[2px] mx-2 dark:bg-[#1a1e23]"></div>
        <div className="text-black-primary-news dark:text-white text-[22px] text-center font-bold font-lora pl-2 pr-6">
          Categories
        </div>
        <div className="flex-auto bg-line-d7 h-[2px] mx-2 dark:bg-[#1a1e23]"></div>
      </div>
      <div className="flex items-center justify-between flex-wrap w-full">
        <span className="group relative border-none overflow-hidden tracking-widest font-encode inline-block mb-3 text-white h-[68px] py-4 w-[calc(50%-0.5rem)] text-center place-content-center rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-center bg-cover bg-[url('/imgs/bg-business.jpg')]">
          <span className="text-sm xl:text-base relative z-10 border-none">
            Business (10)
          </span>
          <div className="absolute inset-0 bg-business opacity-50 group-hover:opacity-100 z-0 ease-in duration-300 border-none"></div>
        </span>
        <span className="group relative border-none overflow-hidden tracking-widest font-encode inline-block mb-3 text-white h-[68px] py-4 w-[calc(50%-0.5rem)] text-center place-content-center rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-center bg-cover bg-[url('/imgs/bg-education.jpg')]">
          <span className="text-sm xl:text-base relative z-10 border-none">
            education (6)
          </span>
          <div className="absolute inset-0 bg-edu opacity-50 group-hover:opacity-100 z-0 ease-in duration-300 border-none"></div>
        </span>
        <span className="group relative border-none overflow-hidden tracking-widest font-encode inline-block mb-3 text-white h-[68px] py-4 w-[calc(50%-0.5rem)] text-center place-content-center rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-center bg-cover bg-[url('/imgs/fashion1.jpg')]">
          <span className="text-sm xl:text-base relative z-10 border-none">
            fashion (22)
          </span>
          <div className="absolute inset-0 bg-fashion opacity-50 group-hover:opacity-100 z-0 ease-in duration-300 border-none"></div>
        </span>
        <span className="group relative border-none overflow-hidden tracking-widest font-encode inline-block mb-3 text-white h-[68px] py-4 w-[calc(50%-0.5rem)] text-center place-content-center rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-center bg-cover bg-[url('/imgs/bg-business-2.jpg')]">
          <span className="text-sm xl:text-base relative z-10 border-none">
            health (11)
          </span>
          <div className="absolute inset-0 bg-health opacity-50 group-hover:opacity-100 z-0 ease-in duration-300 border-none"></div>
        </span>
        <span className="group relative border-none overflow-hidden tracking-widest font-encode inline-block mb-3 text-white h-[68px] py-4 w-[calc(50%-0.5rem)] text-center place-content-center rounded-full font-bold uppercase rounded-tl-none ease-in duration-300 cursor-pointer bg-center bg-cover bg-[url('/imgs/bg-newspaper.jpg')]">
          <span className="text-sm xl:text-base relative z-10 border-none">
            interview (7)
          </span>
          <div className="absolute inset-0 bg-interview opacity-50 group-hover:opacity-100 z-0 ease-in duration-300 border-none"></div>
        </span>
      </div>
      <div className="w-full mx-auto flex items-center justify-center my-8">
        <div className="w-[30px] bg-line-d7 h-[2px] mx-2 dark:bg-[#1a1e23]"></div>
        <div className="text-black-primary-news dark:text-white text-[22px] text-center font-bold font-lora pl-2 pr-6">
          Blog Posts
        </div>
        <div className="flex-auto bg-line-d7 h-[2px] mx-2 dark:bg-[#1a1e23]"></div>
      </div>
      <ListBlog />
      <div className="w-full mx-auto flex items-center justify-center my-8">
        <div className="w-[30px] bg-line-d7 h-[2px] mx-2 dark:bg-[#1a1e23]"></div>
        <div className="text-black-primary-news dark:text-white text-[22px] text-center font-bold font-lora pl-2 pr-6">
          Popular Tag
        </div>
        <div className="flex-auto bg-line-d7 h-[2px] mx-2 dark:bg-[#1a1e23]"></div>
      </div>
      <div>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Apps (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Asia (12)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Design (7)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Fashion (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          game (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          food (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Tech (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Apps (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Asia (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Design (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Fashion (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          game (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          food (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Tech (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Apps (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Asia (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Design (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Fashion (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          game (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          food (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          Tech (1)
        </span>
        <span className="inline-block mb-3 mr-3 font-encode text-[#222] dark:text-white text-sm border rounded-md border-[#dbdbdb] py-2 px-4 font-semibold capitalize ease-in duration-500 cursor-pointer hover:bg-primary-active hover:border-primary-active hover:text-white">
          world (1)
        </span>
      </div>
    </div>
  );
}

export default RightBox;
