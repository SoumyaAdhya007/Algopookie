import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import ColorfulCodeEditor from "../components/AuthImagePattern";

const SignUpSchema = z.object({
  name: z.string().min(3, "Name must be at least of 3 character"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least of 6 character"),
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSigninUp } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signup(data);
    } catch (error) {
      console.error("SignUp failed:", error);
    }
  };
  return (
    <div className="min-h-screen pt-5 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">Welcome</h1>
            <p className="text-gray-400 text-lg">Sign Up to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-300">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Binod Kumar"
                className={`w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 ${
                  errors.name ? "input-error" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className={`w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 ${
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

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              disabled={isSigninUp}
            >
              {isSigninUp ? <>Loading...</> : "Sign Up"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
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

export default SignUpPage;
