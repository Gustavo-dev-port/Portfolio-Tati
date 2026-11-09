// Domínio público do site, definido por NEXT_PUBLIC_SITE_URL (veja .env.example).
// Sem essa variável, não há canonical, imagem social absoluta nem sitemap,
// e nenhum endereço de localhost é gerado para produção.

export function normalizeSiteUrl(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL inválida: "${trimmed}". Use uma URL absoluta, por exemplo https://seu-dominio.com.br`
    );
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL deve usar http ou https, recebido: "${url.protocol}"`
    );
  }

  return url.origin;
}

export const siteUrl: string | undefined = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL
);

// Canonical somente quando há domínio configurado. Sem ele, nada é emitido.
export function pageAlternates(path: string): {
  alternates?: { canonical: string };
} {
  return siteUrl ? { alternates: { canonical: path } } : {};
}
