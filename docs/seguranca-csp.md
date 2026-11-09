# Segurança: Content Security Policy (CSP)

## Classificação

**Risco residual aceito tecnicamente.** Não é uma vulnerabilidade eliminada: a
diretiva `'unsafe-inline'` em `script-src` permanece, e a classificação depende de
o site continuar estático e sem entrada do usuário. Reabrir a decisão se essas
condições mudarem (ver "Revisão").

## Configuração atual

Definida em `next.config.ts` (`headers()`), enviada em todas as rotas:

```
default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self';
object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

Outros headers, verificados no servidor de produção local (`next start`):
`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`,
`Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`
(câmera, microfone e geolocalização desativados) e `Strict-Transport-Security`.

## Fontes consultadas

Consultadas nesta sessão, em 2026-11-09:

- **Guia oficial de CSP do Next.js para App Router**
  (`https://nextjs.org/docs/app/guides/content-security-policy`), marcado pelo
  próprio site como revisado em 2026-03-20. A página não é específica de versão;
  por isso as conclusões foram também conferidas com o teste no navegador abaixo.
  Pontos usados:
  - nonces são gerados por requisição (proxy/middleware) e exigem renderização
    dinâmica; a página diz que "static optimization and ISR are disabled" e que as
    páginas "cannot be cached by CDNs without additional configuration";
  - Partial Prerendering é incompatível com CSP baseada em nonce;
  - hashes não são recomendados para scripts inline do Next.js. O recurso citado é
    o SRI experimental (`experimental.sri`), que é apenas em tempo de build e não
    lida com scripts gerados dinamicamente;
  - `'unsafe-eval'` é necessário só em desenvolvimento.
- **Notas de release oficiais** do Next.js 15.5.28 e 15.5.29 (GitHub), usadas para
  justificar a atualização de segurança. Não foram consultadas as páginas de
  advisory individuais, então as versões corrigidas de cada advisory não foram
  conferidas nelas.

## Alternativas avaliadas

| Alternativa | Resultado |
|---|---|
| Nonce por requisição | Exige renderização dinâmica. As 12 páginas estáticas passariam a ser geradas a cada requisição, com perda de cache de CDN e de desempenho. Incompatível com Partial Prerendering. Não adotada. |
| Hashes para os scripts inline | Não suportado para os scripts inline do Next.js (ver fontes). Não adotada. |
| Remover `'unsafe-inline'` sem substituto | Testado no navegador: o site deixa de funcionar (ver evidência). Não adotada. |

## Evidência do teste

Build de produção com `script-src 'self'`, servido localmente e aberto em
navegador (Playwright), sem alterar mais nada:

- O navegador bloqueou **16 scripts inline**, com a mensagem
  `Executing inline script violates the following Content Security Policy directive 'script-src 'self''`.
- No DOM da página não havia o `h1` do conteúdo, e o runtime do Next registrou
  erros `Connection closed`. A causa exata da falha de renderização não foi isolada
  além do bloqueio dos scripts inline.
- Com `'unsafe-inline'` restaurado, a home e `/frete` não geraram erros de console,
  e o modal, o carrossel e o tema funcionaram.

Os scripts inline são do próprio framework (dados de hidratação do React Server
Components e script do `next-themes` para o tema), não código da autora.

## Mitigações presentes

- O site é estático e não tem formulários, comentários nem conteúdo de usuário
  renderizado como HTML. Reduz a superfície de um eventual XSS.
- `object-src 'none'`, `base-uri 'self'` e `form-action 'self'` limitam objetos,
  base e destinos de formulário.
- `frame-ancestors 'none'` e `X-Frame-Options: DENY` impedem embutir o site em
  iframes (clickjacking).
- `connect-src 'self'` limita chamadas de rede do navegador ao próprio domínio.

## Risco residual

- `'unsafe-inline'` em `script-src` permite que um script inline injetado seja
  executado se houver uma falha de XSS. Com o site atual, a chance de isso ocorrer
  é baixa, mas não é zero.
- `style-src 'unsafe-inline'` é mantido porque Radix, Embla e `next/image` aplicam
  estilos inline.

## Limitações do ambiente

- Os headers valem somente quando o site é servido pelo servidor do Next.js
  (`next start`, Vercel ou similar). Em hospedagem estática pura, o `headers()`
  não é aplicado, e a CSP precisaria ser configurada na própria hospedagem. A
  hospedagem final não está identificada no projeto.
- A verificação foi feita localmente. O comportamento na hospedagem de produção
  não foi testado.

## Revisão

Reabrir a decisão se:

1. o site ganhar formulários ou conteúdo gerado pelo usuário (o que tornaria
   necessário um nonce e, com ele, a renderização dinâmica);
2. o Next.js passar a suportar hashes para os scripts inline do App Router com
   renderização estática;
3. a hospedagem final for estática, caso em que os headers precisarão ser
   configurados lá.
