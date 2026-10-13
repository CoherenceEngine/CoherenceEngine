# Licensed evaluation package requirements
Package documentation version: commercial-package-0.1.0
Engine release status: not attached or validated in this public package

A release owner must assemble the authorized executable package separately:
- Immutable engine, adapter, and baseline versions with artifact checksums.
- Supported OS/runtime/hardware, dependency lock and SBOM.
- Authorized sample or customer dataset manifest, schema, and data rights.
- Installation/run commands, expected outputs, and tolerances.
- Access/license terms, expiration if applicable, and network requirements.
- Decision ledger, complete execution receipt, operational results, and limitations.
- Error/fallback handling, rollback, and support contacts.

Use release/manifest.template.json to record the handoff. Null fields are unresolved and must be completed before delivery. The public mock is not a licensed engine release. A Docker image, binary, SDK, or endpoint must not be advertised as available until its actual artifact has passed acceptance.

## Acceptance
Run from a clean supported environment. Validate integrity, dependencies, sample outputs, failure handling, no unauthorized data transmission, and measured overhead. Have the intended evaluator repeat the run. Record discrepancies and resolve them or limit scope before delivery.

## Change record
2026-10-13: first commercial documentation and integration-contract package. No change to protected engine behavior and no new empirical performance claim.
