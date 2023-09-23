import { FaDollarSign, FaEye, FaLocationDot } from "react-icons/fa6";

import { Link } from "react-router-dom";

const JobApplied = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="lg:flex grid justify-between rounded-md mb-6 border lg:p-6 p-2 shadow-sm">
      <div className="flex lg:space-x-4 space-x-2 items-center lg:col-span-6">
        <div className="col-span-4 bg-slate-200 lg:w-44 w-44 h-28 flex justify-center lg:p-5 lg:h-36 items-center rounded-md">
          <img src={logo} alt="" className=" flex justify-center" />
        </div>
        <div className="col-span-4 space-y-2 text-xs lg:text-base">
          <h3 className=" font-bold">{job_title}</h3>
          <h2 className="font-bold">{company_name}</h2>

          <div className=" text-xs lg:text-base">
            <button className="btn lg:btn-sm btn-xs btn-outline rounded-sm mr-2 text-indigo-500">
              {remote_or_onsite}
            </button>
            <button className="btn lg:btn-sm btn-xs btn-outline rounded-sm text-indigo-500">
              {job_type}
            </button>
          </div>
          <div className="flex lg:space-x-4 space-x-2 text-xs lg:text-base">
            <span className="flex items-center">
              <FaLocationDot /> &nbsp;
              {location}
            </span>{" "}
            <span className="flex items-center">
              <FaDollarSign /> {salary}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 flex items-center">
        <div className="lg:-my-0 my-2">
          <Link to={`/job-details/${id}`}>
            <button className="btn btn-sm lg:btn-md text-xs lg:text-md lg:w-40 text-white bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-500 hover:to-yellow-500">
              <span className="flex items-center">
                <FaEye className="mr-2 text-xl" /> View details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobApplied;
