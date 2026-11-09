import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ThemeToggle from "./ThemeToggle";

const setTheme = vi.fn();
let currentTheme = "light";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: currentTheme, setTheme }),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    setTheme.mockClear();
    currentTheme = "light";
  });

  it("expõe os três temas com nomes acessíveis em português", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("group", { name: "Selecionar tema" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tema claro" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tema escuro" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tema do sistema" })).toBeInTheDocument();
  });

  it("marca como pressionado apenas o tema atual", () => {
    currentTheme = "dark";
    render(<ThemeToggle />);

    expect(screen.getByRole("button", { name: "Tema escuro" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByRole("button", { name: "Tema claro" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });

  it("troca o tema ao ser acionado pelo teclado", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    screen.getByRole("button", { name: "Tema escuro" }).focus();
    await user.keyboard("{Enter}");

    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
