// Auri canned Q&A — BioMarin Pharmaceutical.
// Backs the chatbot's suggested prompts and the offline/fallback path.

export const AURI_PROMPTS = [
  {
    prompt: 'Which MOs have the biggest coverage gaps right now?',
    response:
      "Two MOs are at Gap coverage this cycle:\n\n• **MO3 (MPS field excellence & Aldurazyme co-marketing clarity)** — Gap. AI3 shows confusion about BioMarin's manufacturing/royalty role in Aldurazyme (vs. Genzyme/Sanofi's commercialization role) extends into our own field team, not just treating physicians.\n• **MO4 (VOXZOGO hypochondroplasia readiness & SCFE safety-signal communication)** — Gap. AI6 (4× recurrence) shows some community endocrinologists are conflating the discontinued Turner/SHOX/ACAN SCFE signal with general achondroplasia safety.\n\nMO1 (KUVAN retention), MO5 (BMN 333 positioning), and MO6 (ROCTAVIAN US-exit) are all at Low coverage — not Gap, but still under target.",
    cites: [
      { type: 'mo', id: 'MO3' },
      { type: 'mo', id: 'MO4' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI6' },
    ],
  },
  {
    prompt: 'What is the real story with Roctavian and the US market?',
    response:
      "ROCTAVIAN (valoctocogene roxaparvovec) was approved by the FDA in June 2023 as the first gene therapy for adult severe hemophilia A, with strong pivotal GENEr8-1 durability data (~80.8% off prophylaxis at 5 years, no new safety signals). But US commercial performance has been weak (~$26M in 2024 sales), and BioMarin is withdrawing it from the US market effective end of May 2026, with a full divestiture under exploration. This mirrors an industry-wide hemophilia gene-therapy retreat — Pfizer discontinued Beqvez (hemophilia B) and CSL's Hemgenix (hemophilia B) has seen weak uptake, though neither is a direct Roctavian competitor since they treat a different disease. Roctavian remains commercially available outside the US. MO6 is built around navigating this exit honestly: A14 (US patient-transition protocol) and A13 (ex-US credibility statement) are both in flight.",
    cites: [
      { type: 'insight', id: 'AI8' },
      { type: 'insight', id: 'AI9' },
      { type: 'action', id: 'A13' },
      { type: 'action', id: 'A14' },
      { type: 'mo', id: 'MO6' },
    ],
  },
  {
    prompt: 'What actually happened with the VOXZOGO SCFE safety signal?',
    response:
      "In March 2026, BioMarin discontinued dosing and enrollment in the Turner syndrome, SHOX deficiency, and ACAN-deficiency CANOPY trials after SCFE (slipped capital femoral epiphysis) events occurred in two investigator-sponsored trials. Critically, there have been no SCFE cases in the BioMarin-sponsored achondroplasia trials, which cover more than 5,000 patients. Noonan syndrome and idiopathic short stature (non-ACAN) trials continue unaffected. AI6 shows this important distinction isn't always landing cleanly in the field — some community endocrinologists are asking general achondroplasia safety questions that conflate the two populations. A9 and A10 (precision talking points and the achondroplasia safety-database one-pager) are both addressing this directly.",
    cites: [
      { type: 'insight', id: 'AI6' },
      { type: 'action', id: 'A9' },
      { type: 'action', id: 'A10' },
      { type: 'mo', id: 'MO4' },
    ],
  },
  {
    prompt: 'How should we think about the Sephience threat to KUVAN?',
    response:
      "Sephience (sepiapterin), PTC Therapeutics' oral PAH activator/BH4 precursor, was FDA-approved Jul 28, 2025 (also EU and Japan) — the first genuinely direct competitor KUVAN has faced since its own approval. It's once-daily and oral, similar in profile to KUVAN itself, so the competitive pressure is about simplification framing and market timing rather than a clear efficacy gap. AI1 shows this is already generating real switching conversations, with recurrence up 4× this cycle. A1 (comparison card) is Started and A2 (BH4-responsiveness FAQ) is proposed — MO1 remains at Low coverage and is a near-term priority.",
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'action', id: 'A1' },
      { type: 'mo', id: 'MO1' },
    ],
  },
  {
    prompt: 'Who should we prioritize engaging for the hypochondroplasia expansion story?',
    response:
      "**Ravi Savarirayan** (Tier 1, Murdoch Children's/Royal Children's Hospital Melbourne) is the single highest-priority engagement — lead investigator on the vosoritide pivotal program and first author on the achondroplasia consensus guidelines, with direct visibility into CANOPY-HCH-3. **Valérie Cormier-Daire** and **Mohamad Maghnie** are strong European anchors, both consensus-guidelines co-authors with hypochondroplasia genetics depth. AI5 shows real field-level impatience building ahead of the Q3 2026 sNDA filing — worth a coordinated push across this group before off-label pressure builds further.",
    cites: [
      { type: 'insight', id: 'AI5' },
      { type: 'mo', id: 'MO4' },
      { type: 'action', id: 'A8' },
    ],
  },
  {
    prompt: 'Which insights are driving the most action right now?',
    response:
      "**AI6 (SCFE-vs-achondroplasia messaging confusion)** is the most load-bearing — 4× recurrence this cycle, confidence 86%, Prioritised. Two actions in-flight: A9 (precision talking points, Accepted) and A10 (safety-database one-pager, Started).\n\n**AI1 (Sephience switching pressure on KUVAN)** is close behind at 4× recurrence and Prioritised status — A1 (comparison card) is Started, and MO1 remains the franchise's least-covered PKU objective.\n\n**AI8/AI9 (Roctavian US-exit and ex-US credibility)** are the highest-confidence signals overall (0.84 and 0.82) and both carry direct MO6 divestiture-evaluation relevance.",
    cites: [
      { type: 'insight', id: 'AI6' },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI8' },
      { type: 'action', id: 'A9' },
      { type: 'action', id: 'A1' },
    ],
  },
  {
    prompt: 'What would NOVA prioritise if given free rein on the Medical Plan?',
    response:
      "Three concrete changes:\n\n1. **Finish closing the SCFE-vs-achondroplasia precision-messaging gap (A9/A10)** — MO4 is at Gap and AI6 is the highest-recurrence insight this cycle; the fix is a messaging-clarity problem, not a new safety investigation, making it fast-closeable.\n2. **Formalize a monthly divestiture-relevant field-intelligence rollup for MO6** — AI8 and AI9 are both high-confidence but MO6 remains at Low coverage despite carrying real business-decision weight; a standing cadence would route field intelligence to leadership faster.\n3. **Get ahead of the KUVAN-Sephience switching conversation (A1/A2)** — AI1 is accelerating and MO1 is Low; a proactive comparison card beats a reactive one every time a family finds PTC's materials first.",
    cites: [
      { type: 'insight', id: 'AI6' },
      { type: 'insight', id: 'AI8' },
      { type: 'insight', id: 'AI1' },
      { type: 'action', id: 'A9' },
      { type: 'action', id: 'A1' },
    ],
  },
  {
    prompt: 'What is the Aldurazyme co-marketing nuance and why does it matter?',
    response:
      "Aldurazyme (laronidase, for MPS I) is co-commercialized through BioMarin/Genzyme LLC — a 50/50 joint venture with Sanofi-Genzyme. Genzyme/Sanofi markets and sells the product globally; BioMarin manufactures it and receives a royalty (roughly 39.5–50% of net sales) rather than fully commercializing it the way it does Naglazyme, Vimizim, and Brineura. AI3 shows this distinction isn't well understood even inside BioMarin's own field team, which creates real risk of MSLs answering supply or access questions incorrectly. A5 (internal co-marketing clarity card) is Accepted and addressing this directly.",
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action', id: 'A5' },
      { type: 'mo', id: 'MO3' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'Which MOs have the biggest coverage gaps right now?',
  'What is the real story with Roctavian and the US market?',
  'What actually happened with the VOXZOGO SCFE safety signal?',
  'How should we think about the Sephience threat to KUVAN?',
  'Who should we prioritize engaging for the hypochondroplasia expansion story?',
  'Which insights are driving the most action right now?',
  'What would NOVA prioritise if given free rein on the Medical Plan?',
  'What is the Aldurazyme co-marketing nuance and why does it matter?',
];
