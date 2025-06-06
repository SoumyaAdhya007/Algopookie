import React from "react";
import CreateProblemForm from "../components/CreateProblemForm";
import Navbar from "../components/Navbar";

const AddProblem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />
      <CreateProblemForm />
    </div>
  );
};

export default AddProblem;
