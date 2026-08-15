// ============================================================================
// Congress Intelligence Data — BioMarin Pharmaceutical
// Keys off CONGRESS_OPTIONS from config
// ============================================================================

import { PRODUCT_OPTIONS } from '../config';

const productNames = PRODUCT_OPTIONS.map(p => p.name);
// productNames: KUVAN, PALYNZIQ, Naglazyme, Vimizim, Aldurazyme, Brineura, VOXZOGO, BMN 333, ROCTAVIAN

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-ESPE/ESE 2025', 'Post-ICIEM 2025', 'Q1 2026', 'Post-WFH 2026', 'Post-ASGCT 2026'],
  scientific: [
    { period: 'Post-ESPE/ESE 2025', VOXZOGO: 71, KUVAN: 66, PALYNZIQ: 60, ROCTAVIAN: 64, Other: 50 },
    { period: 'Post-ICIEM 2025',    VOXZOGO: 70, KUVAN: 62, PALYNZIQ: 76, ROCTAVIAN: 62, Other: 51 },
    { period: 'Q1 2026',            VOXZOGO: 68, KUVAN: 57, PALYNZIQ: 78, ROCTAVIAN: 55, Other: 51 },
    { period: 'Post-WFH 2026',      VOXZOGO: 65, KUVAN: 54, PALYNZIQ: 79, ROCTAVIAN: 60, Other: 52 },
    { period: 'Post-ASGCT 2026',    VOXZOGO: 62, KUVAN: 52, PALYNZIQ: 81, ROCTAVIAN: 63, Other: 53 },
  ],
  social: [
    { period: 'Post-ESPE/ESE 2025', VOXZOGO: 58, KUVAN: 55, PALYNZIQ: 47, ROCTAVIAN: 40, Other: 45 },
    { period: 'Post-ICIEM 2025',    VOXZOGO: 56, KUVAN: 50, PALYNZIQ: 62, ROCTAVIAN: 38, Other: 46 },
    { period: 'Q1 2026',            VOXZOGO: 50, KUVAN: 46, PALYNZIQ: 64, ROCTAVIAN: 33, Other: 46 },
    { period: 'Post-WFH 2026',      VOXZOGO: 48, KUVAN: 44, PALYNZIQ: 65, ROCTAVIAN: 41, Other: 47 },
    { period: 'Post-ASGCT 2026',    VOXZOGO: 45, KUVAN: 43, PALYNZIQ: 67, ROCTAVIAN: 44, Other: 48 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'PEGASUS: pegvaliase in adolescents with phenylketonuria — Phase 3 results', journalOrCongress: 'ICIEM 2025', date: '2025-09', product: productNames[1], sentiment: 'positive' },
  { title: 'MPS diagnostic-delay real-world referral-pathway data', journalOrCongress: 'ICIEM 2025', date: '2025-09', product: productNames[2], sentiment: 'neutral' },
  { title: 'CANOPY-HCH-3: vosoritide in hypochondroplasia — Phase 3 topline results', journalOrCongress: 'ESPE/ESE Joint Congress 2025', date: '2025-05', product: productNames[6], sentiment: 'positive' },
  { title: 'Navepegritide (TransCon CNP) ApproaCH pivotal data', journalOrCongress: 'ESPE/ESE Joint Congress 2025', date: '2025-05', product: 'Competitor (Ascendis)', sentiment: 'neutral' },
  { title: 'GENEr8-1 5-year durability follow-up in severe hemophilia A', journalOrCongress: 'WFH World Congress 2026', date: '2026-04', product: productNames[8], sentiment: 'positive' },
  { title: 'Ex-US hemophilia treatment-center continuity discussion following US Roctavian withdrawal announcement', journalOrCongress: 'WFH World Congress 2026', date: '2026-04', product: productNames[8], sentiment: 'mixed' },
  { title: 'Cross-rare-disease gene and cell therapy landscape review', journalOrCongress: 'ASGCT 2026 Annual Meeting', date: '2026-05', product: 'Cross-portfolio', sentiment: 'positive' },
  { title: 'SCFE safety-signal precision-messaging hallway discussion', journalOrCongress: 'ASGCT 2026 Annual Meeting', date: '2026-05', product: productNames[6], sentiment: 'mixed' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'LinkedIn', author: 'Biochemical genetics KOL', topic: 'KUVAN vs. Sephience switching conversation', date: '2026-06', product: productNames[0], sentiment: 'mixed' },
  { platform: 'Twitter', author: 'PKU community', topic: 'PEGASUS adolescent PALYNZIQ approval reaction', date: '2026-06', product: productNames[1], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Skeletal dysplasia KOL', topic: 'Hypochondroplasia sNDA-timeline impatience', date: '2026-07', product: productNames[6], sentiment: 'mixed' },
  { platform: 'Conference backchannel', author: 'Multiple', topic: 'WFH 2026 Roctavian US-withdrawal reaction', date: '2026-04', product: productNames[8], sentiment: 'mixed' },
  { platform: 'Twitter', author: 'Pediatric endocrinology community', topic: 'SCFE safety-signal scope confusion', date: '2026-07', product: productNames[6], sentiment: 'neutral' },
];

export const MOCK_INGESTION = {
  agendas: 9,
  abstracts: 742,
  posters: 268,
  speakers: 214,
  publicationsLinked: 823,
  sessions: [
    { title: 'PKU Franchise: Oral Competitor Landscape & Adolescent Expansion', track: 'Biochemical Genetics', products: [productNames[0], productNames[1]] },
    { title: 'MPS/Lysosomal Diagnostic-Pathway Excellence', track: 'Biochemical Genetics', products: [productNames[2], productNames[3], productNames[5]] },
    { title: 'Skeletal Conditions: Label Expansion & Competitive Landscape', track: 'Pediatric Endocrinology', products: [productNames[6], productNames[7]] },
    { title: 'Hemophilia A Gene Therapy: Market Realities & Ex-US Continuity', track: 'Hematology', products: [productNames[8]] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'iciem-2025': {
    agendas: 8,
    abstracts: 612,
    posters: 224,
    speakers: 178,
    publicationsLinked: 641,
    sessions: [
      { title: 'PEGASUS Adolescent PALYNZIQ Phase 3 Data', track: 'Biochemical Genetics', products: [productNames[1]] },
      { title: 'Sephience (sepiapterin) Launch Session', track: 'Biochemical Genetics', products: [] },
      { title: 'MPS Diagnostic-Delay Real-World Data', track: 'Biochemical Genetics', products: [productNames[2], productNames[3]] },
      { title: 'Newborn Screening Expansion Panel', track: 'Biochemical Genetics', products: [productNames[0]] },
    ],
  },
  'espe-ese-2025': {
    agendas: 7,
    abstracts: 589,
    posters: 213,
    speakers: 165,
    publicationsLinked: 601,
    sessions: [
      { title: 'CANOPY-HCH-3 Hypochondroplasia Phase 3 Topline', track: 'Pediatric Endocrinology', products: [productNames[6]] },
      { title: 'Navepegritide (TransCon CNP) ApproaCH Pivotal Data', track: 'Pediatric Endocrinology', products: [] },
      { title: 'Achondroplasia Consensus Guidelines Update', track: 'Pediatric Endocrinology', products: [productNames[6]] },
      { title: 'CANOPY Program Safety Update (Turner/SHOX/ACAN)', track: 'Pediatric Endocrinology', products: [productNames[6]] },
    ],
  },
  'wfh-2026': {
    agendas: 6,
    abstracts: 431,
    posters: 156,
    speakers: 129,
    publicationsLinked: 398,
    sessions: [
      { title: 'GENEr8-1 5-Year Durability Follow-Up', track: 'Hematology', products: [productNames[8]] },
      { title: 'Hemophilia Gene Therapy Commercial Landscape Panel', track: 'Hematology', products: [productNames[8]] },
      { title: 'Ex-US Access & Continuity Discussion', track: 'Hematology', products: [productNames[8]] },
    ],
  },
  'asgct-2026': {
    agendas: 10,
    abstracts: 918,
    posters: 341,
    speakers: 267,
    publicationsLinked: 872,
    sessions: [
      { title: 'Cross-Rare-Disease Gene & Cell Therapy Landscape', track: 'Cross-Portfolio', products: [] },
      { title: 'AAV Gene Therapy Commercial Realities Panel', track: 'Hematology', products: [productNames[8]] },
      { title: 'Enzyme Replacement & Substitution Therapy Advances', track: 'Biochemical Genetics', products: [productNames[1], productNames[5]] },
    ],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'Sephience competitive displacement risk (KUVAN)',
    momentum: 88,
    mentions: 47,
    summary: "Community geneticists are evaluating Sephience's oral, once-daily profile for stable KUVAN patients, driven by simplification framing rather than a demonstrated efficacy gap.",
    action: 'Deploy the KUVAN-vs-Sephience comparison card and BH4-responsiveness testing FAQ.',
  },
  {
    theme: 'SCFE-vs-achondroplasia precision-messaging gap (VOXZOGO)',
    momentum: 91,
    mentions: 52,
    summary: 'Some community endocrinologists are conflating the discontinued Turner/SHOX/ACAN SCFE signal with general achondroplasia safety.',
    action: 'Distribute the SCFE precision talking points and achondroplasia safety-database one-pager.',
  },
  {
    theme: 'ROCTAVIAN US-exit and ex-US credibility (ROCTAVIAN)',
    momentum: 89,
    mentions: 49,
    summary: 'US treaters need a concrete patient-transition protocol; ex-US treaters need proactive reassurance that the withdrawal is not a broader retreat.',
    action: 'Finalize the US transition protocol and publish the ex-US credibility statement.',
  },
  {
    theme: 'PALYNZIQ adolescent adoption friction (PALYNZIQ)',
    momentum: 80,
    mentions: 38,
    summary: 'Adolescent PALYNZIQ initiation lags PEGASUS enthusiasm due to monitoring-burden concerns, not efficacy skepticism.',
    action: 'Publish the adolescent-specific starter guide and monitoring-protocol comparison.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} vs. Sephience (PTC Therapeutics)`, share: 34, mentions: 91 },
  { product: `${productNames[6]} vs. navepegritide (Ascendis)`, share: 22, mentions: 68 },
  { product: `${productNames[3]} vs. tividenofusp alfa (Denali, different MPS subtype)`, share: 4, mentions: 12 },
  { product: `${productNames[8]} vs. category-wide hemophilia gene-therapy retreat (Hemgenix/Beqvez, hemophilia B)`, share: 9, mentions: 24 },
];

export const MOCK_TRIALS = {
  total: 10,
  linkedToKOLs: 10,
  byIndication: { 'Phenylketonuria (PKU)': 2, 'MPS/Lysosomal': 4, 'Skeletal Conditions': 4, 'Hemophilia A': 1 },
  sample: [
    { nctId: null, title: 'PEGASUS — pegvaliase in adolescents with PKU', phase: 'Phase III', sponsor: 'BioMarin Pharmaceutical', product: productNames[1], indication: 'Phenylketonuria (PKU)', status: 'Completed', sites: null },
    { nctId: null, title: 'Vosoritide pivotal trial — achondroplasia', phase: 'Phase III', sponsor: 'BioMarin Pharmaceutical', product: productNames[6], indication: 'Skeletal Conditions', status: 'Completed', sites: null },
    { nctId: null, title: 'CANOPY-HCH-3 — vosoritide in hypochondroplasia', phase: 'Phase III', sponsor: 'BioMarin Pharmaceutical', product: productNames[6], indication: 'Skeletal Conditions', status: 'Completed (positive)', sites: null },
    { nctId: null, title: 'GENEr8-1 — valoctocogene roxaparvovec in severe hemophilia A', phase: 'Phase III', sponsor: 'BioMarin Pharmaceutical', product: productNames[8], indication: 'Hemophilia A', status: 'Completed', sites: null },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 3214,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'Twitter / X', mentions: 981, kolsTracked: 71 },
    { platform: 'LinkedIn', mentions: 876, kolsTracked: 94 },
    { platform: 'PubMed / alerts', mentions: 512, kolsTracked: 213 },
    { platform: 'Conference backchannels', mentions: 845, kolsTracked: 108 },
  ],
  sample: [
    { platform: 'LinkedIn', author: 'Biochemical genetics KOL', topic: 'KUVAN vs. Sephience switching conversation', sentiment: 'mixed', date: '2026-06-15' },
    { platform: 'Twitter', author: 'PKU community', topic: 'PEGASUS adolescent PALYNZIQ approval reaction', sentiment: 'positive', date: '2026-06-20' },
    { platform: 'Conference backchannel', author: 'Multiple', topic: 'WFH 2026 Roctavian US-withdrawal reaction', sentiment: 'mixed', date: '2026-04-21' },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText', status: 'connected', description: 'Agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials', label: 'Clinical Trials & Registries', iconId: 'Activity', status: 'available', description: 'Trial sponsorship, sites, outcomes by product' },
  { id: 'social', label: 'Social & Digital', iconId: 'MessageCircle', status: 'available', description: 'Scientific and digital footprint signals' },
];

export function getDemoContext() {
  return {
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
