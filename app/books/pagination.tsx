const pageintion = [1, 2, 3];

const Pagination = () => {
  return (
    <div className="flex items-center justify-center text-center mt-2 mb-10 pagination-container">
      <div className="hover:bg-slate-600 hover:text-white py-1 border px-5 pagination-item">Prev</div>
      {pageintion.map((page) => (
        <div key={page} className="hover:bg-slate-600 hover:text-white py-1 border px-5 pagination-item">
          {page}
        </div>
      ))}
      <div className="hover:bg-slate-600 hover:text-white py-1 border px-5 pagination-item">Next</div>
    </div>
  );
};

export default Pagination;
