"use client";

import { TRelease } from "@/types/releases";
import { filterByProp, mapTotalByProp, totalList, unique } from "@/utils/lists";

export function useRelease(releases: TRelease[]) {
  const revenues = filterByProp(releases, "type", "in");
  const expenses = filterByProp(releases, "type", "out");

  const totalRevenues = totalList(revenues, "value");
  const totalExpenses = totalList(expenses, "value");

  const revenuesCategories = unique(revenues, "category");
  const expensesCategories = unique(expenses, "category");

  const totalByRevenueCategory = mapTotalByProp(
    revenues,
    revenuesCategories,
    "category",
    "value"
  );

  const totalByExpenseCategory = mapTotalByProp(
    expenses,
    expensesCategories,
    "category",
    "value"
  );

  const totalByRevenueTransferType = mapTotalByProp(
    revenues,
    revenuesCategories,
    "transferType",
    "value"
  );

  const totalByExpenseTransferType = mapTotalByProp(
    expenses,
    expensesCategories,
    "transferType",
    "value"
  );

  const amount = Math.floor(totalRevenues + totalExpenses);

  const revenuesTotalPercentage = Math.floor((totalRevenues / amount) * 100);
  const expensesTotalPercentage = Math.floor(100 - revenuesTotalPercentage);

  return {
    revenues,
    expenses,
    totalRevenues,
    totalExpenses,
    revenuesCategories,
    expensesCategories,
    totalByRevenueCategory,
    totalByExpenseCategory,
    revenuesTotalPercentage,
    expensesTotalPercentage,
    totalByRevenueTransferType,
    totalByExpenseTransferType,
  };
}
