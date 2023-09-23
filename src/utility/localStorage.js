const getStoredApplications = () => {
  const storedJobApplications = localStorage.getItem("applied-jobs");
  if (storedJobApplications) {
    return JSON.parse(storedJobApplications);
  } else {
    return [];
  }
};

const storeAppliedJobs = (id) => {
  const storedApplications = getStoredApplications();
  const existingApplication = storedApplications.find(
    (applicationId) => applicationId.id === id
  );
  if (!existingApplication) {
    storedApplications.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(storedApplications));
  }
};

export { getStoredApplications, storeAppliedJobs };
