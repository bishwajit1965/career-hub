import { FaDollarSign, FaEye, FaLocationDot } from "react-icons/fa6";

import { Link } from "react-router-dom";

export const Job = ({ job }) => {
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
    <div className="col-span-6 bg-slate-100 border p-2 lg:p-8 rounded-md space-y-3 shadow-md">
      <img src={logo} alt="" />
      <h2 className="font-bold mt-3">{job_title}</h2>
      <h2 className="font-bold mt-3">{company_name}</h2>

      <div className="">
        <button className="btn btn-sm btn-outline rounded-sm mr-2">
          {remote_or_onsite}
        </button>
        <button className="btn btn-sm btn-outline rounded-sm">
          {job_type}
        </button>
      </div>
      <div className="flex space-x-4">
        <span className="flex items-center">
          <FaLocationDot /> &nbsp;
          {location}
        </span>{" "}
        <span className="flex items-center">
          <FaDollarSign /> {salary}
        </span>
      </div>
      <div className="">
        <Link to={`/job-details/${id}`}>
          <button className="btn btn-sm text-xs lg:text-md w-36 text-white bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-500 hover:to-yellow-500">
            <span className="flex items-center">
              <FaEye className="mr-2 text-xl" /> View details
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
