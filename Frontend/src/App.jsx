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
        </Route>
        {/* 
        <Route path="/problems" element={<Layout />}>
          <Route
            path="/problems"
            element={authUser ? <ProblemsPage /> : <Navigate to={"/"} />}
          />
        </Route>

        <Route path="/profile" element={<Layout />}>
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/" />}
          />
        </Route>

        <Route path="/login" element={<Layout />}>
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/problems" />}
          />
        </Route> */}

        {/* <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/problems" />}
        /> */}

        <Route
          path="/problem/:id"
          element={authUser ? <ProblemPage /> : <Navigate to={"/"} />}
        />

        <Route element={<AdminRoute />}>
          <Route
            path="/add-problem"
            element={authUser ? <AddProblem /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
