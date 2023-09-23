import "react-toastify/dist/ReactToastify.css";

import {
  FaAddressCard,
  FaDollarSign,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { AiOutlineMail } from "react-icons/ai";
import SectionTitle from "../sectionTitle/SectionTitle";
import { storeAppliedJobs } from "../../utility/localStorage";

const JobDetails = () => {
  const jobsData = useLoaderData();
  const { id } = useParams();
  const idInteger = parseInt(id);
  console.log(id, jobsData);
  const singleJob = jobsData.find((job) => job.id === idInteger);
  console.log(singleJob);
  const {
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
  } = singleJob;

  const handleApplyJob = () => {
    storeAppliedJobs(idInteger);
    toast("You have applied successfully!");
  };

  return (
    <div className="">
      <SectionTitle title="Job details" description=" " />
      <div className="grid grid-cols-12 gap-6 justify-between">
        <div className="lg:col-span-8 md:col-span-6 col-span-6 p-4 space-y-3">
          <p>
            <span className="font-bold"> Job description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold"> Job responsibility: </span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold"> Educational requirements: </span>
          </p>
          <p>{educational_requirements}</p>

          <p>
            <span className="font-bold"> Experiences: </span>
          </p>
          <p>{experiences}</p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-6 bg-slate-200 p-4 shadow-sm">
          <h2 className="text-xl font-bold">Job details</h2>
          <hr className="border-slate-400 my-2" />

          <div className="flex space-x-2">
            <span className="flex items-center font-bold">Salary:</span>
            <span className="flex items-center">
              <FaDollarSign />
              {salary} (Per month)
            </span>
          </div>

          <div className="flex items-center">
            <FaAddressCard />
            <p>
              <span className="font-bold ml-1">Job title:</span> {job_title}
            </p>
          </div>
          <div className="my-5">
            <h2 className="text-xl font-bold">Contact information: </h2>
          </div>
          <hr className="border-slate-400 my-2" />

          <div className="flex items-center">
            <FaPhone />
            <p>
              <span className="font-bold ml-1">Phone:</span>{" "}
              {contact_information.phone}
            </p>
          </div>
          <div className="flex items-center">
            <AiOutlineMail />
            <p>
              <span className="font-bold ml-1">Email:</span>
              {contact_information.email}
            </p>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center">
              <FaLocationDot />
              <span className="font-bold"> Address: &nbsp; </span>
              {location}
            </span>
          </div>
          <div className="lg:mt-5">
            <Link to="">
              <button
                onClick={handleApplyJob}
                className="btn btn-md w-full text-xs lg:text-md text-white bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-500 hover:to-yellow-500"
              >
                Apply now
              </button>
            </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
