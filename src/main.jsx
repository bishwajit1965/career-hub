import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppliedJobs from "./components/appliedJobs/AppliedJobs";
import Blog from "./components/blog/Blog";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";
import Home from "./components/home/Home.jsx";
import JobDetails from "./components/jobDetails/Jobdetails";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/root/Root.jsx";
import Statistics from "./components/statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
