import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import ProjectCarousel from "./ProjectCarousel";
import { projectData } from "@/lib/projects-data";

// O jsdom não implementa APIs de observação e de media query que o Embla usa.
class ObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

beforeAll(() => {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));
  vi.stubGlobal("IntersectionObserver", ObserverStub);
  vi.stubGlobal("ResizeObserver", ObserverStub);
});

afterAll(() => {
  vi.unstubAllGlobals();
});

describe("ProjectCarousel", () => {
  it("nomeia os controles de navegação em português", () => {
    render(<ProjectCarousel />);

    expect(screen.getByRole("button", { name: "Slide anterior" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Próximo slide" })).toBeInTheDocument();
  });

  it("setas movem o foco para o cartão vizinho, com volta no fim (loop)", async () => {
    const user = userEvent.setup();
    render(<ProjectCarousel />);
    const links = projectData.map((project) =>
      screen.getByRole("link", { name: `Ver detalhes do projeto: ${project.title}` })
    );

    links[0].focus();
    await user.keyboard("{ArrowRight}");
    expect(links[1]).toHaveFocus();

    await user.keyboard("{ArrowLeft}");
    expect(links[0]).toHaveFocus();

    await user.keyboard("{ArrowLeft}");
    expect(links[links.length - 1]).toHaveFocus();
  });

  it("cada cartão é um link com o nome do projeto", () => {
    render(<ProjectCarousel />);

    for (const project of projectData) {
      expect(
        screen.getByRole("link", { name: `Ver detalhes do projeto: ${project.title}` })
      ).toHaveAttribute("href", project.href);
    }
  });
});
