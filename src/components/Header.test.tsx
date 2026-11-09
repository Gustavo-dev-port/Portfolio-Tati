import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "system", setTheme: vi.fn() }),
}));

describe("Header", () => {
  it("oferece navegação para a home e para Sobre mim", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Tatiana Goes" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Sobre-mim" })).toHaveAttribute(
      "href",
      "/sobre-mim"
    );
  });

  it("inclui o seletor de tema", () => {
    render(<Header />);

    expect(screen.getByRole("group", { name: "Selecionar tema" })).toBeInTheDocument();
  });
});
