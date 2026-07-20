import { describe, expect, it } from "vitest";
import { projectData } from "./projects-data";

describe("projectData", () => {
  it("não tem hrefs duplicados", () => {
    const hrefs = projectData.map((project) => project.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("cada projeto tem os campos obrigatórios preenchidos", () => {
    for (const project of projectData) {
      expect(project.src).toBeTruthy();
      expect(project.alt).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.subtitle).toBeTruthy();
      expect(project.href).toMatch(/^\//);
    }
  });
});
