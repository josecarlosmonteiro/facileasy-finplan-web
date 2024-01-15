'use client';

import { useRelease } from "@/hooks/useRelease";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { currency } from "@/utils/formats";
import { useContext } from "react";

export function FixedReleasesBalance() {
  const { releases } = useContext(FixedReleasesContext);
  const { totalRevenues, totalExpenses } = useRelease(releases);

  return (
    <div className="flex gap-4">
      <div className="w-full p-4 flex justify-between items-center rounded shadow-md text-emerald-500 text-xl">
        <span className="">Receitas</span>
        <span>{currency(totalRevenues)}</span>
      </div>

      <div className="w-full p-4 flex justify-between items-center rounded shadow-md text-red-500 text-xl">
        <span className="">Despesas</span>
        <span>{currency(totalRevenues)}</span>
      </div>
    </div>
  )
}