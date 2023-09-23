import Footer from "../footer/Footer";
import Header from "../header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="flex h-96 items-center justify-center my-3">
        <div className="">
          <h1 className="text-3xl font-bold ">
            <span className="text-3xl font-bold text-red-500">SORRY !</span> the
            page you are looking is not found!
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
