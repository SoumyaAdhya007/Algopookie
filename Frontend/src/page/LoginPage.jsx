import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Code, Code2, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

import AuthImagePattern from "../components/AuthImagePattern";
import { useAuthStore } from "../store/useAuthStore";
import ColorfulCodeEditor from "../components/AuthImagePattern";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(5, "Password must be at least of 6 character"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggingIn } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen pt-5 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">Welcome</h1>
            <p className="text-gray-400 text-lg">Login to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className={`w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 pr-12 ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-300">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="••••••••"
                  className={`w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 pr-12 ${
                    errors.password ? "input-error" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Don’t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side - Code Editor */}
      <ColorfulCodeEditor />
    </div>
  );
};

export default LoginPage;
