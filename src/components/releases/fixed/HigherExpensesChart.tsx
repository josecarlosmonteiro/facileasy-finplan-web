import { ChartComponent } from "@/components/shared/ChartComponent";
import { TRelease } from "@/types/releases";
import { decrescentSort } from "@/utils/lists";

export function HigherExpensesChart({ expenses }: { expenses: TRelease[] }) {
  const sortedExpenses = decrescentSort(expenses, 'value');

  const expensesLabels = sortedExpenses.map(el => el.title);
  const expensesValues = sortedExpenses.map(el => el.value);

  return (
    <ChartComponent data={{
      labels: expensesLabels,
      datasets: [{
        label: 'Maiores gastos',
        data: expensesValues,
        backgroundColor: "#f74336"
      }],
    }} />
  )
}