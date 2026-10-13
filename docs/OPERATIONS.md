# Operational acceptance
Status: measurement protocol, no production measurements published here

For each candidate release, record hardware, OS, runtime, concurrency, dataset shape, warm-up, repetitions, and artifact hashes.

| Check | Evidence required |
| --- | --- |
| Performance | p50/p95/p99 latency, throughput, CPU, peak memory, and complete engine overhead |
| Input robustness | Missing, corrupt, duplicate, out-of-order, out-of-range, and unsupported feature inputs |
| Failure behavior | Timeouts, engine crash, baseline outage, exhausted resources, and network loss |
| State | Isolation across customers/streams, restart/checkpoint fidelity where stateful, and reset policy |
| Recovery | Verified rollback, pinned prior version, repeated replay, and incident drill |
| Monitoring | Invocation/bypass/fallback counts, error rate, latency, input quality, and drift |
| Capacity | Sustained-load result and operating limits, including degradation behavior |

The initial recommended mode is shadow evaluation with no autonomous control. Production routing must have a tested fallback path and a documented policy for baseline unavailability. Log record IDs and decisions without raw customer features by default.

Freeze alert thresholds and incident triggers per deployment. Stop or revert on unsupported input, excess missed-event burden, missing monitoring, or operating-envelope violations. Record the responsible operator and decision authority.

All measurements and pass thresholds are pending until completed for an identified executable release. Public audit checks are not production load tests.
