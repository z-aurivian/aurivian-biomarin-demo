// BioMarin Pharmaceutical demo data — product-keyed tables for RAG context
// and legacy consumers. Canonical exports (KOL_DATA, KIT_SCORECARDS flat)
// live in src/config/*. This file provides per-product-keyed data used by
// rag.js / auriApi.js.

export { PRODUCT_OPTIONS, CONGRESS_OPTIONS } from '../config';
export { KOL_DATA } from '../config/kols';

// ============================================================================
// KIT SCORECARDS — per-product (for RAG context)
// ============================================================================

export const KIT_SCORECARDS = {
  kuvan: [
    {
      id: 'kuvan-kit-1',
      name: 'Sephience Competitive Displacement Risk',
      currentMentions: 289,
      priorMentions: 201,
      percentChange: 43.8,
      currentSentiment: 0.44,
      relevanceScore: 92,
      status: 'Alert',
      aiSummaryCurrent: "Sephience-related discussion is up 44% as PTC's oral, once-daily competitor completes its first full year on market. Stable KUVAN patients are increasingly initiating the switching conversation themselves.",
    },
  ],
  palynziq: [
    {
      id: 'palynziq-kit-1',
      name: 'PALYNZIQ Adolescent (PEGASUS) Adoption',
      currentMentions: 214,
      priorMentions: 138,
      percentChange: 55.1,
      currentSentiment: 0.61,
      relevanceScore: 88,
      status: 'Alert',
      aiSummaryCurrent: 'Adolescent PALYNZIQ discussion has grown 55% following the 2026 approval. Injection-site and monitoring-burden questions remain the top adoption friction despite strong PEGASUS efficacy data.',
    },
  ],
  naglazyme: [
    {
      id: 'naglazyme-kit-1',
      name: 'MPS Referral-Pathway & Diagnostic-Delay Gap',
      currentMentions: 176,
      priorMentions: 152,
      percentChange: 15.8,
      currentSentiment: 0.52,
      relevanceScore: 79,
      status: 'Active',
      aiSummaryCurrent: 'Diagnostic-delay discussion remains steady, concentrated at the community-pediatrician referral handoff rather than specialist-level uncertainty.',
    },
  ],
  vimizim: [
    {
      id: 'vimizim-kit-1',
      name: 'MPS Referral-Pathway & Diagnostic-Delay Gap',
      currentMentions: 176,
      priorMentions: 152,
      percentChange: 15.8,
      currentSentiment: 0.52,
      relevanceScore: 79,
      status: 'Active',
      aiSummaryCurrent: 'Diagnostic-delay discussion remains steady across Naglazyme, Vimizim, and Brineura, concentrated at the community-pediatrician referral handoff.',
    },
  ],
  aldurazyme: [
    {
      id: 'aldurazyme-kit-1',
      name: 'Aldurazyme Co-Marketing Clarity',
      currentMentions: 61,
      priorMentions: 47,
      percentChange: 29.8,
      currentSentiment: 0.5,
      relevanceScore: 64,
      status: 'Monitor',
      aiSummaryCurrent: "Lower-volume but persistent confusion about BioMarin's manufacturing/royalty role versus Genzyme/Sanofi's commercialization role continues to surface, now confirmed inside BioMarin's own field team as well as among physicians.",
    },
  ],
  brineura: [
    {
      id: 'brineura-kit-1',
      name: 'CLN2 Diagnostic-Delay & Intraventricular Delivery Questions',
      currentMentions: 94,
      priorMentions: 81,
      percentChange: 16.0,
      currentSentiment: 0.58,
      relevanceScore: 68,
      status: 'Active',
      aiSummaryCurrent: 'CLN2 diagnostic-delay discussion mirrors the broader MPS referral-pathway gap; intraventricular-delivery logistics questions remain a steady secondary theme.',
    },
  ],
  voxzogo: [
    {
      id: 'voxzogo-kit-1',
      name: 'SCFE Safety-Signal Precision Messaging',
      currentMentions: 198,
      priorMentions: 121,
      percentChange: 63.6,
      currentSentiment: 0.39,
      relevanceScore: 90,
      status: 'Alert',
      aiSummaryCurrent: 'Mentions surged 64% since the March 2026 signal. Some community endocrinologists conflate the discontinued Turner/SHOX/ACAN trials with general achondroplasia safety — a precision-messaging gap, not a new signal.',
    },
    {
      id: 'voxzogo-kit-2',
      name: 'Hypochondroplasia Expansion Readiness',
      currentMentions: 143,
      priorMentions: 94,
      percentChange: 52.1,
      currentSentiment: 0.68,
      relevanceScore: 84,
      status: 'Alert',
      aiSummaryCurrent: 'Following the positive CANOPY-HCH-3 readout, specialists are proactively requesting hypochondroplasia expansion timeline clarity ahead of the Q3 2026 sNDA filing.',
    },
  ],
  'bmn-333': [
    {
      id: 'bmn333-kit-1',
      name: 'BMN 333 vs. Navepegritide Competitive Positioning',
      currentMentions: 87,
      priorMentions: 66,
      percentChange: 31.8,
      currentSentiment: 0.55,
      relevanceScore: 70,
      status: 'Monitor',
      aiSummaryCurrent: "Discussion is growing steadily as Ascendis's navepegritide approaches its US and EU regulatory decisions. Attention-pattern shifts among mid-tier skeletal KOLs are an early watch signal.",
    },
  ],
  roctavian: [
    {
      id: 'roctavian-kit-1',
      name: 'ROCTAVIAN US-Exit & Ex-US Credibility',
      currentMentions: 231,
      priorMentions: 168,
      percentChange: 37.5,
      currentSentiment: 0.41,
      relevanceScore: 93,
      status: 'Alert',
      aiSummaryCurrent: 'Mentions remain elevated as the May 2026 withdrawal date approaches. Both US patient-transition and ex-US credibility conversations remain high-priority.',
    },
  ],
};

