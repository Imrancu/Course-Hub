const CourseSummary = () => {
  return (
    <div className="p-4 rounded-md bg-white">
      <h3 className="text-xl text-green-800 font-semibold border-b-2 py-3">
        Credit hours remaining:{" "}
      </h3>
      <h2 className="text-2xl font-bold py-2">Course Name</h2>
      <p className="text-gray-700 font-semibold py-2 border-y-2">
        Total Credit Hours
      </p>
      <p className="text-gray-700 font-semibold py-2">Total Price</p>
    </div>
  );
};

export default CourseSummary;
