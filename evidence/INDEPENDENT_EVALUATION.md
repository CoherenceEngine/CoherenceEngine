# Independent execution evaluation
Status: protocol and reporting template, external result pending

## Question
Does an identified licensed engine configuration reduce heavy-model calls while preserving agreed detection performance and producing net value on an unseen test set?

## Freeze before evaluation
Record reviewer identity and relationship to the developer; dataset/version/rights; train/calibration/test separation; engine, adapter, baseline, and environment hashes; target events; comparator selection; sample size; non-inferiority margins; business costs; and publication permissions. Keep test labels unavailable during development. Do not retune on test outcomes.

Compare the deployed baseline, a simple matched gating policy, and the licensed engine under equal data access and compute accounting. Where full-engine mechanisms are claimed to add value, include predefined component ablations. Define which unit receives paired uncertainty estimation and account for clustering where applicable.

## Report
Publish only approved information: scope, artifact identities, commands, complete metrics, confidence intervals, failed criteria, limitations, conflicts of interest, and reproduction status. For temporal data, define event matching, false alerts per operating period, and lead-time censoring. For static classification, mark warning lead time not applicable.

## Evidence levels
1. Released-output audit: recompute supplied records.
2. Original engine execution: execute frozen artifacts from the intended inputs.
3. Fresh-data validation: apply frozen rules to unseen data.
4. Customer shadow pilot: measure performance and operational cost in the target workflow.
5. Authorized production operation: verify reliability and support under agreed conditions.

No reviewer signature or independent success result is supplied by this template. Preserve negative findings. Approved reports should identify exactly which level was achieved.

[Existing evidence scope](https://github.com/CoherenceEngine/Research/blob/main/REPRODUCIBILITY.md)
