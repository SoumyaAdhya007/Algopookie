import React, { useState, useMemo, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import {
  Bookmark,
  PencilIcon,
  Trash,
  TrashIcon,
  Plus,
  CheckCircle,
  Circle,
  Trash2,
  Edit,
  BookmarkPlus,
  ChevronDown,
} from "lucide-react";
import { useActions } from "../store/useAction";
import AddToPlaylistModal from "./AddToPlaylist";
import CreatePlaylistModal from "./CreatePlaylistModal";
import { usePlaylistStore } from "../store/usePlaylistStore";
import toast from "react-hot-toast";
import PlaylistCarousel from "./PublicPlaylistCarousel";

const ProblemsTable = ({ problems }) => {
  const { authUser } = useAuthStore();
  const { isLoading, publicPlaylists, getAllPublicPlaylists } =
    usePlaylistStore();
  const { onDeleteProblem } = useActions();
  const { createPlaylist } = usePlaylistStore();
  const [localProblems, setLocalProblems] = useState(problems);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("ALL");
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [selectedCompany, setSelectedCompany] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAddToPlaylistModalOpen, setIsAddToPlaylistModalOpen] =
    useState(false);
  const [selectedProblemId, setSelectedProblemId] = useState(null);
  // useEffect(() => {
  //   // Simulate API call
  //   const fetchPlaylists = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
  //     getAllPublicPlaylists(mockPlaylists);
  //     setLoading(false);
  //   };

  //   fetchPlaylists();
  // }, []);
  useEffect(() => {
    getAllPublicPlaylists();
    setLocalProblems(problems);
  }, [problems, getAllPublicPlaylists]);

  // Extract all unique tags from problems
  const allTags = useMemo(() => {
    if (!Array.isArray(localProblems)) return [];
    const tagsSet = new Set();
    (localProblems || []).forEach((p) =>
      p.tags?.forEach((t) => tagsSet.add(t))
    );
    return Array.from(tagsSet);
  }, [localProblems]);
  const allCompanies = useMemo(() => {
    if (!Array.isArray(localProblems)) return [];
    const companiesSet = new Set();
    (localProblems || []).forEach((p) =>
      p.companies?.forEach((t) => companiesSet.add(t))
    );
    return Array.from(companiesSet);
  }, [localProblems]);

  // Define allowed difficulties
  const difficulties = ["EASY", "MEDIUM", "HARD"];

  // Filter problems based on search, difficulty, and tags
  const filteredProblems = useMemo(() => {
    return (localProblems || [])
      .filter((problem) =>
        problem.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((problem) =>
        difficulty === "ALL" ? true : problem.difficulty === difficulty
      )
      .filter((problem) =>
        selectedTag === "ALL" ? true : problem.tags?.includes(selectedTag)
      )
      .filter((problem) =>
        selectedCompany === "ALL"
          ? true
          : problem.companies?.includes(selectedCompany)
      );
  }, [localProblems, search, difficulty, selectedTag, selectedCompany]);

  // Pagination logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredProblems.length / itemsPerPage);
  const paginatedProblems = useMemo(() => {
    return filteredProblems.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredProblems, currentPage]);

  const handleDelete = async (tags, id) => {
    if (tags?.includes("Demo")) {
      return toast.error("Demo problems can’t be deleted.", {
        position: "top-center",
      });
    }
    await onDeleteProblem(id);
    setLocalProblems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCreatePlaylist = async (data) => {
    await createPlaylist(data);
  };

  const handleAddToPlaylist = (problemId) => {
    setSelectedProblemId(problemId);
    setIsAddToPlaylistModalOpen(true);
  };
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "EASY":
        return "bg-emerald-500 text-white";
      case "MEDIUM":
        return "bg-yellow-500 text-white";
      case "HARD":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  return (
    <div className="w-full max-w-6xl mx-auto pt-25">
      {publicPlaylists.length > 0 && (
        <PlaylistCarousel
          loading={isLoading}
          publicPlaylists={publicPlaylists}
        />
      )}

      {/* Header with Create Playlist Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Problems</h2>
        <button
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <Plus className="h-5 w-5" />
          Create Playlist
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden mb-6 p-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* ─── Search Input ─────────────────────────────────────────────── */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full
              px-4 py-2
              bg-gray-800/50 border border-gray-700
              text-gray-300 placeholder-gray-400
              rounded-lg
              focus:outline-none focus:border-indigo-500
              transition-colors
            "
            />
            {/* (No arrow needed for text input) */}
          </div>

          {/* ─── Difficulty Select ───────────────────────────────────────── */}
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="
              appearance-none
              px-4 pr-10 py-2
              bg-gray-800/50 border border-gray-700
              text-gray-300
              rounded-lg
              focus:outline-none focus:border-indigo-500
              transition-colors
            "
            >
              <option className="bg-gray-800 text-gray-300" value="ALL">
                All Difficulties
              </option>
              {difficulties.map((diff) => (
                <option
                  key={diff}
                  className="bg-gray-800 text-gray-300"
                  value={diff}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1).toLowerCase()}
                </option>
              ))}
            </select>

            {/* Custom arrow icon */}
            <ChevronDown
              className="
              pointer-events-none
              absolute right-3 top-1/2
              transform -translate-y-1/2
              text-gray-300
              w-4 h-4
            "
            />
          </div>

          {/* ─── Tags Select ──────────────────────────────────────────────── */}
          <div className="relative">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="
              appearance-none
              px-4 py-2
              bg-gray-800/50 border border-gray-700
              text-gray-300
              rounded-lg
              focus:outline-none focus:border-indigo-500
              transition-colors
            "
            >
              <option className="bg-gray-800 text-gray-300" value="ALL">
                All Tags
              </option>
              {allTags.map((tag) => (
                <option
                  key={tag}
                  className="bg-gray-800 text-gray-300"
                  value={tag}
                >
                  {tag}
                </option>
              ))}
            </select>

            {/* Custom arrow icon */}
            <ChevronDown
              className="
              pointer-events-none
              absolute right-3 top-1/2
              transform -translate-y-1/2
              text-gray-300
              w-4 h-4
            "
            />
          </div>
          <div className="relative">
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="
              appearance-none
              px-4 pr-10 py-2
              bg-gray-800/50 border border-gray-700
              text-gray-300
              rounded-lg
              focus:outline-none focus:border-indigo-500
              transition-colors
            "
            >
              <option className="bg-gray-800 text-gray-300" value="ALL">
                All Companies
              </option>
              {allCompanies.map((tag) => (
                <option
                  key={tag}
                  className="bg-gray-800 text-gray-300"
                  value={tag}
                >
                  {tag}
                </option>
              ))}
            </select>

            {/* Custom arrow icon */}
            <ChevronDown
              className="
              pointer-events-none
              absolute right-3 top-1/2
              transform -translate-y-1/2
              text-gray-300
              w-4 h-4
            "
            />
          </div>
        </div>
      </div>
      {/* Table */}

      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-gray-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Solved
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Tags
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Companies
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Difficulty
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {paginatedProblems.length > 0 ? (
              paginatedProblems.map((problem) => {
                const isSolved = problem.solvedBy?.some(
                  (user) => user.userId === authUser?.id
                );

                return (
                  <tr
                    key={problem.id}
                    className="hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      {isSolved ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : (
                        <Circle className="h-6 w-6 text-gray-500" />
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/problem/${problem.id}`}
                        className="text-white hover:text-indigo-400 transition-colors font-medium"
                      >
                        {problem.title}
                      </Link>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {(problem.tags || []).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {(problem.companies || []).map((company, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded text-xs font-medium ${getDifficultyColor(
                          problem.difficulty
                        )}`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {authUser?.role === "ADMIN" && (
                          <>
                            <button
                              onClick={() =>
                                handleDelete(problem.tags, problem.id)
                              }
                              className="btn btn-sm btn-error btn-outline"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                            <Link to={`/update-problem/${problem.id}`}>
                              <button className="btn btn-sm btn-warning btn-outline">
                                <Edit className="h-4 w-4" />
                              </button>
                            </Link>
                          </>
                        )}
                        <button
                          onClick={() => handleAddToPlaylist(problem.id)}
                          className="btn btn-sm btn-outline border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white flex items-center gap-1"
                        >
                          <BookmarkPlus className="h-4 w-4" />
                          <span className="hidden sm:inline">
                            Save to Playlist
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No problems found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          className="btn btn-sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <span className="btn btn-ghost btn-sm">
          {currentPage} / {totalPages}
        </span>
        <button
          className="btn btn-sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

      {/* Modals */}
      <CreatePlaylistModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePlaylist}
      />

      <AddToPlaylistModal
        isOpen={isAddToPlaylistModalOpen}
        onClose={() => setIsAddToPlaylistModalOpen(false)}
        problemId={selectedProblemId}
      />
    </div>
  );
};

export default ProblemsTable;
