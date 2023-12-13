export type ColumnDef<T> = {
  accessKey: keyof T;
  label?: string;
  formatFn?: (data: any) => void;
}

type Props<T> = {
  columns: ColumnDef<T>[];
  data: T[];
}

export function Table<T>({ columns, data }: Props<T>) {
  return (
    <table className="table">
      <thead>
        <tr>
          {
            columns.map((col, index) => (
              <th key={`col_${index}`} className="px-6">{col.label}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row: any, index) => (
            <tr key={`row_${index}`}>
              {columns.map((col, indexCol) => (
                <td key={`cell_${index}`} className={`px-2 text-gray-500 text-center ${indexCol === columns.length - 1 && 'text-end'} border-b py-1`}>
                  {
                    col.formatFn
                      ? col.formatFn(row[col.accessKey])
                      : row[col.accessKey]
                  }
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}