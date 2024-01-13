"use client";

import { useContext, useState } from "react";

import { Modal } from "@/components/shared/Modal";
import { useRelease } from "@/hooks/useRelease";
import { currency } from "@/utils/formats";
import { AddReleaseForm } from "./AddReleaseForm";
import { FixedReleasesContext } from "@/providers/FixedReleasesProvider";
import { ReleasesBalancePercentage } from "./ReleasesBalancePercentage";

type Props = {};

const modalMap = {
  CLOSED: 0,
  REVENUES: 1,
  EXPENSES: 2,
};

export function TotalSection({ }: Props) {
  const { releases, addRelease } = useContext(FixedReleasesContext);
  const { totalRevenues, totalExpenses } =
    useRelease(releases);

  const [modalControl, setModalControl] = useState<number>(modalMap.CLOSED);

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
        <div className="flex flex-col gap-4">
          <ReleasesBalancePercentage />
          <div className="p-2 flex justify-between items-center bg-gray-50 text-emerald-500 border-b-2 border-emerald-500 font-semibold">
            <div>Total</div>
            <div>{currency(totalRevenues)}</div>
          </div>

          <AddReleaseForm releaseType="in" submitFn={addRelease} />
        </div>
      </Modal>

      <Modal
        title="Suas Despesas"
        modalOpen={modalControl === modalMap.EXPENSES}
        onClose={() => setModalControl(modalMap.CLOSED)}
      >
        <div className="flex flex-col gap-4">
          <ReleasesBalancePercentage />
          <div className="p-2 flex justify-between items-center bg-gray-50 text-red-500 border-b-2 border-red-500 font-semibold">
            <div>Total</div>
            <div>{currency(totalExpenses)}</div>
          </div>

          <AddReleaseForm releaseType="out" submitFn={addRelease} />
        </div>
      </Modal>
    </>
  );
}
