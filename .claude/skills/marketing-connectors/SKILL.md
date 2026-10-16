---
name: marketing-connectors
description: Connect Konvert MCP and verify actual marketing research, asset generation, social publishing, ad account and analytics capabilities.
---

# Konvert and Connector Discovery

Read [shared policy](references/core-policy.md) first. Use [sources](references/sources.md) for current-source checks and boundaries.

1. For Claude Code register the supplied HTTP endpoint using the root connection script or documented CLI command. Complete OAuth through Claude's /mcp panel. Configuration alone is not authentication or a successful read.
2. Inspect actual exposed tools and input schemas. Build a capability inventory with provider/server/tool names, schema hash, account/tenant, granted scopes, side effects, credit cost, pagination, limits and tested status. Do not invent Konvert method names or API payloads. A descriptive read-only flag is a hint; verify behavior with a harmless read.
3. Prove one small authorized brand/ad query. Record request filters, pagination, sample source ID, retrieved_at and source_updated_at. Do not expose auth headers or tokens. Record 401/403 as reconnect/scope issues, not empty competitor results. For 429 honor Retry-After; retry transient reads with bounded exponential backoff and jitter, maximum three attempts. Never blindly retry a publishing mutation.
4. Map documented Konvert strengths to research, creative analysis, briefs and static generation. Its current public docs do not establish a connected social publishing capability for this user. Discover a separately authorized existing social/ad connector when needed. Never label a post or paid campaign launched from a draft or generated image.
5. Prefer existing services and accounts. Public libraries and manual export remain valid fallbacks. Unsupported actions become explicit manual handoffs with files, copy, target URLs and instructions. No fake connected status.
6. Before a paid image call, show the number of variants and use the authorized generation budget. Verify returned asset type, downloadability, dimensions, rights, brand fidelity and text. For video use an existing authorized provider; a static generator does not establish video capability.

Return a connection matrix: configured / authenticated / schema discovered / read tested / generation tested / publish tested. Record each independently. Recheck tool schemas after provider changes.
