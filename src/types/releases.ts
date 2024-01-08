export type TRelease = {
  id: number | string;
  title: string;
  value: number;
  type: "in" | "out";
  transferType: string;
  category: string;
  payday?: Date;
}