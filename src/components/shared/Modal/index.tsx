import { ReactNode } from "react";

type Props = {
  title?: string;
  children?: ReactNode;
  modalOpen: boolean;
  onClose: () => void;
}

export function Modal({ title, children, modalOpen, onClose }: Props) {
  return (
    <>
      {
        modalOpen &&
        <div className={`top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-70`}>
          <div className="w-fit p-2 rounded bg-white">
            <div className="py-1 flex justify-between items-center gap-12">
              <span className="text-lg font-semibold text-purple-600">{title}</span>
              <button onClick={onClose}>close</button>
            </div>
            <hr />
            <div className="mt-4 text-start max-h-[65vh] overflow-auto">
              {children}
            </div>
          </div>
        </div>
      }
    </>
  )
}