// ============================================================================
// COMPETITOR DATA — per product (for RAG context)
// ============================================================================

export const COMPETITOR_DATA = {
  kuvan: [
    {
      id: 'kuvan-comp-1',
      name: 'Sephience',
      genericName: 'sepiapterin',
      company: 'PTC Therapeutics',
      mentions: 289,
      sentiment: 'mixed',
      discussionContext: 'Oral PAH activator/BH4 precursor, FDA approved Jul 28, 2025 (also EU/Japan) — a direct, current threat to KUVAN specifically.',
      strategicImplication: "KUVAN's response should lean on its long-established BH4-responsiveness evidence base and real-world safety experience rather than re-litigating a head-to-head efficacy claim that hasn't been tested.",
      aiSummaryCurrent: 'Sephience discussions continue to center on simplification framing (once-daily oral) rather than a demonstrated efficacy advantage.',
      aiSummaryPrior: 'Discussion was anticipatory ahead of full launch ramp, centered on mechanism-of-action questions.',
    },
  ],
  palynziq: [],
  naglazyme: [],
  vimizim: [
    {
      id: 'vimizim-comp-1',
      name: 'Tividenofusp alfa (DNL310)',
      genericName: 'tividenofusp alfa',
      company: 'Denali Therapeutics',
      mentions: 34,
      sentiment: 'neutral',
      discussionContext: 'BBB-penetrant enzyme replacement fusion protein for MPS II — BLA under review, PDUFA ~Apr 2026. Different MPS subtype than Vimizim (MPS IVA) — not a direct competitor, but relevant pipeline context in MPS field conversations.',
      strategicImplication: 'No direct competitive overlap with Vimizim, but MSLs should be prepared to correctly distinguish MPS subtypes when the topic comes up in broader MPS-community conversations.',
      aiSummaryCurrent: 'Discussion remains limited and largely pipeline-awareness-focused.',
      aiSummaryPrior: 'Similar limited discussion volume.',
    },
  ],
  aldurazyme: [],
  brineura: [],
  voxzogo: [
    {
      id: 'voxzogo-comp-1',
      name: 'Navepegritide (TransCon CNP)',
      genericName: 'navepegritide',
      company: 'Ascendis Pharma',
      mentions: 87,
      sentiment: 'mixed',
      discussionContext: 'Once-weekly CNP prodrug, pivotal ApproaCH trial met primary endpoint. US NDA under review (PDUFA extended to Feb 28, 2026), EU decision expected Q4 2026 — a live, regulatory-stage competitive threat, more advanced than "emerging."',
      strategicImplication: "BMN 333 (BioMarin's own long-acting CNP successor) is the direct response; MO5 tracks skeletal-KOL attention shifts as navepegritide's regulatory decisions approach.",
      aiSummaryCurrent: "Navepegritide discussion is growing as regulatory decisions approach; some skeletal KOL attention (e.g., Dr. Klaus Mohnike) is shifting toward the competitor's once-weekly dosing data.",
      aiSummaryPrior: 'Discussion was less urgent prior to the PDUFA extension and EU filing news.',
    },
  ],
  'bmn-333': [
    {
      id: 'bmn333-comp-1',
      name: 'Navepegritide (TransCon CNP)',
      genericName: 'navepegritide',
      company: 'Ascendis Pharma',
      mentions: 87,
      sentiment: 'mixed',
      discussionContext: 'BMN 333\'s direct competitive comparator — both are long-acting/once-weekly CNP-pathway successors to daily dosing.',
      strategicImplication: 'BMN 333 Phase 1/2 differentiation data needs to be packaged and delivered before the navepegritide EU decision lands in Q4 2026 (A11).',
      aiSummaryCurrent: 'Comparative dosing-frequency and durability questions dominate BMN 333 conversations.',
      aiSummaryPrior: 'Similar framing, lower urgency.',
    },
  ],
  roctavian: [
    {
      id: 'roctavian-comp-1',
      name: 'Hemgenix (hemophilia B — not a direct competitor)',
      genericName: 'etranacogene dezaparvovec',
      company: 'CSL Behring',
      mentions: 41,
      sentiment: 'neutral',
      discussionContext: 'Gene therapy for hemophilia B, not hemophilia A — not a direct Roctavian competitor, but establishes the real, industry-wide pattern of hemophilia gene-therapy commercial struggle (weak uptake).',
      strategicImplication: 'Useful context for framing Roctavian\'s situation as part of a category-wide trend rather than a BioMarin-specific failure — keep the hemophilia A/B distinction precise in all field copy.',
      aiSummaryCurrent: 'Referenced mainly in category-wide-trend framing, not head-to-head competitive discussion.',
      aiSummaryPrior: 'Similar framing.',
    },
    {
      id: 'roctavian-comp-2',
      name: 'Beqvez (hemophilia B — discontinued, not a direct competitor)',
      genericName: 'fidanacogene elaparvovec',
      company: 'Pfizer',
      mentions: 22,
      sentiment: 'neutral',
      discussionContext: 'Gene therapy for hemophilia B, discontinued by Pfizer. Not a direct Roctavian competitor (different disease), but reinforces the industry-wide hemophilia gene-therapy retreat pattern.',
      strategicImplication: 'Another category-wide-trend data point — helps MSLs contextualize the Roctavian US exit honestly rather than as an isolated event.',
      aiSummaryCurrent: 'Referenced occasionally in category-trend conversations.',
      aiSummaryPrior: 'Similar framing.',
    },
  ],
};

