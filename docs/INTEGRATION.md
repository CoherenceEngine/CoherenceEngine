# Integration contract
Status: proposed v0.1 contract, engine adapter not connected

Start with a controlled batch evaluation. The JSON schemas in this folder and the offline example define a candidate boundary between customer data and a licensed engine adapter. They do not establish a deployed API.

## Run the public example
Requires Python 3.10 or later, standard library only:
```sh
python examples/evaluation_client.py --mock --input examples/sample-input.json
```
The example produces synthetic decisions marked `integration_mock`. It implements no engine scoring or call-skipping logic. Mock results are unsuitable for performance or savings claims.

## Input
Supply a run ID and records with unique record IDs and finite numeric feature values. Feature names, order, units, normalization, and permitted missingness belong to the private adapter specification. Outcome labels belong in a separate evaluator-held file. The proposed schema currently rejects null values; any missing-data adapter must be explicitly documented and tested.

## Output
Every input record receives a routing decision, engine version, baseline version, provenance, and reason code. A production adapter must distinguish model invocation, approved bypass, and fallback. An approved bypass requires a documented downstream result policy.

## Candidate hosted API
If implemented, POST /v1/evaluate would accept the request schema and return the response schema. No public endpoint is provided. Authentication, TLS, authorization, request limits, isolation, idempotency, timeout behavior, and retention require implementation and acceptance before availability.

## Safe integration sequence
Validate data, run baseline and engine in shadow mode, review paired outcomes, approve the operating envelope, then enable routing only under explicit customer authorization. If the engine is unavailable or inputs are unsupported, invoke the baseline where safe and available, or hold for human review. Never treat a failed request as a successful bypass.

[Operations](OPERATIONS.md) | [Data handling](DATA_HANDLING.md) | [Release requirements](../release/EVALUATION_PACKAGE.md)
