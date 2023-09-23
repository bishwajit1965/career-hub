import CategoryList from "../categoryList/CategoryList";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import HomeBanner from "../homeBanner/HomeBanner";

const Home = () => {
  return (
    <div className="lg:my-20">
      <HomeBanner />
      <CategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
