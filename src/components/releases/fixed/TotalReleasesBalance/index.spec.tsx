import { fireEvent, render, screen } from "@testing-library/react"
import { TotalReleasesBalance } from "."
import { TRelease } from "@/types/releases";

const mockData: TRelease[] = [
  { id: 1, title: '', category: 'x', transferType: '', type: 'in', value: 500 },
  { id: 2, title: '', category: 'x', transferType: '', type: 'in', value: 1000 },
  { id: 3, title: '', category: 'x', transferType: '', type: 'out', value: 100 },
  { id: 4, title: '', category: 'x', transferType: '', type: 'out', value: 100 },
  { id: 5, title: '', category: 'x', transferType: '', type: 'out', value: 100 },
];

describe("components/releases/fixed/TotalReleasesBalance", () => {
  test("renderização do componente", () => {
    render(<TotalReleasesBalance releases={[]} />)
  })

  test("renderizar totais de lançamentos (entradas e saídas)", () => {
    render(<TotalReleasesBalance releases={mockData} />);

    expect(screen.getByText("R$ 1.500,00")).toBeInTheDocument();
    expect(screen.getByText("R$ 300,00")).toBeInTheDocument();
  })

  test("exibir tabelas de dados de entradas/saídas ao clicar nos totais", () => {
    render(<TotalReleasesBalance releases={mockData} />);

    //abrir modal de receitas
    fireEvent.click(screen.getByText('Receitas'));
    expect(screen.getAllByRole('cell').length).toBe(6);

    //fechar modal
    fireEvent.click(screen.getByText('close'));

    //abrir modal de despesas 
    fireEvent.click(screen.getByText('Despesas'));
    expect(screen.getAllByRole('cell').length).toBe(9);
  })
})