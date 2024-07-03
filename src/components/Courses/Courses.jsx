import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="flex gap-3">
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
        <div className="w-1/4 ">
            <div className="p-4 rounded-md bg-white">
            <h3 className="text-xl text-green-700 font-semibold border-b-2 py-3">Credit hours remaining: </h3>
            <h2 className="text-2xl font-bold py-2">Course Name</h2>
            <p className="text-gray-700 font-semibold py-2 border-y-2">Total Credit Hours</p>
            <p className="text-gray-700 font-semibold py-2">Total Price</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
