# Daily monitoring and truthful freshness

Installation adds triage context to Claude sessions. It does not create a running background monitor. Konvert Scout's official FAQ states daily updates. Fetching more frequently does not make the underlying data fresher.

## First connected session
Use /master-marketing. Establish brand_id, verified competitor IDs, geography, objective, read-only connector inventory and storage location. Authenticate Konvert. Perform one small real read. Capture all pages or mark incomplete. Inspect both source and retrieval timestamps. Use the ad-intelligence skill to normalize observations and snapshot changes. Generate drafts only within the available credit authorization.

## Ongoing operation
For an interactive session, ask Claude to perform the daily workflow when opened. For unattended operation, configure an actual authorized scheduler/worker separately: prefer existing Vercel scheduling and Firebase/Firestore for an existing app; a local scheduled Claude CLI job requires an awake computer, valid account, narrow discovered read-tool permissions, cost controls and durable output handling. This distribution does not install cron, launchd, a Vercel function or an unattended daemon.

Do not use --dangerously-skip-permissions. Do not assume --tools restricts MCP tools; current Claude docs say it controls built-in tools. Discover and constrain actual MCP capabilities separately. Never give a research-only worker publishing or paid-generation authority by wildcard. Test its permissions before scheduling. If no scheduler is configured, report monitoring NOT ENABLED.

## Daily job contract
Read one brand's run record. Refresh approved rival queries. Log heartbeat, provider freshness, pagination and query coverage. Deduplicate and compare snapshots. Rank current public-signal candidates. Draft three original briefs and one no-media-spend idea. Read own-account results if authorized. Save the digest to the agreed destination. Sending a notification requires its own explicit destination/recipient authorization. Record failures; a failed refresh must not replace the last successful evidence with an empty list.

Support a pause switch, per-job cost/time ceiling, overlapping-run lock, bounded read retries, dead-letter record and missed-heartbeat alert. Keep campaign activation outside the research job unless a separate exact authorization envelope and verified publishing workflow exist.

## Winner → recreate → send (daily loop)
This is the loop competitors such as Konvert advertise: track every rival ad daily, spot a clear winner, make the brand's own version and send it to the owner. Each run:
1. Refresh the watchlist and snapshot as above. Apply the winner signals in marketing-ad-intelligence step 4.
2. For each new 'clearly a winner' ad not already handled, break it down and add it to the hook and angle library.
3. Ask marketing-creative to recreate it for the brand: structure only, the brand's own words, product and visuals, scored 0–15. Generate images only through a connected, authorised generator within the credit ceiling; otherwise send the brief and label the image BLOCKED.
4. Send the owner one digest: each winner's link and the signals that qualified it, the brand version (image or brief), its score and the next step. Delivery uses the owner's existing sender (in the owner's Next.js apps, the Gmail app-password mailer) or another connected channel. The recipient is set once and recorded; never send to anyone else.
5. Nothing is published or paid for from this loop. Approved items move to marketing-publishing under its own authorisation.

Weekly rhythm: Monday scan and shortlist, Tuesday briefs and scores, Wednesday production, Thursday owner review and approved launches, Friday early results into marketing-analytics.

## Acceptance before calling it continuous
Demonstrate two real scheduled executions, persisted distinct snapshots, a real detected change or honestly empty delta, provider freshness, failure alert, isolation, restart/recovery and the pause switch. Until then report only the paths actually tested.
