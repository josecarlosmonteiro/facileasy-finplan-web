import Link from "next/link";

import { FixedReleasesProvider } from "@/providers/FixedReleasesProvider";
import { fixedReleasesService } from "@/services/releases/fixedReleasesService";
import { FixedReleasesCategoryTotals } from "@/components/releases/fixed/FixedReleasesCategoryTotals";
import { ReleasesBalancePercentage } from "@/components/releases/fixed/ReleasesBalancePercentage";
import { FixedReleasesBalance } from "@/components/releases/dashboard/FixedReleasesBalance";
import { FixedReleasesHigherExpenses } from "@/components/releases/dashboard/FixedReleasesHigherExpenses";

const fetchFixedReleasesData = async () => {
  const data = await fixedReleasesService.getAll();
  return data;
}

export default async function HomePage() {
  const response = await fetchFixedReleasesData();

  return (
    <FixedReleasesProvider initialReleasesData={response || []}>
      <main className="m-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 p-4">
            <h1 className="text-2xl">Lançamentos Fixos</h1>
            <br />
            <section className="p-4 rounded bg-white flex flex-col gap-4">
              <h2 className="text-xl">Resumo de lançamentos</h2>
              <FixedReleasesBalance />
              <ReleasesBalancePercentage />

              <h2 className="mt-4 text-xl">Maiores gastos</h2>
              <FixedReleasesHigherExpenses />

              <h2 className="mt-4 text-xl">Lançamentos por categoria</h2>
              <FixedReleasesCategoryTotals />
            </section>
          </div>

          <div className="h-fit col-span-4">
            <ul className="underline">
              <li className="list-item">
                <Link href={'/lancamentos/fixos'}>Lançamentos fixos</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </FixedReleasesProvider>
  )
}