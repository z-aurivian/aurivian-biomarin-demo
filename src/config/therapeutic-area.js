// Therapeutic area — BioMarin Pharmaceutical. The real narrative spine is
// BioMarin's four rare-disease therapeutic areas at very different lifecycle
// stages: PKU (established franchise defending against a new oral
// competitor while expanding into adolescents), MPS/Lysosomal (established,
// with one co-marketed nuance product), Skeletal Conditions (BioMarin's
// stated growth pillar, mid label-expansion, working through a real safety
// signal), and Hemophilia A (a managed US-market wind-down and divestiture
// evaluation, not a growth story).

export const THERAPEUTIC_AREA = {
  name: 'Rare Disease',
  subIndications: [
    'Phenylketonuria (PKU)',
    'MPS / Lysosomal Storage Disorders',
    'Skeletal Conditions (Achondroplasia & related)',
    'Hemophilia A / Gene Therapy',
  ],
  // Key competitors (name, company, MoA, competitive posture).
  competitors: [
    { name: 'Sephience (sepiapterin)', company: 'PTC Therapeutics', moa: 'Oral PAH activator / BH4 precursor', posture: 'Direct current threat to KUVAN — FDA approved Jul 28, 2025 (also EU/Japan)' },
    { name: 'Tividenofusp alfa (DNL310)', company: 'Denali Therapeutics', moa: 'Enzyme replacement, BBB-penetrant fusion protein', posture: 'MPS II — BLA under review, PDUFA ~Apr 2026' },
    { name: 'DNL126', company: 'Denali Therapeutics', moa: 'Enzyme replacement, BBB-penetrant fusion protein', posture: 'MPS IIIA (Sanfilippo A) — pipeline' },
    { name: 'Navepegritide (TransCon CNP)', company: 'Ascendis Pharma', moa: 'Once-weekly CNP prodrug', posture: 'Skeletal/achondroplasia — regulatory-stage, live competitive threat (US NDA under review, PDUFA extended to Feb 28, 2026; EU decision Q4 2026)' },
  ],
  // Patient advocacy / society orgs worth namechecking. Optional.
  advocacyOrgs: ['National PKU Alliance', 'National MPS Society', 'Little People of America', 'National Bleeding Disorders Foundation'],
};
