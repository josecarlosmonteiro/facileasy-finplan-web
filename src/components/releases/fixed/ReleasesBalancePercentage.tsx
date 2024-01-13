"use client";

type Props = {
  revenuesPercentage: number;
  expensesPercentage: number;
};

export function ReleasesBalancePercentage({
  revenuesPercentage = 0,
  expensesPercentage = 0,
}: Props) {
  return (
    <div
      className={`flex bg-gray-300 rounded-full shadow-md ${
        revenuesPercentage + expensesPercentage === 0 && "animate-pulse"
      }`}
    >
      <div
        style={{ width: `${revenuesPercentage}%` }}
        className="h-2 flex items-center justify-center rounded-l-full bg-emerald-500"
      ></div>
      <div
        style={{ width: `${expensesPercentage}%` }}
        className="h-2 flex items-center justify-center rounded-r-full bg-red-500"
      ></div>
    </div>
  );
}
