import React, { useEffect } from "react";
import { useProblemStore } from "../store/useProblemStore";
import ProblemTable from "../components/ProblemTable";
import ProblemsLoading from "../components/ProblemsLoading";
const ProblemsPage = () => {
  const { isProblemsLoading, getAllProblems, problems } = useProblemStore();
  useEffect(() => {
    getAllProblems();
  }, [getAllProblems]);

  if (isProblemsLoading) {
    return <ProblemsLoading />;
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {problems.length > 0 ? (
        <h1>
          <ProblemTable problems={problems} />
        </h1>
      ) : (
        <div className="w-[50%] pt-50 m-auto">
          <p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
            No problems found
          </p>
        </div>
      )}
    </section>
  );
};
export default ProblemsPage;
