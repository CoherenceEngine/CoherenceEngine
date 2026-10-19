# Data handling for controlled evaluation
Status: requirements to implement and verify per engagement

Prefer execution in the customer's environment where feasible. Transfer only agreed, minimized data after authorization. Exclude direct personal identifiers from the initial industrial gating pilot.

Before access, document:
- Dataset owner, processing purpose, permitted users, approved storage locations, and transfer route.
- Implemented encryption, account controls, access logs, secrets handling, and tenant isolation.
- Retention duration, deletion deadline, backup treatment, and how deletion is verified.
- Approved subprocessors and any external model/service transmission.
- Incident contacts and notification responsibilities.
- Whether aggregated findings may be published, with explicit customer approval.

Customer data is not authorized for unrelated training, public commits, or publication. Diagnostic logs should omit raw features and secrets. Record access grants and revoke them at evaluation close.

This document states intended requirements. It does not attest to deployed controls, regulatory compliance, or third-party certification.
