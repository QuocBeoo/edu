function Breadcrumbs() {
  return (
    <div className="bg-[#F2F6F9] !font-encode dark:bg-d-main-color">
      <section className="max-w-[1320px] mx-auto">
        <ol className="px-4 xl:px-0 breadcrumbs flex gap-10 py-4 text-black-primary-news dark:text-white font-semibold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <span>Detail</span>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Breadcrumbs;
