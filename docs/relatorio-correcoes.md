# Relatório de correções: Portfólio Tatiana Goes

**Base recuperável:** commit `381c9f8` ("Base recuperável antes das correções da auditoria"), criado antes de qualquer alteração. Nenhum commit novo foi feito; a baseline não foi reescrita. As alterações estão no working tree.

## Resumo

- Todos os achados confirmados da auditoria foram corrigidos e verificados, exceto os que dependem de informação externa: o domínio público e a validação dos números pela Tatiana.
- Corrigi também um problema não listado na auditoria: o foco não voltava ao botão que abria o modal de imagem.
- O texto alternativo do modal agora é o do botão de origem, não um texto genérico.
- Dependências foram atualizadas com patches de segurança. `npm audit` passou de 6 vulnerabilidades moderadas para zero.
- A CSP mantém `'unsafe-inline'` em `script-src`. Testei a remoção no navegador e o site deixou de funcionar. Esse é um **risco residual aceito tecnicamente**, não uma vulnerabilidade eliminada.
- O build pelo comando padrão do projeto (`npm run build`, Turbopack) **não pôde ser executado neste computador** por uma política do Windows. O build com webpack passou. A CI foi executada no PR e no merge: sucesso na reexecução do PR (commit `d67637a`) e no push do `master` (commit `ec1fddb`); a primeira execução do PR falhou por instabilidade externa conhecida (seção 6-E).

## 1. Build

| Item | Situação |
|---|---|
| Atualização de segurança | Mantida: Next 15.5.29, React 19.1.10. Não voltei à versão anterior. |
| Script do projeto | `package.json`: `"build": "next build --turbopack"`. Mantido sem alteração. |
| CI | `.github/workflows/ci.yml` executa `npm run build` em `ubuntu-latest`, portanto usa **Turbopack**, igual ao script atual. |
| Comando de build que passou aqui | **`npx next build`** (webpack, com SWC em WebAssembly como fallback oficial). Resultado: exit 0, 12 páginas estáticas. |
| Comando padrão localmente | `npm run build` falha com `turbo.createProject is not supported by the wasm bindings`, porque a política de Controle de Aplicativo do Windows bloqueia o binário nativo `@next/swc-win32-x64-msvc` do Next 15.5.29. **Não contornei a política.** |
| CI | **Não executada.** Não há forma autorizada de rodar o workflow sem push, e não presumo que passará no Linux. |

**Ressalva registrada:** uma tentativa de `npm run build` com Turbopack, que falhou, deixou `.next` incompleto. Por isso refiz o build com webpack do zero (`rm -rf .next && npx next build`) antes das verificações finais. Nenhum build com Turbopack deve ser executado sobre uma `.next` que você queira manter.

## 2. CSP

- Decisão: **`'unsafe-inline'` em `script-src` mantido**. Classificação: **risco residual aceito tecnicamente**. Documentação completa em `docs/seguranca-csp.md`.
- Fontes consultadas nesta sessão: guia oficial de CSP do Next.js para App Router (revisado em 2026-03-20) e notas oficiais de release do Next.js 15.5.28 e 15.5.29.
- Confirmado na documentação:
  - nonces exigem renderização dinâmica, desativam a geração estática e o cache de CDN, e são incompatíveis com Partial Prerendering;
  - hashes não são recomendados para os scripts inline do Next.js; o SRI experimental é só de build e não cobre scripts gerados dinamicamente.
- Teste no navegador: com `script-src 'self'` (sem `'unsafe-inline'`), o navegador bloqueou **16 scripts inline** e o site não funcionou. Com a diretiva restaurada, não houve violações.
- Não enfraqueci outras proteções. Os headers verificados no servidor de produção local: `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` e `Strict-Transport-Security`.
- Limitação: os headers só valem quando o site é servido pelo Next (`next start`, Vercel ou similar). Em hospedagem estática pura, precisariam ser configurados na própria hospedagem, que não está identificada.

## 3. Imagens e acessibilidade

