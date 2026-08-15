// Portfolio — BioMarin Pharmaceutical. 8 products across 4 therapeutic
// areas. No cross-indication platform/mechanism lens — BioMarin's portfolio
// spans genuinely distinct modalities (small-molecule cofactor, enzyme
// substitution, enzyme replacement therapy, peptide, and gene therapy),
// not a shared platform.

export const PRODUCT_OPTIONS = [
  // ── PKU Franchise ──────────────────────────────────────────────────────
  {
    id: 'kuvan',
    name: 'KUVAN',
    generic: 'sapropterin dihydrochloride',
    class: 'Synthetic BH4 cofactor',
    indications: ['Phenylketonuria (PKU), BH4-responsive'],
    lifecycleStage: 'Established franchise pillar',
  },
  {
    id: 'palynziq',
    name: 'PALYNZIQ',
    generic: 'pegvaliase-pqpz',
    class: 'PEGylated recombinant PAL enzyme substitution therapy',
    indications: ['Phenylketonuria (PKU), adults', 'Phenylketonuria (PKU), adolescents 12–17 (2026)'],
    lifecycleStage: 'Franchise pillar — recently expanded (adolescent approval 2026)',
  },
  // ── MPS / Lysosomal (Enzyme Therapies) ─────────────────────────────────
  {
    id: 'naglazyme',
    name: 'Naglazyme',
    generic: 'galsulfase',
    class: 'Enzyme replacement therapy',
    indications: ['MPS VI (Maroteaux-Lamy syndrome)'],
    lifecycleStage: 'Established franchise pillar',
  },
  {
    id: 'vimizim',
    name: 'Vimizim',
    generic: 'elosulfase alfa',
    class: 'Enzyme replacement therapy',
    indications: ['MPS IVA (Morquio A syndrome)'],
    lifecycleStage: 'Established franchise pillar',
  },
  {
    id: 'aldurazyme',
    name: 'Aldurazyme',
    generic: 'laronidase',
    class: 'Enzyme replacement therapy',
    indications: ['MPS I (Hurler, Hurler-Scheie, and Scheie syndromes)'],
    lifecycleStage: 'Co-commercialized — BioMarin/Genzyme LLC (50/50 JV with Sanofi-Genzyme)',
    // Genzyme/Sanofi markets and sells globally; BioMarin manufactures and
    // receives a royalty on net sales. Not a wholly BioMarin-promoted
    // product like Naglazyme/Vimizim/Brineura — reflect this nuance in
    // messaging and MSL positioning.
  },
  {
    id: 'brineura',
    name: 'Brineura',
    generic: 'cerliponase alfa',
    class: 'Enzyme replacement therapy (intraventricular administration)',
    indications: ['CLN2 disease (Batten disease, TPP1 deficiency)'],
    lifecycleStage: 'Established franchise pillar',
  },
  // ── Skeletal Conditions ─────────────────────────────────────────────────
  {
    id: 'voxzogo',
    name: 'VOXZOGO',
    generic: 'vosoritide',
    class: 'C-type natriuretic peptide (CNP) analog',
    indications: [
      'Achondroplasia (approved, down to <5 years)',
      'Hypochondroplasia (Phase 3 positive, sNDA planned Q3 2026)',
      'Idiopathic short stature, non-ACAN (Phase 2 ongoing)',
      'Noonan syndrome (Phase 2 ongoing)',
    ],
    lifecycleStage: 'Growth pillar — active label-expansion program',
    // Turner syndrome, SHOX deficiency, and ACAN-deficiency dosing/
    // enrollment were discontinued Mar 2026 after an SCFE safety signal in
    // two investigator-sponsored trials — do not present as active.
  },
  {
    id: 'bmn-333',
    name: 'BMN 333',
    generic: 'long-acting CNP analog (investigational)',
    class: 'Long-acting C-type natriuretic peptide (CNP) analog',
    indications: ['Achondroplasia (Phase 2/3 enrolling, comparative vs. vosoritide)'],
    lifecycleStage: 'Pipeline — successor to VOXZOGO',
  },
  // ── Hemophilia A / Gene Therapy ─────────────────────────────────────────
  {
    id: 'roctavian',
    name: 'ROCTAVIAN',
    generic: 'valoctocogene roxaparvovec-rvox',
    class: 'AAV5 gene therapy',
    indications: ['Severe hemophilia A, adults'],
    lifecycleStage: 'US market withdrawal — availability ends May 2026; divestiture under exploration',
    // Approved Jun 2023 (first gene therapy for adult severe hemophilia A).
    // Weak US commercial performance (~$26M 2024 sales); US withdrawal
    // effective end of May 2026; full divestiture under exploration. This
    // TA's real story is a strategic pivot — navigating the US exit,
    // preserving ex-US scientific credibility, and informing the
    // divestiture evaluation — not a growth narrative.
  },
];

// Platform / mechanism lens. Leave null — BioMarin's portfolio spans
// genuinely distinct modalities (small-molecule, enzyme substitution,
// enzyme replacement therapy, peptide, gene therapy) across 4 therapeutic
// areas, not a shared cross-indication platform.
export const PLATFORM_LENS = null;
