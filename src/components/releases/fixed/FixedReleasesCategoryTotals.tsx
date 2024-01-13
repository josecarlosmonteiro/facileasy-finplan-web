"use client";

import { ColumnDef, Table } from "@/components/shared/Table";
import { useRelease } from "@/hooks/useRelease";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { currency } from "@/utils/formats";
import { useContext } from "react";

type TableDataProps = {
  category: string;
  total: number;
};

export function FixedReleasesCategoryTotals() {
  const { releases } = useContext(FixedReleasesContext);
  const { totalByRevenueCategory, totalByExpenseCategory } =
    useRelease(releases);

  const columns: ColumnDef<TableDataProps>[] = [
    { accessKey: "category", label: "" },
    {
      accessKey: "total",
      label: "",
      cell: (data) => (
        <div
          className={`${
            totalByRevenueCategory[data.category]
              ? "text-emerald-500"
              : "text-red-500"
          }`}
        >
          {currency(data.total)}
        </div>
      ),
    },
  ];

  const tableData: TableDataProps[] = [
    ...Object.entries(totalByRevenueCategory).map(([key, value]) => ({
      category: key,
      total: value,
    })),
    ...Object.entries(totalByExpenseCategory).map(([key, value]) => ({
      category: key,
      total: value,
    })),
  ];

  return (
    <div className="p-4 shadow-md rounded text-sm">
      {!!tableData.length ? (
        <>
          <h1 className="text-xl italic">Lançamentos por categoria</h1>
          <hr />
          <Table columns={columns} data={tableData} />
        </>
      ) : (
        <div className="text-center">
          Você ainda não tem lançamentos cadastrados
        </div>
      )}
    </div>
  );
}
