import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Code,
  Terminal,
  Clock,
  MemoryStick as Memory,
  HardDrive,
  Calendar,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";

const SubmissionsList = ({ submissions, isLoading }) => {
  const [expandedSubmission, setExpandedSubmission] = useState(null);
  const [filter, setFilter] = useState("all");

  // Helper function to safely parse JSON strings
  const safeParse = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing data:", error);
      return [];
    }
  };

  // Helper function to calculate average memory usage
  const calculateAverageMemory = (memoryData) => {
    const memoryArray = safeParse(memoryData).map((m) =>
      parseFloat(m.split(" ")[0])
    );
    if (memoryArray.length === 0) return 0;
    return (
      memoryArray.reduce((acc, curr) => acc + curr, 0) / memoryArray.length
    );
  };

  // Helper function to calculate average runtime
  const calculateAverageTime = (timeData) => {
    const timeArray = safeParse(timeData).map((t) =>
      parseFloat(t.split(" ")[0])
    );
    if (timeArray.length === 0) return 0;
    return timeArray.reduce((acc, curr) => acc + curr, 0) / timeArray.length;
  };

  const toggleExpand = (id) => {
    if (expandedSubmission === id) {
      setExpandedSubmission(null);
    } else {
      setExpandedSubmission(id);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  // Handle null or undefined submissions
  if (!submissions) {
    return (
      <div className="p-8 text-center">
        <p>No submissions available.</p>
      </div>
    );
  }
  const filteredSubmissions = submissions.filter((submission) => {
    if (filter === "all") return true;
    return submission.status === filter;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between items-center sm:flex-row w-full md:w-auto">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn btn-outline gap-2">
            <Filter size={16} />
            {filter === "all" ? "All Submissions" : filter}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => setFilter("all")}>All Submissions</button>
            </li>
            <li>
              <button onClick={() => setFilter("Accepted")}>Accepted</button>
            </li>
            <li>
              <button onClick={() => setFilter("Wrong Answer")}>
                Wrong Answer
              </button>
            </li>
            <li>
              <button onClick={() => setFilter("Time Limit Exceeded")}>
                Time Limit Exceeded
              </button>
            </li>
          </ul>
        </div>

        <div className="stats shadow">
          <div className="stat pr-2">
            <div className="stat-title">Total</div>
            <div className="stat-value text-lg">{submissions.length}</div>
          </div>
          <div className="stat pl-2">
            <div className="stat-title">Accepted</div>
            <div className="stat-value text-lg text-success">
              {submissions.filter((s) => s.status === "Accepted").length}
            </div>
          </div>
        </div>
      </div>

      {filteredSubmissions.length === 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">No submissions found</h2>
          </div>
        </div>
      ) : (
        <div className="space-y-4 max-h-[90vh] overflow-y-auto scroll-smooth custom-scrollbar">
          {filteredSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="card bg-base-100 shadow-xl overflow-hidden transition-all duration-300"
            >
              <div
                className="card-body p-0"
                role="button"
                onClick={() => toggleExpand(submission.id)}
              >
                {/* Submission Header */}
                <div
                  key={submission.id}
                  className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow rounded-lg"
                >
                  <div className="card-body p-4">
                    <div className="flex items-center justify-between">
                      {/* Left Section: Status and Language */}
                      <div className="flex items-center gap-4">
                        {submission.status === "Accepted" ? (
                          <div className="flex items-center gap-2 text-success">
                            <CheckCircle2 className="w-6 h-6" />
                            <span className="font-semibold">Accepted</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-error">
                            <XCircle className="w-6 h-6" />
                            <span className="font-semibold">
                              {submission.status}
                            </span>
                          </div>
                        )}
                        <div className="badge badge-neutral">
                          {submission.language}
                        </div>
                      </div>

                      {/* Right Section: Runtime, Memory, and Date */}
                      <div className="flex items-center gap-4 text-base-content/70">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>
                            {calculateAverageMemory(submission.memory).toFixed(
                              3
                            )}{" "}
                            s
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Memory className="w-4 h-4" />
                          <span>
                            {calculateAverageTime(submission.time).toFixed(0)}{" "}
                            KB
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(
                              submission.createdAt
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 md:mt-0">
                          {expandedSubmission === submission.id ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedSubmission === submission.id && (
                  <div className="border-t border-base-300">
                    {/* Code Section */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Code size={18} />
                        Solution Code
                      </h3>
                      <div className="mockup-code bg-neutral text-neutral-content overflow-x-auto">
                        <pre className="p-4">
                          <code>{submission.sourceCode}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Input/Output Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-t border-base-300">
                      <div>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Terminal size={18} />
                          Input
                        </h3>
                        <div className="mockup-code bg-neutral text-neutral-content">
                          <pre className="p-4">
                            <code>
                              {submission.stdin || "No input provided"}
                            </code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Terminal size={18} />
                          Output
                        </h3>
                        <div className="mockup-code bg-neutral text-neutral-content">
                          <pre className="p-4">
                            <code>
                              {Array.isArray(JSON.parse(submission.stdout))
                                ? JSON.parse(submission.stdout).join("")
                                : submission.stdout || "No output"}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    {/* Performance Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-t border-base-300">
                      <div className="stats shadow">
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <Clock size={24} />
                          </div>
                          <div className="stat-title">Execution Time</div>
                          <div className="stat-value text-lg">
                            {Array.isArray(JSON.parse(submission.time))
                              ? JSON.parse(submission.time)[0]
                              : submission.time || "N/A"}
                          </div>
                        </div>
                      </div>

                      <div className="stats shadow">
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <HardDrive size={24} />
                          </div>
                          <div className="stat-title">Memory Used</div>
                          <div className="stat-value text-lg">
                            {Array.isArray(JSON.parse(submission.memory))
                              ? JSON.parse(submission.memory)[0]
                              : submission.memory || "N/A"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubmissionsList;
