import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto lg:my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
