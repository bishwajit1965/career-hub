const Category = ({ category }) => {
  const { id, logo, category_name, availability } = category;
  return (
    <div className="col-span-3 bg-slate-100 rounded-md lg:p-12 p-4 shadow-lg">
      <img src={logo} alt="category" className="w-14 h-14" />
      <h1 className="text-slate-950 font-bold mt-5">{category_name}</h1>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
