import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectNavigation from "./ProjectNavigation";
import { projectData } from "@/lib/projects-data";

describe("ProjectNavigation", () => {
  it.each(projectData.map((project) => project.href))(
    "para currentProjectHref=%s, mostra as OUTRAS páginas de projeto e nunca a própria",
    (currentHref) => {
      render(<ProjectNavigation currentProjectHref={currentHref} />);

      const links = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

      // Nunca deve linkar para a própria página atual
      expect(links).not.toContain(currentHref);

      // Deve mostrar exatamente as outras páginas de projeto
      const expectedOthers = projectData
        .map((project) => project.href)
        .filter((href) => href !== currentHref);
      expect(links.sort()).toEqual(expectedOthers.sort());
    }
  );
});
