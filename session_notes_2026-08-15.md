# BioMarin Demo Build — Session Notes 2026-08-15

## Source

Sparse brief: `/Users/ZAH/Downloads/BioMarin Therapeutic Areas & Scope.pdf` — company name, 4 TA list, product codenames, agent names (NOVA/ARIA/LUCA/VEGA), congress cluster suggestions, "include Capture + Pulse." No KOLs, no MSL roster, no meeting context. Built using the established research-first / lock-roster / fan-out-3-agents pattern (validated on Avalyn, Sandoz, BI, Astellas).

## Research (2 passes, `research/RESEARCH_SUMMARY.md`)

Real, public company — BioMarin Pharmaceutical (NASDAQ: BMRN), San Rafael CA. Pass 1 found 18 real KOLs + material real-world context; pass 2 closed the KOL gap to 32. Key facts that changed how the demo was built vs. a literal read of the brief:

- **ROCTAVIAN (hemophilia A gene therapy) is being withdrawn from the US market**, effective end of May 2026, with divestiture under exploration (2024 US sales only ~$26M). Part of an industry-wide hemophilia gene-therapy retreat (Pfizer discontinued Beqvez; CSL's Hemgenix struggling) — note both of those are hemophilia **B**, not A, so no direct Roctavian competitor exists. **User decision: keep hemophilia A as the 4th TA but tell the real story** — MO6 is built around navigating the US exit, preserving ex-US credibility, and informing the divestiture evaluation. This is the demo's most sophisticated MA narrative, not a growth story.
- **VOXZOGO safety signal (Mar 2026)**: Turner/SHOX/ACAN-deficiency CANOPY trials discontinued after SCFE events in investigator-sponsored trials — zero SCFE cases in BioMarin's own >5,000-patient achondroplasia program. Noonan and idiopathic short stature trials continue. Demo copy is careful not to present Turner/SHOX/ACAN as active expanded indications.
- **Real competitive threats used throughout**: PTC Therapeutics' Sephience (sepiapterin, FDA-approved Jul 2025) directly threatens KUVAN; Ascendis Pharma's navepegritide (TransCon CNP) is at FDA-review stage against VOXZOGO/BMN 333 — this is the LUCA divergence-KOL story (Dr. Klaus Mohnike, Magdeburg — timeline-driven cooling as Ascendis's EU decision approaches, not a rupture).
- **Aldurazyme (MPS I) is a 50/50 Sanofi-Genzyme joint venture**, not wholly BioMarin's — Genzyme markets/sells, BioMarin manufactures + royalty. Demo copy reflects this (Naglazyme/Vimizim/Brineura are fully BioMarin's own; Aldurazyme isn't).
- **BioMarin's Dec 2025 $4.8B Amicus acquisition** (Galafold, Pombiliti/Opfolda) is real but outside the 4 requested TAs — noted in research, not built into the demo.

## Locked roster

32 real KOLs across 4 TAs (PKU 4, MPS/Lysosomal 9, Skeletal 10, Hemophilia A 9) — full list in `research/RESEARCH_SUMMARY.md`. One name, Christian Hendriksz (MPS/Vimizim), has genuinely conflicting institution sources (UK vs. South Africa) — used by name/focus only, no institution asserted; this ambiguity was considered as an in-universe field-coverage-gap story but not used for the divergence moment (that's Mohnike, tied to the real Ascendis timeline).

MSL roster (6, synthetic, matches BioMarin's real global footprint): Dr. Rachel Simmons (US Northeast), Dr. Daniel Osorio (US Central), Dr. Priya Chandran (US West), Dr. Emma Whitfield (UK & Ireland), Dr. Julian Voss (Continental Europe), Dr. Amara Okafor (International/RoW).

KOL-per-product distribution (8 products, TA-level `productAlignment` used to avoid the Sandoz-style thin-alignment problem): kuvan 6, palynziq 5, naglazyme 9, vimizim 9, aldurazyme 7, brineura 7, voxzogo 10, bmn-333 10, roctavian 9 — no product under 5.

## Congresses

ICIEM 2025 (Kyoto, Sept 2025) — PKU/metabolic, real PALYNZIQ adolescent PEGASUS win presented here — also the **capture app's** congress. ESPE/ESE 2025 (Copenhagen) — skeletal, real Ascendis head-to-head. WFH World Congress 2026 (Kuala Lumpur, Apr) — hemophilia. ASGCT 2026 (Boston, May) — cross-rare-disease/genetic medicine.

## Build

3-agent fan-out off the locked roster (main config + Nova tabs → Pulse Brief → capture app), each pasted the roster verbatim. Fixed inherited bugs along the way: hardcoded `'soliris'` product-branching in `auriApi.js`/`rag.js` (Alexion leftover), numeric `k.tier` KOL filter in `NovaTab2FieldStrategy.js`, stray £ in `Vega.js`. Full contamination sweep clean. Pulse Brief has 6 sidebar briefs (PALYNZIQ adolescent hero, Sephience threat, VOXZOGO safety signal, Ascendis/Mohnike divergence, Roctavian exit, Aldurazyme nuance) — audio added post-build (`pulse_biomarin_brief_audio.mp3`, filename mismatched the wired name as usual, re-wired to match). Capture app built from Astellas's template; found and rewrote contaminated `AuriChat.js`/`manifest.json` per the standing checklist item.

## Bug found in QA (fixed same day)

Nova Tab2 Field Strategy → MSL view dropdown didn't change the screen on selection. Root cause: `MSL_OPTIONS` (dropdown values, `"Name — Territory (Focus)"`) and the lookup in `MSLView` (reconstructed `` `${m.msl} — ${m.territory}` `` from a separate array, different format) never matched, so `.find()` silently fell back to the first MSL every time — no console error, build compiled clean. Fixed by matching on `selectedMSL.startsWith(m.msl)`. Logged as checklist item 20 (memory) — this bug class (two independently-formatted string arrays feeding a dropdown's options vs. its lookup key) won't surface from a build check alone; needs an actual click-through.

## Deploy

Both repos pushed to `master` on GitHub (`z-aurivian/aurivian-biomarin-demo`, `z-aurivian/aurivian-biomarin-capture-app`). Vercel deploy handled by user directly (not via the Vercel MCP tool). Both added to the demo portal (`z-aurivian/demo-landing`, `src/data/demos.js`).

## Persona / timeline

Generic persona (no named individual), no fixed meeting date — build-ahead, matching the recent default (Sandoz, Astellas).
