"use client";

import { useRelease } from "@/hooks/useRelease";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { useContext } from "react";

export function ReleasesBalancePercentage() {
  const { releases } = useContext(FixedReleasesContext);
  const { revenuesTotalPercentage, expensesTotalPercentage } =
    useRelease(releases);

  return (
    <>
      <div
        className={`flex bg-gray-300 rounded-full shadow-md ${revenuesTotalPercentage + expensesTotalPercentage === 0 &&
          "animate-pulse"
          }`}
      >
        <div
          style={{ width: `${revenuesTotalPercentage}%` }}
          className="h-2 flex items-center justify-center rounded-l-full duration-500 bg-emerald-500"
        ></div>
        <div
          style={{ width: `${expensesTotalPercentage}%` }}
          className="h-2 flex items-center justify-center rounded-r-full duration-500 bg-red-500"
        ></div>
      </div>
    </>
  );
}
