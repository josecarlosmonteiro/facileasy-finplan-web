import { ReactNode } from "react";

export type ColumnDef<T> = {
  accessKey: keyof T;
  label?: string;
  formatFn?: (data: any) => void;
  cell?: (info: T) => ReactNode;
};

type Props<T> = {
  columns: ColumnDef<T>[];
  data: T[];
};

export function Table<T>({ columns, data }: Props<T>) {
  return (
    <table className="table w-full">
      <thead className="">
        <tr>
          {columns.map((col, index) => (
            <th
              key={`col_${index}`}
              className={`p-2`}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, index) => (
          <tr key={`row_${index}`}>
            {columns.map((col, indexCol) => (
              <td
                key={`cell_${index}_${indexCol}`}
                className={`px-2 text-gray-500 text-center border-b py-1`}
              >
                {col.cell
                  ? col.cell(row)
                  : col.formatFn
                    ? col.formatFn(row[col.accessKey])
                    : row[col.accessKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
