import { render, screen } from "@testing-library/react"
import { ReleasesBalance } from ".";
import { TRelease } from "@/types/releases";

const mockData: TRelease[] = [
  { id: 1, title: '', category: '', transferType: '', type: 'in', value: 200 },
  { id: 2, title: '', category: '', transferType: '', type: 'in', value: 200 },
  { id: 3, title: '', category: '', transferType: '', type: 'out', value: 200 },
  { id: 4, title: '', category: '', transferType: '', type: 'out', value: 200 },
  { id: 5, title: '', category: '', transferType: '', type: 'out', value: 200 },
];

describe("components/releases/fixed/ReleasesBalance", () => {
  test("exibir corretamente valores de porcentagens baseados nos lançamentos fornecidos", () => {
    render(<ReleasesBalance />);

    expect(screen.getByText('40%')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
  })
})