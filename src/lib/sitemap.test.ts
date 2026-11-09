import { afterEach, describe, expect, it, vi } from "vitest";

// siteUrl é lido no carregamento do módulo, então cada teste importa de novo.
afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("sitemap", () => {
  it("sem NEXT_PUBLIC_SITE_URL não gera URLs, evitando localhost no sitemap", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    const { default: sitemap } = await import("../app/sitemap");

    expect(sitemap()).toEqual([]);
  });

  it("gera URLs absolutas com o domínio configurado", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://exemplo.com.br/");
    const { default: sitemap } = await import("../app/sitemap");

    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toEqual([
      "https://exemplo.com.br",
      "https://exemplo.com.br/sobre-mim",
      "https://exemplo.com.br/auto-servico",
      "https://exemplo.com.br/frete",
      "https://exemplo.com.br/workn-go",
      "https://exemplo.com.br/hub-redacao",
    ]);
  });
});
