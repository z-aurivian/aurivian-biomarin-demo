// Strategic content for BioMarin Pharmaceutical Medical Affairs Demo
// Grounded in the ISP pillars (config/strategy.js) and
// research/RESEARCH_SUMMARY.md.

export const STRATEGIC_IMPERATIVES = [
  {
    id: 'si-001',
    name: 'KUVAN Retention Amid Sephience Oral-Competitor Entry',
    category: 'Differentiation',
    ispPillarRef: 'p1',
    description:
      "Defend the BH4-responsive PKU population against PTC Therapeutics' Sephience (sepiapterin), FDA-approved Jul 28, 2025 — the first direct oral competitor KUVAN has faced since its own approval. MSL field reports show stable-patient switching conversations are already underway, driven by simplification framing rather than a demonstrated efficacy gap.",
    successMetrics: [
      'Prescriber confidence articulating KUVAN\'s continued role (target: 70% of tracked accounts)',
      'BH4-responsiveness testing FAQ distribution',
      'Switching-conversation-to-referral rate reduction in engaged accounts',
    ],
    keyActions: [
      'Develop KUVAN-vs-Sephience clinical comparison card grounded in separate placebo-controlled trial data',
      'Commission BH4-responsiveness testing FAQ for community geneticists',
    ],
  },
  {
    id: 'si-002',
    name: 'PALYNZIQ Adolescent (PEGASUS) Adoption',
    category: 'Patient-Related',
    ispPillarRef: 'p1',
    description:
      'Drive confident adolescent (12–17) PALYNZIQ initiation on the 2026 FDA approval, grounded in PEGASUS Phase 3 data (blood Phe −473 vs. −19 µmol/L at week 72 vs. diet alone, 55 adolescents), presented at ICIEM 2025. Monitoring-burden concerns, not efficacy skepticism, are the real adoption barrier.',
    successMetrics: [
      'Adolescent PALYNZIQ initiation discussion rate (target: 55% of newly-eligible tracked accounts)',
      'Adolescent-specific starter-guide distribution',
    ],
    keyActions: [
      'Publish adolescent-specific PALYNZIQ starter guide with plain-language monitoring protocol',
      'Distribute adolescent vs. adult anaphylaxis-monitoring protocol comparison to field team',
    ],
  },
  {
    id: 'si-003',
    name: 'MPS Field Excellence & Aldurazyme Co-Marketing Clarity',
    category: 'Access',
    ispPillarRef: 'p2',
    description:
      'Sustain diagnostic-pathway and referral-pathway field excellence across Naglazyme (MPS VI), Vimizim (MPS IVA), and Brineura (CLN2), and equip MSLs to accurately represent BioMarin\'s manufacturing/royalty (not full-commercialization) role in Aldurazyme (MPS I), co-commercialized via the BioMarin/Genzyme LLC joint venture with Sanofi-Genzyme.',
    successMetrics: [
      'MSL confidence correctly routing Aldurazyme questions (target: 80% of MPS field team)',
      'Community-pediatrician screening checklist distribution',
    ],
    keyActions: [
      'Develop internal MSL-facing Aldurazyme co-marketing clarity card',
      'Publish MPS community-pediatrician screening checklist',
    ],
  },
  {
    id: 'si-004',
    name: 'VOXZOGO Hypochondroplasia Readiness & SCFE Safety-Signal Precision',
    category: 'Differentiation',
    ispPillarRef: 'p3',
    description:
      "Prepare the field for the hypochondroplasia sNDA (Q3 2026, based on the positive CANOPY-HCH-3 Phase 3 readout) while equipping MSLs with precise language distinguishing the March 2026 SCFE signal — dosing/enrollment discontinued in the Turner syndrome, SHOX deficiency, and ACAN-deficiency CANOPY trials after SCFE events in two investigator-sponsored trials — from the BioMarin-sponsored achondroplasia safety base (>5,000 patients, zero SCFE cases). Noonan syndrome and idiopathic short stature (non-ACAN) trials continue unaffected.",
    successMetrics: [
      'SCFE-vs-achondroplasia safety-message precision (target: 80% of tracked skeletal-facing accounts)',
      'Hypochondroplasia patient-identification checklist distribution ahead of Q3 2026 filing',
    ],
    keyActions: [
      'Develop SCFE safety-signal precision talking points',
      'Publish achondroplasia safety-database one-pager (>5,000 patients, zero SCFE cases)',
      'Prepare hypochondroplasia patient-identification checklist',
    ],
  },
  {
    id: 'si-005',
    name: 'BMN 333 Successor Positioning vs. Navepegritide',
    category: 'Differentiation',
    ispPillarRef: 'p3',
    description:
      "Differentiate BMN 333 (long-acting CNP, Phase 2/3 enrolling since Apr 2025, comparative vs. vosoritide) against Ascendis's navepegritide (TransCon CNP) — a regulatory-stage, once-weekly competitor with US PDUFA extended to Feb 28, 2026, and an EU decision expected Q4 2026.",
    successMetrics: [
      'BMN 333 differentiation-briefing distribution ahead of the navepegritide EU decision',
      'Skeletal-KOL competitive-attention monitoring coverage',
    ],
    keyActions: [
      'Prepare BMN 333 Phase 1/2 differentiation briefing',
      'Schedule proactive scientific-exchange re-engagement with attention-shifting KOLs',
    ],
  },
  {
    id: 'si-006',
    name: 'ROCTAVIAN US-Exit Navigation & Divestiture-Support Intelligence',
    category: 'Strategic Transition',
    ispPillarRef: 'p4',
    description:
      'Navigate the ROCTAVIAN US market withdrawal (effective end of May 2026) with field and scientific integrity: finalize a concrete US patient-transition protocol, preserve ex-US (UK/EU/international) scientific credibility with treating KOLs whose markets are unaffected, and channel real field/KOL intelligence into BioMarin\'s divestiture evaluation. This is a managed strategic pivot, not a growth narrative — 2024 US sales were only ~$26M against a $2.9M list price and weak commercial uptake.',
    successMetrics: [
      'US patient-transition messaging consistency (target: 75% of tracked US treatment centers)',
      'Ex-US KOL advocacy-score stability post-withdrawal announcement',
    ],
    keyActions: [
      'Finalize and distribute US patient-transition protocol ahead of May 2026 withdrawal date',
      'Publish ex-US scientific-credibility statement and engagement plan',
      'Compile field/KOL intelligence brief to inform divestiture evaluation',
    ],
  },
];

