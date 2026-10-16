---
name: marketing-publishing
description: Prepare, authorize, publish and reconcile organic posts and paid campaigns through verified social and advertising account tools.
---

# Social and Paid Publishing

Read [shared policy](references/core-policy.md) first. Use [sources](references/sources.md) for current-source checks and boundaries.

1. Discover the exact connected publishing/ad tool and verify account identity, role, network permissions and capabilities using a read. Organic posts, paid campaigns and message outreach are different capabilities. Konvert research access does not imply any of them.
2. Build the concrete review package from references/launch-contract.md: brand/account, final content and asset hashes, destinations and UTMs, schedule/timezone, audience/exclusions, budget/currency, bid/optimization goal, dates, billing and authorization. Check supported formats and link previews with the actual tool. Reuse valid existing authorization within its precise scope.
3. Before launching, run marketing-quality checks on content, assets and the entire destination journey. If a required fact, account, approval or connector is absent, stop the external action and deliver the finished draft/manual upload package. Do not silently switch accounts or invent a launch receipt.
4. Create drafts or PAUSED campaigns first when supported. Read back and compare to the reviewed package; activate only when authorized. Use provider idempotency support. Otherwise record a local action key and reconcile exact existing posts/campaigns before retry. An ambiguous timeout becomes UNKNOWN; inspect provider state before any repeat write.
5. Persist provider IDs, request/action ID, content hash, actor, authorization reference, effective settings, status and timestamp. Poll asynchronous processing within documented limits. Verify the published public URL or actual campaign delivery state with a read; API accepted, scheduled, published, approved and delivering are distinct statuses.
6. Handle partial success per network. Never republish successes when another network fails. Revalidate expired authorizations and schemas. Treat expired OAuth, disapprovals, inaccessible assets, unsupported schedules and permission errors explicitly. Do not raise spend or extend campaign duration without authority.
7. For an app integration, isolate brands, require owner/developer access as the existing app defines it, enforce tenant ownership and audit every admin mutation to Firestore. Respect the user's engineering gate and PR policy.

Return a per-channel receipt table plus any manual steps. Never claim lead or sales success from a publish receipt.

Read the [launch contract](references/launch-contract.md) before any external write.