- **Texto alternativo do modal:** o hook `useImageModal` passou a guardar `src` e `alt`. As 41 chamadas `openModal` nas páginas de case passam agora o texto do botão de origem. Verificado no navegador: o modal aberto a partir de "Solução, 3 de 8, do case Frete no Carrinho" exibe exatamente esse `alt`.
- **Retorno de foco:** o Radix devolve o foco ao `Dialog.Trigger`, que o site não usa. O componente agora guarda o elemento com foco antes da abertura e o devolve ao fechar.
  - Teste de unidade: falha sem a correção e passa com ela (teste de mutação confirmado).
  - Verificado no navegador: após Escape, o foco volta ao botão "Ampliar imagem: Contexto do case Frete no Carrinho".
- **Escape:** fecha o modal (verificado no navegador e no teste).
- **Navegação por teclado:** botões de ampliação acionáveis por Enter (teste e navegador); controles do carrossel com nomes "Slide anterior" e "Próximo slide" (teste e navegador). Carrossel testado com teclado no navegador, ver seção 4-B.
- **Nomes em português:** "Fechar" (modal), "Slide anterior" e "Próximo slide" (carrossel), "LinkedIn de Tatiana Goes (abre em nova aba)" (rodapé).
- **HTML:** `ClickableImage` sem `div` dentro de `button`. Teste verifica a ausência.

## 4. Inspeção visual

**Dimensões usadas:** desktop 1440×900; celular 390×844.

Método: navegação até cada página, rolagem por todas as imagens (para disparar o lazy loading, que a captura de página inteira não dispara) e captura de página inteira. Em seguida conferi o DOM: `complete` e `naturalWidth > 0` em cada imagem, overflow horizontal e erros de console.

| Página | Desktop 1440 | Celular 390 | Imagens (DOM) | Overflow | Erros de console |
|---|---|---|---|---|---|
| `/` | Inspecionada, sem defeitos | Inspecionada, sem defeitos | — | Nenhum (-15) | 0 |
| `/sobre-mim` | Inspecionada, sem defeitos | Inspecionada, sem defeitos | 0 não carregadas (celular) | Nenhum | 0 |
| `/auto-servico` | Inspecionada, sem defeitos | Inspecionada, sem defeitos | 7/7 carregadas | Nenhum | 0 |
| `/frete` | Inspecionada, sem defeitos | Inspecionada, sem defeitos | 13/13 carregadas | Nenhum | 0 (celular, carga limpa) |
| `/workn-go` | Inspecionada, sem defeitos | Inspecionada, sem defeitos | 8/8 carregadas | Nenhum | 0 |
| `/hub-redacao` | Inspecionada, sem defeitos | Inspecionada, sem defeitos | 17/17 carregadas | Nenhum | 0 |

**Componentes extraídos:** `ProjectHero` e `ProjectCover` renderizam corretamente nos quatro cases, em desktop e celular, com título, subtítulo, capa e posicionamento da imagem preservados.
**Carrossel:** renderiza os cartões e os controles com nomes em português; sem overflow. A navegação por teclado foi verificada e corrigida (seção 4-B).
**Modal:** abre com a imagem ampliada, botão Fechar no canto, fundo escurecido; fecha com Escape ou Fechar; devolve o foco.

**Observações sem ação:**
- No celular, o seletor de tema do cabeçalho fica a 16 px da borda direita (dentro do viewport). Não está cortado.
- `/frete` em desktop foi medido em carga limpa no servidor final (seção 4-A).

**Incidente de verificação (corrigido):** durante a inspeção, `/workn-go` acusou erro de chunk (400, `text/html`). A causa não estava no código: um processo `node` iniciado às 13:22 ainda ocupava a porta 3100 e servia uma build antiga, porque o novo servidor não conseguiu bindar a porta. Encerrei esse processo, reiniciei o servidor e confirmei que o chunk novo é servido (200, `application/javascript`). Todas as verificações de headers, status e visuais citadas neste relatório são do servidor reiniciado.

