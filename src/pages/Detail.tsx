import ListCategory from "../components/detail/ListCategory";
import Breadcrumbs from "../components/layout/Breadcrumbs";

function Detail() {
  return (
    <div className="dark:bg-[#0f1217]">
      <Breadcrumbs />
      <ListCategory />
    </div>
  );
}

export default Detail;
