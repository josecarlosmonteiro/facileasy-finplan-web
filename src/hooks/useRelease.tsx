"use client";

import { TRelease } from "@/types/releases";
import { filterByProp, totalList } from "@/utils/lists";

export function useRelease(releases: TRelease[]) {
  const revenues = filterByProp(releases, "type", "in");
  const expenses = filterByProp(releases, "type", "out");

  const totalRevenues = totalList(revenues, "value");
  const totalExpenses = totalList(expenses, "value");

  return {
    revenues,
    expenses,
    totalRevenues,
    totalExpenses,
  };
}
