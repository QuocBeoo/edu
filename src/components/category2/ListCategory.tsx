import RightBox from "../core/RightBox";
import LeftBox from "./LeftBox";

function ListCategory() {
  return (
    <>
      <section className="px-4 xl:px-0 max-w-[1320px] mx-auto lg:flex items-start justify-center font-lora my-16 gap-6">
        <LeftBox />
        <RightBox />
      </section>
    </>
  );
}

export default ListCategory;
