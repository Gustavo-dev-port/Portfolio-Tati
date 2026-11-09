import { describe, expect, it } from "vitest";
import { normalizeSiteUrl } from "./site";

describe("normalizeSiteUrl", () => {
  it("sem valor configurado, não há domínio", () => {
    expect(normalizeSiteUrl(undefined)).toBeUndefined();
    expect(normalizeSiteUrl("")).toBeUndefined();
    expect(normalizeSiteUrl("   ")).toBeUndefined();
  });

  it("remove barra final e espaços", () => {
    expect(normalizeSiteUrl("  https://exemplo.com.br/  ")).toBe("https://exemplo.com.br");
  });

  it("rejeita valores sem protocolo", () => {
    expect(() => normalizeSiteUrl("exemplo.com.br")).toThrow(/NEXT_PUBLIC_SITE_URL inválida/);
  });

  it("rejeita protocolos que não são http ou https", () => {
    expect(() => normalizeSiteUrl("ftp://exemplo.com.br")).toThrow(/http ou https/);
  });
});
