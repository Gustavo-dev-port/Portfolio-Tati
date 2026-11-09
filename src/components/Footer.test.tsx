import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("o link do LinkedIn, que só tem ícone, tem nome acessível e abre em nova aba", () => {
    render(<Footer />);

    const link = screen.getByRole("link", {
      name: "LinkedIn de Tatiana Goes (abre em nova aba)",
    });
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/tati-goes");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
