// import { useState } from "react";
// import { Calendar, Clock, Search, ChevronDown, Trash2 } from "lucide-react";
// import Navbar from "../components/Navbar";

// Mock problems data
const mockProblems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "EASY",
    tags: ["Array", "Hash Table"],
    companies: ["Amazon", "Google"],
    acceptance: "49.1%",
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "MEDIUM",
    tags: ["Linked List", "Math"],
    companies: ["Microsoft", "Facebook"],
    acceptance: "38.4%",
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "MEDIUM",
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: ["Amazon", "Bloomberg"],
    acceptance: "33.8%",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "HARD",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    companies: ["Google", "Apple"],
    acceptance: "35.3%",
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "MEDIUM",
    tags: ["String", "Dynamic Programming"],
    companies: ["Amazon", "Microsoft"],
    acceptance: "32.4%",
  },
];

const difficultyOptions = ["EASY", "MEDIUM", "HARD"];

const difficultyColors = {
  EASY: "bg-green-500/20 text-green-400 border-green-500/30",
  MEDIUM: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  HARD: "bg-red-500/20 text-red-400 border-red-500/30",
};

const CreateContests = () => {
  const [contestForm, setContestForm] = useState({
    title: "",
    description: "",
    difficulty: "",
    startTime: "",
    endTime: "",
  });

  const [selectedProblems, setSelectedProblems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All Difficulties");

  const handleInputChange = (field, value) => {
    setContestForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addProblemToContest = (problem) => {
    if (!selectedProblems.find((p) => p.id === problem.id)) {
      setSelectedProblems((prev) => [...prev, problem]);
    }
  };

  const removeProblemFromContest = (problemId) => {
    setSelectedProblems((prev) => prev.filter((p) => p.id !== problemId));
  };

  const filteredProblems = mockProblems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === "All Difficulties" ||
      problem.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contest Data:", {
      ...contestForm,
      problems: selectedProblems,
    });
    // Handle form submission here
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-7xl mx-auto p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-bold text-3xl text-white mb-2">
              Create <span className="text-pink-500">Contest</span>
            </h1>
            <p className="text-white/70 text-lg">
              Design and organize your own coding competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contest Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contest Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Contest Title
                  </label>
                  <input
                    type="text"
                    value={contestForm.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter contest title"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    value={contestForm.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Describe your contest..."
                    required
                  />
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Difficulty Level
                  </label>
                  <div className="relative">
                    <select
                      value={contestForm.difficulty}
                      onChange={(e) =>
                        handleInputChange("difficulty", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="" className="bg-gray-800">
                        Select difficulty
                      </option>
                      {difficultyOptions.map((difficulty) => (
                        <option
                          key={difficulty}
                          value={difficulty}
                          className="bg-gray-800"
                        >
                          {difficulty}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                </div>

                {/* Start Time */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Start Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      value={contestForm.startTime}
                      onChange={(e) =>
                        handleInputChange("startTime", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                </div>

                {/* End Time */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    End Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      value={contestForm.endTime}
                      onChange={(e) =>
                        handleInputChange("endTime", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                </div>

                {/* Selected Problems Summary */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Selected Problems ({selectedProblems.length})
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-h-32 overflow-y-auto">
                    {selectedProblems.length === 0 ? (
                      <p className="text-white/50 text-sm">
                        No problems selected yet
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {selectedProblems.map((problem) => (
                          <div
                            key={problem.id}
                            className="flex items-center justify-between"
                          >
                            <span className="text-white text-sm">
                              {problem.title}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                removeProblemFromContest(problem.id)
                              }
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Create Contest
                </button>
              </form>
            </div>

            {/* Problems Table */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Add Problems
              </h2>

              {/* Search and Filter */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Search problems..."
                  />
                </div>
                <div className="relative">
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none pr-10"
                  >
                    <option value="All Difficulties" className="bg-gray-800">
                      All Difficulties
                    </option>
                    {difficultyOptions.map((difficulty) => (
                      <option
                        key={difficulty}
                        value={difficulty}
                        className="bg-gray-800"
                      >
                        {difficulty}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredProblems.map((problem) => {
                  const isSelected = selectedProblems.find(
                    (p) => p.id === problem.id
                  );
                  return (
                    <div
                      key={problem.id}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">
                          {problem.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-2 py-1 rounded text-xs border ${
                              difficultyColors[problem.difficulty]
                            }`}
                          >
                            {problem.difficulty}
                          </span>
                          <button
                            onClick={() =>
                              isSelected
                                ? removeProblemFromContest(problem.id)
                                : addProblemToContest(problem)
                            }
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              isSelected
                                ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                                : "bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30"
                            }`}
                          >
                            {isSelected ? "Remove" : "Add"}
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {problem.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span>Acceptance: {problem.acceptance}</span>
                        <span>{problem.companies.join(", ")}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, Search, ChevronDown, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import { useProblemStore } from "../store/useProblemStore";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { axiosInstance } from "../libs/axios";

// Zod validation schema
const contestSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

const CreateContest = () => {
  const { getAllProblems, problems, isProblemsLoading } = useProblemStore();
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All Difficulties");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contestSchema),
  });
  useEffect(() => {
    getAllProblems();
  }, [getAllProblems]);

  //   const onSubmit = (data) => {
  //     const payload = {
  //       title: data.title,
  //       description: data.description,
  //       difficulty: data.difficulty,
  //       startTime: new Date(data.startTime).toISOString(),
  //       endTime: new Date(data.endTime).toISOString(),
  //       problemIds: selectedProblems.map((p) => p.id),
  //     };
  //     console.log("Contest Data:", payload);
  //     // TODO: send payload to your API
  //   };
  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      difficulty: data.difficulty,
      startTime: new Date(data.startTime).toISOString(),
      endTime: new Date(data.endTime).toISOString(),
      problemIds: selectedProblems.map((p) => p.id),
    };
    try {
      // stringify the data
      setIsLoading(true);
      const res = await axiosInstance.post("/contests/admin/add", payload);

      toast.success(res.data.message);
      navigation("/");
    } catch (error) {
      console.log("Error creating problem", error);
      toast.error("Error creating problem");
    } finally {
      setIsLoading(false);
    }
  };
  const toggleProblem = (problem) => {
    setSelectedProblems((prev) =>
      prev.some((p) => p.id === problem.id)
        ? prev.filter((p) => p.id !== problem.id)
        : [...prev, problem]
    );
  };

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDiff =
      difficultyFilter === "All Difficulties" ||
      problem.difficulty === difficultyFilter;
    return matchesSearch && matchesDiff;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="font-bold text-3xl text-white mb-2">
              Create <span className="text-pink-500">Contest</span>
            </h1>
            <p className="text-white/70 text-lg">
              Design and organize your own coding competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contest Details
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Contest Title
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter contest title"
                  />
                  {errors.title && (
                    <p className="text-red-400 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Describe your contest..."
                  />
                  {errors.description && (
                    <p className="text-red-400 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Difficulty Level
                  </label>
                  <div className="relative">
                    <select
                      {...register("difficulty")}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none"
                    >
                      <option value="" className="bg-gray-800">
                        Select difficulty
                      </option>
                      {difficultyOptions.map((d) => (
                        <option key={d} value={d} className="bg-gray-800">
                          {d}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                  {errors.difficulty && (
                    <p className="text-red-400 text-sm">
                      {errors.difficulty.message}
                    </p>
                  )}
                </div>

                {/* Start Time */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Start Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      {...register("startTime")}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                  {errors.startTime && (
                    <p className="text-red-400 text-sm">
                      {errors.startTime.message}
                    </p>
                  )}
                </div>

                {/* End Time */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    End Time
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      {...register("endTime")}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  </div>
                  {errors.endTime && (
                    <p className="text-red-400 text-sm">
                      {errors.endTime.message}
                    </p>
                  )}
                </div>

                {/* Selected Problems */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Selected Problems ({selectedProblems.length})
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-h-32 overflow-y-auto">
                    {selectedProblems.length === 0 ? (
                      <p className="text-white/50 text-sm">
                        No problems selected yet
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {selectedProblems.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center justify-between"
                          >
                            <span className="text-white text-sm">
                              {p.title}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggleProblem(p)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner text-white"></span>
                  ) : (
                    <>Create Contest</>
                  )}
                </button>
              </form>
            </div>

            {/* Problems List */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Add Problems
              </h2>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Search problems..."
                  />
                </div>
                <div className="relative">
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none pr-10"
                  >
                    <option value="All Difficulties" className="bg-gray-800">
                      All Difficulties
                    </option>
                    {difficultyOptions.map((d) => (
                      <option key={d} value={d} className="bg-gray-800">
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3 max-h-[650px] overflow-y-auto">
                {isProblemsLoading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  filteredProblems.map((problem) => {
                    const isSelected = selectedProblems.some(
                      (p) => p.id === problem.id
                    );
                    return (
                      <div
                        key={problem.id}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-medium">
                            {problem.title}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-2 py-1 rounded text-xs border ${
                                difficultyColors[problem.difficulty]
                              }`}
                            >
                              {problem.difficulty}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggleProblem(problem)}
                              className={`px-3 py-1.rounded-lg text-sm	font-medium transition-colors ${
                                isSelected
                                  ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                                  : "bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30"
                              }`}
                            >
                              {isSelected ? "Remove" : "Add"}
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {problem.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-white/60">
                          <span>Acceptance: {problem.acceptance}</span>
                          <span>{problem.companies.join(", ")}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContest;
