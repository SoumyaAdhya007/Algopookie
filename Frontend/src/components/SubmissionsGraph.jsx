import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { motion } from "framer-motion";

function parseISOToDate(isoString) {
  return new Date(isoString);
}

function getMondayOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function formatWeekLabel(date) {
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function createEmptyBucket() {
  return { solved: 0, wrong: 0, tle: 0 };
}

const SubmissionsGraph = ({ submissions }) => {
  const CHART_DATA = useMemo(() => {
    const weeklyCounts = {};

    submissions.forEach((submission) => {
      const dateObj = parseISOToDate(submission.createdAt);
      const monday = getMondayOfWeek(dateObj);
      const label = formatWeekLabel(monday);

      if (!weeklyCounts[label]) {
        weeklyCounts[label] = createEmptyBucket();
      }

      switch (submission.status) {
        case "Accepted":
          weeklyCounts[label].solved += 1;
          break;
        case "Wrong Answer":
          weeklyCounts[label].wrong += 1;
          break;
        case "Time Limit Exceeded":
          weeklyCounts[label].tle += 1;
          break;
        default:
          // ignore other statuses
          break;
      }
    });

    const entries = Object.entries(weeklyCounts);
    entries.sort((a, b) => {
      const dateA = new Date(`${a[0]}, 2025`);
      const dateB = new Date(`${b[0]}, 2025`);
      return dateA - dateB;
    });

    return entries.map(([label, counts]) => ({
      name: label,
      solved: counts.solved,
      wrong: counts.wrong,
      tle: counts.tle,
    }));
  }, [submissions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gray-900 rounded-2xl p-6 mb-8"
    >
      <h2 className="text-xl font-bold text-white mb-6">Submission Activity</h2>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={CHART_DATA}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#374151",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="solved"
              stroke="#ec4899"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="wrong"
              stroke="#ef4444"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="tle"
              stroke="#eab308"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SubmissionsGraph;
