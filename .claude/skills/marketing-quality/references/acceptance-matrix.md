# End-to-end acceptance matrix

Use PASS / FAIL / BLOCKED / NOT RUN / NOT APPLICABLE. Attach evidence; do not prefill PASS.

| Area | Required coverage |
| --- | --- |
| Package | Every file/hash, 13 frontmatters, links, shared policy consistency, syntax, dependency inventory |
| Installer | Dry-run, fresh install, idempotence, existing hooks/permissions preserved, local edits, malformed settings, symlinks, removal |
| Claude | Real hook loading and automatic marketing routing, continuation, nonmarketing prompt, v4 coexistence |
| Maintenance | Actual upstream discovery, evaluated improvement, rejection, version freeze and rollback |
| Konvert | OAuth, schemas, real read, pagination, source age, empty vs failure, quota/429, paid generation ceiling |
| Rival evidence | IDs, filters, groups, unknown metrics, stale input, partial snapshots, duplicate observations, no invented ROAS |
| Creative | Verified facts, originality, rights, actual assets, packaging/text accuracy, formats, readable mobile CTA |
| Publishing | Correct account, role, approval, hashes, spend limit, timezone, paused readback, timeout reconciliation, partial failures, real public receipt |
| Organic | Real channel capability, link preview, crawl/index behavior, accessible content, community rules |
| Funnel | All pages/buttons/forms/links, login/logout, role dashboards, validation, delivery, booking/checkout and persistence |
| Leads | Consent, suppression, duplicates, ownership, wrong tenant, follow-up and delivery |
| Results | Comparable metrics, zero denominators, event/order deduplication, refunds, attribution overlap, qualified outcomes |
| App integration | Live files/diff, imports, dependencies, TypeScript/build, Firebase/Auth/Firestore, APIs, security, exact-commit Vercel, browser/E2E |
| Automation | Real scheduler, heartbeat, two executions, recovery, costs, stop switch and failure alert |

Do not claim A-to-Z completion unless every relevant row and its concrete paths were actually checked. The initial package's audit explicitly records unexecuted external paths.
