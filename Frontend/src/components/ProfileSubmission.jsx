import React, { useEffect, useState } from "react";
import { useSubmissionStore } from "../store/useSubmissionStore";
import {
  Code,
  Terminal,
  Clock,
  HardDrive,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";

const ProfileSubmission = () => {
  const { submissions, getAllSubmissions } = useSubmissionStore();
  const [expandedSubmission, setExpandedSubmission] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllSubmissions();
  }, [getAllSubmissions]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-success text-success-content";
      case "Wrong Answer":
        return "bg-error text-error-content";
      case "Time Limit Exceeded":
        return "bg-warning text-warning-content";
      default:
        return "bg-info text-info-content";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  const toggleExpand = (id) => {
    if (expandedSubmission === id) {
      setExpandedSubmission(null);
    } else {
      setExpandedSubmission(id);
    }
  };

  const filteredSubmissions = submissions.filter((submission) => {
    if (filter === "all") return true;
    return submission.status === filter;
  });

  return (
    <div className="bg-gray-900 w-full rounded-2xl mb-8 p-6  md:col-span-2">
      <div className="max-w-6xl mx-auto max-h-[70vh] overflow-y-auto scroll-smooth custom-scrollbar">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-white">My Submissions</h1>
          {/* bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-outline gap-2">
                <Filter size={16} />
                {filter === "all" ? "All Submissions" : filter}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-10 menu p-2 shadow bg-gray-800 rounded-box w-52"
              >
                <li>
                  <button onClick={() => setFilter("all")}>
                    All Submissions
                  </button>
                </li>
                <li>
                  <button onClick={() => setFilter("Accepted")}>
                    Accepted
                  </button>
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
          </div>
        </div>

        {filteredSubmissions.length === 0 ? (
          <div className="card bg-gray-800 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">No submissions found</h2>
              <p>
                You haven't submitted any solutions yet, or none match your
                current filter.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="card bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              >
                <div
                  className="card-body p-0"
                  role="button"
                  onClick={() => toggleExpand(submission.id)}
                >
                  {/* Submission Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 w-full">
                      <div
                        className={`badge badge-lg ${getStatusClass(
                          submission.status
                        )}`}
                      >
                        {submission.status === "Accepted" ? (
                          <Check size={14} className="mr-1" />
                        ) : null}
                        {submission.status}
                      </div>

                      <div className="flex items-center gap-2">
                        <Code size={16} />
                        <span className="font-medium">
                          {submission.language}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>
                          Submitted {formatDate(submission.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3 md:mt-0">
                      {expandedSubmission === submission.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
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
    </div>
  );
};

export default ProfileSubmission;
