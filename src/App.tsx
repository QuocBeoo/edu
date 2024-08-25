import "./App.css";
import FooterLayout from "./components/layout/FooterLayout";
import HeaderLayout from "./components/layout/HeaderLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      {/* <div className="p-4">
      <p>
        <span className="text-black-primary-news no-underline font-bold text-xl cursor-pointer effect-hover-text">
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
      <HeaderLayout />
      <main className="mx-auto">
        <Homepage />
      </main>
      <FooterLayout />
    </>
  );
}

export default App;
