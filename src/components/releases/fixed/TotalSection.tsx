"use client";

import { Modal } from "@/components/shared/Modal";
import { useRelease } from "@/hooks/useRelease";
import { TRelease } from "@/types/releases";
import { currency } from "@/utils/formats";
import { useContext, useState } from "react";
import { AddReleaseForm } from "./AddReleaseForm";
import { ColumnDef, Table } from "@/components/shared/Table";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";

type Props = {};

const modalMap = {
  CLOSED: 0,
  REVENUES: 1,
  EXPENSES: 2,
};

export function TotalSection({}: Props) {
  const { releases, addRelease } = useContext(FixedReleasesContext);
  const { revenues, expenses, totalRevenues, totalExpenses } =
    useRelease(releases);

  const [modalControl, setModalControl] = useState<number>(modalMap.CLOSED);

  const columns: ColumnDef<TRelease>[] = [
    { accessKey: "title", label: "Lançamentos" },
    { accessKey: "category", label: "Categoria" },
    { accessKey: "transferType", label: "Tp. Transferência" },
    { accessKey: "value", label: "Valor (R$)", formatFn: currency },
  ];

  return (
    <>
      <div className="flex gap-8">
        <div
          className="w-full p-4 flex justify-between items-center rounded shadow text-emerald-500 cursor-pointer"
          onClick={() => setModalControl(modalMap.REVENUES)}
        >
          <strong>Receitas</strong>
          <div className="text-lg">{currency(totalRevenues)}</div>
        </div>
        <div
          className="w-full p-4 flex justify-between items-center rounded shadow text-red-500 cursor-pointer"
          onClick={() => setModalControl(modalMap.EXPENSES)}
        >
          <strong>Despesas</strong>
          <div className="text-lg">{currency(totalExpenses)}</div>
        </div>
      </div>

      <Modal
        title="Suas Receitas"
        modalOpen={modalControl === modalMap.REVENUES}
        onClose={() => setModalControl(modalMap.CLOSED)}
      >
        <div className="max-h-[30vh] overflow-auto">
          <Table data={revenues} columns={columns} />
        </div>

        <div className="p-1 px-2 my-2 flex justify-between items-center bg-emerald-500 text-white font-semibold">
          <div>Total</div>
          <div>{currency(totalRevenues)}</div>
        </div>

        <AddReleaseForm releaseType="in" submitFn={addRelease} />
      </Modal>

      <Modal
        title="Suas Despesas"
        modalOpen={modalControl === modalMap.EXPENSES}
        onClose={() => setModalControl(modalMap.CLOSED)}
      >
        <div className="max-h-[28vh] overflow-auto">
          <Table data={expenses} columns={columns} />
          <div className="p-1 px-2 my-2 flex justify-between items-center bg-red-500 text-white font-semibold">
            <div>Total</div>
            <div>{currency(totalRevenues)}</div>
          </div>
        </div>

        <AddReleaseForm releaseType="out" submitFn={addRelease} />
      </Modal>
    </>
  );
}
