import { ReactNode } from "react";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="h-10 flex items-center px-2 bg-purple-700 text-white">FinPlan</div>

      {children}
    </>
  )
}