import { render, screen } from "@testing-library/react"
import { ColumnDef, Table } from "."

type TableTest = {
  colunaA: string;
  colunaB: number;
}

describe('components/shared/Table', () => {
  test("renderização normal de componente", () => {
    render(<Table data={[]} columns={[]} />)
  })

  test("renderizar colunas corretamente", () => {
    const columns: ColumnDef<TableTest>[] = [
      { accessKey: 'colunaA', label: 'Coluna A' },
      { accessKey: 'colunaB', label: 'Coluna B' },
    ];

    const tableData: TableTest[] = [
      { colunaA: 'texto coluna A', colunaB: 1000 },
      { colunaA: 'texto coluna B', colunaB: 500 },
    ];

    render(<Table columns={columns} data={tableData} />);

    const cells = screen.getAllByRole('cell');
    expect(cells.length).toBe(4);
  })
})