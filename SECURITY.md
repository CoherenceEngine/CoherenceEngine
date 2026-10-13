# Security reporting
Report suspected vulnerabilities privately to CoherenceDashboard@gmail.com with the affected repository/release, reproduction steps, impact, and a safe minimal example. Do not include credentials, customer data, or protected engine artifacts in public issues.

This is a reporting route, not a guaranteed response-time commitment. No bug bounty or security certification is claimed.

## Release gates
Before licensed execution, establish least-privilege access, secrets exclusion, dependency inventory/SBOM, vulnerability review, artifact integrity, and data-isolation checks. Before hosting, also verify authentication, transport security, rate limits, and authorization.

Record findings and remediation against the exact release. Public documentation and integration examples do not establish the security posture of the private engine. See [data handling](docs/DATA_HANDLING.md).
