import React from "react";

export default function Suggetions() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row space-x-2 pt-10 py-5">
        <canvas className="w-12 h-12 bg-zinc-200 rounded-full animate-pulse"></canvas>
        <div className="flex flex-col py-1 space-y-1">
          <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
          <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
        </div>
      </div>
      <span className="text-sm">Sugerencias para ti</span>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row space-x-2">
          <canvas className="w-12 h-12 bg-zinc-200 rounded-full animate-pulse"></canvas>
          <div className="flex flex-col py-1 space-y-1">
            <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
            <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <canvas className="w-12 h-12 bg-zinc-200 rounded-full animate-pulse"></canvas>
          <div className="flex flex-col py-1 space-y-1">
            <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
            <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <canvas className="w-12 h-12 bg-zinc-200 rounded-full animate-pulse"></canvas>
          <div className="flex flex-col py-1 space-y-1">
            <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
            <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <canvas className="w-12 h-12 bg-zinc-200 rounded-full animate-pulse"></canvas>
          <div className="flex flex-col py-1 space-y-1">
            <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
            <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <canvas className="w-12 h-12 bg-zinc-200 rounded-full animate-pulse"></canvas>
          <div className="flex flex-col py-1 space-y-1">
            <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
            <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
