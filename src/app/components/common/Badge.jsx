"use client";
import clsx from "clsx";

// Predefined color skins
const colorMap = {
  buy: "bg-emerald-100 text-emerald-700 border-emerald-200", // Greenish
  sell: "bg-red-100 text-red-700 border-red-200", // Reddish
  live: "bg-blue-600 text-white border-blue-600 rounded", // Image wala blue box
  paper: "bg-gray-600 text-white border-gray-600 rounded", // Paper trade style
  open: "bg-orange-100 text-orange-700 border-orange-200", // Status: Open
  closed: "bg-emerald-100 text-emerald-700 border-emerald-200",
  incoming: "bg-rose-100 text-rose-700 border-rose-200",
  sell: "bg-green-100 text-green-700 border-green-200",
  approved: "bg-linear-to-br from-green-500/80 to-emerald-500/80 text-white",
  confirmed: "bg-green-100 text-green-700 border-green-200",
  paid: "bg-green-100 text-green-700 border-green-200",
  pass: "bg-green-100 text-green-700 border-green-200",
  delivered: "bg-green-100 text-green-700 border-green-200",
  resolved: "bg-green-100 text-green-700 border-green-200",
  pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  upcoming: "bg-yellow-100 text-yellow-700 border-yellow-200",
  rejected: "bg-red-100 text-red-700 border-red-200",
  cancelled: "bg-red-100 text-red-700 border-red-200 animate-pulse",
  unpaid: "bg-yellow-100 text-yellow-700 border-yellow-200",
  active: "bg-green-100 text-green-700 border border-green-200",
  inactive: "bg-gray-100 text-gray-700 border border-gray-200",
  hold: "bg-red-100 text-red-700 border-red-200",
  completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
  failed: "bg-rose-100 text-rose-700 border-rose-200",
  ended: "bg-rose-100 text-rose-700 border-rose-200",
  bestseller: "bg-teal-400 text-white border-teal-400",
  "marketing partner":
    "bg-linear-to-br from-pink-500/80 to-red-500/80 text-white",
  "business partner":
    "bg-linear-to-br from-indigo-500/80 to-blue-500/80 text-white",
  "social partner":
    "bg-linear-to-br from-green-500/80 to-emerald-500/80 text-white",
  ["new arrival"]: "bg-yellow-400 text-white border-yellow-400",
};

// Random fallback colors (for unmatched text)
const randomColors = [
  "bg-pink-100 text-pink-700 border border-pink-200",
  "bg-purple-100 text-purple-700 border border-purple-200",
  "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "bg-teal-100 text-teal-700 border border-teal-200",
  "bg-orange-100 text-orange-700 border border-orange-200",
];

export const Badge = ({ text, customStyle }) => {
  const key = text?.toLowerCase().trim();

  let hashCode = 0;
  if (key) {
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }
  }

  const style =
    colorMap[key] ||
    randomColors[hashCode % randomColors.length];

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 select-none",
        style,
        customStyle,
      )}
    >
      {text}
    </span>
  );
};

export default Badge;

// Example use

//     < Badge text =”pending” customStyle =”capitalize”/>
