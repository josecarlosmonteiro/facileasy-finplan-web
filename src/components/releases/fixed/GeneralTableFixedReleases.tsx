"use client";

import { useContext } from "react";
import { BsXCircle } from 'react-icons/bs';

import { ColumnDef, Table } from "@/components/shared/Table";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { TRelease } from "@/types/releases";
import { currency } from "@/utils/formats";
import { decrescentSort } from '@/utils/lists';
import { useRelease } from "@/hooks/useRelease";

export function GeneralTableFixedReleases() {
  const { releases, removeRelease } = useContext(FixedReleasesContext);
  const { revenues, expenses } = useRelease(releases);

  const columns: ColumnDef<TRelease>[] = [
    { accessKey: "title", label: "Lançamento" },
    { accessKey: "category", label: "Categoria" },
    { accessKey: "transferType", label: "Tp. Transferência" },
    {
      accessKey: "value",
      label: "Valor (R$)",
      cell: (info) => (
        <div
          className={`text-end ${info.type === "in" ? "text-emerald-500" : "text-red-500"
            }`}
        >
          {currency(info.value)}
        </div>
      ),
    },
    {
      accessKey: "id",
      label: "",
      cell: (info) => (
        <button
          className="p-1 px-4 rounded bg-transparent font-xs hover:text-red-500 hover:underline duration-200"
          onClick={() => removeRelease(info.id)}
        >
          <BsXCircle size={18} />
        </button>
      ),
    },
  ];

  const data = [
    ...decrescentSort(revenues, 'value'),
    ...decrescentSort(expenses, 'value'),
  ];

  return (
    <div className="max-h-[70vh] overflow-auto">
      <Table data={data} columns={columns} />
    </div>
  );
}
