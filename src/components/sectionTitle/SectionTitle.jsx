const SectionTitle = ({ title, description }) => {
  return (
    <div className="lg:space-y-5  space-x-2 text-center lg:mt-10 mt-5">
      <h1 className="lg:text-4xl text-2xl font-bold">{title}</h1>
      <p className="lg:mb-5 mb-5">{description}</p>
    </div>
  );
};

export default SectionTitle;
