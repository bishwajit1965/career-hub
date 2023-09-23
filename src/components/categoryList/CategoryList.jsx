import { useEffect, useState } from "react";

import Category from "../category/Category";
import SectionTitle from "../sectionTitle/SectionTitle";

const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const fetchAllCategories = async () => {
    try {
      setLoading(true);
      const url = "./categories.json";
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
      console.log("Categories", data);
    } catch (error) {
      console.error("Error in data fetching", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);
  return (
    <div className="lg:mt-20">
      <SectionTitle
        title="Job Category List"
        description="Explore thousands of job opportunities with all the information you
        need. Its your future"
      />
      <div className="mt-10 grid grid-cols-12 justify-between gap-6">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
