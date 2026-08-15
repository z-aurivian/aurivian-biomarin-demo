// Strategic framework — BioMarin Pharmaceutical. NOVA's spine: ISP →
// Medical Objectives → Listening Priorities → KIQs. Grounded in each
// franchise's real evidence base and competitive/lifecycle position: PKU
// defending KUVAN against Sephience's oral entry while landing the
// PALYNZIQ adolescent expansion; MPS/Lysosomal sustaining field excellence
// across four established products with one real co-marketing nuance
// (Aldurazyme); Skeletal Conditions — BioMarin's stated growth pillar —
// navigating a genuine label-expansion opportunity (hypochondroplasia)
// alongside a real safety signal (SCFE, Turner/SHOX/ACAN discontinuation)
// and a live regulatory-stage competitor (Ascendis navepegritide); and
// Hemophilia A executing an honest US-market exit and divestiture
// evaluation, not a growth story.

export const ISP_PILLARS = [
  {
    id: 'p1',
    title: 'Enzyme Therapies — PKU franchise defense & adolescent expansion',
    description: 'Defend KUVAN\'s BH4-responsive PKU population against Sephience\'s 2025 oral-competitor entry while landing the newly-approved PALYNZIQ adolescent (12–17) indication on its PEGASUS evidence base.',
  },
  {
    id: 'p2',
    title: 'Enzyme Therapies — MPS/Lysosomal field excellence',
    description: 'Sustain scientific and field excellence across Naglazyme, Vimizim, and Brineura, and communicate BioMarin\'s actual co-commercialization role in Aldurazyme (BioMarin/Genzyme LLC joint venture; Sanofi-Genzyme markets and sells) accurately rather than by default extending the fully-BioMarin-promoted model used for the other three.',
  },
  {
    id: 'p3',
    title: 'Skeletal Conditions — growth pillar, disciplined expansion',
    description: 'Execute VOXZOGO\'s hypochondroplasia label expansion (sNDA planned Q3 2026) and BMN 333\'s successor-positioning against Ascendis\'s regulatory-stage navepegritide, while communicating the March 2026 SCFE safety signal and Turner/SHOX/ACAN discontinuation with precision — no overclaiming in either direction.',
  },
  {
    id: 'p4',
    title: 'Hemophilia A — managed US exit & divestiture-support intelligence',
    description: 'Navigate ROCTAVIAN\'s US market withdrawal (effective end of May 2026) with field and scientific integrity: preserve ex-US scientific credibility, support existing US patients through an honest transition, and feed real KOL/field intelligence into BioMarin\'s divestiture evaluation.',
  },
];

export const MEDICAL_OBJECTIVES = [
  {
    id: 'MO1',
    name: 'KUVAN retention amid Sephience oral-competitor entry',
    description: 'Defend the BH4-responsive PKU population against PTC Therapeutics\' Sephience (sepiapterin), FDA-approved Jul 28, 2025 — a direct, current oral-competitor threat.',
    ispPillarRef: 'p1',
  },
  {
    id: 'MO2',
    name: 'PALYNZIQ adolescent (PEGASUS) adoption',
    description: 'Drive confident adolescent (12–17) PALYNZIQ initiation on the 2026 FDA approval, grounded in PEGASUS Phase 3 data (blood Phe −473 vs. −19 µmol/L at week 72 vs. diet alone) presented at ICIEM 2025.',
    ispPillarRef: 'p1',
  },
  {
    id: 'MO3',
    name: 'MPS field excellence & Aldurazyme co-marketing clarity',
    description: 'Sustain diagnostic-pathway and referral-pathway field excellence across Naglazyme, Vimizim, and Brineura, and equip MSLs to accurately represent BioMarin\'s manufacturing/royalty (not full-commercialization) role in Aldurazyme.',
    ispPillarRef: 'p2',
  },
  {
    id: 'MO4',
    name: 'VOXZOGO hypochondroplasia readiness & SCFE safety-signal communication',
    description: 'Prepare the field for the hypochondroplasia sNDA (Q3 2026) while equipping MSLs with precise, non-overclaiming language distinguishing the March 2026 SCFE signal (Turner/SHOX/ACAN, investigator-sponsored trials, now discontinued) from the BioMarin-sponsored achondroplasia safety base (>5,000 patients, zero SCFE cases).',
    ispPillarRef: 'p3',
  },
  {
    id: 'MO5',
    name: 'BMN 333 successor positioning vs. Ascendis navepegritide',
    description: 'Differentiate BMN 333 (long-acting CNP, Phase 2/3 enrolling) against Ascendis\'s navepegritide (TransCon CNP), a regulatory-stage once-weekly competitor with US PDUFA Feb 28, 2026 and EU decision Q4 2026.',
    ispPillarRef: 'p3',
  },
  {
    id: 'MO6',
    name: 'ROCTAVIAN US-exit navigation & divestiture-support intelligence',
    description: 'Support existing US patients honestly through the May 2026 withdrawal, preserve ex-US (UK/EU/international) scientific credibility with treating KOLs, and channel real field intelligence into the divestiture evaluation.',
    ispPillarRef: 'p4',
  },
];

