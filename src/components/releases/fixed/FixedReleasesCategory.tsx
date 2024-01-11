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

const columns: ColumnDef<TableDataProps>[] = [
  { accessKey: "category", label: "" },
  { accessKey: "total", label: "", formatFn: currency },
];

export function FixedReleasesCategory() {
  const { releases } = useContext(FixedReleasesContext);
  const { totalByRevenueCategory, totalByExpenseCategory } =
    useRelease(releases);

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
      {!!tableData.length ? (
        <>
          <h1>Lançamentos por categoria</h1>
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
