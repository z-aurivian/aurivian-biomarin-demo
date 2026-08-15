// Real PubMed-style publication data for BioMarin's franchise pivotal
// trials. Records are grounded in research/RESEARCH_SUMMARY.md. Where a
// PMID or specific author list was not independently confirmed during
// research, `pmid` is left `null` and authors are kept generic ('Multiple')
// rather than invented, with the trial name and finding retained as real.

export const PUBMED_KUVAN = [
  { pmid: null, title: 'Sapropterin dihydrochloride (KUVAN) for phenylketonuria: registrational and long-term follow-up evidence', authors: ['Multiple'], journal: 'Various — see FDA label history', pubDate: '2007–2020s', doi: null, note: 'Established BH4-cofactor evidence base; no single pivotal citation captured here.' },
];

export const PUBMED_PALYNZIQ = [
  { pmid: null, title: 'PEGASUS: pegvaliase (PALYNZIQ) in adolescents with phenylketonuria — Phase 3 results', authors: ['Multiple'], journal: 'Presented ICIEM 2025 (Kyoto)', pubDate: '2025 Sep', doi: null, note: '55 adolescents 12–17; blood Phe −473 vs. −19 µmol/L at week 72 vs. diet alone; supported the 2026 FDA adolescent approval.' },
];

export const PUBMED_NAGLAZYME = [
  { pmid: null, title: 'Galsulfase (Naglazyme) enzyme replacement therapy in MPS VI (Maroteaux-Lamy syndrome)', authors: ['Multiple'], journal: 'Various — pivotal and long-term follow-up literature', pubDate: '2005–2020s', doi: null },
];

export const PUBMED_VIMIZIM = [
  { pmid: null, title: 'MOR-004: elosulfase alfa (Vimizim) in MPS IVA (Morquio A syndrome) — pivotal trial', authors: ['Multiple'], journal: 'Various', pubDate: '2014', doi: null, note: 'Christian J. Hendriksz was a historical contributor to the Vimizim pivotal program.' },
];

export const PUBMED_ALDURAZYME = [
  { pmid: null, title: 'Laronidase (Aldurazyme) enzyme replacement therapy in MPS I', authors: ['Multiple'], journal: 'Various', pubDate: '2001–2020s', doi: null, note: 'Co-commercialized via BioMarin/Genzyme LLC joint venture.' },
];

export const PUBMED_BRINEURA = [
  { pmid: null, title: 'Cerliponase alfa (Brineura) intraventricular enzyme replacement in CLN2 disease (Batten disease)', authors: ['Multiple'], journal: 'Various', pubDate: '2017–2020s', doi: null },
];

export const PUBMED_VOXZOGO = [
  { pmid: null, title: 'Vosoritide (VOXZOGO) in children with achondroplasia — pivotal trial and consensus guidelines', authors: ['Savarirayan R', 'Cormier-Daire V', 'Maghnie M', 'Backeljauw P', 'Ozono K', 'Fredwall SO', 'et al.'], journal: 'N Engl J Med / Nat Rev Endocrinol (consensus guidelines)', pubDate: '2019 / 2024', doi: null, note: 'Consensus guidelines PMID 39757323 (Nat Rev Endocrinol).' },
  { pmid: null, title: 'CANOPY-HCH-3: vosoritide in hypochondroplasia — Phase 3 topline results', authors: ['Multiple'], journal: 'Presented ESPE/ESE Joint Congress 2025 (Copenhagen)', pubDate: '2025 May', doi: null, note: 'Met primary endpoint; sNDA planned Q3 2026.' },
];

export const PUBMED_ROCTAVIAN = [
  { pmid: null, title: 'GENEr8-1: valoctocogene roxaparvovec (ROCTAVIAN) gene therapy in severe hemophilia A — pivotal trial', authors: ['Pipe SW', 'Pasi KJ', 'et al.'], journal: 'N Engl J Med', pubDate: '2022', doi: null, note: '134 adults; supported Jun 2023 FDA approval.' },
  { pmid: null, title: 'GENEr8-1 5-year durability follow-up', authors: ['Pipe SW', 'et al.'], journal: 'Presented at hematology congresses 2024-2025', pubDate: '2024–2025', doi: null, note: '~80.8% off prophylaxis, durable, no new safety signals.' },
];

export const PUBMED_KOL = {
  savarirayan: PUBMED_VOXZOGO.filter(p => p.title.includes('pivotal trial and consensus') || p.title.includes('CANOPY-HCH-3')),
  cormierdaire: PUBMED_VOXZOGO.filter(p => p.authors.includes('Cormier-Daire V')),
  maghnie: PUBMED_VOXZOGO.filter(p => p.authors.includes('Maghnie M')),
  backeljauw: PUBMED_VOXZOGO.filter(p => p.authors.includes('Backeljauw P')),
  ozono: PUBMED_VOXZOGO.filter(p => p.authors.includes('Ozono K')),
  fredwall: PUBMED_VOXZOGO.filter(p => p.authors.includes('Fredwall SO')),
  pipe: PUBMED_ROCTAVIAN,
  pasi: PUBMED_ROCTAVIAN.filter(p => p.title.includes('GENEr8-1: valoctocogene')),
  hendriksz: PUBMED_VIMIZIM,
};

export const PUBMED_BY_PRODUCT = {
  kuvan: PUBMED_KUVAN,
  palynziq: PUBMED_PALYNZIQ,
  naglazyme: PUBMED_NAGLAZYME,
  vimizim: PUBMED_VIMIZIM,
  aldurazyme: PUBMED_ALDURAZYME,
  brineura: PUBMED_BRINEURA,
  voxzogo: PUBMED_VOXZOGO,
  'bmn-333': [],
  roctavian: PUBMED_ROCTAVIAN,
};