// ============================================================================
// EMERGING THEMES — per product (for legacy consumers)
// ============================================================================

export const EMERGING_THEMES = {
  kuvan: [
    { id: 'kuvan-et-1', theme: 'Sephience Self-Directed Switching Conversations', growthRate: 44, firstDetected: '2026-05-20', relatedKIT: 'Sephience Competitive Displacement Risk', description: 'Stable KUVAN patients and families are raising Sephience themselves before their physician does.' },
  ],
  palynziq: [
    { id: 'palynziq-et-1', theme: 'Adolescent Starter-Guide Demand', growthRate: 38, firstDetected: '2026-06-05', relatedKIT: 'PALYNZIQ Adolescent (PEGASUS) Adoption', description: 'Families and dietitians are requesting adolescent-specific plain-language monitoring materials, distinct from adult PALYNZIQ materials.' },
  ],
  voxzogo: [
    { id: 'voxzogo-et-1', theme: 'SCFE-vs-Achondroplasia Precision-Messaging Demand', growthRate: 64, firstDetected: '2026-03-18', relatedKIT: 'SCFE Safety-Signal Precision Messaging', description: 'Field and Med Info requests for a clear distinction document are growing fast.' },
    { id: 'voxzogo-et-2', theme: 'Hypochondroplasia Off-Label-Pressure Watch', growthRate: 52, firstDetected: '2026-06-01', relatedKIT: 'Hypochondroplasia Expansion Readiness', description: 'Some families and specialists are asking about early access ahead of the Q3 2026 sNDA filing.' },
  ],
  roctavian: [
    { id: 'roctavian-et-1', theme: 'Ex-US Hemophilia Continuity Reassurance-Seeking', growthRate: 46, firstDetected: '2026-04-19', relatedKIT: 'ROCTAVIAN US-Exit & Ex-US Credibility', description: 'UK/EU/international hemophilia treaters are proactively seeking reassurance that the US withdrawal is not the first step of a broader retreat.' },
  ],
};