// Competitive landscape — competitors relevant to each franchise.
export const COMPETITIVE_LANDSCAPE = [
  {
    id: 'comp-001',
    name: 'Sephience (sepiapterin)',
    genericName: 'sepiapterin',
    company: 'PTC Therapeutics',
    mechanism: 'Oral PAH activator / BH4 precursor',
    approvedIndications: ['Phenylketonuria (PKU) — FDA approved Jul 28, 2025; also EU, Japan'],
    strengths: ['Once-daily oral dosing, similar simplicity profile to KUVAN', 'First genuinely direct competitor KUVAN has faced'],
    weaknesses: ['No long-term real-world safety experience comparable to KUVAN\'s established track record', 'No head-to-head efficacy data vs. KUVAN'],
    strategicThreatLevel: 'High',
    marketStatus: 'Direct, current competitor to KUVAN specifically',
    summary: "Sephience is KUVAN's first real oral competitor. The switching pressure it's generating is about simplification framing and novelty, not a demonstrated efficacy gap — KUVAN's response should lean on its established BH4-responsiveness evidence base.",
  },
  {
    id: 'comp-002',
    name: 'Tividenofusp alfa (DNL310)',
    genericName: 'tividenofusp alfa',
    company: 'Denali Therapeutics',
    mechanism: 'BBB-penetrant enzyme replacement fusion protein',
    approvedIndications: ['MPS II — BLA under review, PDUFA ~Apr 2026'],
    strengths: ['Blood-brain-barrier-penetrant delivery, addressing an unmet CNS need in MPS'],
    weaknesses: ['Different MPS subtype (MPS II) than BioMarin\'s MPS VI/IVA/I portfolio — not a direct competitor'],
    strategicThreatLevel: 'Low',
    marketStatus: 'No confirmed BioMarin MPS II asset — not a direct competitive overlap, but relevant pipeline awareness',
    summary: 'DNL310 targets MPS II, a subtype BioMarin does not currently address — useful context for MSLs fielding broader MPS-community pipeline questions, not a competitive threat to Naglazyme/Vimizim/Aldurazyme.',
  },
  {
    id: 'comp-003',
    name: 'DNL126',
    genericName: 'DNL126',
    company: 'Denali Therapeutics',
    mechanism: 'BBB-penetrant enzyme replacement fusion protein',
    approvedIndications: ['MPS IIIA (Sanfilippo A) — pipeline'],
    strengths: ['Addresses an MPS subtype with no approved therapy'],
    weaknesses: ['Early-stage, not yet approved'],
    strategicThreatLevel: 'Low',
    marketStatus: 'Pipeline, no confirmed BioMarin overlap',
    summary: 'Another Denali MPS pipeline asset outside BioMarin\'s current four-product MPS portfolio.',
  },
  {
    id: 'comp-004',
    name: 'Navepegritide (TransCon CNP)',
    genericName: 'navepegritide',
    company: 'Ascendis Pharma',
    mechanism: 'Once-weekly CNP prodrug',
    approvedIndications: ['Achondroplasia — pivotal ApproaCH trial met primary endpoint; US NDA under review (PDUFA extended to Feb 28, 2026), EU decision expected Q4 2026'],
    strengths: ['Once-weekly dosing vs. VOXZOGO\'s daily injection', 'Regulatory-stage — a live, current threat, not merely emerging'],
    weaknesses: ['No long-term real-world safety/efficacy track record comparable to VOXZOGO\'s established achondroplasia base'],
    strategicThreatLevel: 'High',
    marketStatus: 'Direct, regulatory-stage competitor to VOXZOGO; BMN 333 is BioMarin\'s explicit long-acting response',
    summary: "Navepegritide is the single most consequential live competitive threat in BioMarin's skeletal franchise. BMN 333's differentiation data needs to be field-ready before the EU decision lands in Q4 2026.",
  },
  {
    id: 'comp-005',
    name: 'Hemgenix (etranacogene dezaparvovec) — hemophilia B, not a direct competitor',
    genericName: 'etranacogene dezaparvovec',
    company: 'CSL Behring',
    mechanism: 'AAV gene therapy',
    approvedIndications: ['Hemophilia B'],
    strengths: [],
    weaknesses: ['Weak commercial uptake — reinforces the industry-wide hemophilia gene-therapy retreat pattern'],
    strategicThreatLevel: 'Low',
    marketStatus: 'Different disease (hemophilia B, not A) — not a direct Roctavian competitor',
    summary: 'Hemgenix and Roctavian are not head-to-head competitors, but Hemgenix\'s weak uptake is a useful, honest category-wide data point when contextualizing Roctavian\'s US exit as part of a broader trend rather than a BioMarin-specific failure.',
  },
  {
    id: 'comp-006',
    name: 'Beqvez (fidanacogene elaparvovec) — hemophilia B, discontinued',
    genericName: 'fidanacogene elaparvovec',
    company: 'Pfizer',
    mechanism: 'AAV gene therapy',
    approvedIndications: ['Hemophilia B — discontinued by Pfizer'],
    strengths: [],
    weaknesses: ['Discontinued'],
    strategicThreatLevel: 'Low',
    marketStatus: 'Discontinued; different disease than hemophilia A',
    summary: 'Pfizer\'s discontinuation of Beqvez is a second real, citable category-wide data point reinforcing that hemophilia gene therapy\'s commercial challenges are industry-wide, not unique to Roctavian. Keep the hemophilia A/B distinction precise in all field copy.',
  },
];

