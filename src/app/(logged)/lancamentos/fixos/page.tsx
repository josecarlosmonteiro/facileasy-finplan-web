import { ReleasesBalancePercentage } from "@/components/releases/fixed/ReleasesBalancePercentage";
import { TotalSection } from "@/components/releases/fixed/TotalSection";
import { RELEASE_MOCK } from "@/utils/MOCKS";

export default function FixedReleases() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <section className="flex flex-col gap-4 p-4 bg-white rounded">
          <TotalSection releases={RELEASE_MOCK} />
          <ReleasesBalancePercentage />
          <div className="text-sm italic text-gray-400">
            Clique em uma das sessões acima para adicionar novos items.
          </div>
        </section>

        <section className="h-fit bg-gray-50 rounded text-start p-2 px-4">
          <h2 className="text-gray-600 font-semibold">Lançamentos Fixos</h2>
          <br />
          <div className="text-gray-500 italic text-sm">
            <p>
              Clique nos tipos de lançamentos ao lado e informe os valores (ou
              pelo menos uma média) dos seus gastos fixos mensais.
            </p>
            <p className="mt-2">
              Considere gastos fixos como aluguel, água, energia e internet.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
