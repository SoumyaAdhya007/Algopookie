import React from "react";
import Navbar from "../components/Navbar";
import UpdateProblemForm from "../components/UpdateProblemForm";

const UpdateProblemPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />
      <UpdateProblemForm />
    </div>
  );
};

export default UpdateProblemPage;
