'use client';

import { ColumnDef, Table } from "@/components/shared/Table";
import { useRelease } from "@/hooks/useRelease";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { TRelease } from "@/types/releases";
import { currency } from "@/utils/formats";
import { decrescentSort } from "@/utils/lists";
import { useContext } from "react";

export function FixedReleasesHigherExpenses() {
  const { releases } = useContext(FixedReleasesContext);
  const { expenses } = useRelease(releases);

  const columns: ColumnDef<TRelease>[] = [
    { accessKey: 'title', label: 'Lançamento' },
    { accessKey: 'category', label: 'Categoria' },
    { accessKey: 'value', label: 'Valor(R$)', formatFn: currency },
  ];

  const data = decrescentSort(expenses, 'value').slice(0, 5);

  return <Table columns={columns} data={data} />
}