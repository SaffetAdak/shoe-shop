import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="w-48 mx-4 flex items-center border border-gray-800/50 h-7 rounded-md">
      <div className="px-2 text-xs text-white">
        <IoSearch />
      </div>
      <input
        type="text"
        className="w-full bg-transparent outline-none text-white placeholder-white/50"
        placeholder="Search..."
      />
    </div>
  );
}
