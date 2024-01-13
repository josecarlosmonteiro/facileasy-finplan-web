import { FixedReleasesCategoryTotals } from "@/components/releases/fixed/FixedReleasesCategoryTotals";
import { FixedReleasesTransferTypeTotals } from "@/components/releases/fixed/FixedReleasesTransferTypeTotals";
import { GeneralTableFixedReleases } from "@/components/releases/fixed/GeneralTableFixedReleases";
import { ReleasesBalancePercentage } from "@/components/releases/fixed/ReleasesBalancePercentage";
import { TotalSection } from "@/components/releases/fixed/TotalSection";
import { FixedReleasesProvider } from "@/providers/FixedReleasesProvider";
import { api } from "@/services/api";

const fetchInitialReleases = async () => {
  const { data } = await api.get("fixed-releases");

  return data;
};

export default async function FixedReleases() {
  const data = await fetchInitialReleases();

  return (
    <FixedReleasesProvider initialReleasesData={data || []}>
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-2 gap-4">
          <section className="h-fit flex flex-col gap-4 p-4 bg-white rounded">
            <TotalSection />

            <ReleasesBalancePercentage />

            <div className="text-sm italic text-gray-400">
              Clique em uma das sessões acima para adicionar novos items.
            </div>

            <FixedReleasesCategoryTotals />

            <FixedReleasesTransferTypeTotals />
          </section>

          <section className="h-fit bg-white rounded text-start p-2 px-4">
            <h2 className="text-xl text-gray-600 font-semibold border-b">
              Seus Lançamentos
            </h2>
            <br />

            <div className="text-sm">
              <GeneralTableFixedReleases />
            </div>
          </section>
        </div>
      </div>
    </FixedReleasesProvider>
  );
}
