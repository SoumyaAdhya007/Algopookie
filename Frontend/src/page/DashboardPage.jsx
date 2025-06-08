import { useEffect, useState } from "react";
import {
  Users,
  Crown,
  CreditCard,
  UserCheck,
  UserX,
  Shield,
  Mail,
  Calendar,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useDashboard } from "../store/useDashboardStore";
import DashboardLoading from "../components/DashboardLoading";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterRole, setFilterRole] = useState("all");
  const [filterSubscription, setFilterSubscription] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlan, setFilterPlan] = useState("all");
  const [localUsers, setLocalUsers] = useState([]);
  const { isLoading, users, getUsers, changeUserStatus } = useDashboard();
  const usersPerPage = 10;

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  useEffect(() => {
    setLocalUsers(users);
  }, [users]);
  // Compute stats
  const totalUsers = localUsers.length;
  const freeUsers = localUsers.filter((u) => u.plan === "FREE").length;
  const paidUsers = localUsers.filter((u) => u.plan === "PAID").length;
  const adminUsers = localUsers.filter((u) => u.role === "ADMIN").length;
  const blockedUsers = localUsers.filter((u) => u.isBlocked).length;
  const joinedToday = localUsers.filter((u) => {
    const created = new Date(u.createdAt);
    const today = new Date();
    return (
      created.getFullYear() === today.getFullYear() &&
      created.getMonth() === today.getMonth() &&
      created.getDate() === today.getDate()
    );
  }).length;

  // Filter + search
  const filtered = localUsers.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || u.role === filterRole;
    const matchesPlan = filterPlan === "all" || u.plan === filterPlan;

    return matchesSearch && matchesRole && matchesPlan;
  });
  const filteredUsers = localUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesSubscription =
      filterSubscription === "all" || user.subscription === filterSubscription;

    return matchesSearch && matchesRole && matchesSubscription;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / usersPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );
  const handleBlockUser = async (userId, isBlocked) => {
    setLocalUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, isBlocked: !u.isBlocked } : u))
    );

    try {
      await changeUserStatus(userId, isBlocked);
    } catch (err) {
      setLocalUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, isBlocked: !u.isBlocked } : u
        )
      );
      console.error("Failed to toggle block:", err);
    }
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  if (isLoading) {
    return <DashboardLoading />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-white mb-2">
              Admin{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-gray-400">
              Manage users and monitor platform statistics
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {/* Total Users */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Users</p>
                  <p className="text-2xl font-bold text-white">{totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            {/* Free Users */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Free Users</p>
                  <p className="text-2xl font-bold text-white">{freeUsers}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-400" />
              </div>
            </div>

            {/* Paid Users */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Paid Users</p>
                  <p className="text-2xl font-bold text-white">{paidUsers}</p>
                </div>
                <CreditCard className="h-8 w-8 text-yellow-400" />
              </div>
            </div>

            {/* Admins */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Admins</p>
                  <p className="text-2xl font-bold text-white">{adminUsers}</p>
                </div>
                <Crown className="h-8 w-8 text-purple-400" />
              </div>
            </div>

            {/* Blocked */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Blocked</p>
                  <p className="text-2xl font-bold text-white">
                    {blockedUsers}
                  </p>
                </div>
                <UserX className="h-8 w-8 text-red-400" />
              </div>
            </div>

            {/* Active Today */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Joined Today</p>
                  <p className="text-2xl font-bold text-white">{joinedToday}</p>
                </div>
                <Shield className="h-8 w-8 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Name or email..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Role</label>
                <select
                  value={filterRole}
                  onChange={(e) => {
                    setFilterRole(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="all">All Roles</option>
                  <option value="ADMIN">Admin</option>
                  <option value="USER">User</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Plan</label>
                <select
                  value={filterPlan}
                  onChange={(e) => {
                    setFilterPlan(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="all">All Plans</option>
                  <option value="FREE">Free</option>
                  <option value="PAID">Paid</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilterRole("all");
                    setFilterPlan("all");
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 bg-gray-900 rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">All Users</h2>
              <p className="text-gray-400">
                Showing {paginated.length} of {filteredUsers.length} users
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/80">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                      Subscription
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                      Join Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {paginated.map((user) => (
                    <tr
                      key={user.id}
                      className={`hover:bg-gray-700/50 transition-colors ${
                        user.isBlocked ? "opacity-60" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium text-white">
                              {user.name}
                            </div>
                            {user.isBlocked && (
                              <div className="text-xs text-red-400">
                                Blocked
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{user.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.role === "admin"
                              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {user.role === "admin" ? "Admin" : "User"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.subscription === "paid"
                              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                              : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                          }`}
                        >
                          {user.subscription === "paid" ? "Paid" : "Free"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">
                            {formatDate(user.createdAt)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleBlockUser(user.id, !user.isBlocked)
                            }
                            className={`btn btn-sm ${
                              user.isBlocked
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "bg-red-600 hover:bg-red-700 text-white"
                            } border-none`}
                          >
                            {user.isBlocked ? "Unblock" : "Block"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Showing {(currentPage - 1) * usersPerPage + 1} to{" "}
                  {Math.min(currentPage * usersPerPage, filteredUsers.length)}{" "}
                  of {filteredUsers.length} users
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
