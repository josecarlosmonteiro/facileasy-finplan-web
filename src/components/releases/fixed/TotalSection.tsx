"use client";

import { Modal } from "@/components/shared/Modal";
import { useRelease } from "@/hooks/useRelease";
import { TRelease } from "@/types/releases";
import { currency } from "@/utils/formats";
import { useState } from "react";
import { AddReleaseForm } from "./AddReleaseForm";

type Props = {
  releases: TRelease[];
};

const modalMap = {
  CLOSED: 0,
  REVENUES: 1,
  EXPENSES: 2,
};

export function TotalSection({ releases }: Props) {
  const [modalControl, setModalControl] = useState<number>(modalMap.CLOSED);
  const { totalRevenues, totalExpenses } = useRelease(releases);

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
        title="Adicionar Receitas"
        modalOpen={modalControl === modalMap.REVENUES}
        onClose={() => setModalControl(modalMap.CLOSED)}
        >
        <AddReleaseForm releaseType="in" />
      </Modal>

      <Modal
        title="Adicionar Despesas"
        modalOpen={modalControl === modalMap.EXPENSES}
        onClose={() => setModalControl(modalMap.CLOSED)}
      >
        <AddReleaseForm releaseType="out" />
      </Modal>
    </>
  );
}
