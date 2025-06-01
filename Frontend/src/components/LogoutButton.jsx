import React from "react";
import { useAuthStore } from "../store/useAuthStore";
const LogoutButton = ({ children }) => {
  const { logout } = useAuthStore();

  const onLogout = async () => {
    await logout();
  };

  return (
    <button
      className="flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
      onClick={onLogout}
    >
      {children}
    </button>
  );
};

export default LogoutButton;
