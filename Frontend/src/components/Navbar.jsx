import React, { useState, useEffect } from "react";
import { User, Code, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { authUser } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useProfile = (name) => {
    const words = name.trim().split(" ");
    const initials =
      words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0];
    return initials.toUpperCase();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={"/"} className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent group-hover:animate-pulse">
                {"AlgoPookie{🎀}"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {authUser ? (
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: "Problems", href: "/problems" },
                { name: "Playlists", href: "/playlists" },
                { name: "Leaderboard", href: "/leaderboard" },
              ].map((item) => (
                <Link key={item.name} to={item.href}>
                  <div className="group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
                  </div>
                </Link>
              ))}
              {authUser?.role === "ADMIN" ? (
                <Link to="/dashboard">
                  <div className="group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold group-hover:text-white transition-colors duration-300">
                        Dashboard
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
                  </div>
                </Link>
              ) : null}
            </div>
          ) : null}

          {/* Auth Buttons */}
          {authUser ? (
            <div className="hidden md:flex items-center gap-8">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar flex flex-row "
                >
                  <div className="w-10 h-10 pt-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center font-bold ">
                    <p>{useProfile(authUser ? authUser.name : "Profile")}</p>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
                >
                  {/* Admin Option */}

                  {/* Common Options */}
                  <li>
                    <p className="text-base font-semibold">{authUser?.name}</p>
                    <hr className="border-gray-200/10" />
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="hover:bg-white/10 hover:text-white text-base font-semibold"
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Profile
                    </Link>
                  </li>
                  {authUser?.role === "ADMIN" && (
                    <li>
                      <Link
                        to="/add-problem"
                        className="hover:bg-white/10 hover:text-white text-base font-semibold"
                      >
                        <Code className="w-4 h-4 mr-1" />
                        Add Problem
                      </Link>
                    </li>
                  )}
                  <li>
                    <LogoutButton className="hover:bg-primary hover:text-white">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </LogoutButton>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/login">
                <button className="group relative px-6 py-2.5 text-white/80 font-medium rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Login
                  </span>
                </button>
              </Link>
              <Link to="/signup">
                <button className="group relative px-6 py-2.5 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                    <span>Sign Up</span>
                  </div>
                </button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-0 rotate-180"
                    : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-180"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-4 bg-black/50 backdrop-blur-xl rounded-2xl mt-4 border border-white/10">
            {authUser ? (
              <>
                {[
                  { name: "Problems", href: "/problems" },
                  { name: "Playlists", href: "/playlists" },
                  { name: "Leaderboard", href: "/leaderboard" },
                  { name: "Profile", href: "/profile" },
                ].map((item) => (
                  <Link key={item.name} to={item.href}>
                    <div className="group flex items-center space-x-3 px-6 py-3 hover:bg-white/10 transition-all duration-300">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
                {authUser?.role === "ADMIN" ? (
                  <Link to="/add-problem">
                    <div className="group flex items-center space-x-3 px-6 py-3 hover:bg-white/10 transition-all duration-300">
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                        Add Problem
                      </span>
                    </div>
                  </Link>
                ) : null}
                {authUser?.role === "ADMIN" ? (
                  <Link to="/dashboard">
                    <div className="group flex items-center space-x-3 px-6 py-3 hover:bg-white/10 transition-all duration-300">
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                        Dashboard
                      </span>
                    </div>
                  </Link>
                ) : null}

                <LogoutButton className="hover:bg-primary hover:text-white">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </LogoutButton>
              </>
            ) : (
              <div className="px-6 pt-4 space-y-3">
                <Link to="/login">
                  <button className="w-full py-3 text-white/80 font-medium rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Sign Up</span>
                    </div>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
