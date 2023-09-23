const SectionTitle = ({ title, description }) => {
  return (
    <div className="space-y-5 text-center lg:mt-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