### 4-A. `/frete` em desktop, carga limpa (servidor da build atual)

- **Ambiente:** desktop 1440×900; servidor `next start` na porta 3100 com o `.next` atual (chunk `app/frete/page-fd5cbeccb30a9b47.js`, conferido no HTML servido).
- **Console:** 0 erros e 0 avisos na carga da página, e 0 erros/avisos depois das interações com o modal (o console foi lido desde a última navegação).
- **Carregamento das imagens:** 13 de 13 `img` dentro de `article` carregadas (`complete` e `naturalWidth > 0`), rolando todas as imagens lazy antes da leitura. Nenhuma sem carregar.
- **Layout:** título "Transformando a experiência no carrinho de compras.", sem overflow horizontal.
- **Modal, abertura por Enter:** abre a partir de "Ampliar imagem: Contexto do case Frete no Carrinho"; o texto alternativo da imagem é "Contexto do case Frete no Carrinho", a imagem carrega, e o botão de fechar se chama "Fechar".
- **Modal, fechamento por Escape:** fecha; o foco volta a "Ampliar imagem: Contexto do case Frete no Carrinho".
- **Modal, fechamento pelo botão Fechar (clique):** abre a partir de "Ampliar imagem: Protótipo, 2 de 3, do case Frete no Carrinho" (alt correspondente); ao clicar em Fechar, o modal fecha e o foco volta ao mesmo botão.

### 4-B. Navegação por teclado do carrossel (home e Sobre mim)

**Comportamento esperado conforme o componente (`src/components/ui/carousel.tsx`):** o carrossel é um Embla com `loop: true` na home. Os cartões são links; os botões "Slide anterior" e "Próximo slide" ficam visíveis em desktop (`md:`); as setas do teclado devem rolar e, quando o foco está num cartão, acompanhá-lo.

**Falha encontrada e corrigida (N7):** no teste, uma seta rolava o slide, mas o foco continuava no cartão original. Depois de duas setas, esse cartão ficava cortado pela área visível (`overflow: hidden`), e o foco sumia. Correção: quando o foco está num slide, a seta move o foco para o slide vizinho (com volta no fim, por causa do loop) e rola até ele; quando o foco está nos botões de controle, a seta só rola. O foco é aplicado com `preventScroll`, para não deslocar o track.

**Verificação no navegador, home (desktop 1440×900), após a correção e com o build atual:**
- Tab a partir do topo: Tatiana Goes → Sobre-mim → tema claro → tema escuro → tema do sistema → primeiro cartão. O foco chega ao cartão com contorno visível (`outline: auto`).
- ArrowRight no cartão 1 → foco no cartão 2, totalmente visível; track de `133.5px` para `-396.66px`.
- ArrowRight x3 → cartão 3 e cartão 4 (Hub), ambos totalmente visíveis.
- ArrowRight no cartão 4 → volta ao cartão 1 (loop para frente), visível.
- ArrowLeft no cartão 1 → cartão 4 (loop para trás), visível.
- Tab a partir do cartão 4 → "Slide anterior"; Enter → track de `-1466.5px` para `-933.57px` (um slide para trás); foco permanece no botão.
- Tab → "Próximo slide"; Enter → track de `-933px` para `-1466.43px`; foco permanece no botão.
- Shift+Tab x2 → cartão 4; ArrowLeft → cartão 3 ("Case work'n go", totalmente visível); Enter → abre `/workn-go` com o título "Case Work'n Go". **A abertura pelo teclado funciona.**

**Verificação no navegador, Sobre mim (desktop):**
- Tab a partir do topo: 6 Tabs chegam a "Slide anterior" (o carrossel não tem links); Tab → "Próximo slide".
- ArrowRight com o foco no botão "Próximo slide": track de `0px` para `-270.35px`; foco permanece no botão (comportamento esperado, já que o slide tem só imagens, sem nada focável).

