import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ClickableImage } from "./ClickableImage";

describe("ClickableImage", () => {
  it("é um botão com nome acessível que descreve a ampliação", () => {
    render(
      <ClickableImage src="/foto.avif" alt="Fluxo do projeto" onClick={() => {}} />
    );

    expect(
      screen.getByRole("button", { name: "Ampliar imagem: Fluxo do projeto" })
    ).toBeInTheDocument();
  });

  it("não aninha bloco (div) dentro do botão, mantendo HTML válido", () => {
    render(
      <ClickableImage src="/foto.avif" alt="Fluxo do projeto" onClick={() => {}} />
    );

    expect(screen.getByRole("button").querySelector("div")).toBeNull();
  });

  it("chama onClick ao ser acionado com o teclado", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ClickableImage src="/foto.avif" alt="Fluxo" onClick={onClick} />);

    await user.tab();
    await user.keyboard("{Enter}");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
