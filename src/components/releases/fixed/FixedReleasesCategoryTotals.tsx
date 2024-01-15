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
    { accessKey: "category", label: "Categoria" },
    {
      accessKey: "total",
      label: "Total (R$)",
      cell: (data) => (
        <div
          className={`${totalByRevenueCategory[data.category]
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
    <div>
      {!!tableData.length
        ? <Table columns={columns} data={tableData} />
        : <div className="text-center text-gray-500">Você ainda não tem lançamentos cadastrados</div>
      }
    </div>
  );
}
