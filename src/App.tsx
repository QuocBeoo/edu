import { useEffect } from "react";
import "./App.css";
import FooterLayout from "./components/layout/FooterLayout";
import HeaderLayout from "./components/layout/HeaderLayout";
import Homepage from "./pages/Homepage";

function App() {
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      {/* <div className="p-4">
      <p>
        <span className="text-black-primary-news dark:text-white no-underline font-bold text-xl cursor-pointer effect-hover-text">
          Xin chào
          <br />
          tôi muốn test hover effect
        </span>
      </p>
      <div className="site-navigation">
        <ul id="menu-primary-menu" className="navigation">
          <li className="inline-block relative menu-item-has-children">
            <a
              href="https://itcroctheme.com/wp/benqu-wp/newspaper/"
              aria-current="page"
            >
              Home
            </a>
            <ul className="sub-menu min-w-[150px] block m-0 py-3 px-3 h-auto absolute left-0 top-full z-10 rounded-b-md bg-white">
              <li className="block relative cursor-pointer my-3">
                <a className="block hover:ml-5 ml-3">Home One</a>
              </li>
              <li className="block relative cursor-pointer">
                <a className="block hover:ml-5 ml-3 my-3">Home One</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div> */}
      <div className="bg-[#f9faff] dark:bg-d-main-color relative">
        <HeaderLayout />

        <div className="fixed right-4 bottom-[250px] rotate-[-90deg] select-none">
          <input
            onClick={toggleTheme}
            placeholder="dark-mode"
            type="checkbox"
            className="sr-only"
            id="darkmode-toggle"
          />
          <label
            className="toggle rounded-xl relative bg-[#e8e8e8] dark:bg-white h-[20px] w-[55px] block cursor-pointer"
            htmlFor="darkmode-toggle"
          >
            <span className="relative bg-white rounded-full block h-[2em] w-[2em] left-[-.5em] overflow-hidden top-[-0.35em] z-10">
              <img
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
                src="./icons/icon-sun.svg"
                alt="icon toggle"
              />
            </span>
          </label>
        </div>

        <main className="mx-auto">
          <Homepage />
        </main>
        <FooterLayout />
      </div>
    </>
  );
}

export default App;
