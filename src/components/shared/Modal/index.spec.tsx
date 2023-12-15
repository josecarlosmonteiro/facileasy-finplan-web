import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import { userEvent } from '@testing-library/user-event';

import { Modal } from ".";

const content = "modal content";

const ModalMockComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>open modal</button>
      <Modal modalOpen={open} onClose={() => setOpen(false)}>
        {content}
      </Modal>
    </>
  )
}

describe("components/shared/modal", () => {
  test("renderização do componente", () => {
    render(
      <Modal
        title="Modal title"
        modalOpen={true}
        onClose={() => false} />
    );

    expect(screen.getByText("Modal title")).toBeInTheDocument();
  });

  test("testar alteração de estado do modal", () => {
    render(<ModalMockComponent />);

    expect(screen.queryByText(content)).toBeNull();

    //abrindo modal
    fireEvent.click(screen.getByText(/open modal/i));
    expect(screen.getByText(content)).toBeInTheDocument();

    //fechando modal
    fireEvent.click(screen.getByText(/close/i));
    expect(screen.queryByText(content)).toBeNull();
  });
})