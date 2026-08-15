// VEGA — Strategic Analytics agent. BioMarin Pharmaceutical.
// MSL roster (6, locked) is reused verbatim in Nova Tab2, the Pulse Brief,
// and the Capture app:
//   Dr. Rachel Simmons  — US Northeast (Boston/Pittsburgh — PKU/MPS/Hemophilia)
//   Dr. Daniel Osorio   — US Central (Chicago/Cincinnati/Minneapolis — Skeletal/MPS)
//   Dr. Priya Chandran  — US West (SF/Oakland, Utah, Portland — PKU/MPS)
//   Dr. Emma Whitfield   — UK & Ireland (London — Hemophilia/Skeletal)
//   Dr. Julian Voss      — Continental Europe (Germany/France/Italy/Netherlands/Norway — MPS/Skeletal)
//   Dr. Amara Okafor     — International/Rest of World (Brazil/South Africa/Japan/Australia — cross-TA)

export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '36% of HCPs achieving sustained practice change vs 25% industry average — +44% outperformance. Slowest conversion: Intent → Sustained change (52%, avg 61 days). Primary blocker: precision-messaging and access-transition friction (SCFE-vs-achondroplasia distinction, Roctavian US-exit patient counseling) rather than clinical hesitancy.',
  stages: [
    { stage: 'Sustained practice change', hcps: 421,  pctTotal: 36, vsQ4: '+5%'  },
    { stage: 'Actively changing practice', hcps: 498,  pctTotal: 42, vsQ4: '+4%'  },
    { stage: 'Intent to change',           hcps: 691,  pctTotal: 58, vsQ4: '+3%'  },
    { stage: 'Knowledgeable',              hcps: 998,  pctTotal: 84, vsQ4: '+2%'  },
    { stage: 'Aware only',                 hcps: 312,  pctTotal: 26, vsQ4: '-5%'  },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Dr. Rachel Simmons shows the strongest quality and insight rate — her Boston/Pittsburgh academic-center density gives her the richest PKU, MPS, and hemophilia scientific exchanges on the team. Dr. Priya Chandran shows high quality despite a lighter footprint, reflecting the smaller West Coast PKU/MPS account base. Dr. Emma Whitfield\'s volume is elevated given the concentrated attention the Roctavian US-exit story is drawing from UK hemophilia colleagues.',
  rows: [
    { msl: 'Dr. Rachel Simmons', region: 'US Northeast — PKU/MPS/Hemophilia',        interactions: 44, vsTarget: '+5%',  quality: 8.8, insightRate: 80, overall: 'Excellent'   },
    { msl: 'Dr. Daniel Osorio',  region: 'US Central — Skeletal/MPS',                interactions: 39, vsTarget: '-3%',  quality: 8.1, insightRate: 71, overall: 'On track'    },
    { msl: 'Dr. Priya Chandran', region: 'US West — PKU/MPS',                        interactions: 28, vsTarget: '-14%', quality: 8.4, insightRate: 74, overall: 'Volume gap'  },
    { msl: 'Dr. Emma Whitfield', region: 'UK & Ireland — Hemophilia/Skeletal',       interactions: 41, vsTarget: '+11%', quality: 7.6, insightRate: 62, overall: 'Quality gap' },
    { msl: 'Dr. Julian Voss',    region: 'Continental Europe — MPS/Skeletal',        interactions: 35, vsTarget: '-2%',  quality: 8.3, insightRate: 73, overall: 'On track'    },
    { msl: 'Dr. Amara Okafor',   region: 'International/RoW — Cross-TA',            interactions: 22, vsTarget: '-8%',  quality: 8.0, insightRate: 68, overall: 'On track'    },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Ravi Savarirayan, MD',      tier: 'Tier 1', lastContact: '2026-05-02', gap: '13 weeks', action: 'Re-engage urgently — highest-priority skeletal voice for hypochondroplasia and BMN 333, prioritize ahead of Q3 2026 sNDA filing' },
  { kol: 'Steven W. Pipe, MD',        tier: 'Tier 1', lastContact: '2026-05-20', gap: '10 weeks', action: 'Schedule ex-US credibility and GENEr8-1 durability-focused exchange soon' },
  { kol: 'Jerry Vockley, MD, PhD, FACMG', tier: 'Tier 1', lastContact: '2026-06-03', gap: '8 weeks', action: 'Plan Sephience-response scientific exchange given BH4-responsiveness expertise' },
  { kol: 'K. John Pasi, MD, PhD',     tier: 'Tier 1', lastContact: '2026-06-21', gap: '6 weeks',  action: 'On track — ex-US GENEr8-1 follow-up pending' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Digital share of voice for ROCTAVIAN is contracting in the US as the withdrawal approaches, while ex-US voice remains comparatively strong — worth protecting deliberately. VOXZOGO faces rising Ascendis (navepegritide) voice on once-weekly-dosing content ahead of its EU decision. Recommend prioritizing ex-US hemophilia and skeletal-competitive digital scientific communication.',
  rows: [
    { source: 'Congress abstracts (ICIEM/ESPE-ESE/WFH/ASGCT 2025-26)', us: '28%',  compA: '22%', compB: '18%', compC: '15%', trend: 'flat' },
    { source: 'Peer-reviewed publications (12m)',                       us: '26%',  compA: '24%', compB: '19%', compC: '14%', trend: 'flat' },
    { source: 'KOL active endorsements',                                us: '31%',  compA: '21%', compB: '19%', compC: '13%', trend: 'down' },
    { source: 'Citation index (vs. competitors)',                       us: '1.4×', compA: '1.5×', compB: '1.1×', compC: '1.0×', trend: 'flat' },
    { source: 'Social / digital mentions',                               us: '19%',  compA: '25%', compB: '21%', compC: '17%', trend: 'down' },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Ravi Savarirayan, MD',   score: 90, change30d: '+1.8', velocity: '+0.6 ↑',  interpretation: 'Steady positive — VOXZOGO hypochondroplasia expansion relationship performing well' },
  { kol: 'Steven W. Pipe, MD',     score: 84, change30d: '+2.4', velocity: '+0.8 ↑',  interpretation: 'Positive, holding — strong ex-US credibility anchor despite US withdrawal news' },
  { kol: 'Klaus Mohnike, MD',      score: 63, change30d: '-4.1', velocity: '-1.4 ↓↓', interpretation: 'Cooling — proactive navepegritide-aware BMN 333 re-engagement recommended before EU decision (see AI7)' },
  { kol: 'Jerry Vockley, MD, PhD, FACMG', score: 81, change30d: '-1.0', velocity: '-0.3 ↓', interpretation: 'Stable but slightly cooling — Sephience competitive pressure worth monitoring' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'SCFE-vs-achondroplasia safety-message precision (VOXZOGO)',      linkedMO: 'MO4', baseline: '47%',        current: '74% (+27pts)',       patientsImpacted: '830 patients counseled with correctly-scoped safety framing' },
  { gap: 'Adolescent PALYNZIQ initiation discussion rate (PALYNZIQ)',       linkedMO: 'MO2', baseline: '29%',        current: '51% (+22pts)',       patientsImpacted: '265 newly-eligible adolescents discussed for initiation' },
  { gap: 'Aldurazyme co-marketing routing confidence (internal MSL team)',  linkedMO: 'MO3', baseline: '44%',        current: '79% (+35pts)',       patientsImpacted: 'N/A — internal field-team readiness metric' },
  { gap: 'US Roctavian patient-transition messaging consistency',          linkedMO: 'MO6', baseline: '41%',        current: '72% (+31pts)',       patientsImpacted: '190 US patients transitioned under a consistent, written protocol' },
];

export const VEGA_ROMI = {
  netValueCreated: '$14.2M',
  roiPct: '176%',
  returnPerPound: '$2.76',
  rows: [
    { category: 'KUVAN retention value protection vs. Sephience', value: '$5.6M', methodology: 'Accounts with high MSL engagement show 1.7× lower switching-conversation-to-referral rate — difference-in-difference analysis vs. non-engaged accounts' },
    { category: 'PALYNZIQ adolescent expansion capture',           value: '$3.9M', methodology: 'Accounts receiving the adolescent starter guide show materially faster newly-eligible initiation discussion rates' },
    { category: 'VOXZOGO franchise-trust protection (SCFE precision messaging)', value: '$2.8M', methodology: 'Accounts with precision-messaging engagement show measurably lower general-safety-concern escalation to Med Info' },
    { category: 'ROCTAVIAN ex-US credibility & divestiture-support value',       value: '$1.9M', methodology: 'Ex-US accounts receiving the credibility statement show sustained advocacy scores vs. accounts without proactive outreach' },
    { category: 'Total investment',                                             value: '-$8.1M', methodology: 'Full Medical Affairs budget — MSL team, advisory boards, congress, content, digital scientific exchange' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 75,
  vsQ4: '+4',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',      score: 81, commentary: 'Above target — MSL interactions, precision-messaging content, and the US patient-transition protocol all exceeding benchmarks' },
    { dim: 'External ecosystem impact', score: 77, commentary: '+27pts SCFE-vs-achondroplasia precision-messaging accuracy in engaged accounts; strong congress presence across ICIEM, ESPE/ESE, WFH, and ASGCT 2025-26' },
    { dim: 'HCP practice change',       score: 74, commentary: '36% sustained change vs. 25% industry average — solid outperformance, led by SCFE precision-messaging and adolescent PALYNZIQ gains' },
    { dim: 'Patient care gap closure',  score: 73, commentary: 'Adolescent PALYNZIQ discussion rate +22pts, US Roctavian transition consistency +31pts, safety-message precision +27pts' },
    { dim: 'Internal ecosystem impact', score: 68, commentary: 'MO3 (MPS field excellence/Aldurazyme clarity) and MO4 (VOXZOGO/SCFE) both still at Gap status — internal MSL training and precision-messaging saturation remain the key improvement opportunities' },
  ],
};
