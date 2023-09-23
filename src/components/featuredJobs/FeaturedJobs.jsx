import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { Job } from "../job/Job";
import SectionTitle from "../sectionTitle/SectionTitle";

const FeaturedJobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  const fetchAllJobs = async () => {
    try {
      setLoading(true);
      const url = "./jobs.json";
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error in data fetching", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="lg:mt-20">
      <SectionTitle
        title="Featured Jobs"
        description="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="lg:mt-10 grid md:grid-cols-12 lg:grid-cols-12 justify-between lg:gap-6 gap-4">
        {loading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            {jobs.slice(0, dataLength).map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </>
        )}
      </div>
      <div
        className={`text-center lg:mt-10 mt-4 ${
          dataLength === jobs.length ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-md text-xs lg:text-md w-40 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="flex items-center">
            <FaEye className="mr-2 text-xl" /> View all jobs
          </span>
        </button>
      </div>
      <div
        className={`text-center lg:mt-10 mt-4 ${
          dataLength === jobs.length ? "block " : "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(4)}
          className="btn btn-md text-xs lg:text-md w-40 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="flex items-center">
            <FaEyeSlash className="mr-2 text-xl" /> View less jobs
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
