export type TRelease = {
  id: string;
  title: string;
  value: number;
  type: "in" | "out";
  transferType: string;
  category: string;
  payday?: Date;
}