export const MARKET_ACCESS_INTELLIGENCE = {
  pricingContext:
    'KUVAN, PALYNZIQ, Naglazyme, Vimizim, and Brineura are established, fully BioMarin-commercialized rare-disease therapies with mature formulary positioning. Aldurazyme is co-commercialized through the BioMarin/Genzyme LLC joint venture — Genzyme/Sanofi handles global sales and marketing, BioMarin manufactures and receives a royalty. VOXZOGO is BioMarin\'s stated growth pillar, mid label-expansion. ROCTAVIAN carries a $2.9M US list price but weak US commercial uptake (~$26M 2024 sales) — the US market withdrawal (end of May 2026) and divestiture exploration reflect that commercial reality, not a clinical failure (5-year GENEr8-1 data remains durable, ~80.8% off prophylaxis, no new safety signals).',
  competitiveLandscapeSummary:
    "KUVAN faces its first genuine oral competitor in Sephience (PTC Therapeutics). The MPS/Lysosomal franchise has no direct competitive overlap in its current four products, though Denali's MPS II/IIIA pipeline is relevant contextual awareness. VOXZOGO faces a live, regulatory-stage competitor in Ascendis's navepegritide, with BMN 333 as BioMarin's direct response. ROCTAVIAN has no direct hemophilia-A gene-therapy competitor; the relevant context is category-wide commercial struggle (Hemgenix, Beqvez — both hemophilia B) rather than head-to-head competition.",
  payerChallenges: [
    'BH4-responsiveness testing is not always ordered before a KUVAN-vs-Sephience-vs-diet-alone decision is made, creating messaging urgency as Sephience gains formulary footing',
    'MPS diagnostic delay at the community-pediatrician referral handoff remains the primary real-world access bottleneck across Naglazyme, Vimizim, and Brineura',
    'Hypochondroplasia off-label access pressure is building ahead of the VOXZOGO sNDA filing (Q3 2026) — a genuine access-integrity risk if not managed transparently',
    'US Roctavian patients mid-evaluation at the time of the withdrawal announcement need a single, consistent transition protocol to avoid inconsistent center-by-center messaging',
  ],
  realWorldEvidenceBase:
    'The strongest evidence anchors are the PEGASUS adolescent Phase 3 data (PALYNZIQ, presented ICIEM 2025), CANOPY-HCH-3 (VOXZOGO hypochondroplasia, presented ESPE/ESE 2025), the BioMarin-sponsored achondroplasia safety database (>5,000 patients, zero SCFE cases), and GENEr8-1 5-year durability data (ROCTAVIAN, ~80.8% off prophylaxis).',
};

