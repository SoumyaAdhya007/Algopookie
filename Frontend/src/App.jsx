import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import Layout from "./components/Layout";
import { useAuthStore } from "./store/useAuthStore";
import AdminRoute from "./components/AdminRoute";
import AddProblem from "./page/AddProblem";
import ProblemPage from "./page/ProblemPage";
import Profile from "./page/Profile";
import ProblemsPage from "./page/ProblemsPage";
import ContestPage from "./page/ContestsPage";
import LeaderboardPage from "./page/LeaderboardPage";
import PlaylistPage from "./page/PlaylistsPage";
import NotFound from "./page/NotFoundPage";
import UpdateProblemPage from "./page/UpdateProblemPage";
import DashboardPage from "./page/DashboardPage";
import PlaylistDetailPage from "./page/PlaylistDetailsPage";
import CreateContest from "./page/CreateContest";
import ContestDetailPage from "./page/ContestPage";
import ContestProblemPage from "./page/ContestProblemPage";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={!authUser ? <HomePage /> : <Navigate to="/problems" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/problems" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to="/problems" />}
          />
          <Route
            path="/problems"
            element={authUser ? <ProblemsPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/playlists"
            element={authUser ? <PlaylistPage /> : <Navigate to="/" />}
          />
          <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
          <Route
            path="/leaderboard"
            element={authUser ? <LeaderboardPage /> : <Navigate to="/" />}
          />
          <Route
            path="/contests"
            element={authUser ? <ContestPage /> : <Navigate to="/" />}
          />
          <Route
            path="/contest/:id"
            element={authUser ? <ContestDetailPage /> : <Navigate to="/" />}
          />
          <Route
            path="/contest/:contestId/:problemId"
            element={authUser ? <ContestProblemPage /> : <Navigate to="/" />}
          />
          <Route
            path="/problem/:id"
            element={authUser ? <ProblemPage /> : <Navigate to={"/"} />}
          />
        </Route>
        <Route element={<AdminRoute />}>
          <Route
            path="/dashboard"
            element={authUser ? <DashboardPage /> : <Navigate to="/" />}
          />
          <Route
            path="/add-problem"
            element={authUser ? <AddProblem /> : <Navigate to="/" />}
          />
          <Route
            path="/create-contest"
            element={authUser ? <CreateContest /> : <Navigate to="/" />}
          />
          <Route
            path="/update-problem/:id"
            element={authUser ? <UpdateProblemPage /> : <Navigate to="/" />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
