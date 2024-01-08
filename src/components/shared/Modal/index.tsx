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
        <div className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-70`}>
          <div className="w-fit p-2 rounded bg-white">
            <div className="m-1 pb-2 flex border-b justify-between items-center">
              <span className="text-lg font-semibold text-purple-600">{title}</span>
              <button onClick={onClose}>close</button>
            </div>

            <div className="mt-4 text-start max-h-[65vh] overflow-auto">
              {children}
            </div>
          </div>
        </div>
      }
    </>
  )
}