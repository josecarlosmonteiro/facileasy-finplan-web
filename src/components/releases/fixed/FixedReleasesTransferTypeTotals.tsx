'use client';

import { ColumnDef, Table } from "@/components/shared/Table";
import { useRelease } from "@/hooks/useRelease";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { currency } from "@/utils/formats";
import { useContext } from "react";

type TableDataProps = {
  transferType: string;
  total: number;
};

export function FixedReleasesTransferTypeTotals() {
  const { releases } = useContext(FixedReleasesContext);
  const { totalByRevenueTransferType, totalByExpenseTransferType } = useRelease(releases);

  const columns: (type: 'in' | 'out') => ColumnDef<TableDataProps>[] = (type: 'in' | 'out') => [
    { accessKey: "transferType", cell: data => <div className="w-20 text-center">{data.transferType}</div> },
    {
      accessKey: "total", cell: data => (
        <div className={`${type === 'in' ? 'text-emerald-500' : 'text-red-500'}`}>
          {currency(data.total)}
        </div>
      )
    },
  ];

  const getTableData = (entryObj: Record<string, number>) =>
    Object.entries(entryObj).map(([key, value]) => ({ transferType: key, total: value }))


  const tableData: TableDataProps[] = [
    ...Object.entries(totalByRevenueTransferType).map(([key, value]) => ({
      transferType: key,
      total: value,
    })),
    ...Object.entries(totalByExpenseTransferType).map(([key, value]) => ({
      transferType: key,
      total: value,
    })),
  ];

  return (
    <div className="p-4 rounded shadow-md">
      <h1 className="text-lg">Lançamentos por Tipo de Transferência</h1>
      <hr />
      <div className="text-sm">
        <Table columns={columns('in')} data={getTableData(totalByRevenueTransferType)} />
        <Table columns={columns('out')} data={getTableData(totalByExpenseTransferType)} />
      </div>
    </div>
  )
}