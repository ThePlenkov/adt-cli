## 0.4.60 (2026-11-24)

### 🚀 Features

- add @abapify/btp-service-key-parser package with service key parsing and validation ([81136991](https://github.com/ThePlenkov/adt-cli/commit/81136991))
- implement OAuth token fetching and validation with comprehensive tests ([81eb612a](https://github.com/ThePlenkov/adt-cli/commit/81eb612a))
- Enhance BTP service key parser with OAuth token fetching and CLI tool ([c5342557](https://github.com/ThePlenkov/adt-cli/commit/c5342557))
- Implement OAuth 2.0 PKCE authentication flow for ADT CLI ([05047840](https://github.com/ThePlenkov/adt-cli/commit/05047840))
- Add discovery XML parsing and output options to ADT CLI ([590ee90c](https://github.com/ThePlenkov/adt-cli/commit/590ee90c))
- remove legacy ADT authentication test scripts ([1053e796](https://github.com/ThePlenkov/adt-cli/commit/1053e796))
- update ADT CLI documentation and enhance settings for vitest ([de50d4ff](https://github.com/ThePlenkov/adt-cli/commit/de50d4ff))
- enhance authentication flow with automatic token refresh and add refresh_token to OAuthToken ([746db449](https://github.com/ThePlenkov/adt-cli/commit/746db449))
- implement transport management and discovery services with comprehensive command support ([2392b48e](https://github.com/ThePlenkov/adt-cli/commit/2392b48e))
- enhance transport list command with full ADT protocol support and debug mode ([4d0ae84d](https://github.com/ThePlenkov/adt-cli/commit/4d0ae84d))
- add transport get command for detailed transport and task information ([d2f4e9eb](https://github.com/ThePlenkov/adt-cli/commit/d2f4e9eb))
- implement transport creation command with CSRF protection and session handling ([ec872641](https://github.com/ThePlenkov/adt-cli/commit/ec872641))
- enhance authentication and user detection for improved session management ([6fecd957](https://github.com/ThePlenkov/adt-cli/commit/6fecd957))
- improve authentication success feedback and server closure ([de77a002](https://github.com/ThePlenkov/adt-cli/commit/de77a002))
- add search and import commands for ABAP objects ([5a8e7577](https://github.com/ThePlenkov/adt-cli/commit/5a8e7577))
- refactor CLI command structure for improved modularity ([7f198083](https://github.com/ThePlenkov/adt-cli/commit/7f198083))
- enhance abapGit format with disclaimer and update import command help ([d278034a](https://github.com/ThePlenkov/adt-cli/commit/d278034a))
- enhance import command and ADT client for improved performance and error handling ([10746073](https://github.com/ThePlenkov/adt-cli/commit/10746073))
- improve ATC polling with progress and completeness checks ([3f9e441b](https://github.com/ThePlenkov/adt-cli/commit/3f9e441b))
- add support for GitLab and SARIF output formats to ATC command ([9e4a8584](https://github.com/ThePlenkov/adt-cli/commit/9e4a8584))
- enhance OAT format with detailed structure, metadata schema, and integration documentation ([c38a0e7a](https://github.com/ThePlenkov/adt-cli/commit/c38a0e7a))
- standardize OAT directory structure to lowercase for consistency ([8a1aa616](https://github.com/ThePlenkov/adt-cli/commit/8a1aa616))
- implement package-based directory structure and enhance config handling for OAT format ([bae0be19](https://github.com/ThePlenkov/adt-cli/commit/bae0be19))
- add petstore e2e example with interface and tests ([307c58b3](https://github.com/ThePlenkov/adt-cli/commit/307c58b3))
- mount git and ssh configs into devcontainer for auth persistence ([1006fd68](https://github.com/ThePlenkov/adt-cli/commit/1006fd68))
- add transport import functionality to ADT CLI with specification-driven development docs ([e769ae0d](https://github.com/ThePlenkov/adt-cli/commit/e769ae0d))
- add codeium config mount to devcontainer for persistent AI settings ([d5078f47](https://github.com/ThePlenkov/adt-cli/commit/d5078f47))
- implement transport object extraction from ADT API endpoint ([a225590e](https://github.com/ThePlenkov/adt-cli/commit/a225590e))
- enhance transport get command with tree-style task and object display ([b04bb57d](https://github.com/ThePlenkov/adt-cli/commit/b04bb57d))
- add uv package manager to devcontainer for Python dependencies ([9463e401](https://github.com/ThePlenkov/adt-cli/commit/9463e401))
- remove cds2abap and btp-service-key-parser packages ([9db3bd25](https://github.com/ThePlenkov/adt-cli/commit/9db3bd25))
- enhance README with AI development guidelines and project structure ([a835a017](https://github.com/ThePlenkov/adt-cli/commit/a835a017))
- add parallel flag to affected tasks in CI ([6bf5f526](https://github.com/ThePlenkov/adt-cli/commit/6bf5f526))
- update adk package and nx target defaults ([170f20eb](https://github.com/ThePlenkov/adt-cli/commit/170f20eb))
- Implement decorator-based XML composition system for ADK ([ed834c38](https://github.com/ThePlenkov/adt-cli/commit/ed834c38))
- add inheritance support to xmld with metadata merging and build system updates ([6d9b1fdb](https://github.com/ThePlenkov/adt-cli/commit/6d9b1fdb))
- add @attributes convenience decorator for XML attribute flattening ([58946c8b](https://github.com/ThePlenkov/adt-cli/commit/58946c8b))
- Implement deploy and lock/unlock commands for SAP ADT objects ([aaa191ae](https://github.com/ThePlenkov/adt-cli/commit/aaa191ae))
- Enhance ADT client with object locking and session management features ([0e61924c](https://github.com/ThePlenkov/adt-cli/commit/0e61924c))
- add container name to devcontainer configuration for abapify-js ([584e42ef](https://github.com/ThePlenkov/adt-cli/commit/584e42ef))
- add docker-mcp plugin and disable moby in devcontainer setup ([02addce6](https://github.com/ThePlenkov/adt-cli/commit/02addce6))
- Add Basic Authentication support for on-premise SAP systems ([#8](https://github.com/ThePlenkov/adt-cli/pull/8))
- add XML/XSLT processing and JSON validation dependencies ([c54bb034](https://github.com/ThePlenkov/adt-cli/commit/c54bb034))
- reorganize schemas to generated folder and enhance XSD codegen ([6086d7d5](https://github.com/ThePlenkov/adt-cli/commit/6086d7d5))
- decommission old transport commands, add cts tr commands, adt-tui package ([b1fcbfbe](https://github.com/ThePlenkov/adt-cli/commit/b1fcbfbe))
- make publish workflow version input optional, default to latest release tag ([0b545399](https://github.com/ThePlenkov/adt-cli/commit/0b545399))
- add Docker image CI workflow and Dockerfile ([5a285331](https://github.com/ThePlenkov/adt-cli/commit/5a285331))
- add Bun standalone executable support with all plugins bundled ([a4b275a7](https://github.com/ThePlenkov/adt-cli/commit/a4b275a7))
- add GitHub Packages publish workflow ([22f4fa4c](https://github.com/ThePlenkov/adt-cli/commit/22f4fa4c))
- move all packages to @abapify namespace for GitHub Registry publishing ([82b2aa41](https://github.com/ThePlenkov/adt-cli/commit/82b2aa41))
- add granular publish inputs to release workflow ([9ecff1a9](https://github.com/ThePlenkov/adt-cli/commit/9ecff1a9))
- add latest Docker tag when publishing releases ([b7829668](https://github.com/ThePlenkov/adt-cli/commit/b7829668))
- add Copilot hooks to auto-approve waiting workflow runs ([1707a7f0](https://github.com/ThePlenkov/adt-cli/commit/1707a7f0))
- log all tool calls to JSON via postToolUse hook, print on sessionEnd ([041554d2](https://github.com/ThePlenkov/adt-cli/commit/041554d2))
- add --service-key CLI option, Bearer token support, and CI e2e auth test ([4055c554](https://github.com/ThePlenkov/adt-cli/commit/4055c554))
- add PROG (Program) and FUGR (Function Group) ABAP object type support ([789f55b0](https://github.com/ThePlenkov/adt-cli/commit/789f55b0))
- enhance service key authentication and add redirect URI support ([831c6b24](https://github.com/ThePlenkov/adt-cli/commit/831c6b24))
- fix ADT export XML serialization and live-test on BTP + on-prem ([a58218fd](https://github.com/ThePlenkov/adt-cli/commit/a58218fd))
- optimize export by skipping unchanged sources and auto-creating packages ([015c9676](https://github.com/ThePlenkov/adt-cli/commit/015c9676))
- move single-source save lifecycle to base class and add default unchanged detection ([7eeee856](https://github.com/ThePlenkov/adt-cli/commit/7eeee856))
- add nx format:write pre-commit instruction to GitHub Copilot config ([ff3d0e62](https://github.com/ThePlenkov/adt-cli/commit/ff3d0e62))
- add @fission-ai/openspec dependency for spec management ([5fd382d7](https://github.com/ThePlenkov/adt-cli/commit/5fd382d7))
- remove OAT format everywhere, make abapgit the default ([d7a82b41](https://github.com/ThePlenkov/adt-cli/commit/d7a82b41))
- abapGit roundtrip - export, deploy, and structure support ([29859632](https://github.com/ThePlenkov/adt-cli/commit/29859632))
- add adt diff command and fix CDS-to-abapGit serialization ([e79ecb8f](https://github.com/ThePlenkov/adt-cli/commit/e79ecb8f))
- resolve DDIC metadata via ADT for zero-diff TABL serialization ([0af4104c](https://github.com/ThePlenkov/adt-cli/commit/0af4104c))
- add CTS tr reassign command to change transport owner ([003ea32f](https://github.com/ThePlenkov/adt-cli/commit/003ea32f))
- add package CRUD and object CRUD commands (class, program, interface) ([bf469bac](https://github.com/ThePlenkov/adt-cli/commit/bf469bac))
- add datapreview osql, abap run, and DDIC object commands ([7d0630ee](https://github.com/ThePlenkov/adt-cli/commit/7d0630ee))
- add AUnit sonar format, improved exit codes, and ATC customizing command ([66f3f10b](https://github.com/ThePlenkov/adt-cli/commit/66f3f10b))
- add CDS DDL and DCL source commands with XML injection fix ([0391f4aa](https://github.com/ThePlenkov/adt-cli/commit/0391f4aa))
- add checkout command and remaining CDS/DDIC subtask completions ([c2d80f75](https://github.com/ThePlenkov/adt-cli/commit/c2d80f75))
- implement arc-1 parity across adt-lint, adt-contracts, adt-mcp, and adt-cli ([361ff373](https://github.com/ThePlenkov/adt-cli/commit/361ff373))
- transport deletion-aware import with obj_func filter and multi-TR merge ([22fe3d26](https://github.com/ThePlenkov/adt-cli/commit/22fe3d26))
- simplify import transport - comma-sep multi-TR, --save-tr-metadata, fixed deletion pass ([66c4cd3b](https://github.com/ThePlenkov/adt-cli/commit/66c4cd3b))
- add e2e/adt-sdk to .gitignore ([9e69715c](https://github.com/ThePlenkov/adt-cli/commit/9e69715c))
- add ADT proxy server with JSON↔XML conversion ([49271e22](https://github.com/ThePlenkov/adt-cli/commit/49271e22))
- expose typed CTS transport metadata ([#186](https://github.com/ThePlenkov/adt-cli/pull/186))
- **abapgit:** dual-format deserialization foundation (XML + AFF JSON) ([#198](https://github.com/ThePlenkov/adt-cli/pull/198))
- **abapgit:** dual-format support for 15 CDS/RAP object types ([#199](https://github.com/ThePlenkov/adt-cli/pull/199))
- **abapgit:** add 7 legacy XML object types (MSAG, VIEW, ENQU, SHLP, TRAN, TYPE, XSLT) ([#200](https://github.com/ThePlenkov/adt-cli/pull/200))
- **abapgit:** add 17 AFF-first object types (APLO, CHKC, CHKO, CHKV, SAJC, SAJT, etc.) ([#201](https://github.com/ThePlenkov/adt-cli/pull/201))
- **abapgit:** add ENHO and ENHS enhancement object types ([#203](https://github.com/ThePlenkov/adt-cli/pull/203))
- **abapgit:** add 8 more object types (EEEC, SWCR, HTTP, NROB, CHDO, SMTG, SFPF, SCP1) ([#204](https://github.com/ThePlenkov/adt-cli/pull/204))
- **abapgit:** full upstream object type coverage (168 types) ([#205](https://github.com/ThePlenkov/adt-cli/pull/205))
- **acds:** full CDS DDL/DCL grammar + AST walker + validators — E09 ([b52ec71b](https://github.com/ThePlenkov/adt-cli/commit/b52ec71b))
- **acds:** extend the CDS grammar to the full DDL/DCL statement set ([5796ebbb](https://github.com/ThePlenkov/adt-cli/commit/5796ebbb))
- **aclass:** Wave 0 — package skeleton + Chevrotain lexer ([4241a89b](https://github.com/ThePlenkov/adt-cli/commit/4241a89b))
- **aclass:** Wave 0 — package skeleton + Chevrotain lexer ([64d91045](https://github.com/ThePlenkov/adt-cli/commit/64d91045))
- **aclass:** Wave 1+2 — parser, typed AST, fixtures, roundtrip ([c0325729](https://github.com/ThePlenkov/adt-cli/commit/c0325729))
- **aclass:** typed EventDecl + forward-class decl + abaplint gate ([4db5da05](https://github.com/ThePlenkov/adt-cli/commit/4db5da05))
- **adk:** enhance ADK package with class and interface support, update dependencies and build process ([366405a2](https://github.com/ThePlenkov/adt-cli/commit/366405a2))
- **adk:** implement ADT XML parsing for ABAP objects ([53f70444](https://github.com/ThePlenkov/adt-cli/commit/53f70444))
- **adk:** implement ADK architecture alignment with lazy loading ([6313ce60](https://github.com/ThePlenkov/adt-cli/commit/6313ce60))
- **adk:** add FunctionModule support with POST-then-PUT save flow, fix ETag refresh after metadata PUT ([18746eb6](https://github.com/ThePlenkov/adt-cli/commit/18746eb6))
- **adk:** improve FUNC save reliability — skip POST if exists, compare function body only, add DEVC skeleton ([8840a676](https://github.com/ThePlenkov/adt-cli/commit/8840a676))
- **adk:** add metadata-only unchanged detection, fix bulk save progress counter ([90447809](https://github.com/ThePlenkov/adt-cli/commit/90447809))
- **adk,adt-cli:** add FUGR name normalization, lock handle persistence, and root URI extraction ([1e5ad7f5](https://github.com/ThePlenkov/adt-cli/commit/1e5ad7f5))
- **adk,adt-cli:** centralize lock operations in LockService, add force-unlock, remove duplicate lock logic ([76f45210](https://github.com/ThePlenkov/adt-cli/commit/76f45210))
- **adk,adt-cli:** fix ETag invalidation after lock acquisition, improve DEVC subpackage filtering, add --objects to package get ([45fd3873](https://github.com/ThePlenkov/adt-cli/commit/45fd3873))
- **adt:** add user lookup command and system contract ([3257eeec](https://github.com/ThePlenkov/adt-cli/commit/3257eeec))
- **adt:** add @abapify/adt standalone bundle package ([6f0e57fa](https://github.com/ThePlenkov/adt-cli/commit/6f0e57fa))
- **adt-atc:** bound + harden documentation bridge reads ([#268](https://github.com/ThePlenkov/adt-cli/pull/268))
- **adt-auth:** add service-key auth plugin and env resolver ([042466e0](https://github.com/ThePlenkov/adt-cli/commit/042466e0))
- **adt-auth:** add port retry logic for OAuth callback server, fix refresh logging ([71149806](https://github.com/ThePlenkov/adt-cli/commit/71149806))
- **adt-cli:** add ADT XML export option to get command ([f65aaf32](https://github.com/ThePlenkov/adt-cli/commit/f65aaf32))
- **adt-cli:** add object structure option to get command ([1da86029](https://github.com/ThePlenkov/adt-cli/commit/1da86029))
- **adt-cli:** enhance get command with object structure display for classes ([dad33159](https://github.com/ThePlenkov/adt-cli/commit/dad33159))
- **adt-cli:** integrate ADK for native ADT XML parsing in CLI ([0feb9517](https://github.com/ThePlenkov/adt-cli/commit/0feb9517))
- **adt-cli:** enhance object inspection with properties and outline commands ([51a43a93](https://github.com/ThePlenkov/adt-cli/commit/51a43a93))
- **adt-cli:** refine get command output and enhance object properties display ([11e9b59d](https://github.com/ThePlenkov/adt-cli/commit/11e9b59d))
- **adt-cli:** enhance outline command with descriptions and improved element type handling ([9c854e3e](https://github.com/ThePlenkov/adt-cli/commit/9c854e3e))
- **adt-cli:** add pluggable logger to client helper ([372ab66c](https://github.com/ThePlenkov/adt-cli/commit/372ab66c))
- **adt-cli:** propagate CLI logger to v2 client via plugin ([70f6555b](https://github.com/ThePlenkov/adt-cli/commit/70f6555b))
- **adt-cli:** add interactive TUI editor for CTS tree configuration with optimistic locking ([4eb38c39](https://github.com/ThePlenkov/adt-cli/commit/4eb38c39))
- **adt-cli:** improve error handling with error codes and stack traces ([5a84eb99](https://github.com/ThePlenkov/adt-cli/commit/5a84eb99))
- **adt-cli:** extract error cause for better network error diagnostics ([9eeab348](https://github.com/ThePlenkov/adt-cli/commit/9eeab348))
- **adt-cli:** add --config option for explicit config file ([025bbe60](https://github.com/ThePlenkov/adt-cli/commit/025bbe60))
- **adt-cli:** improve error handling with error codes and stack traces ([ff8aae85](https://github.com/ThePlenkov/adt-cli/commit/ff8aae85))
- **adt-cli:** extract error cause for better network error diagnostics ([e0478348](https://github.com/ThePlenkov/adt-cli/commit/e0478348))
- **adt-cli:** add --config option for explicit config file ([f5f92d69](https://github.com/ThePlenkov/adt-cli/commit/f5f92d69))
- **adt-cli:** add ls command and atc --from-file option ([6d61447b](https://github.com/ThePlenkov/adt-cli/commit/6d61447b))
- **adt-client:** add auth debug logging to diagnose 401s ([#289](https://github.com/ThePlenkov/adt-cli/pull/289), [#309](https://github.com/ThePlenkov/adt-cli/pull/309))
- ⚠️  **adt-client-v2:** add pluggable response system and fix XML attribute parsing ([e5fb3348](https://github.com/ThePlenkov/adt-cli/commit/e5fb3348))
- **adt-client-v2:** implement repository search contract and migrate CLI command ([9451fff5](https://github.com/ThePlenkov/adt-cli/commit/9451fff5))
- **adt-client-v2:** add logger support to client architecture ([d4ffb9cd](https://github.com/ThePlenkov/adt-cli/commit/d4ffb9cd))
- **adt-config:** implement --config flag support in config loader ([afe9d8d0](https://github.com/ThePlenkov/adt-cli/commit/afe9d8d0))
- **adt-contracts:** split Accept vs Content-Type headers in crud() ([89bddc7b](https://github.com/ThePlenkov/adt-cli/commit/89bddc7b))
- **adt-diff:** add --format ddl option and fix CDS DDL generation ([58a44808](https://github.com/ThePlenkov/adt-cli/commit/58a44808))
- **adt-diff:** support multi-file and glob patterns in diff command ([120055ba](https://github.com/ThePlenkov/adt-cli/commit/120055ba))
- **adt-diff:** rename --format to --source, add annotation filtering for CDS comparison ([f12ad872](https://github.com/ThePlenkov/adt-cli/commit/f12ad872))
- **adt-diff:** add --raw mode, fix abapLanguageVersion auth issue, defer CLAS include saves ([39997c2d](https://github.com/ThePlenkov/adt-cli/commit/39997c2d))
- **adt-export:** remove full-repo scan fallback, add package validation and cascade skip logic ([051b39e0](https://github.com/ThePlenkov/adt-cli/commit/051b39e0))
- **adt-flow:** add incremental transport checkout ([#150](https://github.com/ThePlenkov/adt-cli/pull/150))
- **adt-flow:** index omitted partial objects ([13d14600](https://github.com/ThePlenkov/adt-cli/commit/13d14600))
- **adt-lint:** scaffold shared abaplint utilities package ([9f29ac2e](https://github.com/ThePlenkov/adt-cli/commit/9f29ac2e))
- **adt-mcp:** implement MCP server package with tools and mock backend ([3264eac0](https://github.com/ThePlenkov/adt-cli/commit/3264eac0))
- **adt-mcp:** add adt-mcp package from PR #59, resolving conflicts with main ([#59](https://github.com/ThePlenkov/adt-cli/issues/59))
- **adt-mcp:** add 7 new MCP tools and adt source CLI command ([c2bed22a](https://github.com/ThePlenkov/adt-cli/commit/c2bed22a))
- **adt-mcp:** add 12 new tools for feature parity with vibing-steampunk (#H1-#H8) ([9802206f](https://github.com/ThePlenkov/adt-cli/commit/9802206f))
- **adt-mcp:** implement 14 medium-priority MCP tools (#M1-#M10)" ([37488b97](https://github.com/ThePlenkov/adt-cli/commit/37488b97))
- **adt-mcp:** Wave 1 — Streamable HTTP transport + stateful sessions + multi-system routing ([6e6954fe](https://github.com/ThePlenkov/adt-cli/commit/6e6954fe))
- **adt-mcp:** Wave 2 — HTTP auth middleware (bearer + reverse-proxy + CORS) ([f4968329](https://github.com/ThePlenkov/adt-cli/commit/f4968329))
- **adt-mcp:** Wave 1-C — migrate tools to session-aware args + getAdtClientV2Safe ([9205468f](https://github.com/ThePlenkov/adt-cli/commit/9205468f))
- **adt-mcp:** Wave 4 — OAuth 2.1 bearer validation (Okta / Entra ID / Cognito) ([4ac536b9](https://github.com/ThePlenkov/adt-cli/commit/4ac536b9))
- **adt-mcp:** enforce destination scopes ([3bbb9bf9](https://github.com/ThePlenkov/adt-cli/commit/3bbb9bf9))
- **adt-mcp:** verify signed invocations ([f782bf4f](https://github.com/ThePlenkov/adt-cli/commit/f782bf4f))
- **adt-mcp:** enforce frozen AI Review reads ([3c19a052](https://github.com/ThePlenkov/adt-cli/commit/3c19a052))
- **adt-mcp:** scope frozen reads to components ([2676ae8f](https://github.com/ThePlenkov/adt-cli/commit/2676ae8f))
- **adt-mcp:** scope ATC runs without raw URIs ([6665107c](https://github.com/ThePlenkov/adt-cli/commit/6665107c))
- **adt-mcp:** reject raw URI read targets ([c206c1d4](https://github.com/ThePlenkov/adt-cli/commit/c206c1d4))
- **adt-mcp:** scope autonomous agent reads ([7baa09f8](https://github.com/ThePlenkov/adt-cli/commit/7baa09f8))
- **adt-mcp:** classify bounded analysis execution ([f1d19e7b](https://github.com/ThePlenkov/adt-cli/commit/f1d19e7b))
- **adt-mcp:** classify bounded analysis execution ([#141](https://github.com/ThePlenkov/adt-cli/pull/141))
- **adt-mcp:** enforce scoped safe execution ([#143](https://github.com/ThePlenkov/adt-cli/pull/143))
- **adt-mcp:** add delegated assistant read scope ([b59006b4](https://github.com/ThePlenkov/adt-cli/commit/b59006b4))
- **adt-mcp:** add delegated assistant read scope ([#148](https://github.com/ThePlenkov/adt-cli/pull/148))
- **adt-mcp:** arc-1 SAPRead parity for get_source ([#162](https://github.com/ThePlenkov/adt-cli/pull/162))
- **adt-mcp,adt-cli:** Wave 3 — transactional changesets (MCP + CLI parity) ([ff70be83](https://github.com/ThePlenkov/adt-cli/commit/ff70be83))
- **adt-pilot:** scaffold package — source, tests, config ([8d11d287](https://github.com/ThePlenkov/adt-cli/commit/8d11d287))
- **adt-pilot:** fix build — disable dts (OOM), explicit return types ([a966ba2c](https://github.com/ThePlenkov/adt-cli/commit/a966ba2c))
- **adt-pilot:** add local dev stack for HTTP MCP and Mastra playground ([e5d204ce](https://github.com/ThePlenkov/adt-cli/commit/e5d204ce))
- **adt-plugin-gcts:** AFF wave-0 machinery — schema access, validation, codegen, coverage ([#232](https://github.com/ThePlenkov/adt-cli/pull/232))
- **adt-plugin-gcts:** schema-aware generic emit/parse for all wave2 stubs ([#233](https://github.com/ThePlenkov/adt-cli/pull/233))
- **adt-plugin-gcts:** spec file-name grammar + full source-extension coverage ([#234](https://github.com/ThePlenkov/adt-cli/pull/234))
- **adt-plugin-gcts:** source companions + DOCU for wave2 stubs ([#235](https://github.com/ThePlenkov/adt-cli/pull/235))
- **adt-plugin-gcts:** LIMU sub-objects + extension-aware source keys ([#238](https://github.com/ThePlenkov/adt-cli/pull/238))
- **adt-plugin-gcts:** schema-validate LIMU sub-object examples ([#266](https://github.com/ThePlenkov/adt-cli/pull/266))
- **adt-server:** add guarded MCP sidecar ([ebd6f5f5](https://github.com/ThePlenkov/adt-cli/commit/ebd6f5f5))
- **adt-server:** configure signed MCP runtime ([d74109ef](https://github.com/ThePlenkov/adt-cli/commit/d74109ef))
- **adt-server:** add capability-bound source reads ([c07df84d](https://github.com/ThePlenkov/adt-cli/commit/c07df84d))
- **adt-server:** allow local REST bearer auth ([eff9104d](https://github.com/ThePlenkov/adt-cli/commit/eff9104d))
- **adt-server:** normalize system transport search ([e9b0779e](https://github.com/ThePlenkov/adt-cli/commit/e9b0779e))
- **adt-server:** release broker leases with audit ([90a43953](https://github.com/ThePlenkov/adt-cli/commit/90a43953))
- **adt-server:** add canonical transport detail REST ([d6a74218](https://github.com/ThePlenkov/adt-cli/commit/d6a74218))
- **adt-server:** schema capability source responses ([28a77ab5](https://github.com/ThePlenkov/adt-cli/commit/28a77ab5))
- **adt-server:** paginate canonical package search ([96c41c30](https://github.com/ThePlenkov/adt-cli/commit/96c41c30))
- **adt-server:** paginate canonical object search ([9e43a2ad](https://github.com/ThePlenkov/adt-cli/commit/9e43a2ad))
- **adt-server:** require shared REST state secrets ([d031b846](https://github.com/ThePlenkov/adt-cli/commit/d031b846))
- **adt-server:** page direct package objects ([f7971303](https://github.com/ThePlenkov/adt-cli/commit/f7971303))
- **adt-server:** add canonical object metadata REST ([be7857dd](https://github.com/ThePlenkov/adt-cli/commit/be7857dd))
- **adt-server:** add canonical object history REST ([40ba0aa5](https://github.com/ThePlenkov/adt-cli/commit/40ba0aa5))
- **adt-server:** add bounded object source REST ([05ce2705](https://github.com/ThePlenkov/adt-cli/commit/05ce2705))
- **adt-server:** add canonical ATC REST ([0c16a8f3](https://github.com/ThePlenkov/adt-cli/commit/0c16a8f3))
- **adt-server:** generate typed REST client ([7ac85f6c](https://github.com/ThePlenkov/adt-cli/commit/7ac85f6c))
- **adt-server:** wire safe_execute hooks from environment URLs ([#146](https://github.com/ThePlenkov/adt-cli/pull/146))
- **adtc-cli:** add --output/-o to read commands for UTF-8 file output ([#263](https://github.com/ThePlenkov/adt-cli/pull/263))
- **atc:** initial ATC plugin package structure ([5a1d41c9](https://github.com/ThePlenkov/adt-cli/commit/5a1d41c9))
- **atc:** include method name and raw location in GitLab report ([74f44bf6](https://github.com/ThePlenkov/adt-cli/commit/74f44bf6))
- **atc:** plugin-based finding resolver architecture ([9a949250](https://github.com/ThePlenkov/adt-cli/commit/9a949250))
- **atc:** resolve finding check categories from the check variant form template ([#239](https://github.com/ThePlenkov/adt-cli/pull/239))
- **aunit:** ABAP Unit code coverage — JaCoCo output + CLI/MCP parity ([ad12d14b](https://github.com/ThePlenkov/adt-cli/commit/ad12d14b))
- **badi:** BAdI CRUD + real-SAP e2e harness — E03 ([d36945ba](https://github.com/ThePlenkov/adt-cli/commit/d36945ba))
- **badi:** add `adt badi <name> --implementations` ([#153](https://github.com/ThePlenkov/adt-cli/pull/153))
- **badi:** classic BAdI read via vit/wb ([#153](https://github.com/ThePlenkov/adt-cli/pull/153), [#154](https://github.com/ThePlenkov/adt-cli/pull/154))
- **cds:** support CDS and RAP ABAP File Formats ([#183](https://github.com/ThePlenkov/adt-cli/pull/183))
- **cds-to-abapgit:** detect LANGDEP from spras/lang fields in CDS ([752ab68d](https://github.com/ThePlenkov/adt-cli/commit/752ab68d))
- **checkin:** checkin via batch lock session — E08 ([403b126e](https://github.com/ThePlenkov/adt-cli/commit/403b126e))
- **cli:** expose installed runtime capabilities without layout introspection ([#358](https://github.com/ThePlenkov/adt-cli/pull/358))
- **contracts:** add datapreview, CTS useraction, DDL/DCL, tablesettings ([d46415d4](https://github.com/ThePlenkov/adt-cli/commit/d46415d4))
- **cts:** create verified transport tasks ([99447319](https://github.com/ThePlenkov/adt-cli/commit/99447319))
- **cts:** normalize transport metadata and plan ordered multi-root scope ([#356](https://github.com/ThePlenkov/adt-cli/pull/356))
- **ddic:** add abapGit handlers for TABL and TTYP object types ([49042231](https://github.com/ThePlenkov/adt-cli/commit/49042231))
- **devc:** implement DEVC package support with type inference ([2d314008](https://github.com/ThePlenkov/adt-cli/commit/2d314008))
- **flow:** persist complete CTS inventories ([#182](https://github.com/ThePlenkov/adt-cli/pull/182))
- **flow:** report partial transport import gaps ([#190](https://github.com/ThePlenkov/adt-cli/pull/190))
- **flow:** add source-free transport indexing ([2cf8bb46](https://github.com/ThePlenkov/adt-cli/commit/2cf8bb46))
- **flow:** index manifest-inexact checkout ([7daba050](https://github.com/ThePlenkov/adt-cli/commit/7daba050))
- **flow:** assess stale descriptor ownership from file hashes ([#354](https://github.com/ThePlenkov/adt-cli/pull/354))
- **flow:** derive unchanged class component boundaries from sibling provenance ([16c1dcc2](https://github.com/ThePlenkov/adt-cli/commit/16c1dcc2))
- **flow:** reconcile proven CTS deletions with owned source files ([#365](https://github.com/ThePlenkov/adt-cli/pull/365))
- **flow:** assess persisted checkout coverage against verified file evidence ([#367](https://github.com/ThePlenkov/adt-cli/pull/367))
- **flp:** Fiori Launchpad read-only inventory — E14 ([eb890f58](https://github.com/ThePlenkov/adt-cli/commit/eb890f58))
- **function:** FUGR/FUNC CLI + MCP — E02 ([99b85330](https://github.com/ThePlenkov/adt-cli/commit/99b85330))
- **gcts:** AFF/gCTS format plugin — E06 ([67676d24](https://github.com/ThePlenkov/adt-cli/commit/67676d24))
- **gcts:** format.export — complete checkin roundtrip for gCTS — QC2 ([5590ea19](https://github.com/ThePlenkov/adt-cli/commit/5590ea19))
- **gcts:** Full AFF abap-file-formats support — Wave 0+1+2 ([#193](https://github.com/ThePlenkov/adt-cli/pull/193))
- **gcts:** add dedicated FUNC handler for function module serialization ([#246](https://github.com/ThePlenkov/adt-cli/pull/246))
- **gcts-cli:** gCTS command plugin — E07 ([01295e4e](https://github.com/ThePlenkov/adt-cli/commit/01295e4e))
- **import:** support plugin format options for abapgit folder logic ([143cec32](https://github.com/ThePlenkov/adt-cli/commit/143cec32))
- **incl:** INCL CLI + MCP — E01 ([8aaeb898](https://github.com/ThePlenkov/adt-cli/commit/8aaeb898))
- **mcp:** bound current source reads ([e8da7e53](https://github.com/ThePlenkov/adt-cli/commit/e8da7e53))
- **nx:** add skills for generating code, managing plugins, running tasks, and exploring workspaces ([6d375f92](https://github.com/ThePlenkov/adt-cli/commit/6d375f92))
- **nx-cloud:** setup nx cloud workspace ([20da8a2e](https://github.com/ThePlenkov/adt-cli/commit/20da8a2e))
- **nx-cloud:** setup nx cloud workspace ([4a29f8a6](https://github.com/ThePlenkov/adt-cli/commit/4a29f8a6))
- **nx-cloud:** setup nx cloud workspace ([63f92c9b](https://github.com/ThePlenkov/adt-cli/commit/63f92c9b))
- **nx-cloud:** setup nx cloud workspace ([8e6fa125](https://github.com/ThePlenkov/adt-cli/commit/8e6fa125))
- **nx-cloud:** setup nx cloud workspace ([f7eb019c](https://github.com/ThePlenkov/adt-cli/commit/f7eb019c))
- **nx-cloud:** setup nx cloud workspace ([3e852bb9](https://github.com/ThePlenkov/adt-cli/commit/3e852bb9))
- **nx-cloud:** set up nx cloud workspace ([#316](https://github.com/ThePlenkov/adt-cli/pull/316))
- **nx-npm-access:** add npm-fix target — auto-remediation, not just checks ([87c5665b](https://github.com/ThePlenkov/adt-cli/commit/87c5665b))
- **nx-npm-access:** add npm-prepare target — port /npm-publish prepare-ci ([f33b04e5](https://github.com/ThePlenkov/adt-cli/commit/f33b04e5))
- **nx-npm-trust:** add prepare-for-publish target + --otp passthrough ([46b9997e](https://github.com/ThePlenkov/adt-cli/commit/46b9997e))
- **nx-npm-trust:** use webauth instead of OTP for prepare-for-publish ([cb914bbe](https://github.com/ThePlenkov/adt-cli/commit/cb914bbe))
- **nx-npm-trust:** auto-trigger npm login --auth-type=web on EOTP ([c676d45e](https://github.com/ThePlenkov/adt-cli/commit/c676d45e))
- **openai-codegen:** scaffold abap-ast + openai-codegen packages and openspec change ([43170b24](https://github.com/ThePlenkov/adt-cli/commit/43170b24))
- **openai-codegen:** Wave 1 — AST nodes, OAS loader, target profiles ([d58b40ab](https://github.com/ThePlenkov/adt-cli/commit/d58b40ab))
- **openai-codegen:** Wave 2 — printer, type emitter, inline cloud runtime ([72e341f9](https://github.com/ThePlenkov/adt-cli/commit/72e341f9))
- **openai-codegen:** Wave 3 — emitter, security, formats, CLI + petstore3 ([b5cf2dfa](https://github.com/ThePlenkov/adt-cli/commit/b5cf2dfa))
- **openai-codegen:** Wave 4 — split exception into global class, fix activation on Steampunk, live deploy proof ([c5374ca4](https://github.com/ThePlenkov/adt-cli/commit/c5374ca4))
- **openai-codegen:** scaffold abap-ast + openai-codegen packages and openspec change ([13147d77](https://github.com/ThePlenkov/adt-cli/commit/13147d77))
- **openai-codegen:** Wave 1 — AST nodes, OAS loader, target profiles ([2785c9eb](https://github.com/ThePlenkov/adt-cli/commit/2785c9eb))
- **openai-codegen:** Wave 2 — printer, type emitter, inline cloud runtime ([224a7672](https://github.com/ThePlenkov/adt-cli/commit/224a7672))
- **openai-codegen:** Wave 3 — emitter, security, formats, CLI + petstore3 ([2c089db6](https://github.com/ThePlenkov/adt-cli/commit/2c089db6))
- **openai-codegen:** Wave 4 — split exception into global class, fix activation on Steampunk, live deploy proof ([bebb0cdb](https://github.com/ThePlenkov/adt-cli/commit/bebb0cdb))
- **openai-codegen:** deterministic OpenAPI → ABAP client codegen ([8393c685](https://github.com/ThePlenkov/adt-cli/commit/8393c685))
- **openai-codegen:** Wave 1 v2 — AST ABAPDoc, naming+CLI, 4 emitters + templates ([abb0dd53](https://github.com/ThePlenkov/adt-cli/commit/abb0dd53))
- **openai-codegen:** Wave 2 v2 — impl class, INTF+locals format, generate.ts pipeline ([0686504e](https://github.com/ThePlenkov/adt-cli/commit/0686504e))
- **openai-codegen:** table query params + HTTP exception wrapping ([18009a61](https://github.com/ThePlenkov/adt-cli/commit/18009a61))
- **openai-codegen:** Wave 3 — aclass parse-gate + lexer extensions ([af02c42c](https://github.com/ThePlenkov/adt-cli/commit/af02c42c))
- **openspec:** add-abapify-pilot spec — proposal, design, specs, tasks ([0535f601](https://github.com/ThePlenkov/adt-cli/commit/0535f601))
- **openspec:** add arc-1-feature-parity change proposal with SDD artifacts ([c4f15ab1](https://github.com/ThePlenkov/adt-cli/commit/c4f15ab1))
- **p2:** include p2-cli in CI publish pipeline ([ba7e32dc](https://github.com/ThePlenkov/adt-cli/commit/ba7e32dc))
- **p2:** bootstrap npm publish metadata and trusted publishing ([dd9304e5](https://github.com/ThePlenkov/adt-cli/commit/dd9304e5))
- **parity:** 15 new MCP tools + CLI↔MCP e2e test harness ([60236217](https://github.com/ThePlenkov/adt-cli/commit/60236217))
- **plugin:** FormatPlugin API foundation — E05 ([dbcf8fb1](https://github.com/ThePlenkov/adt-cli/commit/dbcf8fb1))
- **rap:** BDEF (Behavior Definition) CRUD — E10 ([dd02c106](https://github.com/ThePlenkov/adt-cli/commit/dd02c106))
- **rap:** SRVD (Service Definition) CRUD — E11 ([bf35ad21](https://github.com/ThePlenkov/adt-cli/commit/bf35ad21))
- **rap:** SRVB (Service Binding) CRUD + publish/unpublish — E12 ([55c9b7e5](https://github.com/ThePlenkov/adt-cli/commit/55c9b7e5))
- **real-e2e:** TRL backfill sweep + WB where-used 2-step POST fix ([d64bd853](https://github.com/ThePlenkov/adt-cli/commit/d64bd853))
- **release:** setup Nx Release publishing with GitHub CI ([0243482f](https://github.com/ThePlenkov/adt-cli/commit/0243482f))
- **release:** independent per-package versioning + auto-release on main ([ccbc2a4a](https://github.com/ThePlenkov/adt-cli/commit/ccbc2a4a))
- **rfc:** SOAP-over-HTTP RFC transport + adt rfc command — E13 ([a7c491bd](https://github.com/ThePlenkov/adt-cli/commit/a7c491bd))
- **source-history:** add bounded ADT source history support ([04ecb578](https://github.com/ThePlenkov/adt-cli/commit/04ecb578))
- **strust:** STRUST PSE/cert CLI + MCP — E04 ([c2bc6699](https://github.com/ThePlenkov/adt-cli/commit/c2bc6699))
- **tools:** nx-npm-access plugin — pre-release readiness check per package ([6d629a62](https://github.com/ThePlenkov/adt-cli/commit/6d629a62))
- **ts-xsd:** add batch codegen with config file support and CLI improvements ([f5aea76b](https://github.com/ThePlenkov/adt-cli/commit/f5aea76b))
- **ts-xsd:** add XSD inheritance support with complexContent/extension parsing ([5cceaf74](https://github.com/ThePlenkov/adt-cli/commit/5cceaf74))
- **ts-xsd:** add automatic schema discovery and resolution capabilities ([430c65a7](https://github.com/ThePlenkov/adt-cli/commit/430c65a7))
- **ts-xsd-core:** add XML namespace support and module exports ([90d18d24](https://github.com/ThePlenkov/adt-cli/commit/90d18d24))
- **wb:** workbench CLI + real-e2e uncovers MCP endpoint bugs — E15 ([e7022111](https://github.com/ThePlenkov/adt-cli/commit/e7022111))

### 🩹 Fixes

- update @abapify/adt-client dependency to use standard version specifier ([0346080b](https://github.com/ThePlenkov/adt-cli/commit/0346080b))
- format tsconfig.base.json to resolve CI formatting check ([9575bb46](https://github.com/ThePlenkov/adt-cli/commit/9575bb46))
- remove unnecessary nx-cloud record command from CI workflow ([ac7f9b14](https://github.com/ThePlenkov/adt-cli/commit/ac7f9b14))
- format project.json files to resolve CI format check with NX environment variables ([3ade85a6](https://github.com/ThePlenkov/adt-cli/commit/3ade85a6))
- resolve CI pipeline failures ([2a239e2a](https://github.com/ThePlenkov/adt-cli/commit/2a239e2a))
- mark optional dependencies as devOptional in package-lock.json ([d5243923](https://github.com/ThePlenkov/adt-cli/commit/d5243923))
- improve browser opening in OAuth flow with BROWSER env var support ([2a9aeff8](https://github.com/ThePlenkov/adt-cli/commit/2a9aeff8))
- use Object.prototype.hasOwnProperty.call and remove tsdown dependency ([6b65f144](https://github.com/ThePlenkov/adt-cli/commit/6b65f144))
- resolve circular dependency by making root abapify build a no-op ([1e216dbc](https://github.com/ThePlenkov/adt-cli/commit/1e216dbc))
- resolve all ESLint errors causing CI pipeline failures ([7c6e5128](https://github.com/ThePlenkov/adt-cli/commit/7c6e5128))
- allow adt-puppeteer test to pass with no test files ([7d82f621](https://github.com/ThePlenkov/adt-cli/commit/7d82f621))
- resolve typecheck failures across workspace ([e6d46651](https://github.com/ThePlenkov/adt-cli/commit/e6d46651))
- separate release and publish pipelines; mark adt-fixtures as private ([4f71d1e3](https://github.com/ThePlenkov/adt-cli/commit/4f71d1e3))
- add configVersion to bun.lock ([74bd0783](https://github.com/ThePlenkov/adt-cli/commit/74bd0783))
- remove redundant test dependency from nx-release-publish ([4811b8c0](https://github.com/ThePlenkov/adt-cli/commit/4811b8c0))
- update tsdown configuration to use deps for bundling options ([21dd7bc6](https://github.com/ThePlenkov/adt-cli/commit/21dd7bc6))
- update nxCloudId and rename nx-release-publish target ([5dafc7b4](https://github.com/ThePlenkov/adt-cli/commit/5dafc7b4))
- remove unnecessary type assertion from tsdown configuration ([b7777f73](https://github.com/ThePlenkov/adt-cli/commit/b7777f73))
- remove unused UserConfig import from tsdown configuration ([2136df2c](https://github.com/ThePlenkov/adt-cli/commit/2136df2c))
- restrict Docker image builds to releases only ([3ba12211](https://github.com/ThePlenkov/adt-cli/commit/3ba12211))
- update nxCloudId and ensure nx-cloud fix-ci runs always ([2680ef99](https://github.com/ThePlenkov/adt-cli/commit/2680ef99))
- use github.ref_name as fallback in Resolve ref step ([91da9221](https://github.com/ThePlenkov/adt-cli/commit/91da9221))
- simplify ref resolution and update version input descriptions ([d35a47d3](https://github.com/ThePlenkov/adt-cli/commit/d35a47d3))
- remove version input from workflow_dispatch - use built-in branch/tag selector ([c67374ed](https://github.com/ThePlenkov/adt-cli/commit/c67374ed))
- remove scope restriction in publish-gpr workflow so unscoped packages go to GitHub Packages ([5515710d](https://github.com/ThePlenkov/adt-cli/commit/5515710d))
- correct @abapify/speci/client doc reference to use /rest subpath ([7b4a368c](https://github.com/ThePlenkov/adt-cli/commit/7b4a368c))
- address all Qodo review comments from today's PRs (#44-#49) ([#44](https://github.com/ThePlenkov/adt-cli/issues/44), [#49](https://github.com/ThePlenkov/adt-cli/issues/49))
- add missing tsdown.config.ts to Docker build context ([83c12097](https://github.com/ThePlenkov/adt-cli/commit/83c12097))
- add tsdown.config.ts to Dockerfile COPY command to fix Docker build ([63b0a0ae](https://github.com/ThePlenkov/adt-cli/commit/63b0a0ae))
- exclude root abapify project from Docker build ([c35839a3](https://github.com/ThePlenkov/adt-cli/commit/c35839a3))
- add build step before publish to include dist/ in packages ([0da4effd](https://github.com/ThePlenkov/adt-cli/commit/0da4effd))
- remove build target from root abapify project.json ([93c93f0f](https://github.com/ThePlenkov/adt-cli/commit/93c93f0f))
- exclude workspace root tsdown.config.ts from nx-tsdown plugin ([dc3ce32c](https://github.com/ThePlenkov/adt-cli/commit/dc3ce32c))
- add missing zod dependency to adt-schemas and ts-xsd, bump to 0.1.9 ([c85f3a8c](https://github.com/ThePlenkov/adt-cli/commit/c85f3a8c))
- add missing ts-morph and adk deps, bump to 0.1.10 ([ed143378](https://github.com/ThePlenkov/adt-cli/commit/ed143378))
- correct husky hook path in git-commit skill (core.hooksPath = .husky/_) ([1c299474](https://github.com/ThePlenkov/adt-cli/commit/1c299474))
- remove adt-client↔adk circular dep; add nx-ci pre-commit skill ([4a1a80b8](https://github.com/ThePlenkov/adt-cli/commit/4a1a80b8))
- checkout PR head in CI to avoid 3-way merge re-introducing circular dep ([8a9cfe0c](https://github.com/ThePlenkov/adt-cli/commit/8a9cfe0c))
- remove @abapify/adk from adt-client deps (circular dep, re-added by merge commit) ([4e528ca9](https://github.com/ThePlenkov/adt-cli/commit/4e528ca9))
- run lint/test/build in pre-commit hook (same as CI) ([1772e26e](https://github.com/ThePlenkov/adt-cli/commit/1772e26e))
- remove @abapify/adk from adt-client deps (circular dep, re-added by merge commit) ([685654e6](https://github.com/ThePlenkov/adt-cli/commit/685654e6))
- checkout PR head in CI to avoid 3-way merge re-introducing circular dep ([fbd4ed5c](https://github.com/ThePlenkov/adt-cli/commit/fbd4ed5c))
- exclude workspace root tsdown.config.ts from nx-tsdown plugin ([60705c2f](https://github.com/ThePlenkov/adt-cli/commit/60705c2f))
- add adt bin symlinks in Docker image ([28b8dca5](https://github.com/ThePlenkov/adt-cli/commit/28b8dca5))
- Docker image - fix adt bin symlink paths and CMD ([b501b8ef](https://github.com/ThePlenkov/adt-cli/commit/b501b8ef))
- update devcontainer features configuration ([83a30d6c](https://github.com/ThePlenkov/adt-cli/commit/83a30d6c))
- update base image to latest TypeScript Node version ([f258261b](https://github.com/ThePlenkov/adt-cli/commit/f258261b))
- query action_required status in approve-workflows.sh hook script ([0326717d](https://github.com/ThePlenkov/adt-cli/commit/0326717d))
- add copilot/** push trigger to ci.yml and improve hook to check both approval statuses ([4252fdb5](https://github.com/ThePlenkov/adt-cli/commit/4252fdb5))
- add auto-approve workflow for Copilot CI runs and improve hook coverage ([4516544e](https://github.com/ThePlenkov/adt-cli/commit/4516544e))
- use schedule trigger in auto-approve-copilot-ci.yml to break approval deadlock ([a369c870](https://github.com/ThePlenkov/adt-cli/commit/a369c870))
- add copilot/** push trigger to ci.yml so CI runs without approval ([820aa85a](https://github.com/ThePlenkov/adt-cli/commit/820aa85a))
- retry workflow approval after report_progress (push) tool call ([56dd6961](https://github.com/ThePlenkov/adt-cli/commit/56dd6961))
- test-hooks.sh approve-workflows tests failing in CI (detached HEAD + PATH bug) ([377c033c](https://github.com/ThePlenkov/adt-cli/commit/377c033c))
- readServiceKey only accepts file paths; clear error when raw JSON passed ([cdbd7c1a](https://github.com/ThePlenkov/adt-cli/commit/cdbd7c1a))
- --service-key must point to a file path, not raw JSON ([e37f744c](https://github.com/ThePlenkov/adt-cli/commit/e37f744c))
- remove inlinedDependencies and alwaysBundle from adt-cli tsdown config ([b1fc0b19](https://github.com/ThePlenkov/adt-cli/commit/b1fc0b19))
- restore package-lock.json tracking, switch CI to npm ci to fix eslint external dep resolution ([a132ecb2](https://github.com/ThePlenkov/adt-cli/commit/a132ecb2))
- release workflow always checks out and commits to main branch ([d6a78c5e](https://github.com/ThePlenkov/adt-cli/commit/d6a78c5e))
- remove package-lock.json and switch nx to use bun as package manager ([15266063](https://github.com/ThePlenkov/adt-cli/commit/15266063))
- restore package-lock.json, revert packageManager to npm, add legacy-peer-deps ([52b232ba](https://github.com/ThePlenkov/adt-cli/commit/52b232ba))
- correct .gitignore corruption and add FUGR fromAbapGit comment ([fee168a5](https://github.com/ThePlenkov/adt-cli/commit/fee168a5))
- update fast-xml-parser dependency to version 5.5.3 ([826f681b](https://github.com/ThePlenkov/adt-cli/commit/826f681b))
- preserve targetNamespace xmlns in stripUnusedNamespaces + null guard in config-loader ([32e465be](https://github.com/ThePlenkov/adt-cli/commit/32e465be))
- address all SonarQube findings for PR #81 ([#81](https://github.com/ThePlenkov/adt-cli/issues/81))
- exclude generated schema files from SonarQube analysis to fix quality gate ([9f125b18](https://github.com/ThePlenkov/adt-cli/commit/9f125b18))
- add SonarCloud organization and project key to sonar-project.properties ([91c62493](https://github.com/ThePlenkov/adt-cli/commit/91c62493))
- resolve SonarCloud quality gate failures ([3c21ac0b](https://github.com/ThePlenkov/adt-cli/commit/3c21ac0b))
- address remaining SonarQube findings - complexity, duplication, and code quality ([d25f4a9d](https://github.com/ThePlenkov/adt-cli/commit/d25f4a9d))
- update sonar-project.properties with exclusions and project key ([cd884e4e](https://github.com/ThePlenkov/adt-cli/commit/cd884e4e))
- use [^<]+ in XML tag regexes to require non-empty content ([84cb7eb7](https://github.com/ThePlenkov/adt-cli/commit/84cb7eb7))
- simplify sonar exclusions to **/generated/** ([213a05e8](https://github.com/ThePlenkov/adt-cli/commit/213a05e8))
- simplify sonar exclusions to **/generated/** ([76544217](https://github.com/ThePlenkov/adt-cli/commit/76544217))
- remove trailing blank lines from sonar-project.properties ([30c90586](https://github.com/ThePlenkov/adt-cli/commit/30c90586))
- run nx format:write to fix formatting on OpenSpec files ([12e3403c](https://github.com/ThePlenkov/adt-cli/commit/12e3403c))
- resolve merge conflict and fix SonarQube duplication findings ([c5168250](https://github.com/ThePlenkov/adt-cli/commit/c5168250))
- resolve SonarQube quality gate failures (security hotspot + duplication) ([8de6152a](https://github.com/ThePlenkov/adt-cli/commit/8de6152a))
- address Copilot and Devin review findings ([c897a350](https://github.com/ThePlenkov/adt-cli/commit/c897a350))
- apply CodeRabbit auto-fixes ([1edf95e1](https://github.com/ThePlenkov/adt-cli/commit/1edf95e1))
- add comment explaining DEVC case-preservation in URI resolution ([69040226](https://github.com/ThePlenkov/adt-cli/commit/69040226))
- replace manual XML building and fast-xml-parser with schema-based contracts ([1abd7d99](https://github.com/ThePlenkov/adt-cli/commit/1abd7d99))
- address all PR #99 review findings ([#99](https://github.com/ThePlenkov/adt-cli/issues/99))
- resolve all pre-existing typecheck + test failures — QC1 ([c1970023](https://github.com/ThePlenkov/adt-cli/commit/c1970023))
- drop CDATA branch from TAG_RE in adt-rfc — CodeQL final ([4f86b2c2](https://github.com/ThePlenkov/adt-cli/commit/4f86b2c2))
- replace TAG_RE loop with split-based tokenizer — CodeQL final ([8406863f](https://github.com/ThePlenkov/adt-cli/commit/8406863f))
- apply cross-platform scanning and runtime configurability updates ([83ddeddf](https://github.com/ThePlenkov/adt-cli/commit/83ddeddf))
- address validation feedback for quote stripping and adt binary path ([656f0396](https://github.com/ThePlenkov/adt-cli/commit/656f0396))
- harden cross-platform resolver traversal and adt command execution ([3608bb4c](https://github.com/ThePlenkov/adt-cli/commit/3608bb4c))
- apply CodeRabbit auto-fixes ([2e31de89](https://github.com/ThePlenkov/adt-cli/commit/2e31de89))
- apply CodeRabbit auto-fixes ([ede8cc43](https://github.com/ThePlenkov/adt-cli/commit/ede8cc43))
- address PR review — regex security, method detection, BTP 404, lint gate, specs ([b72567f3](https://github.com/ThePlenkov/adt-cli/commit/b72567f3))
- reduce duplication, remove useless conditional, harden JSONC parser ([90efa96b](https://github.com/ThePlenkov/adt-cli/commit/90efa96b))
- guard starts[0] with nullish coalescing for SonarCloud reliability ([a5e8bffc](https://github.com/ThePlenkov/adt-cli/commit/a5e8bffc))
- use localeCompare in sort for SonarCloud S2871 reliability ([cfafb4bf](https://github.com/ThePlenkov/adt-cli/commit/cfafb4bf))
- prefer-const lint error in cts tr objects command ([a42ae780](https://github.com/ThePlenkov/adt-cli/commit/a42ae780))
- apply prettier formatting to service.ts ([7e7db742](https://github.com/ThePlenkov/adt-cli/commit/7e7db742))
- optimize findObjectFiles index, restore transportNumber compat, dedup ImportContext ([b4fa93e2](https://github.com/ThePlenkov/adt-cli/commit/b4fa93e2))
- resolve SonarCloud reliability and duplication findings ([043824fd](https://github.com/ThePlenkov/adt-cli/commit/043824fd))
- use const variable for transportNumbers[0] to avoid non-null assertions ([3e29e76e](https://github.com/ThePlenkov/adt-cli/commit/3e29e76e))
- ensure p2-cli dist/ is built before npm publish ([9a4f59b1](https://github.com/ThePlenkov/adt-cli/commit/9a4f59b1))
- address CodeRabbit review feedback ([a9676264](https://github.com/ThePlenkov/adt-cli/commit/a9676264))
- address all review feedback - round 2 ([bbef42f2](https://github.com/ThePlenkov/adt-cli/commit/bbef42f2))
- address CI feedback - error handling, fetch timeout, server crash risk ([0f2bb0c5](https://github.com/ThePlenkov/adt-cli/commit/0f2bb0c5))
- use bunx instead of npx in auth hint ([89fc796b](https://github.com/ThePlenkov/adt-cli/commit/89fc796b))
- address 3 blocking issues in ADT proxy rework ([c259a4e8](https://github.com/ThePlenkov/adt-cli/commit/c259a4e8))
- address CI review feedback - security, reliability, and code quality ([4d540802](https://github.com/ThePlenkov/adt-cli/commit/4d540802))
- address CI failures - remove dynamic RegExp, fix lint errors, add NX Cloud fallback ([66837675](https://github.com/ThePlenkov/adt-cli/commit/66837675))
- review thread fixes (broker, session, source-history, docs, deps) ([3d20361a](https://github.com/ThePlenkov/adt-cli/commit/3d20361a))
- verify CTS lifecycle and task deltas ([cbe83c5b](https://github.com/ThePlenkov/adt-cli/commit/cbe83c5b))
- verify CTS lifecycle, task creation, and lock correlation ([#151](https://github.com/ThePlenkov/adt-cli/pull/151))
- CTS lifecycle follow-ups — lock correlation, release details, flow scope ([#157](https://github.com/ThePlenkov/adt-cli/pull/157))
- resolve R3TR function modules via function groups ([#187](https://github.com/ThePlenkov/adt-cli/pull/187))
- leftover review nits from PRs #183, #186, #209 ([#253](https://github.com/ThePlenkov/adt-cli/pull/253), [#271](https://github.com/ThePlenkov/adt-cli/pull/271), [#183](https://github.com/ThePlenkov/adt-cli/issues/183), [#186](https://github.com/ThePlenkov/adt-cli/issues/186), [#209](https://github.com/ThePlenkov/adt-cli/issues/209))
- keep import completeness diagnostics nonblocking ([#298](https://github.com/ThePlenkov/adt-cli/pull/298))
- harden config parsing, typed serialization contracts and MCP tool schemas ([#304](https://github.com/ThePlenkov/adt-cli/pull/304))
- remove redundant optional specifiers and use TypeError (S4782, S7786) ([07a0a42b](https://github.com/ThePlenkov/adt-cli/commit/07a0a42b))
- **abapgit:** FULL folder logic now includes root package as directory ([f522bb2b](https://github.com/ThePlenkov/adt-cli/commit/f522bb2b))
- **abapgit:** align dd02v and dd03p field order ([4bca5b1e](https://github.com/ThePlenkov/adt-cli/commit/4bca5b1e))
- **abapgit:** preserve include type during deserialization ([4658f98d](https://github.com/ThePlenkov/adt-cli/commit/4658f98d))
- **abapgit:** preserve program subtype metadata and source handoff ([b5394ab9](https://github.com/ThePlenkov/adt-cli/commit/b5394ab9))
- **acds:** keep FROM-region starters out of the bare source alias ([37d750f1](https://github.com/ThePlenkov/adt-cli/commit/37d750f1))
- **acds:** enforce the ON condition in the join grammar ([d6df7b93](https://github.com/ThePlenkov/adt-cli/commit/d6df7b93))
- **acds:** recognize keywords case-insensitively ([a8c09d3e](https://github.com/ThePlenkov/adt-cli/commit/a8c09d3e))
- **acds:** make the join syntax flavour-independent and support FULL OUTER JOIN ([557f7c5b](https://github.com/ThePlenkov/adt-cli/commit/557f7c5b))
- **acds:** address review findings — parser robustness, docs, tests ([d8a3e2fd](https://github.com/ThePlenkov/adt-cli/commit/d8a3e2fd))
- **acds:** round-2 review findings — coverage metadata, walker, docs ([6e38c7e5](https://github.com/ThePlenkov/adt-cli/commit/6e38c7e5))
- **acds:** order Redefinition before Redefine in token list ([dc1e5278](https://github.com/ThePlenkov/adt-cli/commit/dc1e5278))
- **acds:** support named-argument syntax and namespace-qualified names ([#264](https://github.com/ThePlenkov/adt-cli/pull/264))
- **acds:** allow empty parameter list for table function sources in data sources ([02a5508a](https://github.com/ThePlenkov/adt-cli/commit/02a5508a))
- **acds:** allow empty parameter list for table function sources in data sources ([#294](https://github.com/ThePlenkov/adt-cli/pull/294))
- **aclass:** proper regex metacharacter escaping in `kw()` helper ([8757714e](https://github.com/ThePlenkov/adt-cli/commit/8757714e))
- **aclass:** qualified method names + keyword method names ([c2bf3a84](https://github.com/ThePlenkov/adt-cli/commit/c2bf3a84))
- **aclass+openai-codegen:** address PR #111 review findings ([#111](https://github.com/ThePlenkov/adt-cli/issues/111))
- **adk:** resolve TS4041 errors by disabling code splitting in adt-contracts ([3cefdf7c](https://github.com/ThePlenkov/adt-cli/commit/3cefdf7c))
- **adk:** resolve TS4041 errors by annotating crudContract return types as any ([d56e714a](https://github.com/ThePlenkov/adt-cli/commit/d56e714a))
- **adk:** robust upsert fallback for DDIC objects (405/422 handling) ([64c52c03](https://github.com/ThePlenkov/adt-cli/commit/64c52c03))
- **adk:** address PR review findings - reset _unchanged, deduplicate fallback, case-insensitive error matching ([daf26cf4](https://github.com/ThePlenkov/adt-cli/commit/daf26cf4))
- **adk:** remove false from isEmpty in checkMetadataUnchanged ([47f5fa46](https://github.com/ThePlenkov/adt-cli/commit/47f5fa46))
- **adk:** exclude SUSK CTS entries from source manifests ([#164](https://github.com/ThePlenkov/adt-cli/pull/164))
- **adk:** skip unmaterializable transport objects ([#168](https://github.com/ThePlenkov/adt-cli/pull/168))
- **adk:** release transport task via newreleasejobs, verify by reload ([#173](https://github.com/ThePlenkov/adt-cli/pull/173))
- **adk:** resolve LIMU function module owners ([#188](https://github.com/ThePlenkov/adt-cli/pull/188))
- **adk:** keep FUGR function module sources distinct ([#191](https://github.com/ThePlenkov/adt-cli/pull/191))
- **adk:** align object constructors with registry signature ([918d040b](https://github.com/ThePlenkov/adt-cli/commit/918d040b))
- **adk:** recognize exact subtypes and normalize transport fallback ([2ed86430](https://github.com/ThePlenkov/adt-cli/commit/2ed86430))
- **adk:** resolve CTS class leaves to CLAS owners ([#277](https://github.com/ThePlenkov/adt-cli/pull/277))
- **adk:** classify SNOTE CINS instructions and resolve CPRO class-section leaves ([#352](https://github.com/ThePlenkov/adt-cli/pull/352))
- **adt:** declare bundled workspace deps so nx orders adt:build ([1fe54357](https://github.com/ThePlenkov/adt-cli/commit/1fe54357))
- **adt-atc:** add .abap extension to GitLab code quality paths ([fddfaa65](https://github.com/ThePlenkov/adt-cli/commit/fddfaa65))
- **adt-atc:** add .abap extension to GitLab code quality paths ([006ffecd](https://github.com/ThePlenkov/adt-cli/commit/006ffecd))
- **adt-auth:** add missing project.json for Nx configuration ([dcc883d1](https://github.com/ThePlenkov/adt-cli/commit/dcc883d1))
- **adt-auth:** reference tsconfig.lib.json in tsdown config ([4992dd14](https://github.com/ThePlenkov/adt-cli/commit/4992dd14))
- **adt-auth:** add ./basic export alias ([5215050a](https://github.com/ThePlenkov/adt-cli/commit/5215050a))
- **adt-auth:** use explicit entry mapping for ./basic export ([cb736aa5](https://github.com/ThePlenkov/adt-cli/commit/cb736aa5))
- **adt-auth:** export basic plugin as default export ([f47245e6](https://github.com/ThePlenkov/adt-cli/commit/f47245e6))
- **adt-auth:** update login to use default export pattern ([cec2d244](https://github.com/ThePlenkov/adt-cli/commit/cec2d244))
- **adt-auth:** export basic plugin from main index ([2cba946e](https://github.com/ThePlenkov/adt-cli/commit/2cba946e))
- **adt-auth:** add basic export alias in tsdown config ([b6f4aa62](https://github.com/ThePlenkov/adt-cli/commit/b6f4aa62))
- **adt-auth:** add missing project.json for Nx configuration ([93faedd5](https://github.com/ThePlenkov/adt-cli/commit/93faedd5))
- **adt-auth:** reference tsconfig.lib.json in tsdown config ([bc6645d4](https://github.com/ThePlenkov/adt-cli/commit/bc6645d4))
- **adt-auth:** add ./basic export alias ([80d1443e](https://github.com/ThePlenkov/adt-cli/commit/80d1443e))
- **adt-auth:** use explicit entry mapping for ./basic export ([b75d49a6](https://github.com/ThePlenkov/adt-cli/commit/b75d49a6))
- **adt-auth:** export basic plugin as default export ([8b5363e0](https://github.com/ThePlenkov/adt-cli/commit/8b5363e0))
- **adt-auth:** update login to use default export pattern ([bdf6099d](https://github.com/ThePlenkov/adt-cli/commit/bdf6099d))
- **adt-auth:** export basic plugin from main index ([860ebbb6](https://github.com/ThePlenkov/adt-cli/commit/860ebbb6))
- **adt-auth:** add basic export alias in tsdown config ([35193bbc](https://github.com/ThePlenkov/adt-cli/commit/35193bbc))
- **adt-cli:** use correct plugin path for basic auth ([0a2dfbc4](https://github.com/ThePlenkov/adt-cli/commit/0a2dfbc4))
- **adt-cli:** parse --config option from argv before parseAsync ([4645773b](https://github.com/ThePlenkov/adt-cli/commit/4645773b))
- **adt-cli:** use correct plugin path for basic auth ([01febfda](https://github.com/ThePlenkov/adt-cli/commit/01febfda))
- **adt-cli:** parse --config option from argv before parseAsync ([f55a8857](https://github.com/ThePlenkov/adt-cli/commit/f55a8857))
- **adt-cli:** harden user command JSON mode and input validation ([6ade4f53](https://github.com/ThePlenkov/adt-cli/commit/6ade4f53))
- **adt-cli:** normalize source-history metadata output to avoid leaking source URIs ([4fbe2a8f](https://github.com/ThePlenkov/adt-cli/commit/4fbe2a8f))
- **adt-cli:** report real package version; fix typecheck regressions ([0dd4b802](https://github.com/ThePlenkov/adt-cli/commit/0dd4b802))
- **adt-cli:** verify basic-auth credentials against SAP before login succeeds ([#289](https://github.com/ThePlenkov/adt-cli/pull/289), [#295](https://github.com/ThePlenkov/adt-cli/pull/295))
- **adt-cli:** silence intentional insecure-TLS opt-in, split verifyBasicAuth ([#296](https://github.com/ThePlenkov/adt-cli/pull/296))
- **adt-diff:** use .acds extension for CDS DDL diff display ([2b9289fb](https://github.com/ThePlenkov/adt-cli/commit/2b9289fb))
- **adt-diff:** align zage_tabl test expectations with fixture ([63448d2d](https://github.com/ThePlenkov/adt-cli/commit/63448d2d))
- **adt-export:** convert static import of lazy-loaded library to dynamic import ([5c9f3396](https://github.com/ThePlenkov/adt-cli/commit/5c9f3396))
- **adt-flow:** ignore CTS release metadata during checkout ([#156](https://github.com/ThePlenkov/adt-cli/pull/156))
- **adt-flow:** protect preserved omitted objects ([8e253d15](https://github.com/ThePlenkov/adt-cli/commit/8e253d15))
- **adt-flow:** expose diverged ownership path ([d6f54833](https://github.com/ThePlenkov/adt-cli/commit/d6f54833))
- **adt-flow:** harden readRegularText against parent-dir symlink TOCTOU ([#322](https://github.com/ThePlenkov/adt-cli/pull/322))
- **adt-flow:** preserve unselected class components without source anchor ([#323](https://github.com/ThePlenkov/adt-cli/pull/323))
- **adt-flow:** serialize checkout/index with cross-process workspace lock ([#324](https://github.com/ThePlenkov/adt-cli/pull/324))
- **adt-lint:** replace lazy '.*?' with '[^']*' in token regex to fix S5852/polynomial-redos ([23140530](https://github.com/ThePlenkov/adt-cli/commit/23140530))
- **adt-mcp:** resolve SonarQube E Security Rating findings ([254cb687](https://github.com/ThePlenkov/adt-cli/commit/254cb687))
- **adt-mcp:** resolve all SonarQube issues blocking PR #59 quality gate ([#59](https://github.com/ThePlenkov/adt-cli/issues/59))
- **adt-mcp:** resolve remaining SonarQube issues ([3ade07d0](https://github.com/ThePlenkov/adt-cli/commit/3ade07d0))
- **adt-mcp:** apply PR review feedback - not-yet-impl errors, semver deps, mock, docs ([b689cad4](https://github.com/ThePlenkov/adt-cli/commit/b689cad4))
- **adt-mcp:** extract resolveObjectUri helper to eliminate code duplication ([0ee8d1a9](https://github.com/ThePlenkov/adt-cli/commit/0ee8d1a9))
- **adt-mcp:** also deduplicate activate-object loop; improve QuickSearchClient JSDoc ([8601e480](https://github.com/ThePlenkov/adt-cli/commit/8601e480))
- **adt-mcp:** fix missing closing parenthesis in get-table-contents schema description ([010d63b8](https://github.com/ThePlenkov/adt-cli/commit/010d63b8))
- **adt-mcp:** format all new tool files + fix mock server route ordering ([f9c26cec](https://github.com/ThePlenkov/adt-cli/commit/f9c26cec))
- **adt-mcp:** resolve SonarQube quality gate failures ([1c29ef55](https://github.com/ThePlenkov/adt-cli/commit/1c29ef55))
- **adt-mcp:** address SonarCloud blockers in PR 101 ([eaaf73a1](https://github.com/ThePlenkov/adt-cli/commit/eaaf73a1))
- **adt-mcp:** address post-merge PR 101 review findings ([a370ffa5](https://github.com/ThePlenkov/adt-cli/commit/a370ffa5))
- **adt-mcp:** lint — preserve cause + no-fallthrough on --help case ([e74d30b0](https://github.com/ThePlenkov/adt-cli/commit/e74d30b0))
- **adt-mcp:** ReDoS in Bearer extraction (CodeQL finding) ([8487f89d](https://github.com/ThePlenkov/adt-cli/commit/8487f89d))
- **adt-mcp:** SonarCloud quality gate — reduce duplication + fix dead-code CORS branch + Dockerfile hardening ([07d76294](https://github.com/ThePlenkov/adt-cli/commit/07d76294))
- **adt-mcp:** address Devin Review findings ([8e204700](https://github.com/ThePlenkov/adt-cli/commit/8e204700))
- **adt-mcp:** address review findings (Devin + Copilot) ([6fe50d9f](https://github.com/ThePlenkov/adt-cli/commit/6fe50d9f))
- **adt-mcp:** merge tool-call credentials in resolveClient path 3 (Devin finding) ([1f980a54](https://github.com/ThePlenkov/adt-cli/commit/1f980a54))
- **adt-mcp:** don't leak locks on force=true rollback failure + docs match code (Devin findings) ([d7964a04](https://github.com/ThePlenkov/adt-cli/commit/d7964a04))
- **adt-mcp:** reject systemId mismatch in sap_connect + async resolveClient (Devin findings) ([494ab50e](https://github.com/ThePlenkov/adt-cli/commit/494ab50e))
- **adt-mcp:** freeze destination access ([8f3fc5c5](https://github.com/ThePlenkov/adt-cli/commit/8f3fc5c5))
- **adt-mcp:** include objectUri in find_references and accept uri in get_source_version ([a1cdc51b](https://github.com/ThePlenkov/adt-cli/commit/a1cdc51b))
- **adt-mcp:** require HTTPS for HTTP transport ([#207](https://github.com/ThePlenkov/adt-cli/pull/207))
- **adt-mcp:** move private adt-fixtures to devDependencies ([cbbffadf](https://github.com/ThePlenkov/adt-cli/commit/cbbffadf))
- **adt-mcp:** drop src/lib/mock shims importing private adt-fixtures ([b4af1075](https://github.com/ThePlenkov/adt-cli/commit/b4af1075))
- **adt-mcp:** fail closed on unbounded scoped-read dispatch ([#222](https://github.com/ThePlenkov/adt-cli/pull/222))
- **adt-mcp:** align flow_checkout_tr options with CLI checkout parity ([#325](https://github.com/ThePlenkov/adt-cli/pull/325))
- **adt-mcp,adt-server,adt-server-client:** resolve ESLint errors and unsafe finally ([cfe1c434](https://github.com/ThePlenkov/adt-cli/commit/cfe1c434))
- **adt-pilot:** use https in test/example URLs to clear SonarCloud hotspots ([96f0daf3](https://github.com/ThePlenkov/adt-cli/commit/96f0daf3))
- **adt-pilot:** use extensionless internal imports per bundler-imports rule ([8e279f3d](https://github.com/ThePlenkov/adt-cli/commit/8e279f3d))
- **adt-pilot:** align declared deps with actual usage ([b57ad46e](https://github.com/ThePlenkov/adt-cli/commit/b57ad46e))
- **adt-pilot:** address review and lint findings ([dd351d57](https://github.com/ThePlenkov/adt-cli/commit/dd351d57))
- **adt-pilot:** remove unused @mastra/mcp dep; fix URL log sanitization and docs port/env issues ([ca10c0d4](https://github.com/ThePlenkov/adt-cli/commit/ca10c0d4))
- **adt-pilot:** lint failure, URL credential leak, doc port inconsistencies ([0181170a](https://github.com/ThePlenkov/adt-cli/commit/0181170a))
- **adt-pilot:** address PR #121 review — docs, types, workspace deps ([#121](https://github.com/ThePlenkov/adt-cli/issues/121))
- **adt-proxy:** add publishConfig.access for npm publishing ([#208](https://github.com/ThePlenkov/adt-cli/pull/208))
- **adt-schemas:** replace zod4-only .loose() with .catchall() ([9832c72e](https://github.com/ThePlenkov/adt-cli/commit/9832c72e))
- **adt-schemas:** qualify local elements in ATC custom XSDs + checkId docs ([#267](https://github.com/ThePlenkov/adt-cli/pull/267))
- **adt-server:** pass explicit authTagLength to aes-256-gcm decipher ([5186a0d4](https://github.com/ThePlenkov/adt-cli/commit/5186a0d4))
- **adt-server:** require capability secrets in startAdtServer, use test helper in server tests ([d491cfae](https://github.com/ThePlenkov/adt-cli/commit/d491cfae))
- **adt-server:** guard capability services behind rest/mcp, share secret assertion ([d43cc8a1](https://github.com/ThePlenkov/adt-cli/commit/d43cc8a1))
- **adt-server:** report broker outages from readiness ([#258](https://github.com/ThePlenkov/adt-cli/pull/258))
- **adt-server:** normalize transport function labels ([#363](https://github.com/ThePlenkov/adt-cli/pull/363))
- **adt-services:** negotiate ADT session media type during Basic auth ([#297](https://github.com/ThePlenkov/adt-cli/pull/297))
- **agents:** run Codex nx MCP via bunx to match monorepo convention ([ce398889](https://github.com/ThePlenkov/adt-cli/commit/ce398889))
- **asjson-parser:** migrate from @nx/rollup to tsdown, drop nx@21 dep ([796a3b95](https://github.com/ThePlenkov/adt-cli/commit/796a3b95))
- **asjson-parser:** add tsconfig: 'tsconfig.lib.json' to tsdown config to avoid references error ([c64128a8](https://github.com/ThePlenkov/adt-cli/commit/c64128a8))
- **atc:** extract method name from name= param in ATC location URI ([8bf0ef5a](https://github.com/ThePlenkov/adt-cli/commit/8bf0ef5a))
- **atc:** resolve file paths and convert line numbers in GitLab formatter ([1a70ab45](https://github.com/ThePlenkov/adt-cli/commit/1a70ab45))
- **atc:** resolve workspace packages from cwd for bundled CLI ([c6c31aa5](https://github.com/ThePlenkov/adt-cli/commit/c6c31aa5))
- **atc:** built-in abapgit resolver (no external dep needed) ([0c70b8ab](https://github.com/ThePlenkov/adt-cli/commit/0c70b8ab))
- **atc:** resolve abapGit paths from full ATC locations ([#194](https://github.com/ThePlenkov/adt-cli/pull/194))
- **aunit:** preserve coverage measurement links ([#175](https://github.com/ThePlenkov/adt-cli/pull/175))
- **aunit:** parse external coverage measurement URI ([#176](https://github.com/ThePlenkov/adt-cli/pull/176))
- **aunit:** send SAP coverage query bodies ([#179](https://github.com/ThePlenkov/adt-cli/pull/179))
- **aunit:** emit GitLab-resolvable JaCoCo paths ([#181](https://github.com/ThePlenkov/adt-cli/pull/181))
- **broker:** suppress Codacy SSRF false positive after UAA URL validation ([53a01945](https://github.com/ThePlenkov/adt-cli/commit/53a01945))
- **broker:** use nosemgrep to suppress validated UAA fetch finding ([73829783](https://github.com/ThePlenkov/adt-cli/commit/73829783))
- **broker:** use node:https for UAA token to avoid Codacy fetch SSRF false positive ([f30fabc8](https://github.com/ThePlenkov/adt-cli/commit/f30fabc8))
- **bun.lock:** update lockfile to match workspace package.json files ([76e953d3](https://github.com/ThePlenkov/adt-cli/commit/76e953d3))
- **cds-to-abapgit:** stop emitting LANGDEP, CLIDEP, POSITION from CDS source ([b33420df](https://github.com/ThePlenkov/adt-cli/commit/b33420df))
- **cds-to-abapgit:** correct DD03P field ordering to match SAP ([6eab7d21](https://github.com/ThePlenkov/adt-cli/commit/6eab7d21))
- **cds-to-abapgit:** detect CLIDEP for client-dependent tables ([ea619686](https://github.com/ThePlenkov/adt-cli/commit/ea619686))
- **ci:** remove --frozen-lockfile to allow bun to update stale lockfile ([05544be5](https://github.com/ThePlenkov/adt-cli/commit/05544be5))
- **ci:** fix format and lint errors to unblock CI pipeline ([74f4a1d9](https://github.com/ThePlenkov/adt-cli/commit/74f4a1d9))
- **ci:** address Qodo review comments on release workflows ([645ee885](https://github.com/ThePlenkov/adt-cli/commit/645ee885))
- **ci:** restore ci.yml (bun install), set nx.json cli.packageManager=npm to fix eslint dep resolution ([81e3383c](https://github.com/ThePlenkov/adt-cli/commit/81e3383c))
- **ci:** resolve CodeQL ReDoS + code-quality findings, fix main CI ([9670d6df](https://github.com/ThePlenkov/adt-cli/commit/9670d6df))
- **ci:** restore ADT coverage contract files swallowed by .gitignore ([35ecdd34](https://github.com/ThePlenkov/adt-cli/commit/35ecdd34))
- **ci:** adt-cli tests depend on adt-mcp:build (harness imports it) ([1a17352e](https://github.com/ThePlenkov/adt-cli/commit/1a17352e))
- **ci:** use bun run wrappers in website nx targets (docusaurus binary resolution) ([708b08fc](https://github.com/ThePlenkov/adt-cli/commit/708b08fc))
- **ci:** add website to workspaces + use bunx in scripts for binary resolution ([30b92908](https://github.com/ThePlenkov/adt-cli/commit/30b92908))
- **ci:** unblock v0.3.x release — npm scope override + Docker website workspace ([4c96e456](https://github.com/ThePlenkov/adt-cli/commit/4c96e456))
- **ci:** force npm as nx release publish driver (bun has no OIDC) ([f2ce8da3](https://github.com/ThePlenkov/adt-cli/commit/f2ce8da3))
- **ci:** set cli.packageManager=npm + bump npm for OIDC publishing ([#1](https://github.com/ThePlenkov/adt-cli/issues/1))
- **ci:** revert global nx.json cli.packageManager, keep job-local override ([80a24a82](https://github.com/ThePlenkov/adt-cli/commit/80a24a82))
- **ci:** clear setup-node .npmrc to enable OIDC trusted publishing ([21312bdf](https://github.com/ThePlenkov/adt-cli/commit/21312bdf))
- **ci:** nuke repo .npmrc entirely in publish job to unblock OIDC ([ccc46504](https://github.com/ThePlenkov/adt-cli/commit/ccc46504))
- **ci:** propagate id-token: write to publish job in release.yml ([6635fa25](https://github.com/ThePlenkov/adt-cli/commit/6635fa25))
- **ci:** disable Nx Cloud for publish job (org exceeded free plan) ([c449fddb](https://github.com/ThePlenkov/adt-cli/commit/c449fddb))
- **ci:** set NX_NO_CLOUD=true in release version step too ([56aab5a7](https://github.com/ThePlenkov/adt-cli/commit/56aab5a7))
- **ci:** trigger publish.yml on tag push, not via workflow_call ([1da2ca9f](https://github.com/ThePlenkov/adt-cli/commit/1da2ca9f))
- **ci:** chain release -> publish via workflow_dispatch (GITHUB_TOKEN push won't trigger) ([7eb18328](https://github.com/ThePlenkov/adt-cli/commit/7eb18328))
- **ci:** grant actions: write to release job so it can dispatch publish.yml ([d91f339a](https://github.com/ThePlenkov/adt-cli/commit/d91f339a))
- **ci:** prevent empty-tarball and mid-publish release failures ([3d11838b](https://github.com/ThePlenkov/adt-cli/commit/3d11838b))
- **ci:** refresh bun.lock inside the release commit ([09c9a14e](https://github.com/ThePlenkov/adt-cli/commit/09c9a14e))
- **ci:** bump bun to 1.4.2 across workflows ([9eb7fa65](https://github.com/ThePlenkov/adt-cli/commit/9eb7fa65))
- **ci:** keep stale manifests out of published packages ([6c711d2b](https://github.com/ThePlenkov/adt-cli/commit/6c711d2b))
- **cli:** honor lock correlation on source writes ([b2763ef7](https://github.com/ThePlenkov/adt-cli/commit/b2763ef7))
- **cli:** honor explicit config for plugins ([#163](https://github.com/ThePlenkov/adt-cli/pull/163))
- **cli:** keep payload stdout pipe-safe ([#165](https://github.com/ThePlenkov/adt-cli/pull/165))
- **cli:** expose safe fetch failure diagnostics ([#174](https://github.com/ThePlenkov/adt-cli/pull/174))
- **cli:** hide plugin error stacks ([583ee8ec](https://github.com/ThePlenkov/adt-cli/commit/583ee8ec))
- **cli:** sanitize typed plugin errors and gate messages behind codes ([f5479611](https://github.com/ThePlenkov/adt-cli/commit/f5479611))
- **cli:** use unicode escapes in error sanitizer patterns ([61cf7b7e](https://github.com/ThePlenkov/adt-cli/commit/61cf7b7e))
- **cli:** render safe flow diagnostics ([a60e7153](https://github.com/ThePlenkov/adt-cli/commit/a60e7153))
- **cli:** declare flow as a production dependency ([#278](https://github.com/ThePlenkov/adt-cli/pull/278))
- **cli:** parse YAML configuration as bounded data ([#302](https://github.com/ThePlenkov/adt-cli/pull/302))
- **cli:** remove unused parseDocument import (S1128) ([019e28f8](https://github.com/ThePlenkov/adt-cli/commit/019e28f8))
- **client:** support long-running SAP requests ([#177](https://github.com/ThePlenkov/adt-cli/pull/177))
- **client:** pair timeout agent with undici fetch ([#178](https://github.com/ThePlenkov/adt-cli/pull/178))
- **codacy:** suppress false-positive SSRF and object-injection findings ([05c807bc](https://github.com/ThePlenkov/adt-cli/commit/05c807bc))
- **codacy:** avoid object-injection and user-controlled URL findings ([9c3a249a](https://github.com/ThePlenkov/adt-cli/commit/9c3a249a))
- **codacy:** suppress SSRF false positive on validated ADT URL ([842c2341](https://github.com/ThePlenkov/adt-cli/commit/842c2341))
- **codacy:** use bare nosemgrep suppression for fetch URL ([fd406ad3](https://github.com/ThePlenkov/adt-cli/commit/fd406ad3))
- **codacy:** resolve open code-scanning alerts ([#167](https://github.com/ThePlenkov/adt-cli/pull/167))
- **coverage:** request SAP XML responses ([#180](https://github.com/ThePlenkov/adt-cli/pull/180))
- **cts:** harden task creation verification ([bb8d5862](https://github.com/ThePlenkov/adt-cli/commit/bb8d5862))
- **cts:** preserve task identity from SAP response ([6bd4d02d](https://github.com/ThePlenkov/adt-cli/commit/6bd4d02d))
- **cts:** prefer authoritative task number ([18266a60](https://github.com/ThePlenkov/adt-cli/commit/18266a60))
- **cts:** reconcile task and source lifecycle ([34469d91](https://github.com/ThePlenkov/adt-cli/commit/34469d91))
- **deps:** remove unused SAP/CDS dependencies pulling in better-sqlite3 ([cb117226](https://github.com/ThePlenkov/adt-cli/commit/cb117226))
- **deps:** remove unused SAP/CDS dependencies pulling in better-sqlite3 ([36fdbb28](https://github.com/ThePlenkov/adt-cli/commit/36fdbb28))
- **deps:** override vulnerable rollup and lodash-es ([2e490771](https://github.com/ThePlenkov/adt-cli/commit/2e490771))
- **deps:** keep security overrides semver-compatible ([a30df2df](https://github.com/ThePlenkov/adt-cli/commit/a30df2df))
- **deps:** upgrade chevrotain and mastra instead of overrides ([1bc31b61](https://github.com/ThePlenkov/adt-cli/commit/1bc31b61))
- **deps:** bump dependencies and remediate audit findings ([d15ce96e](https://github.com/ThePlenkov/adt-cli/commit/d15ce96e))
- **deps:** raise zod floor to ^4.6.7 in ts-xsd and adt-schemas (GHSA-mrhx-c7xc-m3w5) ([#280](https://github.com/ThePlenkov/adt-cli/pull/280))
- **docker:** disable nx daemon/TUI and reduce parallelism to fix exit code 130 ([3a285216](https://github.com/ThePlenkov/adt-cli/commit/3a285216))
- **docker:** explicit chmod a-w to satisfy SonarCloud docker:S6504 ([021ae47e](https://github.com/ThePlenkov/adt-cli/commit/021ae47e))
- **docker:** use root:root owner + 755/644 for COPY (Sonar S6504 compliant) ([09a33d29](https://github.com/ThePlenkov/adt-cli/commit/09a33d29))
- **flow:** skip unsupported transport objects ([#166](https://github.com/ThePlenkov/adt-cli/pull/166))
- **flow:** ignore unsupported manifest diagnostics ([#172](https://github.com/ThePlenkov/adt-cli/pull/172))
- **flow:** preserve index-only recovery invariants ([3d587744](https://github.com/ThePlenkov/adt-cli/commit/3d587744))
- **flow:** never reuse the active 00000 source version ([#240](https://github.com/ThePlenkov/adt-cli/pull/240))
- **flow:** materialize CTS class components and report checkout coverage ([#276](https://github.com/ThePlenkov/adt-cli/pull/276))
- **gcts:** remove redundant optional specifier (S4782) ([907af97e](https://github.com/ThePlenkov/adt-cli/commit/907af97e))
- **gcts:** keep DdlsLike fields optional (S4782) ([cd121216](https://github.com/ThePlenkov/adt-cli/commit/cd121216))
- **gcts:** remove unused lang in func handler (S1854) ([fea34898](https://github.com/ThePlenkov/adt-cli/commit/fea34898))
- **import:** support typed CDS and RAP imports ([#185](https://github.com/ThePlenkov/adt-cli/pull/185))
- **import:** preserve workbench subtypes and include serialization ([b0fd0106](https://github.com/ThePlenkov/adt-cli/commit/b0fd0106))
- **import:** acquire CTS class owners and preserve failed objects ([#279](https://github.com/ThePlenkov/adt-cli/pull/279))
- **lint:** fix 3 CI failures: ts-xsd lint, adt-cli lazy-load error, adt-contracts test header ([c5b8e50c](https://github.com/ThePlenkov/adt-cli/commit/c5b8e50c))
- **lint:** use const for defaultHeaders in proxy command ([8ebef5f4](https://github.com/ThePlenkov/adt-cli/commit/8ebef5f4))
- **lint:** ignore private adt-fixtures in dependency-checks ([42ff67f9](https://github.com/ThePlenkov/adt-cli/commit/42ff67f9))
- **mcp:** bind immutable sources to capabilities ([ad45ebc4](https://github.com/ThePlenkov/adt-cli/commit/ad45ebc4))
- **mcp:** redact raw flow failure causes ([060a3891](https://github.com/ThePlenkov/adt-cli/commit/060a3891))
- **mcp:** remove redundant optional specifier (S4782) ([#312](https://github.com/ThePlenkov/adt-cli/pull/312))
- **nx-deps-check:** anchor config/scripts/fixtures dev dirs to project root ([#326](https://github.com/ThePlenkov/adt-cli/pull/326))
- **nx-npm-trust:** don't fail when --fix successfully patched everything ([aae31b1a](https://github.com/ThePlenkov/adt-cli/commit/aae31b1a))
- **nx-npm-trust:** don't treat auto-fixable issues as lingering errors ([d22cded2](https://github.com/ThePlenkov/adt-cli/commit/d22cded2))
- **nx-npm-trust:** --prepare now speaks the right dialect of npm CLI ([93d0dd51](https://github.com/ThePlenkov/adt-cli/commit/93d0dd51))
- **nx-npm-trust:** don't pass scope registry override to `npm trust` ([2451e876](https://github.com/ThePlenkov/adt-cli/commit/2451e876))
- **nx-npm-trust:** handle npm 11 object-shaped pack --json output ([#133](https://github.com/ThePlenkov/adt-cli/pull/133))
- **openai-codegen:** emit ABAP_LANGUAGE_VERSION=5 + verify live deploy on TRL ([e851176c](https://github.com/ThePlenkov/adt-cli/commit/e851176c))
- **openai-codegen:** server prefix, client cleanup, configurable json class, default-is-success ordering ([6d63e9b5](https://github.com/ThePlenkov/adt-cli/commit/6d63e9b5))
- **openai-codegen:** drop unused destructured values in classifyVisit (S1854) ([#307](https://github.com/ThePlenkov/adt-cli/pull/307))
- **openai-codegen,abap-ast:** Steampunk activation fixes ([3944f12c](https://github.com/ThePlenkov/adt-cli/commit/3944f12c))
- **openai-codegen,abap-ast:** address PR #109 review feedback + CI ([#109](https://github.com/ThePlenkov/adt-cli/issues/109))
- **openai-codegen,abap-ast:** more PR #109 review fixes ([#109](https://github.com/ThePlenkov/adt-cli/issues/109))
- **openspec:** align archived specs with shipped behavior ([0f016a54](https://github.com/ThePlenkov/adt-cli/commit/0f016a54))
- **openspec:** second review pass — strict_sql blocking, context --json ([2b9f2c3d](https://github.com/ThePlenkov/adt-cli/commit/2b9f2c3d))
- **p2-cli:** restore missing JSDoc opener on filterJars (parse error) ([2f2d15fd](https://github.com/ThePlenkov/adt-cli/commit/2f2d15fd))
- **packages:** add repository/homepage/bugs to every published package ([85b29310](https://github.com/ThePlenkov/adt-cli/commit/85b29310))
- **pr-103:** address review comments — type safety, parity, harness, policy ([d5b14cd9](https://github.com/ThePlenkov/adt-cli/commit/d5b14cd9))
- **proxy:** skip set-cookie in forEach loop to prevent header flattening ([46a1ca47](https://github.com/ThePlenkov/adt-cli/commit/46a1ca47))
- **quality:** resolve open GitHub Code Quality findings ([#159](https://github.com/ThePlenkov/adt-cli/pull/159))
- **release:** resolve nx release config conflict and add first-release flag ([41eb7d06](https://github.com/ThePlenkov/adt-cli/commit/41eb7d06))
- **release:** publish packages directly in release workflow, remove dead publish.yml ([a4fd29ba](https://github.com/ThePlenkov/adt-cli/commit/a4fd29ba))
- **release:** add BUN_AUTH_TOKEN for bun publish authentication ([390cb1ec](https://github.com/ThePlenkov/adt-cli/commit/390cb1ec))
- **release:** use NPM_CONFIG_TOKEN for bun publish authentication ([18319b4f](https://github.com/ThePlenkov/adt-cli/commit/18319b4f))
- **release:** set preserveLocalDependencyProtocols=false so workspace:* is resolved ([4859af6d](https://github.com/ThePlenkov/adt-cli/commit/4859af6d))
- **release:** enrich release notes with PR authors Nx missed ([#197](https://github.com/ThePlenkov/adt-cli/pull/197))
- **release:** add repository metadata for sigstore provenance ([c9ff002e](https://github.com/ThePlenkov/adt-cli/commit/c9ff002e))
- **reports:** harden report normalization after merge review ([#361](https://github.com/ThePlenkov/adt-cli/pull/361))
- **sast:** add bearer suppression and reduce registry nesting ([b0d7b17a](https://github.com/ThePlenkov/adt-cli/commit/b0d7b17a))
- **security:** replace regex XML parsing with @xmldom/xmldom — CodeQL + Sonar ([3ef1f4cf](https://github.com/ThePlenkov/adt-cli/commit/3ef1f4cf))
- **security:** resolve all remaining CodeQL alerts with source-level fixes ([678f3991](https://github.com/ThePlenkov/adt-cli/commit/678f3991))
- **security:** resolve remaining SonarCloud hotspots + reliability bugs ([86337e36](https://github.com/ThePlenkov/adt-cli/commit/86337e36))
- **security:** 6 more .sort() comparators — SonarCloud S2871 ([483e179b](https://github.com/ThePlenkov/adt-cli/commit/483e179b))
- **security:** replace hardcoded mock password with randomBytes — S2068 ([4b928e6b](https://github.com/ThePlenkov/adt-cli/commit/4b928e6b))
- **security:** unblock SonarCloud Quality Gate on new_security_hotspots_reviewed ([d08777c1](https://github.com/ThePlenkov/adt-cli/commit/d08777c1))
- **security:** validate P2 artifact id/version before use (GHSA-x297-8rg2-3wgx) ([#342](https://github.com/ThePlenkov/adt-cli/pull/342))
- **security:** use scoped @abapify/openai-codegen in openapi-to-abap skill (GHSA-rfjr-vx9g-xhq7) ([#341](https://github.com/ThePlenkov/adt-cli/pull/341))
- **security:** resolve all CodeQL code-scanning findings ([#344](https://github.com/ThePlenkov/adt-cli/pull/344))
- **security:** use CodeQL-recognized regex sanitizers for remaining findings ([f4e4c9b5](https://github.com/ThePlenkov/adt-cli/commit/f4e4c9b5))
- **security:** refine path guards to reject traversal segments only, not valid filenames with dots ([#345](https://github.com/ThePlenkov/adt-cli/pull/345))
- **security:** use simpler regex guards for CodeQL recognition ([#346](https://github.com/ThePlenkov/adt-cli/pull/346))
- **security:** resolve remaining CodeQL findings ([#347](https://github.com/ThePlenkov/adt-cli/pull/347))
- **security:** apply path.resolve and lgtm suppressions for remaining JS alerts ([fa36b0f0](https://github.com/ThePlenkov/adt-cli/commit/fa36b0f0))
- **security:** use path.resolve for JS path-injection sinks ([0710f064](https://github.com/ThePlenkov/adt-cli/commit/0710f064))
- **security:** add containment checks for CodeQL path-injection ([7ddb048d](https://github.com/ThePlenkov/adt-cli/commit/7ddb048d))
- **security:** add lgtm suppressions for remaining JS alerts ([73676ca8](https://github.com/ThePlenkov/adt-cli/commit/73676ca8))
- **server:** propagate request cancellation through ADT Server ([#160](https://github.com/ThePlenkov/adt-cli/pull/160))
- **sonar:** resolve S2187 tests and triage cognitive complexity with NOSONAR ([25c39e09](https://github.com/ThePlenkov/adt-cli/commit/25c39e09))
- **sonar:** add assertions to tests and suppress remaining complexity findings ([983b2dd7](https://github.com/ThePlenkov/adt-cli/commit/983b2dd7))
- **sonar:** resolve MAJOR code smells and regenerate client ([1559c2cd](https://github.com/ThePlenkov/adt-cli/commit/1559c2cd))
- **sonar:** resolve S4144, S6551, S6571, S6582, S6644, S7750, S7755, S7786, S5332 ([35b25a45](https://github.com/ThePlenkov/adt-cli/commit/35b25a45))
- **sonar:** address security, bugs, and code smells ([839ff1d3](https://github.com/ThePlenkov/adt-cli/commit/839ff1d3))
- **sonar:** address security, bugs, and code smells ([#285](https://github.com/ThePlenkov/adt-cli/pull/285))
- **sonar:** stage 1 — exec/fs sink hardening, CI install hardening, analysis scope ([#299](https://github.com/ThePlenkov/adt-cli/pull/299))
- **sonar:** residual findings after the cleanup sweep ([#306](https://github.com/ThePlenkov/adt-cli/pull/306))
- **sonar/codacy:** reduce destination-mode complexity and add test wrappers ([d0c8413f](https://github.com/ThePlenkov/adt-cli/commit/d0c8413f))
- **sonarcloud-review:** safe-guard JSON.stringify in S6551 helpers ([bd72acaf](https://github.com/ThePlenkov/adt-cli/commit/bd72acaf))
- **sonarqube:** fix code quality issues from PR #76 ([#76](https://github.com/ThePlenkov/adt-cli/issues/76))
- **source-capabilities:** require explicit secret or allowEphemeralSecret opt-in ([c421fba2](https://github.com/ThePlenkov/adt-cli/commit/c421fba2))
- **speci:** resolve leftover merge conflict markers in create-server ([#288](https://github.com/ThePlenkov/adt-cli/pull/288))
- **tests:** restore vitest runner and fix latent build/test gaps ([5b77e658](https://github.com/ThePlenkov/adt-cli/commit/5b77e658))
- **tools:** p2-cli exclude from release projects, add repo metadata, fix empty targets ([#270](https://github.com/ThePlenkov/adt-cli/pull/270))
- **ts-xsd:** commit W3C XMLSchema.xsd so integration tests pass in CI ([ce537d91](https://github.com/ThePlenkov/adt-cli/commit/ce537d91))
- **ts-xsd:** fix NamedNodeMap/NodeList iteration and resolve bugs ([eae4a192](https://github.com/ThePlenkov/adt-cli/commit/eae4a192))
- **ts-xsd:** quote XML property names in generated types ([#192](https://github.com/ThePlenkov/adt-cli/pull/192))
- **typecheck:** partial strict source typecheck fixes ([#311](https://github.com/ThePlenkov/adt-cli/pull/311), [#313](https://github.com/ThePlenkov/adt-cli/pull/313))
- **typecheck:** remaining strict source typecheck errors ([#311](https://github.com/ThePlenkov/adt-cli/pull/311), [#314](https://github.com/ThePlenkov/adt-cli/pull/314))
- **typecheck:** restore strict source typecheck for adt-mcp/server packages (https://github.com/abapify/adt-cli/issues/311) ([#320](https://github.com/ThePlenkov/adt-cli/pull/320))

### ⚠️  Breaking Changes

- **adt-client-v2:** add pluggable response system and fix XML attribute parsing  ([e5fb3348](https://github.com/ThePlenkov/adt-cli/commit/e5fb3348))
  Schema attribute names no longer use @ prefix

### ❤️ Thank You

- Birch (gastown)
- CodeRabbit
- Codex @oai-codex
- CommandCodeBot
- Devin @devin-ai-integration[bot]
- Devin AI @devin-ai-integration[bot]
- Maple (gastown)
- Noah
- OpenAI Codex @oai-codex
- Petr Plenkov @ThePlenkov
- rol3333yahoo.com
- ThePlenkov @ThePlenkov

## 0.4.59 (2026-11-14)

### 🚀 Features

- **flow:** assess persisted checkout coverage against verified file evidence ([#367](https://github.com/abapify/adt-cli/pull/367))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.58 (2026-11-13)

### 🚀 Features

- **flow:** reconcile proven CTS deletions with owned source files ([#365](https://github.com/abapify/adt-cli/pull/365))

### ❤️ Thank You

- Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.57 (2026-11-13)

### 🩹 Fixes

- **adt-server:** normalize transport function labels ([#363](https://github.com/abapify/adt-cli/pull/363))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.56 (2026-11-12)

### 🩹 Fixes

- **reports:** harden report normalization after merge review ([#361](https://github.com/abapify/adt-cli/pull/361))

### ❤️ Thank You

- Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.55 (2026-11-12)

### 🚀 Features

- **cli:** expose installed runtime capabilities without layout introspection ([#358](https://github.com/abapify/adt-cli/pull/358))

### ❤️ Thank You

- Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.54 (2026-11-12)

### 🚀 Features

- **cts:** normalize transport metadata and plan ordered multi-root scope ([#356](https://github.com/abapify/adt-cli/pull/356))

### ❤️ Thank You

- Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.53 (2026-11-12)

### 🚀 Features

- **flow:** derive unchanged class component boundaries from sibling provenance ([16c1dcc2](https://github.com/abapify/adt-cli/commit/16c1dcc2))

### ❤️ Thank You

- ThePlenkov @ThePlenkov

## 0.4.52 (2026-11-12)

### 🚀 Features

- **flow:** assess stale descriptor ownership from file hashes ([#354](https://github.com/abapify/adt-cli/pull/354))

### ❤️ Thank You

- Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.51 (2026-11-12)

### 🩹 Fixes

- **adk:** classify SNOTE CINS instructions and resolve CPRO class-section leaves ([#352](https://github.com/abapify/adt-cli/pull/352))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.50 (2026-11-12)

### 🩹 Fixes

- **security:** add lgtm suppressions for remaining JS alerts ([73676ca8](https://github.com/abapify/adt-cli/commit/73676ca8))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.49 (2026-11-12)

### 🩹 Fixes

- **security:** add containment checks for CodeQL path-injection ([7ddb048d](https://github.com/abapify/adt-cli/commit/7ddb048d))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.48 (2026-11-12)

### 🩹 Fixes

- **security:** use path.resolve for JS path-injection sinks ([0710f064](https://github.com/abapify/adt-cli/commit/0710f064))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.47 (2026-11-12)

### 🩹 Fixes

- **security:** resolve remaining CodeQL findings ([#347](https://github.com/abapify/adt-cli/pull/347))
- **security:** apply path.resolve and lgtm suppressions for remaining JS alerts ([fa36b0f0](https://github.com/abapify/adt-cli/commit/fa36b0f0))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.46 (2026-11-12)

### 🩹 Fixes

- **security:** use simpler regex guards for CodeQL recognition ([#346](https://github.com/abapify/adt-cli/pull/346))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.45 (2026-11-11)

### 🩹 Fixes

- **security:** use CodeQL-recognized regex sanitizers for remaining findings ([f4e4c9b5](https://github.com/abapify/adt-cli/commit/f4e4c9b5))
- **security:** refine path guards to reject traversal segments only, not valid filenames with dots ([#345](https://github.com/abapify/adt-cli/pull/345))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.44 (2026-11-11)

### 🩹 Fixes

- **security:** resolve all CodeQL code-scanning findings ([#344](https://github.com/abapify/adt-cli/pull/344))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.43 (2026-11-11)

### 🩹 Fixes

- **nx-deps-check:** anchor config/scripts/fixtures dev dirs to project root ([#326](https://github.com/abapify/adt-cli/pull/326))
- **security:** validate P2 artifact id/version before use (GHSA-x297-8rg2-3wgx) ([#342](https://github.com/abapify/adt-cli/pull/342))
- **security:** use scoped @abapify/openai-codegen in openapi-to-abap skill (GHSA-rfjr-vx9g-xhq7) ([#341](https://github.com/abapify/adt-cli/pull/341))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.42 (2026-11-10)

### 🩹 Fixes

- **adt-flow:** preserve unselected class components without source anchor ([#323](https://github.com/abapify/adt-cli/pull/323))
- **adt-flow:** serialize checkout/index with cross-process workspace lock ([#324](https://github.com/abapify/adt-cli/pull/324))
- **adt-mcp:** align flow_checkout_tr options with CLI checkout parity ([#325](https://github.com/abapify/adt-cli/pull/325))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.41 (2026-11-10)

### 🩹 Fixes

- **adt-flow:** harden readRegularText against parent-dir symlink TOCTOU ([#322](https://github.com/abapify/adt-cli/pull/322))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.40 (2026-11-10)

### 🩹 Fixes

- **typecheck:** restore strict source typecheck for adt-mcp/server packages (https://github.com/abapify/adt-cli/issues/311) ([#320](https://github.com/abapify/adt-cli/pull/320))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.39 (2026-11-09)

### 🚀 Features

- **nx-cloud:** set up nx cloud workspace ([#316](https://github.com/abapify/adt-cli/pull/316))

### 🩹 Fixes

- **mcp:** remove redundant optional specifier (S4782) ([#312](https://github.com/abapify/adt-cli/pull/312))
- **nx-npm-trust:** handle npm 11 object-shaped pack --json output ([#133](https://github.com/abapify/adt-cli/pull/133))
- **typecheck:** partial strict source typecheck fixes ([#311](https://github.com/abapify/adt-cli/pull/311), [#313](https://github.com/abapify/adt-cli/pull/313))
- **typecheck:** remaining strict source typecheck errors ([#311](https://github.com/abapify/adt-cli/pull/311), [#314](https://github.com/abapify/adt-cli/pull/314))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.38 (2026-11-09)

### 🚀 Features

- **adt-client:** add auth debug logging to diagnose 401s ([#289](https://github.com/abapify/adt-cli/pull/289), [#309](https://github.com/abapify/adt-cli/pull/309))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.37 (2026-11-09)

### 🩹 Fixes

- **gcts:** remove unused lang in func handler (S1854) ([fea34898](https://github.com/abapify/adt-cli/commit/fea34898))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.36 (2026-11-09)

### 🚀 Features

- **gcts:** add dedicated FUNC handler for function module serialization ([#246](https://github.com/abapify/adt-cli/pull/246))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.35 (2026-11-09)

### 🩹 Fixes

- keep import completeness diagnostics nonblocking ([#298](https://github.com/abapify/adt-cli/pull/298))
- harden config parsing, typed serialization contracts and MCP tool schemas ([#304](https://github.com/abapify/adt-cli/pull/304))
- remove redundant optional specifiers and use TypeError (S4782, S7786) ([07a0a42b](https://github.com/abapify/adt-cli/commit/07a0a42b))
- **acds:** allow empty parameter list for table function sources in data sources ([02a5508a](https://github.com/abapify/adt-cli/commit/02a5508a))
- **acds:** allow empty parameter list for table function sources in data sources ([#294](https://github.com/abapify/adt-cli/pull/294))
- **adt-cli:** verify basic-auth credentials against SAP before login succeeds ([#289](https://github.com/abapify/adt-cli/pull/289), [#295](https://github.com/abapify/adt-cli/pull/295))
- **adt-cli:** silence intentional insecure-TLS opt-in, split verifyBasicAuth ([#296](https://github.com/abapify/adt-cli/pull/296))
- **adt-services:** negotiate ADT session media type during Basic auth ([#297](https://github.com/abapify/adt-cli/pull/297))
- **cli:** parse YAML configuration as bounded data ([#302](https://github.com/abapify/adt-cli/pull/302))
- **cli:** remove unused parseDocument import (S1128) ([019e28f8](https://github.com/abapify/adt-cli/commit/019e28f8))
- **gcts:** remove redundant optional specifier (S4782) ([907af97e](https://github.com/abapify/adt-cli/commit/907af97e))
- **gcts:** keep DdlsLike fields optional (S4782) ([cd121216](https://github.com/abapify/adt-cli/commit/cd121216))
- **openai-codegen:** drop unused destructured values in classifyVisit (S1854) ([#307](https://github.com/abapify/adt-cli/pull/307))
- **p2-cli:** restore missing JSDoc opener on filterJars (parse error) ([2f2d15fd](https://github.com/abapify/adt-cli/commit/2f2d15fd))
- **sonar:** address security, bugs, and code smells ([#285](https://github.com/abapify/adt-cli/pull/285))
- **sonar:** stage 1 — exec/fs sink hardening, CI install hardening, analysis scope ([#299](https://github.com/abapify/adt-cli/pull/299))
- **sonar:** residual findings after the cleanup sweep ([#306](https://github.com/abapify/adt-cli/pull/306))

### ❤️ Thank You

- Codex @oai-codex
- CommandCodeBot
- Petr Plenkov @ThePlenkov

## 0.4.34 (2026-11-02)

### 🩹 Fixes

- **sonar:** address security, bugs, and code smells ([839ff1d3](https://github.com/abapify/adt-cli/commit/839ff1d3))
- **speci:** resolve leftover merge conflict markers in create-server ([#288](https://github.com/abapify/adt-cli/pull/288))

### ❤️ Thank You

- CommandCodeBot
- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov

## 0.4.33 (2026-11-02)

### 🩹 Fixes

- **deps:** raise zod floor to ^4.6.7 in ts-xsd and adt-schemas (GHSA-mrhx-c7xc-m3w5) ([#280](https://github.com/abapify/adt-cli/pull/280))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov

## 0.4.32 (2026-11-02)

### 🩹 Fixes

- **cli:** declare flow as a production dependency ([#278](https://github.com/abapify/adt-cli/pull/278))

### ❤️ Thank You

- OpenAI Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.31 (2026-11-01)

### 🩹 Fixes

- **import:** acquire CTS class owners and preserve failed objects ([#279](https://github.com/abapify/adt-cli/pull/279))

### ❤️ Thank You

- Codex @oai-codex
- Petr Plenkov @ThePlenkov

## 0.4.30 (2026-10-30)

### 🩹 Fixes

- **adk:** resolve CTS class leaves to CLAS owners ([#277](https://github.com/abapify/adt-cli/pull/277))
- **flow:** materialize CTS class components and report checkout coverage ([#276](https://github.com/abapify/adt-cli/pull/276))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.29 (2026-10-30)

### 🚀 Features

- **adt-atc:** bound + harden documentation bridge reads ([#268](https://github.com/abapify/adt-cli/pull/268))
- **adt-plugin-gcts:** schema-validate LIMU sub-object examples ([#266](https://github.com/abapify/adt-cli/pull/266))

### 🩹 Fixes

- **adt-schemas:** qualify local elements in ATC custom XSDs + checkId docs ([#267](https://github.com/abapify/adt-cli/pull/267))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.28 (2026-10-30)

### 🩹 Fixes

- leftover review nits from PRs #183, #186, #209 ([#253](https://github.com/abapify/adt-cli/pull/253), [#271](https://github.com/abapify/adt-cli/pull/271), [#183](https://github.com/abapify/adt-cli/issues/183), [#186](https://github.com/abapify/adt-cli/issues/186), [#209](https://github.com/abapify/adt-cli/issues/209))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.27 (2026-10-29)

### 🩹 Fixes

- **tools:** p2-cli exclude from release projects, add repo metadata, fix empty targets ([#270](https://github.com/abapify/adt-cli/pull/270))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.26 (2026-10-29)

### 🚀 Features

- **adtc-cli:** add --output/-o to read commands for UTF-8 file output ([#263](https://github.com/abapify/adt-cli/pull/263))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.25 (2026-10-29)

### 🩹 Fixes

- **acds:** support named-argument syntax and namespace-qualified names ([#264](https://github.com/abapify/adt-cli/pull/264))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.24 (2026-10-26)

### 🩹 Fixes

- **adt-server:** report broker outages from readiness ([#258](https://github.com/abapify/adt-cli/pull/258))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.23 (2026-10-25)

### 🚀 Features

- **adt-plugin-gcts:** AFF wave-0 machinery — schema access, validation, codegen, coverage ([#232](https://github.com/abapify/adt-cli/pull/232))
- **adt-plugin-gcts:** schema-aware generic emit/parse for all wave2 stubs ([#233](https://github.com/abapify/adt-cli/pull/233))
- **adt-plugin-gcts:** spec file-name grammar + full source-extension coverage ([#234](https://github.com/abapify/adt-cli/pull/234))
- **adt-plugin-gcts:** source companions + DOCU for wave2 stubs ([#235](https://github.com/abapify/adt-cli/pull/235))
- **adt-plugin-gcts:** LIMU sub-objects + extension-aware source keys ([#238](https://github.com/abapify/adt-cli/pull/238))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.22 (2026-10-23)

### 🩹 Fixes

- **flow:** never reuse the active 00000 source version ([#240](https://github.com/abapify/adt-cli/pull/240))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.21 (2026-10-22)

### 🚀 Features

- **atc:** resolve finding check categories from the check variant form template ([#239](https://github.com/abapify/adt-cli/pull/239))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.20 (2026-10-22)

### 🩹 Fixes

- **abapgit:** preserve include type during deserialization ([4658f98d](https://github.com/abapify/adt-cli/commit/4658f98d))
- **abapgit:** preserve program subtype metadata and source handoff ([b5394ab9](https://github.com/abapify/adt-cli/commit/b5394ab9))
- **adk:** recognize exact subtypes and normalize transport fallback ([2ed86430](https://github.com/abapify/adt-cli/commit/2ed86430))
- **import:** preserve workbench subtypes and include serialization ([b0fd0106](https://github.com/abapify/adt-cli/commit/b0fd0106))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.19 (2026-10-21)

### 🩹 Fixes

- **ci:** keep stale manifests out of published packages ([6c711d2b](https://github.com/abapify/adt-cli/commit/6c711d2b))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.18 (2026-10-21)

### 🩹 Fixes

- **ci:** refresh bun.lock inside the release commit ([09c9a14e](https://github.com/abapify/adt-cli/commit/09c9a14e))
- **ci:** bump bun to 1.4.2 across workflows ([9eb7fa65](https://github.com/abapify/adt-cli/commit/9eb7fa65))
- **deps:** bump dependencies and remediate audit findings ([d15ce96e](https://github.com/abapify/adt-cli/commit/d15ce96e))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.17 (2026-10-21)

### 🚀 Features

- **acds:** extend the CDS grammar to the full DDL/DCL statement set ([5796ebbb](https://github.com/abapify/adt-cli/commit/5796ebbb))

### 🩹 Fixes

- **acds:** keep FROM-region starters out of the bare source alias ([37d750f1](https://github.com/abapify/adt-cli/commit/37d750f1))
- **acds:** enforce the ON condition in the join grammar ([d6df7b93](https://github.com/abapify/adt-cli/commit/d6df7b93))
- **acds:** recognize keywords case-insensitively ([a8c09d3e](https://github.com/abapify/adt-cli/commit/a8c09d3e))
- **acds:** make the join syntax flavour-independent and support FULL OUTER JOIN ([557f7c5b](https://github.com/abapify/adt-cli/commit/557f7c5b))
- **acds:** address review findings — parser robustness, docs, tests ([d8a3e2fd](https://github.com/abapify/adt-cli/commit/d8a3e2fd))
- **acds:** round-2 review findings — coverage metadata, walker, docs ([6e38c7e5](https://github.com/abapify/adt-cli/commit/6e38c7e5))
- **acds:** order Redefinition before Redefine in token list ([dc1e5278](https://github.com/abapify/adt-cli/commit/dc1e5278))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Rol3333 @Rol3333
- ThePlenkov @ThePlenkov

## 0.4.16 (2026-09-29)

### 🩹 Fixes

- **openspec:** align archived specs with shipped behavior ([0f016a54](https://github.com/abapify/adt-cli/commit/0f016a54))
- **openspec:** second review pass — strict_sql blocking, context --json ([2b9f2c3d](https://github.com/abapify/adt-cli/commit/2b9f2c3d))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.15 (2026-09-29)

### 🩹 Fixes

- **adt-mcp:** fail closed on unbounded scoped-read dispatch ([#222](https://github.com/abapify/adt-cli/pull/222))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.14 (2026-09-28)

### 🩹 Fixes

- **tests:** restore vitest runner and fix latent build/test gaps ([5b77e658](https://github.com/abapify/adt-cli/commit/5b77e658))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.13 (2026-09-28)

### 🩹 Fixes

- **cli:** render safe flow diagnostics ([a60e7153](https://github.com/abapify/adt-cli/commit/a60e7153))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.12 (2026-09-28)

### 🚀 Features

- **flow:** add source-free transport indexing ([2cf8bb46](https://github.com/abapify/adt-cli/commit/2cf8bb46))
- **flow:** index manifest-inexact checkout ([7daba050](https://github.com/abapify/adt-cli/commit/7daba050))

### 🩹 Fixes

- **flow:** preserve index-only recovery invariants ([3d587744](https://github.com/abapify/adt-cli/commit/3d587744))
- **mcp:** redact raw flow failure causes ([060a3891](https://github.com/abapify/adt-cli/commit/060a3891))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.11 (2026-09-23)

### 🩹 Fixes

- **adt-flow:** expose diverged ownership path ([d6f54833](https://github.com/abapify/adt-cli/commit/d6f54833))

### ❤️ Thank You

- Petr Plenkov @ThePlenkov

## 0.4.10 (2026-09-21)

### 🩹 Fixes

- **deps:** override vulnerable rollup and lodash-es ([2e490771](https://github.com/abapify/adt-cli/commit/2e490771))
- **deps:** keep security overrides semver-compatible ([a30df2df](https://github.com/abapify/adt-cli/commit/a30df2df))
- **deps:** upgrade chevrotain and mastra instead of overrides ([1bc31b61](https://github.com/abapify/adt-cli/commit/1bc31b61))

### ❤️ Thank You

- ThePlenkov @ThePlenkov

## 0.4.9 (2026-09-20)

### 🚀 Features

- **adt-flow:** index omitted partial objects ([13d14600](https://github.com/abapify/adt-cli/commit/13d14600))

### 🩹 Fixes

- **adt:** declare bundled workspace deps so nx orders adt:build ([1fe54357](https://github.com/abapify/adt-cli/commit/1fe54357))
- **adt-flow:** protect preserved omitted objects ([8e253d15](https://github.com/abapify/adt-cli/commit/8e253d15))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.8 (2026-09-20)

### 🚀 Features

- **adt:** add @abapify/adt standalone bundle package ([6f0e57fa](https://github.com/abapify/adt-cli/commit/6f0e57fa))
- **release:** independent per-package versioning + auto-release on main ([ccbc2a4a](https://github.com/abapify/adt-cli/commit/ccbc2a4a))

### 🩹 Fixes

- **adt-cli:** report real package version; fix typecheck regressions ([0dd4b802](https://github.com/abapify/adt-cli/commit/0dd4b802))
- **adt-mcp:** drop src/lib/mock shims importing private adt-fixtures ([b4af1075](https://github.com/abapify/adt-cli/commit/b4af1075))
- **cli:** hide plugin error stacks ([583ee8ec](https://github.com/abapify/adt-cli/commit/583ee8ec))
- **cli:** sanitize typed plugin errors and gate messages behind codes ([f5479611](https://github.com/abapify/adt-cli/commit/f5479611))
- **cli:** use unicode escapes in error sanitizer patterns ([61cf7b7e](https://github.com/abapify/adt-cli/commit/61cf7b7e))
- **lint:** ignore private adt-fixtures in dependency-checks ([42ff67f9](https://github.com/abapify/adt-cli/commit/42ff67f9))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.7 (2026-09-18)

### 🩹 Fixes

- **adt-mcp:** move private adt-fixtures to devDependencies ([cbbffadf](https://github.com/abapify/adt-cli/commit/cbbffadf))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.6 (2026-09-18)

### 🩹 Fixes

- **adk:** align object constructors with registry signature ([918d040b](https://github.com/abapify/adt-cli/commit/918d040b))
- **adt-schemas:** replace zod4-only .loose() with .catchall() ([9832c72e](https://github.com/abapify/adt-cli/commit/9832c72e))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.5 (2026-09-17)

### 🩹 Fixes

- **release:** add repository metadata for sigstore provenance ([c9ff002e](https://github.com/abapify/adt-cli/commit/c9ff002e))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- ThePlenkov @ThePlenkov

## 0.4.4 (2026-09-17)

### 🚀 Features

- **abapgit:** add ENHO and ENHS enhancement object types ([#203](https://github.com/abapify/adt-cli/pull/203))
- **abapgit:** add 8 more object types (EEEC, SWCR, HTTP, NROB, CHDO, SMTG, SFPF, SCP1) ([#204](https://github.com/abapify/adt-cli/pull/204))
- **abapgit:** full upstream object type coverage (168 types) ([#205](https://github.com/abapify/adt-cli/pull/205))

### 🩹 Fixes

- **ci:** prevent empty-tarball and mid-publish release failures ([3d11838b](https://github.com/abapify/adt-cli/commit/3d11838b))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.3 (2026-09-16)

### 🚀 Features

- **abapgit:** dual-format deserialization foundation (XML + AFF JSON) ([#198](https://github.com/abapify/adt-cli/pull/198))
- **abapgit:** dual-format support for 15 CDS/RAP object types ([#199](https://github.com/abapify/adt-cli/pull/199))
- **abapgit:** add 7 legacy XML object types (MSAG, VIEW, ENQU, SHLP, TRAN, TYPE, XSLT) ([#200](https://github.com/abapify/adt-cli/pull/200))
- **abapgit:** add 17 AFF-first object types (APLO, CHKC, CHKO, CHKV, SAJC, SAJT, etc.) ([#201](https://github.com/abapify/adt-cli/pull/201))
- **nx-npm-trust:** add prepare-for-publish target + --otp passthrough ([46b9997e](https://github.com/abapify/adt-cli/commit/46b9997e))
- **nx-npm-trust:** use webauth instead of OTP for prepare-for-publish ([cb914bbe](https://github.com/abapify/adt-cli/commit/cb914bbe))
- **nx-npm-trust:** auto-trigger npm login --auth-type=web on EOTP ([c676d45e](https://github.com/abapify/adt-cli/commit/c676d45e))

### 🩹 Fixes

- **adt-mcp:** require HTTPS for HTTP transport ([#207](https://github.com/abapify/adt-cli/pull/207))
- **adt-proxy:** add publishConfig.access for npm publishing ([#208](https://github.com/abapify/adt-cli/pull/208))
- **release:** enrich release notes with PR authors Nx missed ([#197](https://github.com/abapify/adt-cli/pull/197))

### ❤️ Thank You

- Devin @devin-ai-integration[bot]
- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.2 (2026-09-08)

### 🚀 Features

- add ADT proxy server with JSON↔XML conversion ([49271e22](https://github.com/abapify/adt-cli/commit/49271e22))
- expose typed CTS transport metadata ([#186](https://github.com/abapify/adt-cli/pull/186))
- **adt-flow:** add incremental transport checkout ([#150](https://github.com/abapify/adt-cli/pull/150))
- **adt-mcp:** enforce destination scopes ([3bbb9bf9](https://github.com/abapify/adt-cli/commit/3bbb9bf9))
- **adt-mcp:** verify signed invocations ([f782bf4f](https://github.com/abapify/adt-cli/commit/f782bf4f))
- **adt-mcp:** enforce frozen AI Review reads ([3c19a052](https://github.com/abapify/adt-cli/commit/3c19a052))
- **adt-mcp:** scope frozen reads to components ([2676ae8f](https://github.com/abapify/adt-cli/commit/2676ae8f))
- **adt-mcp:** scope ATC runs without raw URIs ([6665107c](https://github.com/abapify/adt-cli/commit/6665107c))
- **adt-mcp:** reject raw URI read targets ([c206c1d4](https://github.com/abapify/adt-cli/commit/c206c1d4))
- **adt-mcp:** scope autonomous agent reads ([7baa09f8](https://github.com/abapify/adt-cli/commit/7baa09f8))
- **adt-mcp:** classify bounded analysis execution ([f1d19e7b](https://github.com/abapify/adt-cli/commit/f1d19e7b))
- **adt-mcp:** classify bounded analysis execution ([#141](https://github.com/abapify/adt-cli/pull/141))
- **adt-mcp:** enforce scoped safe execution ([#143](https://github.com/abapify/adt-cli/pull/143))
- **adt-mcp:** add delegated assistant read scope ([b59006b4](https://github.com/abapify/adt-cli/commit/b59006b4))
- **adt-mcp:** add delegated assistant read scope ([#148](https://github.com/abapify/adt-cli/pull/148))
- **adt-mcp:** arc-1 SAPRead parity for get_source ([#162](https://github.com/abapify/adt-cli/pull/162))
- **adt-server:** add guarded MCP sidecar ([ebd6f5f5](https://github.com/abapify/adt-cli/commit/ebd6f5f5))
- **adt-server:** configure signed MCP runtime ([d74109ef](https://github.com/abapify/adt-cli/commit/d74109ef))
- **adt-server:** add capability-bound source reads ([c07df84d](https://github.com/abapify/adt-cli/commit/c07df84d))
- **adt-server:** allow local REST bearer auth ([eff9104d](https://github.com/abapify/adt-cli/commit/eff9104d))
- **adt-server:** normalize system transport search ([e9b0779e](https://github.com/abapify/adt-cli/commit/e9b0779e))
- **adt-server:** release broker leases with audit ([90a43953](https://github.com/abapify/adt-cli/commit/90a43953))
- **adt-server:** add canonical transport detail REST ([d6a74218](https://github.com/abapify/adt-cli/commit/d6a74218))
- **adt-server:** schema capability source responses ([28a77ab5](https://github.com/abapify/adt-cli/commit/28a77ab5))
- **adt-server:** paginate canonical package search ([96c41c30](https://github.com/abapify/adt-cli/commit/96c41c30))
- **adt-server:** paginate canonical object search ([9e43a2ad](https://github.com/abapify/adt-cli/commit/9e43a2ad))
- **adt-server:** require shared REST state secrets ([d031b846](https://github.com/abapify/adt-cli/commit/d031b846))
- **adt-server:** page direct package objects ([f7971303](https://github.com/abapify/adt-cli/commit/f7971303))
- **adt-server:** add canonical object metadata REST ([be7857dd](https://github.com/abapify/adt-cli/commit/be7857dd))
- **adt-server:** add canonical object history REST ([40ba0aa5](https://github.com/abapify/adt-cli/commit/40ba0aa5))
- **adt-server:** add bounded object source REST ([05ce2705](https://github.com/abapify/adt-cli/commit/05ce2705))
- **adt-server:** add canonical ATC REST ([0c16a8f3](https://github.com/abapify/adt-cli/commit/0c16a8f3))
- **adt-server:** generate typed REST client ([7ac85f6c](https://github.com/abapify/adt-cli/commit/7ac85f6c))
- **adt-server:** wire safe_execute hooks from environment URLs ([#146](https://github.com/abapify/adt-cli/pull/146))
- **badi:** add `adt badi <name> --implementations` ([#153](https://github.com/abapify/adt-cli/pull/153))
- **badi:** classic BAdI read via vit/wb ([#153](https://github.com/abapify/adt-cli/pull/153), [#154](https://github.com/abapify/adt-cli/pull/154))
- **cds:** support CDS and RAP ABAP File Formats ([#183](https://github.com/abapify/adt-cli/pull/183))
- **cts:** create verified transport tasks ([99447319](https://github.com/abapify/adt-cli/commit/99447319))
- **flow:** persist complete CTS inventories ([#182](https://github.com/abapify/adt-cli/pull/182))
- **flow:** report partial transport import gaps ([#190](https://github.com/abapify/adt-cli/pull/190))
- **gcts:** Full AFF abap-file-formats support — Wave 0+1+2 ([#193](https://github.com/abapify/adt-cli/pull/193))
- **mcp:** bound current source reads ([e8da7e53](https://github.com/abapify/adt-cli/commit/e8da7e53))
- **source-history:** add bounded ADT source history support ([04ecb578](https://github.com/abapify/adt-cli/commit/04ecb578))

### 🩹 Fixes

- address CodeRabbit review feedback ([a9676264](https://github.com/abapify/adt-cli/commit/a9676264))
- address all review feedback - round 2 ([bbef42f2](https://github.com/abapify/adt-cli/commit/bbef42f2))
- address CI feedback - error handling, fetch timeout, server crash risk ([0f2bb0c5](https://github.com/abapify/adt-cli/commit/0f2bb0c5))
- use bunx instead of npx in auth hint ([89fc796b](https://github.com/abapify/adt-cli/commit/89fc796b))
- address 3 blocking issues in ADT proxy rework ([c259a4e8](https://github.com/abapify/adt-cli/commit/c259a4e8))
- address CI review feedback - security, reliability, and code quality ([4d540802](https://github.com/abapify/adt-cli/commit/4d540802))
- address CI failures - remove dynamic RegExp, fix lint errors, add NX Cloud fallback ([66837675](https://github.com/abapify/adt-cli/commit/66837675))
- review thread fixes (broker, session, source-history, docs, deps) ([3d20361a](https://github.com/abapify/adt-cli/commit/3d20361a))
- verify CTS lifecycle and task deltas ([cbe83c5b](https://github.com/abapify/adt-cli/commit/cbe83c5b))
- verify CTS lifecycle, task creation, and lock correlation ([#151](https://github.com/abapify/adt-cli/pull/151))
- CTS lifecycle follow-ups — lock correlation, release details, flow scope ([#157](https://github.com/abapify/adt-cli/pull/157))
- resolve R3TR function modules via function groups ([#187](https://github.com/abapify/adt-cli/pull/187))
- **adk:** exclude SUSK CTS entries from source manifests ([#164](https://github.com/abapify/adt-cli/pull/164))
- **adk:** skip unmaterializable transport objects ([#168](https://github.com/abapify/adt-cli/pull/168))
- **adk:** release transport task via newreleasejobs, verify by reload ([#173](https://github.com/abapify/adt-cli/pull/173))
- **adk:** resolve LIMU function module owners ([#188](https://github.com/abapify/adt-cli/pull/188))
- **adk:** keep FUGR function module sources distinct ([#191](https://github.com/abapify/adt-cli/pull/191))
- **adt-cli:** normalize source-history metadata output to avoid leaking source URIs ([4fbe2a8f](https://github.com/abapify/adt-cli/commit/4fbe2a8f))
- **adt-flow:** ignore CTS release metadata during checkout ([#156](https://github.com/abapify/adt-cli/pull/156))
- **adt-mcp:** freeze destination access ([8f3fc5c5](https://github.com/abapify/adt-cli/commit/8f3fc5c5))
- **adt-mcp:** include objectUri in find_references and accept uri in get_source_version ([a1cdc51b](https://github.com/abapify/adt-cli/commit/a1cdc51b))
- **adt-mcp,adt-server,adt-server-client:** resolve ESLint errors and unsafe finally ([cfe1c434](https://github.com/abapify/adt-cli/commit/cfe1c434))
- **adt-server:** pass explicit authTagLength to aes-256-gcm decipher ([5186a0d4](https://github.com/abapify/adt-cli/commit/5186a0d4))
- **adt-server:** require capability secrets in startAdtServer, use test helper in server tests ([d491cfae](https://github.com/abapify/adt-cli/commit/d491cfae))
- **adt-server:** guard capability services behind rest/mcp, share secret assertion ([d43cc8a1](https://github.com/abapify/adt-cli/commit/d43cc8a1))
- **atc:** resolve abapGit paths from full ATC locations ([#194](https://github.com/abapify/adt-cli/pull/194))
- **aunit:** preserve coverage measurement links ([#175](https://github.com/abapify/adt-cli/pull/175))
- **aunit:** parse external coverage measurement URI ([#176](https://github.com/abapify/adt-cli/pull/176))
- **aunit:** send SAP coverage query bodies ([#179](https://github.com/abapify/adt-cli/pull/179))
- **aunit:** emit GitLab-resolvable JaCoCo paths ([#181](https://github.com/abapify/adt-cli/pull/181))
- **broker:** suppress Codacy SSRF false positive after UAA URL validation ([53a01945](https://github.com/abapify/adt-cli/commit/53a01945))
- **broker:** use nosemgrep to suppress validated UAA fetch finding ([73829783](https://github.com/abapify/adt-cli/commit/73829783))
- **broker:** use node:https for UAA token to avoid Codacy fetch SSRF false positive ([f30fabc8](https://github.com/abapify/adt-cli/commit/f30fabc8))
- **cli:** honor lock correlation on source writes ([b2763ef7](https://github.com/abapify/adt-cli/commit/b2763ef7))
- **cli:** honor explicit config for plugins ([#163](https://github.com/abapify/adt-cli/pull/163))
- **cli:** keep payload stdout pipe-safe ([#165](https://github.com/abapify/adt-cli/pull/165))
- **cli:** expose safe fetch failure diagnostics ([#174](https://github.com/abapify/adt-cli/pull/174))
- **client:** support long-running SAP requests ([#177](https://github.com/abapify/adt-cli/pull/177))
- **client:** pair timeout agent with undici fetch ([#178](https://github.com/abapify/adt-cli/pull/178))
- **codacy:** suppress false-positive SSRF and object-injection findings ([05c807bc](https://github.com/abapify/adt-cli/commit/05c807bc))
- **codacy:** avoid object-injection and user-controlled URL findings ([9c3a249a](https://github.com/abapify/adt-cli/commit/9c3a249a))
- **codacy:** suppress SSRF false positive on validated ADT URL ([842c2341](https://github.com/abapify/adt-cli/commit/842c2341))
- **codacy:** use bare nosemgrep suppression for fetch URL ([fd406ad3](https://github.com/abapify/adt-cli/commit/fd406ad3))
- **codacy:** resolve open code-scanning alerts ([#167](https://github.com/abapify/adt-cli/pull/167))
- **coverage:** request SAP XML responses ([#180](https://github.com/abapify/adt-cli/pull/180))
- **cts:** harden task creation verification ([bb8d5862](https://github.com/abapify/adt-cli/commit/bb8d5862))
- **cts:** preserve task identity from SAP response ([6bd4d02d](https://github.com/abapify/adt-cli/commit/6bd4d02d))
- **cts:** prefer authoritative task number ([18266a60](https://github.com/abapify/adt-cli/commit/18266a60))
- **cts:** reconcile task and source lifecycle ([34469d91](https://github.com/abapify/adt-cli/commit/34469d91))
- **flow:** skip unsupported transport objects ([#166](https://github.com/abapify/adt-cli/pull/166))
- **flow:** ignore unsupported manifest diagnostics ([#172](https://github.com/abapify/adt-cli/pull/172))
- **import:** support typed CDS and RAP imports ([#185](https://github.com/abapify/adt-cli/pull/185))
- **lint:** use const for defaultHeaders in proxy command ([8ebef5f4](https://github.com/abapify/adt-cli/commit/8ebef5f4))
- **mcp:** bind immutable sources to capabilities ([ad45ebc4](https://github.com/abapify/adt-cli/commit/ad45ebc4))
- **proxy:** skip set-cookie in forEach loop to prevent header flattening ([46a1ca47](https://github.com/abapify/adt-cli/commit/46a1ca47))
- **quality:** resolve open GitHub Code Quality findings ([#159](https://github.com/abapify/adt-cli/pull/159))
- **sast:** add bearer suppression and reduce registry nesting ([b0d7b17a](https://github.com/abapify/adt-cli/commit/b0d7b17a))
- **server:** propagate request cancellation through ADT Server ([#160](https://github.com/abapify/adt-cli/pull/160))
- **sonar:** resolve S2187 tests and triage cognitive complexity with NOSONAR ([25c39e09](https://github.com/abapify/adt-cli/commit/25c39e09))
- **sonar:** add assertions to tests and suppress remaining complexity findings ([983b2dd7](https://github.com/abapify/adt-cli/commit/983b2dd7))
- **sonar:** resolve MAJOR code smells and regenerate client ([1559c2cd](https://github.com/abapify/adt-cli/commit/1559c2cd))
- **sonar:** resolve S4144, S6551, S6571, S6582, S6644, S7750, S7755, S7786, S5332 ([35b25a45](https://github.com/abapify/adt-cli/commit/35b25a45))
- **sonar/codacy:** reduce destination-mode complexity and add test wrappers ([d0c8413f](https://github.com/abapify/adt-cli/commit/d0c8413f))
- **source-capabilities:** require explicit secret or allowEphemeralSecret opt-in ([c421fba2](https://github.com/abapify/adt-cli/commit/c421fba2))
- **ts-xsd:** quote XML property names in generated types ([#192](https://github.com/abapify/adt-cli/pull/192))

### ❤️ Thank You

- Birch (gastown)
- Cursor @cursoragent
- Devin @devin-ai-integration[bot]
- Devin AI @devin-ai-integration[bot]
- Maple (gastown)
- Noah
- Petr Plenkov @ThePlenkov
- ThePlenkov @ThePlenkov

## 0.4.1 (2026-05-29)

### 🩹 Fixes

- ensure p2-cli dist/ is built before npm publish ([47931723](https://github.com/abapify/adt-cli/commit/47931723))

## 0.4.0 (2026-05-29)

### 🚀 Features

- implement arc-1 parity across adt-lint, adt-contracts, adt-mcp, and adt-cli ([aeb5e8b2](https://github.com/abapify/adt-cli/commit/aeb5e8b2))
- transport deletion-aware import with obj_func filter and multi-TR merge ([452f03f4](https://github.com/abapify/adt-cli/commit/452f03f4))
- simplify import transport - comma-sep multi-TR, --save-tr-metadata, fixed deletion pass ([877d8eae](https://github.com/abapify/adt-cli/commit/877d8eae))
- add e2e/adt-sdk to .gitignore ([8c4ffc3e](https://github.com/abapify/adt-cli/commit/8c4ffc3e))
- **aclass:** Wave 0 — package skeleton + Chevrotain lexer ([fc76f504](https://github.com/abapify/adt-cli/commit/fc76f504))
- **aclass:** Wave 1+2 — parser, typed AST, fixtures, roundtrip ([b242e15f](https://github.com/abapify/adt-cli/commit/b242e15f))
- **aclass:** typed EventDecl + forward-class decl + abaplint gate ([#111](https://github.com/abapify/adt-cli/issues/111))
- **adt-lint:** scaffold shared abaplint utilities package ([20827906](https://github.com/abapify/adt-cli/commit/20827906))
- **adt-pilot:** scaffold package — source, tests, config ([7713a2de](https://github.com/abapify/adt-cli/commit/7713a2de))
- **adt-pilot:** fix build — disable dts (OOM), explicit return types ([f51bebd1](https://github.com/abapify/adt-cli/commit/f51bebd1))
- **adt-pilot:** add local dev stack for HTTP MCP and Mastra playground ([#120](https://github.com/abapify/adt-cli/issues/120))
- **openai-codegen:** Wave 3 — aclass parse-gate + lexer extensions ([46bc7187](https://github.com/abapify/adt-cli/commit/46bc7187))
- **openspec:** add-abapify-pilot spec — proposal, design, specs, tasks ([194339f7](https://github.com/abapify/adt-cli/commit/194339f7))
- **openspec:** add arc-1-feature-parity change proposal with SDD artifacts ([5c7c17a5](https://github.com/abapify/adt-cli/commit/5c7c17a5))
- **p2:** include p2-cli in CI publish pipeline ([b34403f5](https://github.com/abapify/adt-cli/commit/b34403f5))
- **p2:** bootstrap npm publish metadata and trusted publishing ([c04afaca](https://github.com/abapify/adt-cli/commit/c04afaca))

### 🩹 Fixes

- apply cross-platform scanning and runtime configurability updates ([3726c837](https://github.com/abapify/adt-cli/commit/3726c837))
- address validation feedback for quote stripping and adt binary path ([9674624e](https://github.com/abapify/adt-cli/commit/9674624e))
- harden cross-platform resolver traversal and adt command execution ([8d057393](https://github.com/abapify/adt-cli/commit/8d057393))
- apply CodeRabbit auto-fixes ([97a6b90f](https://github.com/abapify/adt-cli/commit/97a6b90f))
- apply CodeRabbit auto-fixes ([68e47903](https://github.com/abapify/adt-cli/commit/68e47903))
- address PR review — regex security, method detection, BTP 404, lint gate, specs ([bf634260](https://github.com/abapify/adt-cli/commit/bf634260))
- reduce duplication, remove useless conditional, harden JSONC parser ([7181ab33](https://github.com/abapify/adt-cli/commit/7181ab33))
- guard starts\[0] with nullish coalescing for SonarCloud reliability ([77334cf7](https://github.com/abapify/adt-cli/commit/77334cf7))
- use localeCompare in sort for SonarCloud S2871 reliability ([a40e9dec](https://github.com/abapify/adt-cli/commit/a40e9dec))
- prefer-const lint error in cts tr objects command ([11da0c54](https://github.com/abapify/adt-cli/commit/11da0c54))
- apply prettier formatting to service.ts ([52dfffae](https://github.com/abapify/adt-cli/commit/52dfffae))
- optimize findObjectFiles index, restore transportNumber compat, dedup ImportContext ([4f08ee94](https://github.com/abapify/adt-cli/commit/4f08ee94))
- resolve SonarCloud reliability and duplication findings ([ac951739](https://github.com/abapify/adt-cli/commit/ac951739))
- use const variable for transportNumbers\[0] to avoid non-null assertions ([12dbce6c](https://github.com/abapify/adt-cli/commit/12dbce6c))
- **aclass:** proper regex metacharacter escaping in `kw()` helper ([77908b41](https://github.com/abapify/adt-cli/commit/77908b41))
- **aclass:** qualified method names + keyword method names ([cfe5839d](https://github.com/abapify/adt-cli/commit/cfe5839d))
- **aclass+openai-codegen:** address PR #111 review findings ([#111](https://github.com/abapify/adt-cli/issues/111))
- **adt-lint:** replace lazy '._?' with '\[^']_' in token regex to fix S5852/polynomial-redos ([6238f973](https://github.com/abapify/adt-cli/commit/6238f973))
- **adt-pilot:** use https in test/example URLs to clear SonarCloud hotspots ([f7246654](https://github.com/abapify/adt-cli/commit/f7246654))
- **adt-pilot:** use extensionless internal imports per bundler-imports rule ([d819a8de](https://github.com/abapify/adt-cli/commit/d819a8de))
- **adt-pilot:** align declared deps with actual usage ([ffa6346f](https://github.com/abapify/adt-cli/commit/ffa6346f))
- **adt-pilot:** address review and lint findings ([0d03daea](https://github.com/abapify/adt-cli/commit/0d03daea))
- **adt-pilot:** remove unused @mastra/mcp dep; fix URL log sanitization and docs port/env issues ([20092cee](https://github.com/abapify/adt-cli/commit/20092cee))
- **adt-pilot:** lint failure, URL credential leak, doc port inconsistencies ([6b018f8c](https://github.com/abapify/adt-cli/commit/6b018f8c))
- **adt-pilot:** address PR #121 review — docs, types, workspace deps ([#121](https://github.com/abapify/adt-cli/issues/121))
- **agents:** run Codex nx MCP via bunx to match monorepo convention ([a19a926f](https://github.com/abapify/adt-cli/commit/a19a926f))
- **security:** unblock SonarCloud Quality Gate on new_security_hotspots_reviewed ([#113](https://github.com/abapify/adt-cli/issues/113))
- **sonarcloud-review:** safe-guard JSON.stringify in S6551 helpers ([#113](https://github.com/abapify/adt-cli/issues/113))

### ❤️ Thank You

- CodeRabbit
- Cursor @cursoragent
- Devin @devin-ai-integration\[bot]
- Devin AI @devin-ai-integration\[bot]
- Petr Plenkov
- ThePlenkov @ThePlenkov

## 0.3.6 (2026-04-21)

### 🚀 Features

- **nx-cloud:** setup nx cloud workspace ([23de1e92](https://github.com/abapify/adt-cli/commit/23de1e92))

### 🩹 Fixes

- **ci:** trigger publish.yml on tag push, not via workflow_call ([dc91f860](https://github.com/abapify/adt-cli/commit/dc91f860))
- **ci:** chain release -> publish via workflow_dispatch (GITHUB_TOKEN push won't trigger) ([872e8a7c](https://github.com/abapify/adt-cli/commit/872e8a7c))
- **ci:** grant actions: write to release job so it can dispatch publish.yml ([fb842c3e](https://github.com/abapify/adt-cli/commit/fb842c3e))

### ❤️ Thank You

- Petr Plenkov

## 0.3.5 (2026-04-20)

### 🩹 Fixes

- **ci:** propagate id-token: write to publish job in release.yml ([2074dfcc](https://github.com/abapify/adt-cli/commit/2074dfcc))
- **ci:** disable Nx Cloud for publish job (org exceeded free plan) ([6a630228](https://github.com/abapify/adt-cli/commit/6a630228))
- **ci:** set NX_NO_CLOUD=true in release version step too ([aa7ecf14](https://github.com/abapify/adt-cli/commit/aa7ecf14))
- **release:** set preserveLocalDependencyProtocols=false so workspace:\* is resolved ([d201251d](https://github.com/abapify/adt-cli/commit/d201251d))

### ❤️ Thank You

- Petr Plenkov

## 0.3.4 (2026-04-20)

### 🩹 Fixes

- **ci:** clear setup-node .npmrc to enable OIDC trusted publishing ([aa9199fa](https://github.com/abapify/adt-cli/commit/aa9199fa))
- **ci:** nuke repo .npmrc entirely in publish job to unblock OIDC ([ab0d30d0](https://github.com/abapify/adt-cli/commit/ab0d30d0))
- **packages:** add repository/homepage/bugs to every published package ([e1853e48](https://github.com/abapify/adt-cli/commit/e1853e48))

### ❤️ Thank You

- Petr Plenkov

## 0.3.3 (2026-04-20)

### 🩹 Fixes

- **ci:** force npm as nx release publish driver (bun has no OIDC) ([434d80a5](https://github.com/abapify/adt-cli/commit/434d80a5))
- **ci:** set cli.packageManager=npm + bump npm for OIDC publishing ([#1](https://github.com/abapify/adt-cli/issues/1))
- **ci:** revert global nx.json cli.packageManager, keep job-local override ([1c75c732](https://github.com/abapify/adt-cli/commit/1c75c732))

### ❤️ Thank You

- Petr Plenkov

## 0.3.2 (2026-04-20)

### 🚀 Features

- **nx-npm-access:** add npm-fix target — auto-remediation, not just checks ([4da7ad10](https://github.com/abapify/adt-cli/commit/4da7ad10))
- **nx-npm-access:** add npm-prepare target — port /npm-publish prepare-ci ([3d5a3f3c](https://github.com/abapify/adt-cli/commit/3d5a3f3c))
- **tools:** nx-npm-access plugin — pre-release readiness check per package ([c8ee3940](https://github.com/abapify/adt-cli/commit/c8ee3940))

### 🩹 Fixes

- **nx-npm-trust:** don't fail when --fix successfully patched everything ([5f3b70d1](https://github.com/abapify/adt-cli/commit/5f3b70d1))
- **nx-npm-trust:** don't treat auto-fixable issues as lingering errors ([c5b1fda5](https://github.com/abapify/adt-cli/commit/c5b1fda5))
- **nx-npm-trust:** --prepare now speaks the right dialect of npm CLI ([b6e70d3f](https://github.com/abapify/adt-cli/commit/b6e70d3f))
- **nx-npm-trust:** don't pass scope registry override to `npm trust` ([ec45425c](https://github.com/abapify/adt-cli/commit/ec45425c))

### ❤️ Thank You

- Petr Plenkov

## 0.3.1 (2026-04-20)

### 🚀 Features

- **aclass:** Wave 0 — package skeleton + Chevrotain lexer ([78a31f33](https://github.com/abapify/adt-cli/commit/78a31f33))

### 🩹 Fixes

- **ci:** unblock v0.3.x release — npm scope override + Docker website workspace ([02d66b1b](https://github.com/abapify/adt-cli/commit/02d66b1b))

### ❤️ Thank You

- Devin @devin-ai-integration\[bot]
- Petr Plenkov

## 0.3.0 (2026-04-20)

### 🚀 Features

- add CTS tr reassign command to change transport owner ([cfd8b705](https://github.com/abapify/adt-cli/commit/cfd8b705))
- add package CRUD and object CRUD commands (class, program, interface) ([5fbb8600](https://github.com/abapify/adt-cli/commit/5fbb8600))
- add datapreview osql, abap run, and DDIC object commands ([9e9289e0](https://github.com/abapify/adt-cli/commit/9e9289e0))
- add AUnit sonar format, improved exit codes, and ATC customizing command ([fde59fab](https://github.com/abapify/adt-cli/commit/fde59fab))
- add CDS DDL and DCL source commands with XML injection fix ([6b49e9af](https://github.com/abapify/adt-cli/commit/6b49e9af))
- add checkout command and remaining CDS/DDIC subtask completions ([bf97ca6c](https://github.com/abapify/adt-cli/commit/bf97ca6c))
- **acds:** full CDS DDL/DCL grammar + AST walker + validators — E09 ([51fa799d](https://github.com/abapify/adt-cli/commit/51fa799d))
- **adt:** add user lookup command and system contract ([431e4e19](https://github.com/abapify/adt-cli/commit/431e4e19))
- **adt-mcp:** add 7 new MCP tools and adt source CLI command ([7c184ed1](https://github.com/abapify/adt-cli/commit/7c184ed1))
- **adt-mcp:** add 12 new tools for feature parity with vibing-steampunk (#H1-#H8) ([762e9938](https://github.com/abapify/adt-cli/commit/762e9938))
- **adt-mcp:** implement 14 medium-priority MCP tools (#M1-#M10)" ([170a2f68](https://github.com/abapify/adt-cli/commit/170a2f68))
- **adt-mcp:** Wave 1 — Streamable HTTP transport + stateful sessions + multi-system routing ([#110](https://github.com/abapify/adt-cli/issues/110))
- **adt-mcp:** Wave 2 — HTTP auth middleware (bearer + reverse-proxy + CORS) ([caf31a5c](https://github.com/abapify/adt-cli/commit/caf31a5c))
- **adt-mcp:** Wave 1-C — migrate tools to session-aware args + getAdtClientV2Safe ([1d4bb744](https://github.com/abapify/adt-cli/commit/1d4bb744))
- **adt-mcp:** Wave 4 — OAuth 2.1 bearer validation (Okta / Entra ID / Cognito) ([c25374c2](https://github.com/abapify/adt-cli/commit/c25374c2))
- **adt-mcp,adt-cli:** Wave 3 — transactional changesets (MCP + CLI parity) ([abcb5c3e](https://github.com/abapify/adt-cli/commit/abcb5c3e))
- **aunit:** ABAP Unit code coverage — JaCoCo output + CLI/MCP parity ([cbc19f4e](https://github.com/abapify/adt-cli/commit/cbc19f4e))
- **badi:** BAdI CRUD + real-SAP e2e harness — E03 ([dd0f8ff0](https://github.com/abapify/adt-cli/commit/dd0f8ff0))
- **checkin:** checkin via batch lock session — E08 ([027a172d](https://github.com/abapify/adt-cli/commit/027a172d))
- **contracts:** add datapreview, CTS useraction, DDL/DCL, tablesettings ([0eeea082](https://github.com/abapify/adt-cli/commit/0eeea082))
- **flp:** Fiori Launchpad read-only inventory — E14 ([aa8b42b5](https://github.com/abapify/adt-cli/commit/aa8b42b5))
- **function:** FUGR/FUNC CLI + MCP — E02 ([e763d35c](https://github.com/abapify/adt-cli/commit/e763d35c))
- **gcts:** AFF/gCTS format plugin — E06 ([665c16df](https://github.com/abapify/adt-cli/commit/665c16df))
- **gcts:** format.export — complete checkin roundtrip for gCTS — QC2 ([1f2442d8](https://github.com/abapify/adt-cli/commit/1f2442d8))
- **gcts-cli:** gCTS command plugin — E07 ([94583dc1](https://github.com/abapify/adt-cli/commit/94583dc1))
- **incl:** INCL CLI + MCP — E01 ([ffbe4db0](https://github.com/abapify/adt-cli/commit/ffbe4db0))
- **nx-cloud:** setup nx cloud workspace ([97f42b2c](https://github.com/abapify/adt-cli/commit/97f42b2c))
- **openai-codegen:** scaffold abap-ast + openai-codegen packages and openspec change ([b6aa7c89](https://github.com/abapify/adt-cli/commit/b6aa7c89))
- **openai-codegen:** Wave 1 — AST nodes, OAS loader, target profiles ([bc378eaa](https://github.com/abapify/adt-cli/commit/bc378eaa))
- **openai-codegen:** Wave 2 — printer, type emitter, inline cloud runtime ([43bd050f](https://github.com/abapify/adt-cli/commit/43bd050f))
- **openai-codegen:** Wave 3 — emitter, security, formats, CLI + petstore3 ([ffb2d4b5](https://github.com/abapify/adt-cli/commit/ffb2d4b5))
- **openai-codegen:** Wave 4 — split exception into global class, fix activation on Steampunk, live deploy proof ([ec6489ac](https://github.com/abapify/adt-cli/commit/ec6489ac))
- **openai-codegen:** scaffold abap-ast + openai-codegen packages and openspec change ([cacd75ba](https://github.com/abapify/adt-cli/commit/cacd75ba))
- **openai-codegen:** Wave 1 — AST nodes, OAS loader, target profiles ([ff040a46](https://github.com/abapify/adt-cli/commit/ff040a46))
- **openai-codegen:** Wave 2 — printer, type emitter, inline cloud runtime ([dec6857d](https://github.com/abapify/adt-cli/commit/dec6857d))
- **openai-codegen:** Wave 3 — emitter, security, formats, CLI + petstore3 ([b06c7022](https://github.com/abapify/adt-cli/commit/b06c7022))
- **openai-codegen:** Wave 4 — split exception into global class, fix activation on Steampunk, live deploy proof ([bb7ce303](https://github.com/abapify/adt-cli/commit/bb7ce303))
- **openai-codegen:** deterministic OpenAPI → ABAP client codegen ([00ed7120](https://github.com/abapify/adt-cli/commit/00ed7120))
- **openai-codegen:** Wave 1 v2 — AST ABAPDoc, naming+CLI, 4 emitters + templates ([ef71f004](https://github.com/abapify/adt-cli/commit/ef71f004))
- **openai-codegen:** Wave 2 v2 — impl class, INTF+locals format, generate.ts pipeline ([bdb8ba68](https://github.com/abapify/adt-cli/commit/bdb8ba68))
- **openai-codegen:** table query params + HTTP exception wrapping ([606ede32](https://github.com/abapify/adt-cli/commit/606ede32))
- **parity:** 15 new MCP tools + CLI↔MCP e2e test harness ([457c3cc5](https://github.com/abapify/adt-cli/commit/457c3cc5))
- **plugin:** FormatPlugin API foundation — E05 ([a4e6eeef](https://github.com/abapify/adt-cli/commit/a4e6eeef))
- **rap:** BDEF (Behavior Definition) CRUD — E10 ([af89d726](https://github.com/abapify/adt-cli/commit/af89d726))
- **rap:** SRVD (Service Definition) CRUD — E11 ([0c3cb7e1](https://github.com/abapify/adt-cli/commit/0c3cb7e1))
- **rap:** SRVB (Service Binding) CRUD + publish/unpublish — E12 ([f8b6c3ce](https://github.com/abapify/adt-cli/commit/f8b6c3ce))
- **real-e2e:** TRL backfill sweep + WB where-used 2-step POST fix ([13e777da](https://github.com/abapify/adt-cli/commit/13e777da))
- **rfc:** SOAP-over-HTTP RFC transport + adt rfc command — E13 ([45487cc4](https://github.com/abapify/adt-cli/commit/45487cc4))
- **strust:** STRUST PSE/cert CLI + MCP — E04 ([7a4ed04f](https://github.com/abapify/adt-cli/commit/7a4ed04f))
- **wb:** workbench CLI + real-e2e uncovers MCP endpoint bugs — E15 ([f2d73d4b](https://github.com/abapify/adt-cli/commit/f2d73d4b))

### 🩹 Fixes

- apply CodeRabbit auto-fixes ([5554994b](https://github.com/abapify/adt-cli/commit/5554994b))
- add comment explaining DEVC case-preservation in URI resolution ([6e97dbb8](https://github.com/abapify/adt-cli/commit/6e97dbb8))
- replace manual XML building and fast-xml-parser with schema-based contracts ([c91f3745](https://github.com/abapify/adt-cli/commit/c91f3745))
- address all PR #99 review findings ([#99](https://github.com/abapify/adt-cli/issues/99), [#5](https://github.com/abapify/adt-cli/issues/5))
- resolve all pre-existing typecheck + test failures — QC1 ([81152316](https://github.com/abapify/adt-cli/commit/81152316))
- drop CDATA branch from TAG_RE in adt-rfc — CodeQL final ([708ca6c4](https://github.com/abapify/adt-cli/commit/708ca6c4))
- replace TAG_RE loop with split-based tokenizer — CodeQL final ([c32db2ed](https://github.com/abapify/adt-cli/commit/c32db2ed))
- broaden Z-prefix regex, mark test class in abapGit metadata ([6ae8fa61](https://github.com/abapify/adt-cli/commit/6ae8fa61))
- **adt-cli:** harden user command JSON mode and input validation ([f1d980de](https://github.com/abapify/adt-cli/commit/f1d980de))
- **adt-mcp:** extract resolveObjectUri helper to eliminate code duplication ([99d4d0cd](https://github.com/abapify/adt-cli/commit/99d4d0cd))
- **adt-mcp:** also deduplicate activate-object loop; improve QuickSearchClient JSDoc ([a63a4a4a](https://github.com/abapify/adt-cli/commit/a63a4a4a))
- **adt-mcp:** fix missing closing parenthesis in get-table-contents schema description ([d7f8b4c9](https://github.com/abapify/adt-cli/commit/d7f8b4c9))
- **adt-mcp:** format all new tool files + fix mock server route ordering ([2818f49e](https://github.com/abapify/adt-cli/commit/2818f49e))
- **adt-mcp:** resolve SonarQube quality gate failures ([0c6d97c3](https://github.com/abapify/adt-cli/commit/0c6d97c3))
- **adt-mcp:** address SonarCloud blockers in PR 101 ([a001dede](https://github.com/abapify/adt-cli/commit/a001dede))
- **adt-mcp:** address post-merge PR 101 review findings ([#101](https://github.com/abapify/adt-cli/issues/101))
- **adt-mcp:** lint — preserve cause + no-fallthrough on --help case ([#110](https://github.com/abapify/adt-cli/issues/110))
- **adt-mcp:** ReDoS in Bearer extraction (CodeQL finding) ([#110](https://github.com/abapify/adt-cli/issues/110))
- **adt-mcp:** SonarCloud quality gate — reduce duplication + fix dead-code CORS branch + Dockerfile hardening ([de6c1ccf](https://github.com/abapify/adt-cli/commit/de6c1ccf))
- **adt-mcp:** address Devin Review findings ([684d5d1c](https://github.com/abapify/adt-cli/commit/684d5d1c))
- **adt-mcp:** address review findings (Devin + Copilot) ([49e25a2c](https://github.com/abapify/adt-cli/commit/49e25a2c))
- **adt-mcp:** merge tool-call credentials in resolveClient path 3 (Devin finding) ([75a7d211](https://github.com/abapify/adt-cli/commit/75a7d211))
- **adt-mcp:** don't leak locks on force=true rollback failure + docs match code (Devin findings) ([8c2f1334](https://github.com/abapify/adt-cli/commit/8c2f1334))
- **adt-mcp:** reject systemId mismatch in sap_connect + async resolveClient (Devin findings) ([b8373868](https://github.com/abapify/adt-cli/commit/b8373868))
- **ci:** resolve CodeQL ReDoS + code-quality findings, fix main CI ([b4bfebc6](https://github.com/abapify/adt-cli/commit/b4bfebc6))
- **ci:** restore ADT coverage contract files swallowed by .gitignore ([cd6c5d56](https://github.com/abapify/adt-cli/commit/cd6c5d56))
- **ci:** adt-cli tests depend on adt-mcp:build (harness imports it) ([faa86972](https://github.com/abapify/adt-cli/commit/faa86972))
- **ci:** use bun run wrappers in website nx targets (docusaurus binary resolution) ([5f27db13](https://github.com/abapify/adt-cli/commit/5f27db13))
- **ci:** add website to workspaces + use bunx in scripts for binary resolution ([c5c528bb](https://github.com/abapify/adt-cli/commit/c5c528bb))
- **docker:** explicit chmod a-w to satisfy SonarCloud docker:S6504 ([d3d61c13](https://github.com/abapify/adt-cli/commit/d3d61c13))
- **docker:** use root:root owner + 755/644 for COPY (Sonar S6504 compliant) ([d910fd5f](https://github.com/abapify/adt-cli/commit/d910fd5f))
- **openai-codegen:** emit ABAP_LANGUAGE_VERSION=5 + verify live deploy on TRL ([0441dbae](https://github.com/abapify/adt-cli/commit/0441dbae))
- **openai-codegen:** server prefix, client cleanup, configurable json class, default-is-success ordering ([#109](https://github.com/abapify/adt-cli/issues/109))
- **openai-codegen,abap-ast:** Steampunk activation fixes ([b1bb602e](https://github.com/abapify/adt-cli/commit/b1bb602e))
- **openai-codegen,abap-ast:** address PR #109 review feedback + CI ([#109](https://github.com/abapify/adt-cli/issues/109))
- **openai-codegen,abap-ast:** more PR #109 review fixes ([#109](https://github.com/abapify/adt-cli/issues/109))
- **pr-103:** address review comments — type safety, parity, harness, policy ([#103](https://github.com/abapify/adt-cli/issues/103))
- **security:** replace regex XML parsing with @xmldom/xmldom — CodeQL + Sonar ([c72533af](https://github.com/abapify/adt-cli/commit/c72533af))
- **security:** resolve all remaining CodeQL alerts with source-level fixes ([734713bc](https://github.com/abapify/adt-cli/commit/734713bc))
- **security:** resolve remaining SonarCloud hotspots + reliability bugs ([f860bddb](https://github.com/abapify/adt-cli/commit/f860bddb))
- **security:** 6 more .sort() comparators — SonarCloud S2871 ([646dbe47](https://github.com/abapify/adt-cli/commit/646dbe47))
- **security:** replace hardcoded mock password with randomBytes — S2068 ([d5031bc8](https://github.com/abapify/adt-cli/commit/d5031bc8))

### ❤️ Thank You

- CodeRabbit
- Codex @oai-codex
- Devin @devin-ai-integration\[bot]
- Petr Plenkov
- ThePlenkov @ThePlenkov

## 0.2.0 (2026-04-02)

### 🚀 Features

- add PROG (Program) and FUGR (Function Group) ABAP object type support ([d3ebf34](https://github.com/abapify/adt-cli/commit/d3ebf34))
- enhance service key authentication and add redirect URI support ([4e2276f](https://github.com/abapify/adt-cli/commit/4e2276f))
- fix ADT export XML serialization and live-test on BTP + on-prem ([dbe608b](https://github.com/abapify/adt-cli/commit/dbe608b))
- optimize export by skipping unchanged sources and auto-creating packages ([172d91c](https://github.com/abapify/adt-cli/commit/172d91c))
- move single-source save lifecycle to base class and add default unchanged detection ([b6f58a5](https://github.com/abapify/adt-cli/commit/b6f58a5))
- add nx format:write pre-commit instruction to GitHub Copilot config ([185db86](https://github.com/abapify/adt-cli/commit/185db86))
- add @fission-ai/openspec dependency for spec management ([f185730](https://github.com/abapify/adt-cli/commit/f185730))
- remove OAT format everywhere, make abapgit the default ([4596efd](https://github.com/abapify/adt-cli/commit/4596efd))
- abapGit roundtrip - export, deploy, and structure support ([0da189a](https://github.com/abapify/adt-cli/commit/0da189a))
- add adt diff command and fix CDS-to-abapGit serialization ([130168d](https://github.com/abapify/adt-cli/commit/130168d))
- resolve DDIC metadata via ADT for zero-diff TABL serialization ([a8198fa](https://github.com/abapify/adt-cli/commit/a8198fa))
- **adk:** add FunctionModule support with POST-then-PUT save flow, fix ETag refresh after metadata PUT ([5db28a6](https://github.com/abapify/adt-cli/commit/5db28a6))
- **adk:** improve FUNC save reliability — skip POST if exists, compare function body only, add DEVC skeleton ([b9469e0](https://github.com/abapify/adt-cli/commit/b9469e0))
- **adk:** add metadata-only unchanged detection, fix bulk save progress counter ([ee2f4dc](https://github.com/abapify/adt-cli/commit/ee2f4dc))
- **adk,adt-cli:** add FUGR name normalization, lock handle persistence, and root URI extraction ([ee2c300](https://github.com/abapify/adt-cli/commit/ee2c300))
- **adk,adt-cli:** centralize lock operations in LockService, add force-unlock, remove duplicate lock logic ([66da454](https://github.com/abapify/adt-cli/commit/66da454))
- **adk,adt-cli:** fix ETag invalidation after lock acquisition, improve DEVC subpackage filtering, add --objects to package get ([979aad9](https://github.com/abapify/adt-cli/commit/979aad9))
- **adt-auth:** add port retry logic for OAuth callback server, fix refresh logging ([cef30df](https://github.com/abapify/adt-cli/commit/cef30df))
- **adt-contracts:** split Accept vs Content-Type headers in crud() ([f16f525](https://github.com/abapify/adt-cli/commit/f16f525))
- **adt-diff:** add --format ddl option and fix CDS DDL generation ([5ba5e65](https://github.com/abapify/adt-cli/commit/5ba5e65))
- **adt-diff:** support multi-file and glob patterns in diff command ([c0c3128](https://github.com/abapify/adt-cli/commit/c0c3128))
- **adt-diff:** rename --format to --source, add annotation filtering for CDS comparison ([07a59da](https://github.com/abapify/adt-cli/commit/07a59da))
- **adt-diff:** add --raw mode, fix abapLanguageVersion auth issue, defer CLAS include saves ([e0b4c04](https://github.com/abapify/adt-cli/commit/e0b4c04))
- **adt-export:** remove full-repo scan fallback, add package validation and cascade skip logic ([e6fe28b](https://github.com/abapify/adt-cli/commit/e6fe28b))
- **cds-to-abapgit:** detect LANGDEP from spras/lang fields in CDS ([ff711e8](https://github.com/abapify/adt-cli/commit/ff711e8))
- **ddic:** add abapGit handlers for TABL and TTYP object types ([41b6a4b](https://github.com/abapify/adt-cli/commit/41b6a4b))

### 🩹 Fixes

- remove package-lock.json and switch nx to use bun as package manager ([44b7ff9](https://github.com/abapify/adt-cli/commit/44b7ff9))
- restore package-lock.json, revert packageManager to npm, add legacy-peer-deps ([1bbf03d](https://github.com/abapify/adt-cli/commit/1bbf03d))
- correct .gitignore corruption and add FUGR fromAbapGit comment ([cbb35d4](https://github.com/abapify/adt-cli/commit/cbb35d4))
- update fast-xml-parser dependency to version 5.5.3 ([7e0b6d6](https://github.com/abapify/adt-cli/commit/7e0b6d6))
- preserve targetNamespace xmlns in stripUnusedNamespaces + null guard in config-loader ([caad1a5](https://github.com/abapify/adt-cli/commit/caad1a5))
- address all SonarQube findings for PR #81 ([#81](https://github.com/abapify/adt-cli/issues/81))
- exclude generated schema files from SonarQube analysis to fix quality gate ([014ad88](https://github.com/abapify/adt-cli/commit/014ad88))
- add SonarCloud organization and project key to sonar-project.properties ([394c670](https://github.com/abapify/adt-cli/commit/394c670))
- resolve SonarCloud quality gate failures ([e8cfed9](https://github.com/abapify/adt-cli/commit/e8cfed9))
- address remaining SonarQube findings - complexity, duplication, and code quality ([11a3408](https://github.com/abapify/adt-cli/commit/11a3408))
- update sonar-project.properties with exclusions and project key ([dc374f8](https://github.com/abapify/adt-cli/commit/dc374f8))
- use \[^<]+ in XML tag regexes to require non-empty content ([b459ea7](https://github.com/abapify/adt-cli/commit/b459ea7))
- simplify sonar exclusions to **/generated/** ([ecc42c5](https://github.com/abapify/adt-cli/commit/ecc42c5))
- simplify sonar exclusions to **/generated/** ([2c2dad3](https://github.com/abapify/adt-cli/commit/2c2dad3))
- remove trailing blank lines from sonar-project.properties ([56b8e5e](https://github.com/abapify/adt-cli/commit/56b8e5e))
- run nx format:write to fix formatting on OpenSpec files ([5c9fcb1](https://github.com/abapify/adt-cli/commit/5c9fcb1))
- resolve merge conflict and fix SonarQube duplication findings ([f1edc75](https://github.com/abapify/adt-cli/commit/f1edc75))
- resolve SonarQube quality gate failures (security hotspot + duplication) ([12bd3b8](https://github.com/abapify/adt-cli/commit/12bd3b8))
- address Copilot and Devin review findings ([a6c4707](https://github.com/abapify/adt-cli/commit/a6c4707))
- **abapgit:** align dd02v and dd03p field order ([d7578d3](https://github.com/abapify/adt-cli/commit/d7578d3))
- **adk:** robust upsert fallback for DDIC objects (405/422 handling) ([ac0d580](https://github.com/abapify/adt-cli/commit/ac0d580))
- **adk:** address PR review findings - reset \_unchanged, deduplicate fallback, case-insensitive error matching ([2816dd4](https://github.com/abapify/adt-cli/commit/2816dd4))
- **adk:** remove false from isEmpty in checkMetadataUnchanged ([7b3bbeb](https://github.com/abapify/adt-cli/commit/7b3bbeb))
- **adt-diff:** use .acds extension for CDS DDL diff display ([b1357ac](https://github.com/abapify/adt-cli/commit/b1357ac))
- **adt-diff:** align zage_tabl test expectations with fixture ([591ea22](https://github.com/abapify/adt-cli/commit/591ea22))
- **adt-export:** convert static import of lazy-loaded library to dynamic import ([a5ded59](https://github.com/abapify/adt-cli/commit/a5ded59))
- **cds-to-abapgit:** stop emitting LANGDEP, CLIDEP, POSITION from CDS source ([0d06b3c](https://github.com/abapify/adt-cli/commit/0d06b3c))
- **cds-to-abapgit:** correct DD03P field ordering to match SAP ([20a4ac7](https://github.com/abapify/adt-cli/commit/20a4ac7))
- **cds-to-abapgit:** detect CLIDEP for client-dependent tables ([50e1200](https://github.com/abapify/adt-cli/commit/50e1200))

### ❤️ Thank You

- Devin @devin-ai-integration\[bot]
- Petr Plenkov
- ThePlenkov @ThePlenkov

## 0.1.8 (2026-03-11)

### 🚀 Features

- add granular publish inputs to release workflow ([95a890c](https://github.com/abapify/adt-cli/commit/95a890c))
- add latest Docker tag when publishing releases ([8eb4cf1](https://github.com/abapify/adt-cli/commit/8eb4cf1))
- add Copilot hooks to auto-approve waiting workflow runs ([10245a6](https://github.com/abapify/adt-cli/commit/10245a6))
- log all tool calls to JSON via postToolUse hook, print on sessionEnd ([1902d5f](https://github.com/abapify/adt-cli/commit/1902d5f))
- add --service-key CLI option, Bearer token support, and CI e2e auth test ([9f6710a](https://github.com/abapify/adt-cli/commit/9f6710a))
- **adt-auth:** add service-key auth plugin and env resolver ([6bdb0c8](https://github.com/abapify/adt-cli/commit/6bdb0c8))
- **adt-mcp:** implement MCP server package with tools and mock backend ([f625d32](https://github.com/abapify/adt-cli/commit/f625d32))
- **adt-mcp:** add adt-mcp package from PR #59, resolving conflicts with main ([#59](https://github.com/abapify/adt-cli/issues/59))
- **nx-cloud:** setup nx cloud workspace ([4a29f8a](https://github.com/abapify/adt-cli/commit/4a29f8a))
- **nx-cloud:** setup nx cloud workspace ([63f92c9](https://github.com/abapify/adt-cli/commit/63f92c9))
- **nx-cloud:** setup nx cloud workspace ([64881ab](https://github.com/abapify/adt-cli/commit/64881ab))

### 🩹 Fixes

- correct @abapify/speci/client doc reference to use /rest subpath ([6076db7](https://github.com/abapify/adt-cli/commit/6076db7))
- address all Qodo review comments from today's PRs (#44-#49) ([#44](https://github.com/abapify/adt-cli/issues/44), [#49](https://github.com/abapify/adt-cli/issues/49), [#48](https://github.com/abapify/adt-cli/issues/48), [#47](https://github.com/abapify/adt-cli/issues/47), [#46](https://github.com/abapify/adt-cli/issues/46), [#45](https://github.com/abapify/adt-cli/issues/45))
- add missing tsdown.config.ts to Docker build context ([a3b62a1](https://github.com/abapify/adt-cli/commit/a3b62a1))
- add tsdown.config.ts to Dockerfile COPY command to fix Docker build ([5fcffca](https://github.com/abapify/adt-cli/commit/5fcffca))
- exclude root abapify project from Docker build ([3b92804](https://github.com/abapify/adt-cli/commit/3b92804))
- add build step before publish to include dist/ in packages ([a401f5c](https://github.com/abapify/adt-cli/commit/a401f5c))
- remove build target from root abapify project.json ([919fe89](https://github.com/abapify/adt-cli/commit/919fe89))
- exclude workspace root tsdown.config.ts from nx-tsdown plugin ([d57a8bd](https://github.com/abapify/adt-cli/commit/d57a8bd))
- add missing zod dependency to adt-schemas and ts-xsd, bump to 0.1.9 ([9c23f17](https://github.com/abapify/adt-cli/commit/9c23f17))
- add missing ts-morph and adk deps, bump to 0.1.10 ([513bcb9](https://github.com/abapify/adt-cli/commit/513bcb9))
- correct husky hook path in git-commit skill (core.hooksPath = .husky/\_) ([bfcd9e8](https://github.com/abapify/adt-cli/commit/bfcd9e8))
- remove adt-client↔adk circular dep; add nx-ci pre-commit skill ([6d2075d](https://github.com/abapify/adt-cli/commit/6d2075d))
- checkout PR head in CI to avoid 3-way merge re-introducing circular dep ([0b35753](https://github.com/abapify/adt-cli/commit/0b35753))
- remove @abapify/adk from adt-client deps (circular dep, re-added by merge commit) ([87f267d](https://github.com/abapify/adt-cli/commit/87f267d))
- run lint/test/build in pre-commit hook (same as CI) ([c685732](https://github.com/abapify/adt-cli/commit/c685732))
- remove @abapify/adk from adt-client deps (circular dep, re-added by merge commit) ([550a1d1](https://github.com/abapify/adt-cli/commit/550a1d1))
- checkout PR head in CI to avoid 3-way merge re-introducing circular dep ([083897d](https://github.com/abapify/adt-cli/commit/083897d))
- exclude workspace root tsdown.config.ts from nx-tsdown plugin ([96fbec3](https://github.com/abapify/adt-cli/commit/96fbec3))
- add adt bin symlinks in Docker image ([21aa590](https://github.com/abapify/adt-cli/commit/21aa590))
- Docker image - fix adt bin symlink paths and CMD ([47f983c](https://github.com/abapify/adt-cli/commit/47f983c))
- update devcontainer features configuration ([dcbf9bd](https://github.com/abapify/adt-cli/commit/dcbf9bd))
- update base image to latest TypeScript Node version ([45a2c14](https://github.com/abapify/adt-cli/commit/45a2c14))
- query action_required status in approve-workflows.sh hook script ([d40d3b5](https://github.com/abapify/adt-cli/commit/d40d3b5))
- add copilot/\*\* push trigger to ci.yml and improve hook to check both approval statuses ([b2c4f5e](https://github.com/abapify/adt-cli/commit/b2c4f5e))
- add auto-approve workflow for Copilot CI runs and improve hook coverage ([3eeedf6](https://github.com/abapify/adt-cli/commit/3eeedf6))
- use schedule trigger in auto-approve-copilot-ci.yml to break approval deadlock ([1ce442a](https://github.com/abapify/adt-cli/commit/1ce442a))
- add copilot/\*\* push trigger to ci.yml so CI runs without approval ([d858434](https://github.com/abapify/adt-cli/commit/d858434))
- retry workflow approval after report_progress (push) tool call ([a929799](https://github.com/abapify/adt-cli/commit/a929799))
- test-hooks.sh approve-workflows tests failing in CI (detached HEAD + PATH bug) ([1d86678](https://github.com/abapify/adt-cli/commit/1d86678))
- readServiceKey only accepts file paths; clear error when raw JSON passed ([664d857](https://github.com/abapify/adt-cli/commit/664d857))
- --service-key must point to a file path, not raw JSON ([d72de44](https://github.com/abapify/adt-cli/commit/d72de44))
- remove inlinedDependencies and alwaysBundle from adt-cli tsdown config ([f276b10](https://github.com/abapify/adt-cli/commit/f276b10))
- restore package-lock.json tracking, switch CI to npm ci to fix eslint external dep resolution ([f7de5a7](https://github.com/abapify/adt-cli/commit/f7de5a7))
- release workflow always checks out and commits to main branch ([e3b57e7](https://github.com/abapify/adt-cli/commit/e3b57e7))
- **adt-mcp:** resolve SonarQube E Security Rating findings ([5ab60c3](https://github.com/abapify/adt-cli/commit/5ab60c3))
- **adt-mcp:** resolve all SonarQube issues blocking PR #59 quality gate ([#59](https://github.com/abapify/adt-cli/issues/59))
- **adt-mcp:** resolve remaining SonarQube issues ([e172e72](https://github.com/abapify/adt-cli/commit/e172e72))
- **adt-mcp:** apply PR review feedback - not-yet-impl errors, semver deps, mock, docs ([e2e274d](https://github.com/abapify/adt-cli/commit/e2e274d))
- **ci:** restore ci.yml (bun install), set nx.json cli.packageManager=npm to fix eslint dep resolution ([c7b1ce8](https://github.com/abapify/adt-cli/commit/c7b1ce8))
- **docker:** disable nx daemon/TUI and reduce parallelism to fix exit code 130 ([53a4df3](https://github.com/abapify/adt-cli/commit/53a4df3))
- **lint:** fix 3 CI failures: ts-xsd lint, adt-cli lazy-load error, adt-contracts test header ([c7b856c](https://github.com/abapify/adt-cli/commit/c7b856c))
- **sonarqube:** fix code quality issues from PR #76 ([#76](https://github.com/abapify/adt-cli/issues/76))
- **ts-xsd:** fix NamedNodeMap/NodeList iteration and resolve bugs ([1d4a5dd](https://github.com/abapify/adt-cli/commit/1d4a5dd))

### ❤️ Thank You

- Claude
- Petr Plenkov
- ThePlenkov @ThePlenkov

## 0.1.7 (2026-03-02)

### 🚀 Features

- add GitHub Packages publish workflow ([94f75e3](https://github.com/abapify/adt-cli/commit/94f75e3))
- move all packages to @abapify namespace for GitHub Registry publishing ([e54b934](https://github.com/abapify/adt-cli/commit/e54b934))

### 🩹 Fixes

- use github.ref_name as fallback in Resolve ref step ([ed8d8b9](https://github.com/abapify/adt-cli/commit/ed8d8b9))
- simplify ref resolution and update version input descriptions ([c2fa443](https://github.com/abapify/adt-cli/commit/c2fa443))
- remove version input from workflow_dispatch - use built-in branch/tag selector ([b2aa7d7](https://github.com/abapify/adt-cli/commit/b2aa7d7))
- remove scope restriction in publish-gpr workflow so unscoped packages go to GitHub Packages ([b85984e](https://github.com/abapify/adt-cli/commit/b85984e))

### ❤️ Thank You

- ThePlenkov @ThePlenkov

## 0.1.6 (2026-03-02)

### 🚀 Features

- make publish workflow version input optional, default to latest release tag ([c11fa28](https://github.com/abapify/adt-cli/commit/c11fa28))
- add Docker image CI workflow and Dockerfile ([8f3f970](https://github.com/abapify/adt-cli/commit/8f3f970))
- add Bun standalone executable support with all plugins bundled ([62c53a9](https://github.com/abapify/adt-cli/commit/62c53a9))

### 🩹 Fixes

- separate release and publish pipelines; mark adt-fixtures as private ([0836c32](https://github.com/abapify/adt-cli/commit/0836c32))
- add configVersion to bun.lock ([92a5f1f](https://github.com/abapify/adt-cli/commit/92a5f1f))
- remove redundant test dependency from nx-release-publish ([6f0b8c8](https://github.com/abapify/adt-cli/commit/6f0b8c8))
- update tsdown configuration to use deps for bundling options ([56ef0e7](https://github.com/abapify/adt-cli/commit/56ef0e7))
- update nxCloudId and rename nx-release-publish target ([96066fd](https://github.com/abapify/adt-cli/commit/96066fd))
- remove unnecessary type assertion from tsdown configuration ([0268f3a](https://github.com/abapify/adt-cli/commit/0268f3a))
- remove unused UserConfig import from tsdown configuration ([30a2d2e](https://github.com/abapify/adt-cli/commit/30a2d2e))
- restrict Docker image builds to releases only ([0cee55a](https://github.com/abapify/adt-cli/commit/0cee55a))
- update nxCloudId and ensure nx-cloud fix-ci runs always ([b1b7561](https://github.com/abapify/adt-cli/commit/b1b7561))

### ❤️ Thank You

- Petr Plenkov
- ThePlenkov @ThePlenkov

## 0.1.5 (2026-02-28)

### 🩹 Fixes

- **release:** use NPM_CONFIG_TOKEN for bun publish authentication ([e014da2](https://github.com/abapify/adt-cli/commit/e014da2))

### ❤️ Thank You

- ThePlenkov @ThePlenkov

## 0.1.4 (2026-02-28)

### 🩹 Fixes

- **release:** add BUN_AUTH_TOKEN for bun publish authentication ([fa6657d](https://github.com/abapify/adt-cli/commit/fa6657d))

### ❤️ Thank You

- ThePlenkov @ThePlenkov

## 0.1.3 (2026-02-28)

### 🩹 Fixes

- **asjson-parser:** migrate from @nx/rollup to tsdown, drop nx@21 dep ([016cff4](https://github.com/abapify/adt-cli/commit/016cff4))
- **asjson-parser:** add tsconfig: 'tsconfig.lib.json' to tsdown config to avoid references error ([5290dd6](https://github.com/abapify/adt-cli/commit/5290dd6))
- **release:** publish packages directly in release workflow, remove dead publish.yml ([d6d8307](https://github.com/abapify/adt-cli/commit/d6d8307))

### ❤️ Thank You

- Claude

## 0.1.2 (2026-02-28)

### 🚀 Features

- add @abapify/btp-service-key-parser package with service key parsing and validation ([8113699](https://github.com/abapify/adt-cli/commit/8113699))
- implement OAuth token fetching and validation with comprehensive tests ([81eb612](https://github.com/abapify/adt-cli/commit/81eb612))
- Enhance BTP service key parser with OAuth token fetching and CLI tool ([c534255](https://github.com/abapify/adt-cli/commit/c534255))
- Implement OAuth 2.0 PKCE authentication flow for ADT CLI ([0504784](https://github.com/abapify/adt-cli/commit/0504784))
- Add discovery XML parsing and output options to ADT CLI ([590ee90](https://github.com/abapify/adt-cli/commit/590ee90))
- remove legacy ADT authentication test scripts ([1053e79](https://github.com/abapify/adt-cli/commit/1053e79))
- update ADT CLI documentation and enhance settings for vitest ([de50d4f](https://github.com/abapify/adt-cli/commit/de50d4f))
- enhance authentication flow with automatic token refresh and add refresh_token to OAuthToken ([746db44](https://github.com/abapify/adt-cli/commit/746db44))
- implement transport management and discovery services with comprehensive command support ([2392b48](https://github.com/abapify/adt-cli/commit/2392b48))
- enhance transport list command with full ADT protocol support and debug mode ([4d0ae84](https://github.com/abapify/adt-cli/commit/4d0ae84))
- add transport get command for detailed transport and task information ([d2f4e9e](https://github.com/abapify/adt-cli/commit/d2f4e9e))
- implement transport creation command with CSRF protection and session handling ([ec87264](https://github.com/abapify/adt-cli/commit/ec87264))
- enhance authentication and user detection for improved session management ([6fecd95](https://github.com/abapify/adt-cli/commit/6fecd95))
- improve authentication success feedback and server closure ([de77a00](https://github.com/abapify/adt-cli/commit/de77a00))
- add search and import commands for ABAP objects ([5a8e757](https://github.com/abapify/adt-cli/commit/5a8e757))
- refactor CLI command structure for improved modularity ([7f19808](https://github.com/abapify/adt-cli/commit/7f19808))
- enhance abapGit format with disclaimer and update import command help ([d278034](https://github.com/abapify/adt-cli/commit/d278034))
- enhance import command and ADT client for improved performance and error handling ([1074607](https://github.com/abapify/adt-cli/commit/1074607))
- improve ATC polling with progress and completeness checks ([3f9e441](https://github.com/abapify/adt-cli/commit/3f9e441))
- add support for GitLab and SARIF output formats to ATC command ([9e4a858](https://github.com/abapify/adt-cli/commit/9e4a858))
- enhance OAT format with detailed structure, metadata schema, and integration documentation ([0a580fc](https://github.com/abapify/adt-cli/commit/0a580fc))
- standardize OAT directory structure to lowercase for consistency ([2b6643b](https://github.com/abapify/adt-cli/commit/2b6643b))
- implement package-based directory structure and enhance config handling for OAT format ([5af72f9](https://github.com/abapify/adt-cli/commit/5af72f9))
- add petstore e2e example with interface and tests ([a2093f2](https://github.com/abapify/adt-cli/commit/a2093f2))
- mount git and ssh configs into devcontainer for auth persistence ([a590d07](https://github.com/abapify/adt-cli/commit/a590d07))
- add transport import functionality to ADT CLI with specification-driven development docs ([4d0023d](https://github.com/abapify/adt-cli/commit/4d0023d))
- add codeium config mount to devcontainer for persistent AI settings ([76226a2](https://github.com/abapify/adt-cli/commit/76226a2))
- implement transport object extraction from ADT API endpoint ([aeb6a28](https://github.com/abapify/adt-cli/commit/aeb6a28))
- enhance transport get command with tree-style task and object display ([c9bd4ce](https://github.com/abapify/adt-cli/commit/c9bd4ce))
- add uv package manager to devcontainer for Python dependencies ([c1eaa3d](https://github.com/abapify/adt-cli/commit/c1eaa3d))
- remove cds2abap and btp-service-key-parser packages ([c4988be](https://github.com/abapify/adt-cli/commit/c4988be))
- enhance README with AI development guidelines and project structure ([70d1019](https://github.com/abapify/adt-cli/commit/70d1019))
- add parallel flag to affected tasks in CI ([406e0d9](https://github.com/abapify/adt-cli/commit/406e0d9))
- update adk package and nx target defaults ([ef0199d](https://github.com/abapify/adt-cli/commit/ef0199d))
- Implement decorator-based XML composition system for ADK ([45b9547](https://github.com/abapify/adt-cli/commit/45b9547))
- add inheritance support to xmld with metadata merging and build system updates ([089abe9](https://github.com/abapify/adt-cli/commit/089abe9))
- add @attributes convenience decorator for XML attribute flattening ([ffe07c2](https://github.com/abapify/adt-cli/commit/ffe07c2))
- Implement deploy and lock/unlock commands for SAP ADT objects ([389baac](https://github.com/abapify/adt-cli/commit/389baac))
- Enhance ADT client with object locking and session management features ([2484f8f](https://github.com/abapify/adt-cli/commit/2484f8f))
- add container name to devcontainer configuration for abapify-js ([1c5a69b](https://github.com/abapify/adt-cli/commit/1c5a69b))
- add docker-mcp plugin and disable moby in devcontainer setup ([b989eba](https://github.com/abapify/adt-cli/commit/b989eba))
- Add Basic Authentication support for on-premise SAP systems ([#8](https://github.com/abapify/adt-cli/pull/8))
- add XML/XSLT processing and JSON validation dependencies ([57a7074](https://github.com/abapify/adt-cli/commit/57a7074))
- reorganize schemas to generated folder and enhance XSD codegen ([feb3c97](https://github.com/abapify/adt-cli/commit/feb3c97))
- decommission old transport commands, add cts tr commands, adt-tui package ([f84a58a](https://github.com/abapify/adt-cli/commit/f84a58a))
- **adk:** enhance ADK package with class and interface support, update dependencies and build process ([75777b9](https://github.com/abapify/adt-cli/commit/75777b9))
- **adk:** implement ADT XML parsing for ABAP objects ([c26a781](https://github.com/abapify/adt-cli/commit/c26a781))
- **adk:** implement ADK architecture alignment with lazy loading ([b3a52fa](https://github.com/abapify/adt-cli/commit/b3a52fa))
- **adt-cli:** add ADT XML export option to get command ([9ec3e2b](https://github.com/abapify/adt-cli/commit/9ec3e2b))
- **adt-cli:** add object structure option to get command ([a12dcd5](https://github.com/abapify/adt-cli/commit/a12dcd5))
- **adt-cli:** enhance get command with object structure display for classes ([d318d1a](https://github.com/abapify/adt-cli/commit/d318d1a))
- **adt-cli:** integrate ADK for native ADT XML parsing in CLI ([cae8836](https://github.com/abapify/adt-cli/commit/cae8836))
- **adt-cli:** enhance object inspection with properties and outline commands ([af39c45](https://github.com/abapify/adt-cli/commit/af39c45))
- **adt-cli:** refine get command output and enhance object properties display ([019bd75](https://github.com/abapify/adt-cli/commit/019bd75))
- **adt-cli:** enhance outline command with descriptions and improved element type handling ([fd6dcd1](https://github.com/abapify/adt-cli/commit/fd6dcd1))
- **adt-cli:** add pluggable logger to client helper ([9299007](https://github.com/abapify/adt-cli/commit/9299007))
- **adt-cli:** propagate CLI logger to v2 client via plugin ([d8e75d3](https://github.com/abapify/adt-cli/commit/d8e75d3))
- **adt-cli:** add interactive TUI editor for CTS tree configuration with optimistic locking ([6f2fe76](https://github.com/abapify/adt-cli/commit/6f2fe76))
- **adt-cli:** improve error handling with error codes and stack traces ([188f3d0](https://github.com/abapify/adt-cli/commit/188f3d0))
- **adt-cli:** extract error cause for better network error diagnostics ([bd7e382](https://github.com/abapify/adt-cli/commit/bd7e382))
- **adt-cli:** add --config option for explicit config file ([d8afc63](https://github.com/abapify/adt-cli/commit/d8afc63))
- **adt-cli:** improve error handling with error codes and stack traces ([0a0c7bd](https://github.com/abapify/adt-cli/commit/0a0c7bd))
- **adt-cli:** extract error cause for better network error diagnostics ([16b9d02](https://github.com/abapify/adt-cli/commit/16b9d02))
- **adt-cli:** add --config option for explicit config file ([490c258](https://github.com/abapify/adt-cli/commit/490c258))
- **adt-cli:** add ls command and atc --from-file option ([b6a41bd](https://github.com/abapify/adt-cli/commit/b6a41bd))
- ⚠️ **adt-client-v2:** add pluggable response system and fix XML attribute parsing ([4c53aa5](https://github.com/abapify/adt-cli/commit/4c53aa5))
- **adt-client-v2:** implement repository search contract and migrate CLI command ([5da4d30](https://github.com/abapify/adt-cli/commit/5da4d30))
- **adt-client-v2:** add logger support to client architecture ([b886257](https://github.com/abapify/adt-cli/commit/b886257))
- **adt-codegen:** add endpoint-level method filtering and clean option ([92bba85](https://github.com/abapify/adt-cli/commit/92bba85))
- **adt-config:** implement --config flag support in config loader ([8e88f1a](https://github.com/abapify/adt-cli/commit/8e88f1a))
- **atc:** initial ATC plugin package structure ([ba6b375](https://github.com/abapify/adt-cli/commit/ba6b375))
- **atc:** include method name and raw location in GitLab report ([24c5b0e](https://github.com/abapify/adt-cli/commit/24c5b0e))
- **atc:** plugin-based finding resolver architecture ([22fa06c](https://github.com/abapify/adt-cli/commit/22fa06c))
- **devc:** implement DEVC package support with type inference ([008c179](https://github.com/abapify/adt-cli/commit/008c179))
- **import:** support plugin format options for abapgit folder logic ([3219917](https://github.com/abapify/adt-cli/commit/3219917))
- **nx:** add skills for generating code, managing plugins, running tasks, and exploring workspaces ([87a1506](https://github.com/abapify/adt-cli/commit/87a1506))
- **nx-cloud:** setup nx cloud workspace ([20da8a2](https://github.com/abapify/adt-cli/commit/20da8a2))
- **release:** setup Nx Release publishing with GitHub CI ([14820cb](https://github.com/abapify/adt-cli/commit/14820cb))
- **ts-xsd:** add batch codegen with config file support and CLI improvements ([7ad2c11](https://github.com/abapify/adt-cli/commit/7ad2c11))
- **ts-xsd:** add XSD inheritance support with complexContent/extension parsing ([bc0d7e4](https://github.com/abapify/adt-cli/commit/bc0d7e4))
- **ts-xsd:** add automatic schema discovery and resolution capabilities ([3aa6143](https://github.com/abapify/adt-cli/commit/3aa6143))
- **ts-xsd-core:** add XML namespace support and module exports ([05e9f4a](https://github.com/abapify/adt-cli/commit/05e9f4a))

### 🩹 Fixes

- update @abapify/adt-client dependency to use standard version specifier ([1518585](https://github.com/abapify/adt-cli/commit/1518585))
- format tsconfig.base.json to resolve CI formatting check ([d9d98d8](https://github.com/abapify/adt-cli/commit/d9d98d8))
- remove unnecessary nx-cloud record command from CI workflow ([54a1dcb](https://github.com/abapify/adt-cli/commit/54a1dcb))
- format project.json files to resolve CI format check with NX environment variables ([0520592](https://github.com/abapify/adt-cli/commit/0520592))
- resolve CI pipeline failures ([5004586](https://github.com/abapify/adt-cli/commit/5004586))
- mark optional dependencies as devOptional in package-lock.json ([3545523](https://github.com/abapify/adt-cli/commit/3545523))
- improve browser opening in OAuth flow with BROWSER env var support ([8fd1c99](https://github.com/abapify/adt-cli/commit/8fd1c99))
- use Object.prototype.hasOwnProperty.call and remove tsdown dependency ([d95e913](https://github.com/abapify/adt-cli/commit/d95e913))
- resolve circular dependency by making root abapify build a no-op ([aa67305](https://github.com/abapify/adt-cli/commit/aa67305))
- resolve all ESLint errors causing CI pipeline failures ([94d6ed2](https://github.com/abapify/adt-cli/commit/94d6ed2))
- allow adt-puppeteer test to pass with no test files ([bbaab89](https://github.com/abapify/adt-cli/commit/bbaab89))
- resolve typecheck failures across workspace ([7498729](https://github.com/abapify/adt-cli/commit/7498729))
- **abapgit:** FULL folder logic now includes root package as directory ([d661f09](https://github.com/abapify/adt-cli/commit/d661f09))
- **adk:** resolve TS4041 errors by disabling code splitting in adt-contracts ([beae11c](https://github.com/abapify/adt-cli/commit/beae11c))
- **adk:** resolve TS4041 errors by annotating crudContract return types as any ([0b0c7ee](https://github.com/abapify/adt-cli/commit/0b0c7ee))
- **adt-atc:** add .abap extension to GitLab code quality paths ([94a35a5](https://github.com/abapify/adt-cli/commit/94a35a5))
- **adt-atc:** add .abap extension to GitLab code quality paths ([def4d55](https://github.com/abapify/adt-cli/commit/def4d55))
- **adt-auth:** add missing project.json for Nx configuration ([8672c10](https://github.com/abapify/adt-cli/commit/8672c10))
- **adt-auth:** reference tsconfig.lib.json in tsdown config ([9ee2a8e](https://github.com/abapify/adt-cli/commit/9ee2a8e))
- **adt-auth:** add ./basic export alias ([9e1b524](https://github.com/abapify/adt-cli/commit/9e1b524))
- **adt-auth:** use explicit entry mapping for ./basic export ([d6333c5](https://github.com/abapify/adt-cli/commit/d6333c5))
- **adt-auth:** export basic plugin as default export ([3b0c7b7](https://github.com/abapify/adt-cli/commit/3b0c7b7))
- **adt-auth:** update login to use default export pattern ([10e8951](https://github.com/abapify/adt-cli/commit/10e8951))
- **adt-auth:** export basic plugin from main index ([efa2b7d](https://github.com/abapify/adt-cli/commit/efa2b7d))
- **adt-auth:** add basic export alias in tsdown config ([81e0cf2](https://github.com/abapify/adt-cli/commit/81e0cf2))
- **adt-auth:** add missing project.json for Nx configuration ([3b652c8](https://github.com/abapify/adt-cli/commit/3b652c8))
- **adt-auth:** reference tsconfig.lib.json in tsdown config ([90d5c60](https://github.com/abapify/adt-cli/commit/90d5c60))
- **adt-auth:** add ./basic export alias ([74c57dd](https://github.com/abapify/adt-cli/commit/74c57dd))
- **adt-auth:** use explicit entry mapping for ./basic export ([f5ce552](https://github.com/abapify/adt-cli/commit/f5ce552))
- **adt-auth:** export basic plugin as default export ([3467b70](https://github.com/abapify/adt-cli/commit/3467b70))
- **adt-auth:** update login to use default export pattern ([5b9ad32](https://github.com/abapify/adt-cli/commit/5b9ad32))
- **adt-auth:** export basic plugin from main index ([1c2ac83](https://github.com/abapify/adt-cli/commit/1c2ac83))
- **adt-auth:** add basic export alias in tsdown config ([52c4b76](https://github.com/abapify/adt-cli/commit/52c4b76))
- **adt-cli:** use correct plugin path for basic auth ([f92a2bc](https://github.com/abapify/adt-cli/commit/f92a2bc))
- **adt-cli:** parse --config option from argv before parseAsync ([1873f80](https://github.com/abapify/adt-cli/commit/1873f80))
- **adt-cli:** use correct plugin path for basic auth ([aa8d6b1](https://github.com/abapify/adt-cli/commit/aa8d6b1))
- **adt-cli:** parse --config option from argv before parseAsync ([f8ecd02](https://github.com/abapify/adt-cli/commit/f8ecd02))
- **atc:** extract method name from name= param in ATC location URI ([100f78b](https://github.com/abapify/adt-cli/commit/100f78b))
- **atc:** resolve file paths and convert line numbers in GitLab formatter ([4d97414](https://github.com/abapify/adt-cli/commit/4d97414))
- **atc:** resolve workspace packages from cwd for bundled CLI ([a30168f](https://github.com/abapify/adt-cli/commit/a30168f))
- **atc:** built-in abapgit resolver (no external dep needed) ([e2a3978](https://github.com/abapify/adt-cli/commit/e2a3978))
- **bun.lock:** update lockfile to match workspace package.json files ([382bce7](https://github.com/abapify/adt-cli/commit/382bce7))
- **ci:** update Vault field names to match ADT\_\* convention ([9e33be2](https://github.com/abapify/adt-cli/commit/9e33be2))
- **ci:** correct Vault field names and update agent guidelines ([2b057ce](https://github.com/abapify/adt-cli/commit/2b057ce))
- **ci:** update Vault field names to match ADT\_\* convention ([8d64bc4](https://github.com/abapify/adt-cli/commit/8d64bc4))
- **ci:** correct Vault field names and update agent guidelines ([8eb8374](https://github.com/abapify/adt-cli/commit/8eb8374))
- **ci:** remove --frozen-lockfile to allow bun to update stale lockfile ([a29724f](https://github.com/abapify/adt-cli/commit/a29724f))
- **ci:** fix format and lint errors to unblock CI pipeline ([8be2de2](https://github.com/abapify/adt-cli/commit/8be2de2))
- **ci:** address Qodo review comments on release workflows ([38741ec](https://github.com/abapify/adt-cli/commit/38741ec))
- **deps:** remove unused SAP/CDS dependencies pulling in better-sqlite3 ([d89c832](https://github.com/abapify/adt-cli/commit/d89c832))
- **deps:** remove unused SAP/CDS dependencies pulling in better-sqlite3 ([f898c4b](https://github.com/abapify/adt-cli/commit/f898c4b))
- **release:** resolve nx release config conflict and add first-release flag ([cac26d3](https://github.com/abapify/adt-cli/commit/cac26d3))
- **ts-xsd:** commit W3C XMLSchema.xsd so integration tests pass in CI ([d2a6f7d](https://github.com/abapify/adt-cli/commit/d2a6f7d))

### ⚠️ Breaking Changes

- **adt-client-v2:** add pluggable response system and fix XML attribute parsing ([4c53aa5](https://github.com/abapify/adt-cli/commit/4c53aa5))
  Schema attribute names no longer use @ prefix
  ## Features
  ### Response Plugin System
  - Add ResponsePlugin interface for intercepting HTTP responses
  - Add ResponseContext with raw XML, parsed data, and metadata
  - Implement FileStoragePlugin for saving XML/JSON to files
  - Implement TransformPlugin for custom data transformations
  - Implement LoggingPlugin for request/response logging
  - Integrate plugins into adapter with command-level control
  ### Discovery Command Enhancement
  - Add inline capture plugin to discovery command
  - Support file extension detection (.xml → XML, .json → JSON)
  - Enable command-level plugin configuration
  ## Fixes
  ### ts-xml Attribute Parsing
  - Remove unnecessary @ prefix from attribute names in schemas
  - Simplify parse logic - kind field is sufficient to identify attributes
  - Fix attribute extraction bug that caused empty objects
  ### Schema Type System
  - Add optional field support to all field types
  - Improve type inference for optional fields
  - Clean up schema definitions (remove redundant 'as const')
  ## Changes
  ### adt-client-v2
  - packages/adt-client-v2/src/plugins.ts: New plugin system
  - packages/adt-client-v2/src/adapter.ts: Plugin integration
  - packages/adt-client-v2/src/client.ts: Plugin configuration
  - packages/adt-client-v2/src/index.ts: Export plugin types
  - packages/adt-client-v2/src/adt/discovery/discovery.schema.ts: Remove @ prefix
  ### ts-xml
  - packages/ts-xml/src/types.ts: Add optional field support
  ### adt-cli
  - packages/adt-cli/src/lib/commands/discovery.ts: Use capture plugin
    Closes: #discovery-xml-json-storage

### ❤️ Thank You

- Claude
- Petr Plenkov
- ThePlenkov @ThePlenkov

## 0.1.0 (2024-10-08)

This was a version bump only, there were no code changes.

## 0.0.5 (2024-10-07)

This was a version bump only, there were no code changes.

## 0.0.4 (2024-10-07)

This was a version bump only, there were no code changes.

## 0.0.3 (2024-10-07)

This was a version bump only, there were no code changes.

## 0.0.2 (2024-10-07)

This was a version bump only, there were no code changes.
