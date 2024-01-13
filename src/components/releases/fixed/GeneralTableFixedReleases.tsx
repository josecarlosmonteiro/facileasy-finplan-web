"use client";

import { ColumnDef, Table } from "@/components/shared/Table";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { TRelease } from "@/types/releases";
import { currency } from "@/utils/formats";
import { useContext } from "react";

export function GeneralTableFixedReleases() {
  const { releases, removeRelease } = useContext(FixedReleasesContext);

  const columns: ColumnDef<TRelease>[] = [
    { accessKey: "title", label: "Lançamento" },
    { accessKey: "category", label: "Categoria" },
    { accessKey: "transferType", label: "Tp. Transferência" },
    {
      accessKey: "value",
      label: "Valor (R$)",
      cell: (info) => (
        <div
          className={`text-end ${
            info.type === "in" ? "text-emerald-500" : "text-red-500"
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
          remover
        </button>
      ),
    },
  ];

  return (
    <div className="max-h-[70vh] overflow-auto">
      <Table data={releases} columns={columns} />
    </div>
  );
}
