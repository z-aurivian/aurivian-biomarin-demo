# Session Notes — 2026-07-12

## What prompted this session

Product feedback on the BeOne demo's Nova agent: Field Strategy MSL view was missing sections vs National/Territory, Insight Intelligence's actionable insights had no "Proposed action," and (once those were fixed) a request to give each demo its own distinct MSL roster instead of sharing master's generic names. That last fix uncovered a much deeper pre-existing problem — three mutually-inconsistent MSL identities across Nova Tab1/Tab2/Tab3/VEGA — which led to a full roster-alignment pass, and then a follow-up request to also fix the Alexion-era placeholder content still sitting in Tab1/Tab3's signal quotes.

## What was fixed on master (code changes)

1. **Nova Tab2 MSL view was missing HCP Scientific Impact / KIT Intelligence / KOL Engagement sections** vs National/Territory views, and Listening Priorities rows only showed an insight count on the one gap row. Fixed per the actual Nova v3.0 engineering brief PDF the team had built against but under-implemented (`~/Desktop/nova brief V3.pdf`).
2. **Tab3 Actionable Insights had no "Proposed action" box.** Added, sourced from `config/actions.js`. Follow-up bug found immediately: exact-string id matching silently failed against compound `fromInsightRef` values (`'AI1+AI5'` string form, `['AI1','AI5']` array form used in other demos) — fixed with a normalizing `actionCoversInsight()` helper.
3. **Scientific Alignment Shift showed one hardcoded fictional KOL per MSL** instead of the full assigned roster. Replaced with rows generated live from real `KOL_DATA` via `config/messaging-alignment.js`, scoped per MSL/territory by a deterministic id-hash.
4. Removed a stray "Dr. Hayes" reference in the NE Region field brief — a name from the old hardcoded alignment-shift mock that no longer corresponded to anything once the table went dynamic.

All four are now on master and propagated to BeOne/GSK/BSV. Full detail in memory: [[project_nova_v3]] "Post-build fixes" section.

## What was found but deliberately NOT fixed on master

Two deeper, pre-existing defects were discovered while doing the MSL-roster and content work on BeOne/GSK/BSV. Both were fixed on those three demos but **left as-is on master**, since master isn't customer-facing and the fix requires demo-specific real content that master doesn't have:

1. **Master's own MSL roster is internally inconsistent** — Nova Tab2 uses one 5-name set, Tab1+Tab3 use a different 8-name set, and `config/vega.js` uses a third, UK-based roster that doesn't even share a country with Tab1-3's US-region framing. See [[project_aurivian_followups]] item 7.
2. **Nova Tab1/Tab3's signal-quote content is still Alexion/PNH-era** (NMOSD, gMG, Soliris/Ultomiris) — never customized. See [[project_aurivian_followups]] item 8.

**Consequence for future demos**: master's Tab1/Tab2/Tab3/`vega.js` are not a safe verbatim copy source anymore for MSL identity or signal content — a new demo needs to redo the alignment-to-VEGA and content-rewrite work BeOne/GSK/BSV just got. See [[project_new_demo_checklist]] items 10-11 for the exact pattern to follow.

## Also updated this session
- `README.md` "Known follow-ups" section brought up to date — it only had items 1-3, missing the 2026-07-11 Nova v3 items (4-6) and today's items (7-8). See the memory file [[project_aurivian_followups]] for full detail; this README carries the condensed version.