export const LISTENING_PRIORITIES = [
  {
    id: 'LP1',
    name: 'Sephience competitive displacement risk',
    moRef: 'MO1',
    kiq: 'Are BH4-responsive PKU prescribers actively considering switching stable KUVAN patients to Sephience given its oral, once-daily profile, and what is driving that consideration?',
    kits: ['KUVAN-vs-Sephience clinical comparison card', 'BH4-responsiveness testing FAQ'],
  },
  {
    id: 'LP2',
    name: 'PALYNZIQ adolescent adoption barriers',
    moRef: 'MO2',
    kiq: 'What is preventing pediatric geneticists and endocrinologists from initiating newly-eligible adolescents on PALYNZIQ despite the PEGASUS efficacy data?',
    kits: ['PEGASUS adolescent data summary', 'Adolescent PALYNZIQ dose-escalation/anaphylaxis-monitoring FAQ'],
  },
  {
    id: 'LP3',
    name: 'Aldurazyme co-marketing confusion',
    moRef: 'MO3',
    kiq: 'Do treating physicians and MSLs themselves understand and correctly represent BioMarin\'s manufacturing/royalty role in Aldurazyme versus Genzyme/Sanofi\'s commercialization role?',
    kits: ['Aldurazyme co-marketing clarity card'],
  },
  {
    id: 'LP4',
    name: 'MPS diagnostic delay & referral-pathway gaps',
    moRef: 'MO3',
    kiq: 'Where in the community-to-specialist referral pathway are MPS diagnostic delays (Naglazyme, Vimizim, Brineura) still concentrated, and what would close them?',
    kits: ['MPS referral-pathway digest', 'Community pediatrician screening checklist'],
  },
  {
    id: 'LP5',
    name: 'VOXZOGO hypochondroplasia sNDA readiness',
    moRef: 'MO4',
    kiq: 'How prepared are skeletal-dysplasia specialists to counsel hypochondroplasia families ahead of the Q3 2026 sNDA filing and potential 2027 launch?',
    kits: ['CANOPY-HCH-3 data summary', 'Hypochondroplasia patient-identification checklist'],
  },
  {
    id: 'LP6',
    name: 'SCFE safety-signal field communication',
    moRef: 'MO4',
    kiq: 'Are field conversations about the March 2026 SCFE signal correctly scoped to the discontinued Turner/SHOX/ACAN investigator-sponsored trials, or is confusion bleeding into achondroplasia safety perception?',
    kits: ['SCFE safety-signal precision talking points', 'Achondroplasia safety-database summary (>5,000 patients)'],
  },
  {
    id: 'LP7',
    name: 'BMN 333 vs. navepegritide differentiation',
    moRef: 'MO5',
    kiq: 'As Ascendis\'s navepegritide approaches its US and EU regulatory decisions, how is skeletal-dysplasia KOL attention and advocacy shifting, and what does BMN 333 need to say now?',
    kits: ['BMN 333 Phase 1/2 differentiation briefing', 'Competitive regulatory-timeline tracker'],
  },
  {
    id: 'LP8',
    name: 'ROCTAVIAN US-exit field conversations & ex-US credibility',
    moRef: 'MO6',
    kiq: 'What are US and ex-US hemophilia A treaters actually being asked by patients and colleagues about the withdrawal and divestiture, and what intelligence from those conversations should inform the evaluation?',
    kits: ['US patient-transition conversation guide', 'Ex-US scientific-credibility engagement tracker'],
  },
];

// Coverage score per MO at the moment of the demo.
export const COVERAGE_TARGETS = {
  MO1: 'Low',
  MO2: 'Sufficient',
  MO3: 'Gap',
  MO4: 'Gap',
  MO5: 'Low',
  MO6: 'Low',
};
