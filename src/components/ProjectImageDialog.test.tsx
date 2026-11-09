import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ProjectImageDialog } from "./ProjectImageDialog";
import { useImageModal } from "@/hooks/useImageModal";

const FOTO = { src: "/foto.avif", alt: "Fluxo da solução do case Autosserviço" };

// Componente de teste: abre o modal por um botão real, como nas páginas de projeto.
function DialogHarness() {
  const { modalImage, openModal, closeModal } = useImageModal();
  return (
    <>
      <button type="button" onClick={() => openModal(FOTO.src, FOTO.alt)}>
        Abrir imagem
      </button>
      <ProjectImageDialog modalImage={modalImage} onClose={closeModal} />
    </>
  );
}

describe("ProjectImageDialog", () => {
  it("não renderiza nada quando não há imagem", () => {
    render(<ProjectImageDialog modalImage={null} onClose={() => {}} />);

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("mostra a imagem com o texto alternativo do botão de origem", () => {
    render(<ProjectImageDialog modalImage={FOTO} onClose={() => {}} />);

    expect(
      screen.getByRole("img", { name: "Fluxo da solução do case Autosserviço" })
    ).toHaveAttribute("src", expect.stringContaining("foto.avif"));
  });

  it("expõe título e descrição acessíveis ao abrir", () => {
    render(<ProjectImageDialog modalImage={FOTO} onClose={() => {}} />);

    const dialog = screen.getByRole("dialog", { name: "Imagem Ampliada do Projeto" });
    expect(dialog).toHaveAccessibleDescription(
      "Visualização ampliada de uma imagem do projeto. Pressione Esc para fechar."
    );
  });

  it("nomeia o botão de fechar em português", () => {
    render(<ProjectImageDialog modalImage={FOTO} onClose={() => {}} />);

    expect(screen.getByRole("button", { name: "Fechar" })).toBeInTheDocument();
  });

  it("fecha com Escape e devolve o foco ao elemento que abriu o modal", async () => {
    const user = userEvent.setup();
    render(<DialogHarness />);

    const opener = screen.getByRole("button", { name: "Abrir imagem" });
    await user.click(opener);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).toBeNull();
    // O Radix devolve o foco de forma assíncrona, então a checagem aguarda.
    await waitFor(() => expect(opener).toHaveFocus());
  });

  it("chama onClose ao acionar o botão Fechar", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ProjectImageDialog modalImage={FOTO} onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: "Fechar" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
