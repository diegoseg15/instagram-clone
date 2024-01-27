import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center w-full sm:pt-5 pt-12">
        <div className="flex flex-row overflow-x-auto max-w-[620px] w-full space-x-1">
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
          <div className="flex flex-col items-center p-2 text-xs">
            <canvas className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse"></canvas>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-8 w-full items-center space-y-4">
        <div className="w-[450px]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2 ">
              <canvas className="w-10 h-10 bg-zinc-200 rounded-full animate-pulse"></canvas>
              <div className="flex flex-col py-1 space-y-1">
                <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
                <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
              </div>
            </div>
            <div className="flex py-2">
              <span className="bg-zinc-200 h-3 w-10 rounded-lg animate-pulse"></span>
            </div>
          </div>
          <div className="bg-zinc-200 w-full h-[450px] my-2 rounded-md animate-pulse"></div>
        </div>
        <div className="w-[450px]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2 ">
              <canvas className="w-10 h-10 bg-zinc-200 rounded-full animate-pulse"></canvas>
              <div className="flex flex-col py-1 space-y-1">
                <span className="bg-zinc-200 h-3 w-28 rounded-lg animate-pulse"></span>{" "}
                <span className="bg-zinc-200 h-3 w-20 rounded-lg animate-pulse"></span>
              </div>
            </div>
            <div className="flex py-2">
              <span className="bg-zinc-200 h-3 w-10 rounded-lg animate-pulse"></span>
            </div>
          </div>
          <div className="bg-zinc-200 w-full h-[450px] my-2 rounded-md animate-pulse"></div>
        </div>
      </div>
    </>
  );
}
