import React from "react";
import Link from "next/link";

export default function layout({ children }) {
  return (
    <>
      <header className="w-screen overflow-x-hidden py-3 px-64 text-xl font-bold border-b-2">
        <Link href="/">Instagram</Link>
      </header>
      <div className="flex justify-center py-10 w-screen overflow-x-hidden">
        {children}
      </div>
    </>
  );
}
