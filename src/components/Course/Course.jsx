import PropTypes from "prop-types";

const Course = ({ course }) => {
  const {image, courseTitle, description, price, creditHours} = course;
  return (
    <div className="bg-white p-4 rounded-md">
      <img className="rounded-md" src={image} alt={courseTitle} />
      <h3 className="text-xl text-gray-800 font-semibold my-2">{courseTitle}</h3>
      <p className="text-gray-700">{description.slice(0,90)}..</p>
      <p className="my-2 flex justify-between font-semibold text-gray-700">
        <span>Price: {price}</span> Credit: {creditHours} hrs
      </p>
      <button className="bg-green-600 w-full text-xl text-white p-1 rounded-md">Select</button>
    </div>
  );
};
Course.propTypes = {
    course: PropTypes.array.isRequired
};

export default Course;
