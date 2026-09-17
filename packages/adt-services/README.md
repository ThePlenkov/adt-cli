# @abapify/adt-services

Transport-agnostic ADT service layer shared by `@abapify/adt-cli`
(commander commands) and `@abapify/adt-mcp` (MCP tools).

[![npm](https://img.shields.io/npm/v/%40abapify%2Fadt-services.svg)](https://www.npmjs.com/package/@abapify/adt-services)

Business logic lives here so both transports delegate to the same code
paths: no `commander`, no `process.exit`, no interactive prompts, no
direct user-facing console output. Services return structured results and
throw `Error`s; transports decide how to present them.

## Install

```bash
npm i @abapify/adt-services
# or
bun add @abapify/adt-services
```

## What's inside

| Export                    | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| `services/connection`     | ADT connection/discovery helpers                    |
| `services/source`         | Source read/write with the SAP lock protocol        |
| `services/source-history` | Source version history                              |
| `services/check`          | ATC-style syntax checks                             |
| `services/checkin`        | Plan/diff/apply local changes to SAP                |
| `services/changeset`      | Transactional batch operations                      |
| `services/import`         | Transport/object import into the filesystem         |
| `services/cts`            | CTS transport queries                               |
| `services/badi`           | BAdI implementation workflows                       |
| `services/classic-badi`   | Classic BAdI workflows                              |
| `utils/adt-client-v2`     | `getAdtClientV2()` — authenticated v2 client helper |
| `utils/auth`              | `~/.adt` session/credential bridge                  |
| `utils/destinations`      | Destination resolution                              |
| `utils/format-loader`     | Object format plugin loading                        |
| `utils/lock-helpers`      | Lock/unlock convenience wrappers                    |
| `utils/progress-reporter` | Structured progress callbacks for transports        |

## Usage

```ts
import { getAdtClientV2, SourceService } from '@abapify/adt-services';

const client = getAdtClientV2();
const source = new SourceService();
const result = await source.read(client, '/sap/bc/adt/oo/classes/zcl_test');
```

## Architecture

```
adt-cli (commander) ──┐
                      ├──► @abapify/adt-services ──► adt-client / adk / adt-locks
adt-mcp (MCP tools) ──┘
```

The reverse direction (`adt-services` → `adt-cli`/`adt-mcp`) is forbidden.
`@abapify/adt-cli` re-exports these services from its own `index.ts` for
backwards compatibility.

## Development

```bash
bunx nx build adt-services
bunx nx test adt-services
bunx nx lint adt-services
```

## License

MIT
