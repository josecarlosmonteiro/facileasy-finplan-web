export type TRelease = {
  id: number;
  title: string;
  value: number;
  type: "in" | "out";
  transferType: string;
  category: string;
}