import BusFasHea from "../components/homepage/BusFasHea";
import Business from "../components/homepage/Business";
import FeaturedStories from "../components/homepage/FeaturedStories";
import LatestArticles from "../components/homepage/LatestArticles";
import MostView from "../components/homepage/MostView";

function Homepage() {
  return (
    <div className="px-4 2xl:px-0">
      <LatestArticles />
      <Business />
      <MostView />
      <FeaturedStories />
      <BusFasHea />
    </div>
  );
}

export default Homepage;