// Franchise pharmacology/mechanism content — grounds Auri's cross-product
// conversations across BioMarin's four therapeutic areas.
export const RARE_DISEASE_PORTFOLIO_SCIENCE = {
  overview:
    "BioMarin's rare-disease portfolio spans four therapeutic areas at very different lifecycle stages: the PKU franchise (KUVAN, a synthetic BH4 cofactor, and PALYNZIQ, a PEGylated PAL enzyme substitution therapy, now also approved in adolescents), MPS/Lysosomal storage disorders (Naglazyme, Vimizim, Brineura — fully BioMarin-commercialized enzyme replacement therapies — and Aldurazyme, co-commercialized with Genzyme/Sanofi), Skeletal Conditions (VOXZOGO, a CNP analog in active label expansion, and BMN 333, its long-acting successor in development), and Hemophilia A gene therapy (ROCTAVIAN, being withdrawn from the US market while remaining available ex-US). The unifying strategic thread is precise, honest communication at each product's real lifecycle stage — growth, defense, or managed transition — not a single shared narrative.",
  sephienceCompetitiveContext:
    "PTC Therapeutics' Sephience (sepiapterin), FDA-approved Jul 28, 2025 (also EU, Japan), is an oral PAH activator/BH4 precursor and KUVAN's first genuinely direct oral competitor. The switching pressure is driven by simplification framing (once-daily oral, similar to KUVAN itself) rather than any demonstrated head-to-head efficacy advantage — no comparative trial exists.",
  pegasusAdolescentData:
    "PEGASUS (Phase 3, 55 adolescents 12–17) demonstrated blood phenylalanine reduction of −473 vs. −19 µmol/L at week 72 vs. diet alone, supporting the 2026 FDA approval of PALYNZIQ in adolescents. Data was presented at ICIEM 2025 (Kyoto). Field adoption friction centers on dose-escalation and anaphylaxis-monitoring burden, not efficacy skepticism.",
  aldurazymeCoMarketingNuance:
    "Aldurazyme (laronidase, MPS I) is co-commercialized through the BioMarin/Genzyme LLC 50/50 joint venture with Sanofi-Genzyme: Genzyme/Sanofi markets and sells globally, BioMarin manufactures and receives a royalty (~39.5–50% of net sales). This is a materially different commercial relationship than Naglazyme, Vimizim, and Brineura, which BioMarin fully commercializes — messaging and MSL positioning must not overstate BioMarin's promotional ownership of Aldurazyme.",
  scfeSafetySignal:
    "In March 2026, BioMarin discontinued dosing and enrollment in the Turner syndrome, SHOX deficiency, and ACAN-deficiency CANOPY trials after SCFE (slipped capital femoral epiphysis) events in two investigator-sponsored trials. There have been no SCFE cases in BioMarin-sponsored achondroplasia trials (>5,000 patients). Noonan syndrome and idiopathic short stature (non-ACAN) trials continue unaffected. This distinction is precise and must not be blurred in either direction — into false reassurance or into overstated concern.",
  roctavianUSExit:
    "ROCTAVIAN (valoctocogene roxaparvovec), FDA-approved Jun 2023 as the first gene therapy for adult severe hemophilia A, has strong durability data (GENEr8-1, ~80.8% off prophylaxis at 5 years, no new safety signals) but weak US commercial performance (~$26M 2024 sales). BioMarin is withdrawing it from the US market effective end of May 2026, with a full divestiture under exploration — part of an industry-wide hemophilia gene-therapy commercial retreat (Pfizer discontinued Beqvez for hemophilia B; CSL's Hemgenix for hemophilia B has seen weak uptake), though neither is a direct hemophilia-A competitor. Roctavian remains commercially available outside the US.",
  guidelineContext: {
    achondroplasiaConsensus: 'The vosoritide achondroplasia consensus guidelines (Nat Rev Endocrinol, co-authored by Savarirayan, Cormier-Daire, Maghnie, Backeljauw, Ozono, and Fredwall among others) remain the field reference for VOXZOGO patient selection and monitoring.',
    hypochondroplasiaTimeline: 'CANOPY-HCH-3 met its primary endpoint; sNDA planned Q3 2026 with potential 2027 launch, pending FDA review.',
  },
};

