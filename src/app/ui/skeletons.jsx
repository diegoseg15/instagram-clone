import React from "react";

export function StoriesHomeSkeletons() {
  return (
    <div className="flex flex-col items-center p-2 text-xs">
      <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
    </div>
  );
}
