import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  FileText,
  MessageSquare,
  Lightbulb,
  Bookmark,
  Share2,
  Clock,
  ChevronRight,
  BookOpen,
  Terminal,
  Code2,
  Users,
  ThumbsUp,
  Home,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useProblemStore } from "../store/useProblemStore";
import { getLanguageId } from "../libs/lang";
import { useExecutionStore } from "../store/useExecutionStore";
import { useSubmissionStore } from "../store/useSubmissionStore";
import Submission from "../components/Submission";
import SubmissionsList from "../components/SubmissionsList";
import Discussion from "../components/Discussion";
import ProblemLoading from "../components/ProblemLoading";

const ProblemPage = () => {
  const { id } = useParams();
  const { getProblemById, problem, isProblemLoading } = useProblemStore();

  const {
    submission: submissions,
    isLoading: isSubmissionsLoading,
    getSubmissionForProblem,
    getSubmissionCountForProblem,
    submissionCount,
  } = useSubmissionStore();

  const {
    executeCode,
    submitCode,
    submission,
    isCodeExecuting,
    isCodeSubmitting,
  } = useExecutionStore();

  const [code, setCode] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [testcases, setTestCases] = useState([]);

  useEffect(() => {
    getProblemById(id);
    getSubmissionCountForProblem(id);

    setSelectedLanguage(null);
    setCode("");
  }, [id]);

  useEffect(() => {
    if (!problem) return;

    setTestCases(
      problem.testcases?.map((tc) => ({
        input: tc.input,
        output: tc.output,
      })) || []
    );

    const snippetKeys = Object.keys(problem.codeSnippets || {});

    if (snippetKeys.length > 0) {
      if (!selectedLanguage) {
        const firstLang = snippetKeys[2];
        setSelectedLanguage(firstLang);
        setCode(problem.codeSnippets[firstLang] || "");
      } else {
        setCode(problem.codeSnippets[selectedLanguage] || "");
      }
    } else {
      setCode("");
    }
  }, [problem]);

  useEffect(() => {
    if (activeTab === "submissions" && id) {
      getSubmissionForProblem(id);
    }
  }, [activeTab, id]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    setCode(problem.codeSnippets?.[lang] || "");
  };

  const handleRunCode = (e) => {
    e.preventDefault();
    if (!selectedLanguage) return;

    try {
      const language_id = getLanguageId(selectedLanguage);
      const stdin = problem.testcases.map((tc) => tc.input);
      const expected_outputs = problem.testcases.map((tc) => tc.output);
      executeCode(code, language_id, stdin, expected_outputs, id);
    } catch (error) {
      console.error("Error executing code", error);
    }
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();
    if (!selectedLanguage) return;

    try {
      const language_id = getLanguageId(selectedLanguage);
      const stdin = problem.testcases.map((tc) => tc.input);
      const expected_outputs = problem.testcases.map((tc) => tc.output);
      submitCode(code, language_id, stdin, expected_outputs, id);
    } catch (error) {
      console.log("Error submitting code", error);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    monaco.editor.defineTheme("tailwind-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1F2937",
      },
    });
    monaco.editor.setTheme("tailwind-dark");
  };
  if (isProblemLoading || !problem) {
    return <ProblemLoading />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="prose max-w-none">
            <p className="text-lg mb-6">{problem.description}</p>

            {problem.examples && (
              <>
                <h3 className="text-xl font-bold mb-4">Examples:</h3>
                {Object.entries(problem.examples).map(
                  ([lang, example], idx) => (
                    <div
                      key={lang}
                      className="bg-gray-800 p-6 rounded-xl mb-6 font-mono"
                    >
                      <div className="mb-4">
                        <div className="text-indigo-300 mb-2 text-base font-semibold">
                          Input:
                        </div>
                        <span className="bg-gray-900 px-4 py-1 rounded-lg font-semibold text-white">
                          {example.input}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="text-indigo-300 mb-2 text-base font-semibold">
                          Output:
                        </div>
                        <span className="bg-gray-900 px-4 py-1 rounded-lg font-semibold text-white">
                          {example.output}
                        </span>
                      </div>
                      {example.explanation && (
                        <div>
                          <div className="text-emerald-300 mb-2 text-base font-semibold">
                            Explanation:
                          </div>
                          <p className="text-base-content/70 text-lg font-sem">
                            {example.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                )}
              </>
            )}

            {problem.constraints && (
              <>
                <h3 className="text-xl font-bold mb-4">Constraints:</h3>
                <div className="bg-gray-800 p-6 rounded-xl mb-6">
                  <span className="text-base-content/70 px-4 py-1 rounded-lg font-semibold text-lg">
                    {problem.constraints}
                  </span>
                </div>
              </>
            )}
          </div>
        );

      case "submissions":
        return (
          <SubmissionsList
            submissions={submissions}
            isLoading={isSubmissionsLoading}
          />
        );

      case "discussion":
        return <Discussion problemId={problem.id} />;

      case "hints":
        return (
          <div className="p-4">
            {problem?.hints ? (
              <div className="bg-gray-800 p-6 rounded-xl">
                <span className="px-4 py-1 rounded-lg font-semibold text-white text-lg">
                  {problem.hints}
                </span>
              </div>
            ) : (
              <div className="text-center text-base-content/70">
                No hints available
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-25 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="m-auto min-h-screen rounded-xl bg-gray-900 max-w-7xl w-full">
        <nav className="navbar bg-gray-900 rounded-xl shadow-lg p-4">
          <div className="flex-1 gap-2">
            <div className="mt-2">
              <h1 className="text-xl font-bold">{problem.title}</h1>
              <div className="flex items-center gap-2 text-sm text-base-content/70 mt-5">
                <Clock className="w-4 h-4" />
                <span>
                  Updated{" "}
                  {new Date(problem.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-base-content/30">•</span>
                <Users className="w-4 h-4" />
                <span>{submissionCount} Submissions</span>
                <span className="text-base-content/30">•</span>
                <ThumbsUp className="w-4 h-4" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
          <div className="flex-none gap-4">
            <button
              className={`btn btn-ghost btn-circle ${
                isBookmarked ? "text-primary" : ""
              }`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="btn btn-ghost btn-circle">
              <Share2 className="w-5 h-5" />
            </button>

            <select
              className="select select-bordered select-primary w-40"
              value={selectedLanguage || ""}
              onChange={handleLanguageChange}
            >
              {Object.keys(problem.codeSnippets || {}).length === 0 ? (
                <option value="">No snippets</option>
              ) : (
                Object.keys(problem.codeSnippets).map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))
              )}
            </select>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card ">
              <div className="card-body p-0">
                <div className="tabs tabs-bordered">
                  <button
                    className={`tab gap-2 ${
                      activeTab === "description" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    <FileText className="w-4 h-4" />
                    Description
                  </button>
                  <button
                    className={`tab gap-2 ${
                      activeTab === "submissions" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("submissions")}
                  >
                    <Code2 className="w-4 h-4" />
                    Submissions
                  </button>
                  <button
                    className={`tab gap-2 ${
                      activeTab === "discussion" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("discussion")}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Discussion
                  </button>
                  <button
                    className={`tab gap-2 ${
                      activeTab === "hints" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("hints")}
                  >
                    <Lightbulb className="w-4 h-4" />
                    Hints
                  </button>
                </div>

                <div className="p-6 max-h-[90vh] overflow-y-auto scroll-smooth custom-scrollbar">
                  {renderTabContent()}
                </div>
              </div>
            </div>

            {/* ─── RIGHT SIDE: CODE EDITOR ─────────────────────────────── */}
            <div className="card h-[100%] bg-gray-900 shadow-xl">
              <div className="card-body p-0">
                <div className="tabs tabs-bordered">
                  <button className="tab tab-active gap-2">
                    <Terminal className="w-4 h-4" />
                    Code Editor
                  </button>
                </div>

                {/* ─── MONACO EDITOR ─────────────────────────────────────── */}
                <div className="h-[600px] rounded-lg w-full">
                  <Editor
                    height="100%"
                    language={(selectedLanguage || "").toLowerCase()}
                    onMount={handleEditorDidMount}
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 18,
                      lineNumbers: "on",
                      roundedSelection: false,
                      scrollBeyondLastLine: false,
                      readOnly: false,
                      automaticLayout: true,
                    }}
                  />
                </div>

                {/* ─── RUN / SUBMIT BUTTONS ───────────────────────────────── */}
                <div className="p-4 border-t border-base-300 bg-gray-900">
                  <div className="flex justify-between items-center">
                    <button
                      className={`btn bg-purple-600 gap-2 ${
                        isCodeExecuting ? "loading" : ""
                      }`}
                      onClick={handleRunCode}
                      disabled={isCodeExecuting || isCodeSubmitting}
                    >
                      {!isCodeExecuting && <Play className="w-4 h-4" />}
                      Run Code
                    </button>
                    <button
                      className={`btn btn-success gap-2 ${
                        isCodeSubmitting ? "loading" : ""
                      }`}
                      onClick={handleSubmitCode}
                      disabled={isCodeExecuting || isCodeSubmitting}
                    >
                      Submit Solution
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── TEST CASES / OUTPUT AREA ────────────────────────────── */}
          <div className="card bg-gray-900 shadow-xl mt-6">
            <div className="card-body">
              {submission ? (
                <Submission submission={submission} />
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Test Cases</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Input</th>
                          <th>Expected Output</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testcases.map((testCase, index) => (
                          <tr key={index}>
                            <td className="font-mono">{testCase.input}</td>
                            <td className="font-mono">{testCase.output}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