export const PIPELINE_INTELLIGENCE = [
  {
    id: 'pipe-001',
    name: 'BMN 333 — long-acting CNP analog',
    mechanism: 'Long-acting C-type natriuretic peptide (CNP) analog, successor to vosoritide',
    stage: 'Phase 2/3 (enrolling since Apr 2025)',
    indication: 'Achondroplasia, comparative vs. vosoritide',
    expectedTimeline: 'Phase 1 healthy-adult data positive (weekly dosing); registration-enabling study ongoing; data update expected 2027, early data at ENDO 2026',
    significance:
      "BioMarin's direct response to Ascendis's regulatory-stage navepegritide — extending the CNP-pathway franchise to once-weekly dosing (MO5).",
  },
  {
    id: 'pipe-002',
    name: 'BMN 307 — AAV5-PAH gene therapy',
    mechanism: 'One-time AAV5 gene therapy for PKU',
    stage: 'Clinical hold since Sept 2021',
    indication: 'Phenylketonuria (PKU)',
    expectedTimeline: 'Under FDA clinical hold following a preclinical liver tumor signal — not an active near-term pipeline asset',
    significance:
      'Should not be depicted as active or near-term. Relevant only if a prescriber or KOL directly asks about BioMarin\'s PKU gene-therapy program — the accurate, honest answer is that it remains on clinical hold.',
  },
];
