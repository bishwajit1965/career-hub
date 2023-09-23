import { useEffect, useState } from "react";

import JobApplied from "../jobApplied/JobApplied";
import SectionTitle from "../sectionTitle/SectionTitle";
import { getStoredApplications } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [applied, setApplied] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const appliedJobs = useLoaderData();

  const handleFilteredJobs = (filter) => {
    if (filter === "all") {
      setFilteredJobs(applied);
    } else if (filter === "remote") {
      const remoteJobs = applied.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilteredJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = applied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setFilteredJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredApplications();
    if (appliedJobs.length > 0) {
      const jobsApplied = appliedJobs.filter((applied) =>
        storedJobIds.includes(applied.id)
      );

      // console.log("Applied", jobsApplied);
      // const jobsApplied = [];
      // for (const id of storedJobIds) {
      //   const foundAppliedJob = appliedJobs.find((job) => job.id === id);
      //   if (appliedJobs) {
      //     jobsApplied.push(foundAppliedJob);
      //   }
      // }
      setApplied(jobsApplied);
      setFilteredJobs(jobsApplied);
      console.log("Found applied jobs:", jobsApplied);
    }
  }, []);

  return (
    <div>
      <SectionTitle title="Applied Jobs" description="" />
      <div className="flex justify-end">
        <details className="dropdown border rounded-lg">
          <summary className="m-1 btn">Filter by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilteredJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilteredJobs("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilteredJobs("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className={`${filteredJobs.length === 0 ? "mt-0" : "lg:mt-20"}`}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobApplied key={job.id} job={job} />)
        ) : (
          <h1 className="text-3xl text-slate-600 font-bold text-center">
            <span className="text-red-600">SORRY !</span> No applied jobs found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
