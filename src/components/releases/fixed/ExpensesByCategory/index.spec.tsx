import { render, screen } from '@testing-library/react';

import { ExpensesByCategory } from '@/components/releases/fixed/ExpensesByCategory';
import { TRelease } from '@/types/releases';

const mock: TRelease[] = [
  { id: 1, category: 'x', title: '', transferType: '', type: 'out', value: 100 },
  { id: 2, category: 'x', title: '', transferType: '', type: 'out', value: 200 },
  { id: 3, category: 'y', title: '', transferType: '', type: 'out', value: 100 },
]

describe("components/releases/fixed/ExpensesByCategory", () => {
  test("renderizar componente", () => {
    render(<ExpensesByCategory expenses={[]} />);

    const title = screen.getByText(/despesas por categoria/i);
    expect(title).toBeInTheDocument();
  });
})