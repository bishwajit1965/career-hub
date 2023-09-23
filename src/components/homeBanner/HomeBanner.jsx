import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="grid lg:grid-cols-12 justify-between gap-6 bg-slate-100 rounded-md items-center lg:mt-20">
      <div className="col-span-6 space-y-6 p-5">
        <h1 className="text-5xl font-bold">
          One Step Closer To Your <br />
          <span className="text-teal-400">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-sm text-xs lg:text-md w-32 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-pink-500 hover:to-yellow-500">
          Start Applying
        </button>
      </div>
      <div className="col-span-6 banner-bg"></div>
    </div>
  );
};

export default HomeBanner;
