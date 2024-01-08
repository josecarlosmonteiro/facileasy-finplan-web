"use client";

import { api } from "@/services/api";
import { TRelease } from "@/types/releases";
import { filterByProp, totalList } from "@/utils/lists";

const postFixedReleases = async (releases: TRelease[]): Promise<TRelease[]> => {
  const payload: TRelease[] = releases.map((el) => ({
    ...el,
    value: Number(el.value),
  }));

  const { data } = await api.post("/fixed-releases", payload);
  return data;
};

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
