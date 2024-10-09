import "./App.css";
import FooterLayout from "./components/layout/FooterLayout";
import HeaderLayout from "./components/layout/HeaderLayout";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <div className="bg-[#f9faff] dark:bg-d-main-color relative">
        <HeaderLayout />
        {/* <div className="fixed right-4 bottom-[250px] rotate-[-90deg] select-none z-50 border rounded-xl">
          <input
            onClick={toggleTheme}
            placeholder="dark-mode"
            type="checkbox"
            className="peer sr-only"
            id="darkmode-toggle"
          />
          <label
            className="group toggle rounded-xl relative bg-[#e8e8e8] dark:bg-white h-[20px] w-[55px] block cursor-pointer"
            htmlFor="darkmode-toggle"
          >
            <span className="peer-checked:group-[]:left-[2em] transition-[left] duration-250 relative bg-white rounded-full block h-[2em] w-[2em] left-[-.5em] overflow-hidden top-[-0.35em] z-10 border">
              <img
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
                src="./icons/icon-sun.svg"
                alt="icon toggle"
              />
            </span>
          </label>
        </div> */}

        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/category-1" element={<Category1 />} />
            <Route path="/category-2" element={<Category2 />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </main>
        <FooterLayout />
      </div>
    </>
  );
}

export default App;
