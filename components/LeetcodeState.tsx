"use client"
import { useEffect, useState } from "react";
import { ColourfulText } from "./ui/ColorFull-Text";
import "react-calendar-heatmap/dist/styles.css";
import LeetCodeCalendar from "leetcode-calendar";

interface LeetCodeStatsType {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeStatsType | null>(null);
  const exampleTheme = {
    light: [
      "rgb(20, 20, 20)",
      "rgba(0, 0, 0, 0.44)",
      "rgba(0, 0, 0, 0.6)",
      "rgba(0, 0, 0, 0.76)",
      "rgba(0, 0, 0, 0.92)",
    ],
    dark: [
      "rgb(20, 20, 20)",
      "rgba(0, 0, 0, 0.44)",
      "rgba(0, 0, 0, 0.6)",
      "rgba(0, 0, 0, 0.76)",
      "rgba(0, 0, 0, 0.92)",
    ],
  };

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/Karan1_2")
      .then((res) => res.json())
      .then((data: LeetCodeStatsType) => setStats(data))
      .catch((err) => console.error("Error fetching LeetCode Stats:", err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10 overflow-hidden px-4">
      <h1 className="mt-5 mb-5 text-2xl">
        <ColourfulText text="LeetCode Stats" />
      </h1>

      <div className="w-full max-w-4xl p-4 bg-gray-900 rounded-xl text-white overflow-x-auto">
        <LeetCodeCalendar
          username="Karan1_2"
          blockSize={window.innerWidth < 640 ? 15 : 8} // Adjust size for small screens
          blockMargin={window.innerWidth < 640 ? 7 : 5} // Adjust margin for small screens
          fontSize={window.innerWidth < 640 ? 16 : 15} // Adjust font size for readability
          theme={exampleTheme}
        />
      </div>

      <div className="mt-6 w-full max-w-md bg-gray-800 p-6 rounded-xl text-white text-center">
        {stats ? (
          <>
            <p><ColourfulText text="Total Solved" />: {stats.totalSolved}</p>
            <p><ColourfulText text="Easy" />: {stats.easySolved}</p>
            <p><ColourfulText text="Medium" />: {stats.mediumSolved}</p>
            <p><ColourfulText text="Hard" />: {stats.hardSolved}</p>
            <p><ColourfulText text="Ranking" />: #{stats.ranking}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default LeetCodeStats;