**Testes de unidade (`ProjectCarousel.test.tsx`):** "setas movem o foco para o cartão vizinho, com volta no fim (loop)" passa. Teste de mutação: sem a correção, o teste falha; com ela, passa.

## 5. Domínio e conteúdo

**Domínio (pendente de informação).** O site está publicado na Vercel, e o proprietário informou que não há domínio próprio. Não foi possível identificar um endereço público estável de produção (ver seção 6-E). Por isso `NEXT_PUBLIC_SITE_URL` **não foi definida** nem no repositório nem na Vercel. Não usei endereço de preview, endereço de outro projeto nem domínio inventado.

- Comportamento implementado: sem a variável, não há canonical, imagem social absoluta nem sitemap, e o robots não aponta para sitemap. Com a variável, o site gera esses metadados com o endereço configurado.
- O commit remoto anterior usava `https://example.com` como fallback em `robots.ts` e `sitemap.ts`. Isso publicaria um domínio que não é da autora. O fallback foi removido nesta integração.
- Verificado localmente com um domínio reservado de teste (`verificacao.example.com`): canonical, Open Graph, sitemap e robots corretos, sem localhost.
- `.env.example` documenta a variável e o requisito de build.

**Conteúdo (declaração do proprietário).** A autora confirmou todos os números, dados e fontes dos cases. Esta é uma declaração do proprietário; **não houve verificação independente** das fontes. Foram removidos os 5 comentários `VALIDAR` correspondentes (Work'n Go: 3; Hub Redação: 1; Autosserviço: 1). O texto dos cases não foi alterado.

## 6. Git e entrega

### 6-A. Estado do repositório antes da integração

- Baseline local `381c9f8` (`main`), criada com `git init` antes das alterações. **Não tem ancestral comum** com o histórico remoto. Não foi reescrita.
- Remote `origin` adicionado: `https://github.com/Gustavo-dev-port/Portfolio-Tati.git`. Branch padrão remota: `master`. Branches remotas: `master`, `claude/nextjs-portfolio-code-review-4dpr9j`, `vercel/react-server-components-cve-vu-7cc6ki`.
- O `master` remoto tem 19 commits do proprietário. Diferia do snapshot local em 13 arquivos.
- Proteção de branch: **nenhuma** em `master`.

### 6-B. Integração com o remoto (decisões registradas)

O commit de correção tem como pai o `origin/master`, preservando o histórico remoto. O conteúdo auditado foi mantido nos arquivos divergentes. As alterações remotas abaixo foram **revertidas de propósito**, cada uma com motivo. Se alguma reversão não for desejada, ela pode ser reaplicada pontualmente.

| Arquivo | Alteração remota (proprietário) | Decisão | Motivo |
|---|---|---|---|
| `src/app/robots.ts`, `src/app/sitemap.ts` | Fallback `https://example.com` quando a variável não existe | Revertido | Publicaria domínio que não é da autora |
| `src/lib/site.ts` | Removido | Restaurado, com validação | Necessário para canonical, sitemap e robots sem fallback |
| `src/app/layout.tsx` | Metadados OG/Twitter e `metadataBase` removidos; `Header` e `Footer` envolvidos em `<header>`/`<footer>` | Mantido o estado auditado, sem os invólucros | `Header` e `Footer` já emitem `header`/`footer`; o invólucro gera elementos aninhados inválidos |
| `src/app/page.tsx` | `<div>` trocado por `<main>` | Revertido | O layout já tem `<main>`; o resultado seria dois `main` |
| `src/app/sobre-mim/page.tsx` | `{" "}` e comentário "[ LINHA FALTANTE ]" adicionados | Revertido | Sem função; espaço extra e comentário sem sentido |
| Cases (Work'n Go, Frete, Autosserviço) | Textos alternativos trocados por termos genéricos ("Solucao", "Contexto", "Desk Research", "Site Map 1") | Revertido | Textos genéricos repetidos; o modal de imagem depende do texto descritivo |
| `src/components/ClickableImage.tsx` | `aria-label` e `type="button"` removidos | Mantido | O nome do controle fica explícito ("Ampliar imagem: …") |
| `src/components/ThemeToggle.tsx` | `role="radiogroup"` com `role="radio"` e `aria-checked` | Revertido para grupo com `aria-pressed` | O padrão radiogroup exige navegação por setas, que não foi implementada. **A decisão do proprietário pode reabrir essa questão.** |
| `package.json` | `next` rebaixado para `^15.5.20`; overrides de segurança removidos (`sharp`, `postcss`, `undici`, `nanoid`, `vite` etc.); `vitest` alterado | Mantido: `next` 15.5.29 fixo, overrides e `vitest` ^4.1.12 | Ver a falha de CI abaixo |
| `package-lock.json` | Regenerado pelo remoto | Regenerado a partir do `package.json` acima | Sincronia com `npm ci` verificada |

**Falha de CI no commit remoto atual (`7dc2f6b`, "Update README.md").** A execução `34942694771` falhou no passo `npm audit --audit-level=high`, com 9 vulnerabilidades (1 crítica, 5 altas, 3 moderadas) em `next`, `postcss`, `sharp` e `undici`. A causa está nas alterações remotas de `package.json` acima. Nesta correção, `npm audit` retorna 0 vulnerabilidades, e `npm ci` com o lock resultante instalou 453 pacotes sem erro.

**Campos de `package.json` confirmados** (repositório confirmado pelo proprietário): `repository.url` = `git+https://github.com/Gustavo-dev-port/Portfolio-Tati.git`; `bugs.url` = `https://github.com/Gustavo-dev-port/Portfolio-Tati/issues`; `homepage` = `https://github.com/Gustavo-dev-port/Portfolio-Tati#readme`. Os três já estavam corretos e não foram alterados.

### 6-C. Identidade Git

- Configurada somente neste repositório (`.git/config`): `Gustavo <gustavo.developer.souza@gmail.com>`.
- Configuração global: inalterada (já tinha esses mesmos valores).

### 6-D. Segredos, ambiente e artefatos

- Nenhum `.env` real, `.vercel/project.json`, `node_modules`, `.next`, `tsbuildinfo` ou captura de navegador entra no commit.
- Nenhuma credencial foi lida, impressa ou gravada no repositório. A sessão do Vercel CLI local está deslogada.

### 6-E. Publicação, CI e deploy (resultados reais)

**Fluxo executado:** push da branch `correcoes-auditoria` (commit `d67637a`, pai `origin/master` `7dc2f6b`) → PR #3 para `master` → CI e preview da Vercel → merge com commit de merge `ec1fddb` (pais `7dc2f6b` e `d67637a`). Sem force push. `master` não tem proteção de branch.

**CI (`.github/workflows/ci.yml`):**

| Execução | Commit | Resultado | Observação |
|---|---|---|---|
| `42665841711` (PR #3) | `d67637a` | **Falhou** na etapa `Build` (Turbopack) | Erro `next/font/google queries have exactly one entry` ao processar a fonte Source Sans 3. Causa conhecida e externa: a issue `vercel/next.js#99114` descreve respostas do Google Fonts com URLs de fonte sem extensão, que fazem o build falhar de forma intermitente. A issue relata cerca de 1 em 60 respostas nesse formato. |
| `42665841711`, reexecução do job com falha | `d67637a` | **Sucesso** em todas as etapas | Lint, tipos, testes, auditoria e build passaram. A reexecução não alterou código. |
| `42666465559` (push do merge) | `ec1fddb` | **Sucesso** em todas as etapas | Job `build-and-test`, concluído sem erro. |

A falha da primeira execução **não foi escondida**: ela aparece acima. Ela não foi causada pelo código deste PR, mas a intermitência do Google Fonts pode voltar em qualquer build, inclusive na Vercel. Mitigação possível, não aplicada nesta etapa: self-host da fonte com `next/font/local`, o que muda a forma de carregar a fonte e precisa de decisão.

**Vercel:**
- Preview do PR (`7661703092`, commit `d67637a`): status `success` ("Deployment has completed").
- Produção (`7661792553`, commit `ec1fddb`): status `success`. Build concluído sem erro.
- **Acesso público ao conteúdo de produção: não verificado.** Os endereços de deployment (com hash) e o escopado da equipe redirecionam para o login da Vercel (SSO). `portfolio-tati.vercel.app` é outro site. A sessão do Vercel CLI local está deslogada, e o navegador do proprietário não estava logado na Vercel; não fiz login em nome do proprietário.
- Por isso **não foram verificados** em produção: página inicial, cases, canonical, Open Graph, robots, sitemap, ausência de localhost, imagens, carrossel, modal e console. Esses itens dependem da URL pública ou de acesso autorizado.

**Consequência nos metadados de produção:** `NEXT_PUBLIC_SITE_URL` não está definida. Portanto a produção não gera canonical, imagem social absoluta, sitemap nem a linha `Sitemap` do robots. O sitemap que estava publicado no remoto anterior usava `https://example.com`; essa URL deixa de ser gerada.

## 7. Achados

### Achados originais da auditoria

| # | Achado | Situação | Evidência |
|---|---|---|---|
| 1 | Link do LinkedIn sem nome acessível | **Corrigido** | `aria-label` em `Footer.tsx`; `Footer.test.tsx` |
| 2 | Textos de leitor de tela em inglês | **Corrigido** | "Fechar", "Slide anterior", "Próximo slide"; testes de carrossel e modal |
| 3 | `div` dentro de `button` em `ClickableImage` | **Corrigido** | `span`; teste verifica ausência de `div` |
| 4 | Aviso de `DialogDescription` ausente | **Corrigido** | Descrição `sr-only` em `ProjectImageDialog.tsx` |
| 5 | Texto alternativo genérico do modal (solicitado nesta etapa) | **Corrigido** | Hook guarda `src` e `alt`; 41 chamadas atualizadas; verificado no navegador |
| 6 | CSP com `'unsafe-inline'` | **Risco residual aceito tecnicamente** | Teste no navegador (16 scripts bloqueados); `docs/seguranca-csp.md` |
| 7 | Domínio para metadados (`NEXT_PUBLIC_SITE_URL`) | **Pendente** (informação externa) | Implementado e validado com domínio de teste; `.env.example` documentado |
| 8 | Canonical, sitemap, robots e imagem social | **Corrigido** (sem domínio: não emitidos) | Verificado com domínio de teste |
| 9 | Cinco SVGs de boilerplate sem uso | **Corrigido** | Removidos após busca em código e HTML gerado |
| 10 | `__dirname` no `vitest.config.ts` | **Corrigido** | `fileURLToPath`; aviso do Vite eliminado |
| 11 | `main` inexistente e descrição em Markdown no `package.json` | **Corrigido** | Removido e reescrito em texto puro |
| 12 | Endereço de repositório possivelmente incorreto | **Confirmado pelo proprietário** | `https://github.com/Gustavo-dev-port/Portfolio-Tati` (campos verificados na seção 6-B) |
| 13 | 6 vulnerabilidades moderadas em devDependencies | **Corrigido** | `npm audit`: 0 em todos os níveis |
| 14 | Cobertura de testes restrita | **Corrigido** | 6 → 30 testes |
| 15 | Nomes inconsistentes (`header.tsx`, `carousel.tsx`) | **Corrigido** | Renomeados; importações atualizadas; índice corrigido |
| 16 | Repetição nas páginas de projeto | **Corrigido** | `ProjectHero` e `ProjectCover`; HTML comparado com a baseline |
| 17 | Comentários desatualizados | **Corrigido** | Comentários obsoletos e com erro de grafia removidos |
| 18 | Erros de ortografia, acentuação e gramática nos cases | **Corrigido** | Lista na seção 8 |
| 19 | Números e fontes dos cases | **Confirmado pelo proprietário** (declaração, sem verificação independente) | Seção 5; comentários VALIDAR removidos; texto preservado |

### Achados novos (encontrados durante a correção)

| # | Achado | Situação | Evidência |
|---|---|---|---|
| N1 | Foco não volta ao botão que abriu o modal | **Corrigido** | Teste de mutação; verificado no navegador |
| N2 | Build com Turbopack bloqueado pela política do Windows | **Pendente** (ambiente, não código) | Erro `wasm bindings`; build webpack passou |
| N3 | Preload da fonte ausente no HTML gerado pelo webpack | **Não confirmado no CI** | Fonte declarada e `.woff2` presente; diferença de bundler |
| N4 | Build parcial com Turbopack deixou `.next` incompleta | **Corrigido** (processo) | Refeita com `rm -rf .next && npx next build` |
| N5 | Servidor antigo ocupava a porta 3100 | **Corrigido** (processo) | Processo encerrado; servidor reiniciado e verificado |
| N6 | `.env.example` bloqueado pelo `.gitignore` (`.env*`) | **Corrigido** | Exceção `!.env.example` |
| N7 | Setas do carrossel moviam o slide, mas o foco ficava num cartão cortado pela área visível (sem o foco visível após duas setas) | **Corrigido** | `ui/carousel.tsx`: a seta move o foco para o cartão vizinho, com volta no loop; teste de mutação falha sem a correção; verificado no navegador (ver 4-B) |

## 8. Correções de texto aplicadas

- `WorknGoContent.tsx`: "experência" → "experiência"; "soitária" → "solitária"; "utlizados" → "utilizados"; "infrainstrutura" → "infraestrutura"; "afim de" → "a fim de"; "experiencias" → "experiências"; "tem" → "têm" (3 ocorrências); "google tradutor, etc" → "Google Tradutor, entre outros"; espaçamento dentro de `<b>` nos números (sem alterar os números).
- `FreteContent.tsx`: "jornada ,exige" → "jornada exige"; "informações.Os" → "informações. Os"; "usuario" → "usuário"; "perceção" → "percepção"; "Com intuito" → "Com o intuito".
- `AutoServicoContent.tsx`: "Após mapeamos a jornada…" → "Depois de mapear a jornada…".
- `HubRedacaoContent.tsx`: "fluída" → "fluida".
- `sobre-mim/page.tsx`: alt "Orquidea" → "Orquídea".

## 9. Verificações

### Executadas e com resultado

| Verificação | Comando | Resultado |
|---|---|---|
| Lint | `npm run lint` | exit 0, sem erros |
| Tipos | `npx tsc --noEmit` | exit 0, sem erros |
| Testes | `npx vitest run` | exit 0: 10 arquivos, **30 testes** passam |
| Auditoria | `npm audit` | exit 0: **0** vulnerabilidades (info, low, moderate, high, critical) |
| Build (webpack) | `npx next build` | exit 0: 12 páginas estáticas; sem avisos de `metadataBase` ou `localhost` |
| Servidor de produção | `npx next start -p 3100` | Todas as rotas 200; `/nao-existe` 404; headers conferidos |
| Domínio de teste | `NEXT_PUBLIC_SITE_URL=https://verificacao.example.com/ npx next build` + `next start` | Canonical, og:image, sitemap, robots corretos; sem localhost |
| CSP sem `'unsafe-inline'` | build experimental + navegador | 16 scripts bloqueados; site não funciona (motivo da decisão) |
| Navegador | Playwright, desktop e celular, seis páginas | Seção 4 |

### Não executadas ou não verificadas

- **`npm run build` (Turbopack):** bloqueado neste computador pela política do Windows.
- **CI (`ubuntu-latest`):** executada e concluída com sucesso no merge (`ec1fddb`). Não é um build de produção verificado no navegador.
- **Hospedagem de produção:** não identificada; headers e comportamento lá não foram testados.
- **Sitemap e metadados com o domínio real:** dependem da variável ainda não definida.
- **Validação dos números:** depende da Tatiana.
- **Advisories individuais do Next.js:** consultei as notas de release e o `npm audit`; não abri as páginas de cada advisory para conferir versões corrigidas.
- **Texto da imagem no modal:** o texto do botão de origem é usado; para textos muito longos, não avaliei o truncamento em todas as larguras.

## 10. Pendências

### Pendências externas (não resolvíveis com o acesso disponível)

1. **URL pública de produção.** Não identificada: os endereços de deployment e o da equipe exigem login da Vercel (SSO), e `portfolio-tati.vercel.app` é de outro site. **Solicito a URL pública estável** (ou o domínio, se houver). Com ela, a verificação de produção pode ser feita: página inicial, cases, canonical, Open Graph, robots, sitemap, imagens, carrossel, modal e console.
2. **Variável `NEXT_PUBLIC_SITE_URL` na Vercel.** Não definida. A sessão do Vercel CLI está deslogada, e o navegador não está logado na Vercel. É preciso defini-la no ambiente **Production** (ou autorizar essa configuração). Depois, é necessário gerar nova build e republicar: alterar só o painel não atualiza as páginas já geradas.
3. **Build local com Turbopack.** Bloqueado pela política do Windows sobre `@next/swc-win32-x64-msvc`. A política não foi alterada.
4. **Decisões do proprietário:** as reversões da seção 6-B, em especial `ThemeToggle` (grupo de botões com `aria-pressed`, sem radiogroup) e os textos alternativos descritivos dos cases.

### Resolvidas nesta etapa

- **Validação editorial:** declaração do proprietário, sem verificação independente (seção 5).
- **Repositório e campos de `package.json`:** confirmados (seção 6-B).
- **Identidade Git:** configurada somente neste repositório (seção 6-C).
- **CI:** executada no PR e no merge, com sucesso (seção 6-E).
- **Publicação:** merge em `master` (`ec1fddb`) e deploy de produção com status `success` na Vercel (seção 6-E).

## 11. Riscos residuais

- **CSP:** `'unsafe-inline'` em `script-src` permanece: **risco residual aceito tecnicamente**, não vulnerabilidade eliminada (seção 2).
- **Metadados sem domínio:** sem `NEXT_PUBLIC_SITE_URL`, o site não tem canonical nem sitemap.
- **Fontes dos cases:** a confirmação é do proprietário; não houve verificação independente das fontes e números.
- **Reversões sobre trabalho remoto:** decisões de integração que podem não corresponder à intenção do proprietário (seção 6-B).
- **Build pelo caminho padrão:** Turbopack não verificado localmente. A evidência é a CI em Linux, que passou no commit `ec1fddb`, e o build da Vercel, que também passou.
- **Instabilidade do Google Fonts:** a primeira execução da CI falhou por causa de uma issue conhecida do Next (`vercel/next.js#99114`). Pode voltar em qualquer build.
- **Produção não verificada no navegador:** o acesso público exige URL pública ou acesso autorizado à Vercel.
- **Aviso de build com webpack:** o preload da fonte não aparece no HTML gerado por esse bundler (seção 4 e N3).


## 12. Arquivos

- **Código alterado (tracked):** `next.config.ts`, `package.json`, `package-lock.json`, `vitest.config.ts`, `.gitignore`, `src/lib/site.ts`, `src/hooks/useImageModal.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, páginas de case e de sobre-mim, `src/components/` (Footer, ClickableImage, ProjectImageDialog, ProjectCarousel, ui/carousel, ui/dialog).
- **Removidos:** `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `src/components/carousel.tsx` (renomeado), `src/components/header.tsx` (renomeado).
- **Novos:** `.env.example`; `src/components/ProjectHero.tsx`, `ProjectCover.tsx`, `ProjectCarousel.tsx`, `Header.tsx`; testes em `src/components/*.test.tsx` e `src/lib/*.test.ts`, `src/lib/sitemap.test.ts`; `docs/seguranca-csp.md`; `docs/relatorio-correcoes.md`.
