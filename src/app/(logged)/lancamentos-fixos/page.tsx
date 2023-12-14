'use client';

import { ExpensesByCategory } from "@/components/releases/fixed/ExpensesByCategory";
import { HigherExpensesChart } from "@/components/releases/fixed/HigherExpensesChart";
import { ReleasesBalance } from "@/components/releases/fixed/ReleasesBalance";
import { TotalReleasesBalance } from "@/components/releases/fixed/TotalReleasesBalance";
import { RELEASE_MOCK } from "@/utils/MOCKS";
import { filterByProp } from "@/utils/lists";

export default function FixedReleases() {
  const expenses = filterByProp(RELEASE_MOCK, 'type', 'out').slice(0, 8);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-12 gap-4 text-center">
        <section className="col-span-7 flex flex-col gap-4 p-4 bg-white rounded">
          <TotalReleasesBalance releases={RELEASE_MOCK} />
          <ReleasesBalance />

          <ExpensesByCategory expenses={expenses} />
          <HigherExpensesChart expenses={expenses} />
        </section>

        <section className="h-fit col-span-5 bg-gray-50 rounded text-start p-2 px-4">
          <h2 className="text-gray-600 font-semibold">Lançamentos Fixos</h2>
          <br />
          <div className="text-gray-500 italic text-sm">
            <p>
              Clique nos tipos de lançamentos ao lado e informe os valores (ou pelo menos uma média) dos seus gastos fixos mensais.
            </p>
            <p className="mt-2">
              Considere gastos fixos como aluguel, água, energia e internet.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}