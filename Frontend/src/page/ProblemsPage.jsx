import React, { useEffect } from "react";
import { useProblemStore } from "../store/useProblemStore";
import { Loader } from "lucide-react";
import ProblemTable from "../components/ProblemTable";
const ProblemsPage = () => {
  const { getAllProblems, problems, isProblemsLoading } = useProblemStore();
  useEffect(() => {
    getAllProblems();
  }, [getAllProblems]);

  if (isProblemsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black">
      {problems.length > 0 ? (
        <h1>
          <ProblemTable problems={problems} />
        </h1>
      ) : (
        <p className="mt-10 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10 border border-primary px-4 py-2 rounded-md border-dashed">
          No problems found
        </p>
      )}
    </section>
  );
};
export default ProblemsPage;
