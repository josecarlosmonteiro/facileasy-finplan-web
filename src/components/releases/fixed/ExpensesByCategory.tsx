import { TRelease } from "@/types/releases";

export function ExpensesByCategory({ expenses }: { expenses: TRelease[] }) {
  const categories: { category: string, total: number }[] = [];

  expenses.forEach(expense => {
    const index = categories.findIndex(el => el.category === expense.category);

    if (index >= 0)
      categories[index].total = categories[index].total + expense.value;
    else
      categories.push({ category: expense.category, total: expense.value });
  });

  return (
    <div className="text-start">
      <h2>Despesas por categoria</h2>
      <pre>
        {JSON.stringify(categories, null, 2)}
      </pre>
    </div>
  )
}