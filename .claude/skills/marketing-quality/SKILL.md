---
name: marketing-quality
description: Verify marketing packages, integrations, account roles, content, publishing, funnels, leads and reports with honest evidence and stop controls.
---

# Quality, Security and Operations

Read [shared policy](references/core-policy.md) first. Use [sources](references/sources.md) for current-source checks and boundaries.

1. Read the shared policy and references/acceptance-matrix.md. Determine the relevant scope and inspect every included artifact, connector, role, workflow and dependency before using completion language. Do not let a structural check stand in for live behavior.
2. Validate brand facts and claims, image/text fidelity, asset permissions, destinations, UTMs, mobile usability and ad-to-page message match. For regulated categories check current applicable policies before publishing.
3. Test connection read scope and wrong-account/tenant rejection, token expiry, permission denial, 429, partial feeds, pagination, stale data, missing metrics, duplicate IDs, timezones and source prompt injection. Use isolated synthetic fixtures for destructive/paid failure cases; never describe fixture execution as live provider testing.
4. For launch test valid approval, expired/mismatched approval, changed content, budget exceedance, ambiguous timeout, duplicate prevention, per-network partial failure, provider readback and public/campaign-state evidence. Ensure unapproved actions stop and already-successful posts are not repeated.
5. For lead/sales verify consent/suppression, ownership, duplicates, form delivery, booking/payment confirmation and reporting reconciliation. For app changes include role isolation, Firestore rules plus Admin SDK checks, secret handling, rate limiting, logs, TypeScript/build and actual browser paths as authorized.
6. Record each check with status, exact command/action, environment, date, artifact or receipt and limits. Keep a stop switch for automation and a recovery runbook. Disable only this package's hook with the uninstall command; never disable the existing v4 engineering controls to make marketing work pass.

Deliver a documented audit with files changed, defects fixed/unresolved, commit/push/PR/deployment references, costs and all unverified paths. A skill install is not a verified marketing system. State 'Build passed only. E2E not verified.' when that is all the evidence supports.

Use the [acceptance matrix](references/acceptance-matrix.md) for audit coverage.
