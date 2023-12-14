'use client';

import { TRelease } from "@/types/releases";
import { currency } from "@/utils/formats";
import { filterByProp, totalList } from "@/utils/lists";
import { Modal } from "../../shared/Modal";
import { useState } from "react";
import { ColumnDef, Table } from "../../shared/Table";

type Props = {
  releases: TRelease[];
}

const modalMap = {
  CLOSED: 0,
  REVENUES: 1,
  EXPENSES: 2,
}

const columns: ColumnDef<TRelease>[] = [
  { accessKey: 'title', label: 'Lançamento' },
  { accessKey: 'transferType', label: 'Transferência' },
  { accessKey: 'value', label: 'Valor(R$)', formatFn: currency },
];

export function TotalReleasesBalance({ releases }: Props) {
  const [modalControl, setModalControl] = useState(modalMap.CLOSED);

  const revenues = filterByProp(releases, 'type', 'in');
  const expenses = filterByProp(releases, 'type', 'out');

  const totalRevenues = totalList(revenues, 'value');
  const totalExpenses = totalList(expenses, 'value');

  return (
    <>
      <div className="flex gap-4 text-lg">
        <button
          className="w-full flex justify-between items-center p-4 text-emerald-500 bg-emerald-50 rounded shadow duration-200 hover:bg-emerald-100"
          onClick={() => setModalControl(modalMap.REVENUES)}>
          <span>Receitas</span>
          <span>{currency(totalRevenues)}</span>
        </button>
        <button
          className="w-full flex justify-between items-center p-4 text-red-500 bg-red-50 rounded shadow duration-200 hover:bg-red-100"
          onClick={() => setModalControl(modalMap.EXPENSES)}>
          <span>Despesas</span>
          <span>{currency(totalExpenses)}</span>
        </button>
      </div>

      <Modal
        title="Receitas listadas"
        modalOpen={modalControl === modalMap.REVENUES}
        onClose={() => setModalControl(modalMap.CLOSED)}>
        <Table columns={columns} data={revenues} />
        <div className="mr-2 mt-3 text-end font-semibold text-emerald-500">{currency(totalRevenues)}</div>
      </Modal>

      <Modal
        title="Despesas listadas"
        modalOpen={modalControl === modalMap.EXPENSES}
        onClose={() => setModalControl(modalMap.CLOSED)}>
        <Table columns={columns} data={expenses} />
        <div className="mr-2 mt-3 text-end font-semibold text-red-500">{currency(totalExpenses)}</div>
      </Modal>
    </>
  )
}