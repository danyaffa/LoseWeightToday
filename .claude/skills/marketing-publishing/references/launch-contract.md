# Reviewable launch contract

Create one record per brand and campaign revision. Required fields are real business inputs, not example credentials or fake accounts.

| Field | Required evidence |
| --- | --- |
| brand_id, campaign_id, revision | Exact existing tenant and campaign identity |
| network, account_id, actor/role | Verified read from connected provider |
| final copy and asset paths/hashes | Reviewed final content; assets inspected |
| destination_url and UTMs | Working real URL; matching offer; no personal data in UTMs |
| audience, geography, exclusions | Concrete scope; regulated-category constraints |
| start, end, timezone | Unambiguous ISO dates and timezone |
| paid/organic, currency, daily and lifetime limits | Real authorized ceiling; provider effective budget checked |
| generation/service costs | Distinct credit/tool-cost authorization |
| consent/policy/rights checks | Applicable evidence and unresolved blockers |
| authorization | User message/reference, actor, scope, time and expiry when applicable |
| idempotency/action key | One unique value per approved action, reused for reconciliation |
| provider receipts and state | Actual IDs/readback; distinguish paused/scheduled/live/delivering |

States: DRAFT → CHECKED → AUTHORIZED → SUBMITTING → PAUSED/SCHEDULED/PUBLISHED → VERIFIED. A paid campaign's delivery state is tracked separately from publishing. ERROR and UNKNOWN are distinct. UNKNOWN requires reconciliation before retry. A changed destination/content/account/audience/budget outside the authorization scope returns to DRAFT.

A local record cannot override provider permissions or create authorization. For unsupported APIs deliver manual upload assets with exact steps and mark NOT PUBLISHED. Never store OAuth tokens in this record. App-based admin records belong in tenant-scoped Firestore with server-side access checks and audit logs.
