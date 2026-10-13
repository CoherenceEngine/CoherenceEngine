# Customer value model
## Measure the complete cost of a decision
For an agreed evaluation period:
- Baseline cost = all baseline model calls × marginal cost per call.
- Gated cost = remaining model calls × marginal cost per call + engine execution + infrastructure + monitoring.
- Net operating benefit = baseline cost − gated cost − incremental alert/miss costs.
- Net first-period value = net operating benefit − license/pilot fee − integration cost.
- Break-even requires positive net operating benefit large enough to cover the agreed fixed costs over the chosen horizon.

Avoid double counting fixed infrastructure savings and per-call charges. Fewer calls only reduce cash spending if the billing or capacity arrangement permits it. If misses cannot be credibly monetized, report performance gates separately and restrict the economic conclusion.

## Required inputs
Record source, date, units, uncertainty, and owner for record volume, baseline and gated call counts, marginal call cost, engine overhead, integration effort, fees, alert handling cost, and missed-event consequence. Report low/base/high scenarios. Leave unavailable inputs unestimated.

## Illustrative arithmetic, not a forecast
With 100,000 baseline calls at $0.01 each, 50,000 remaining calls, and $200 of engine/operations cost, gross operating benefit before error costs is $300. A $400 fee/integration cost makes first-period value −$100. These invented numbers illustrate the calculation only.

Modeled HBI energy, recorded model-call reductions, physical electricity, and customer dollars are distinct quantities. Public savings claims require their matching measured evidence.
