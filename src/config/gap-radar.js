// Gap Radar — BioMarin Pharmaceutical. Tied to the Gap/Low coverage MOs
// (MO3, MO4 at Gap; MO1, MO5, MO6 at Low).

export const GAP_RADAR = [
  {
    type: 'New LP',
    moRef: 'MO3',
    suggestion: 'Aldurazyme co-marketing training for the field team itself — a dedicated listening priority tracking MSL (not just physician) confidence in routing co-marketing questions correctly',
    rationale: 'AI3 shows the confusion originates partly inside BioMarin\'s own field team, not only among treating physicians. MO3 is at Gap coverage and no current LP addresses internal MSL readiness specifically.',
  },
  {
    type: 'New KIT',
    moRef: 'MO4',
    suggestion: 'SCFE-vs-achondroplasia precision-messaging tracker — flag any field or Med Info interaction where the two are conflated, to measure whether AI6\'s confusion is narrowing over time',
    rationale: 'AI6 is the highest-recurrence insight this cycle (4×) and MO4 is at Gap. No current KIT specifically measures whether the precision-messaging correction is landing.',
  },
  {
    type: 'New KIQ',
    moRef: 'MO1',
    suggestion: '"Which specific stable-patient subgroups are prescribers most likely to consider switching to Sephience, and why those subgroups first?"',
    rationale: 'AI1 has recurred 4× and is Prioritised, but the current LP1 KIQ is broad. A subgroup-specific KIQ would let MSLs anticipate where switching pressure will concentrate first.',
  },
  {
    type: 'Coverage gap',
    moRef: 'MO6',
    suggestion: 'Add a divestiture-relevant field-intelligence rollup cadence — a standing monthly digest of ex-US KOL sentiment and US patient-transition status feeding directly to Medical Affairs leadership',
    rationale: 'AI8 and AI9 are both high-confidence and high-recurrence, and MO6 remains at Low coverage despite carrying real business-decision weight (the divestiture evaluation). No current mechanism formally routes this intelligence upward on a regular cadence.',
  },
  {
    type: 'New LP',
    moRef: 'MO5',
    suggestion: 'Skeletal KOL competitive-attention monitoring — track engagement-pattern shifts (session attendance, follow-up-question depth) across the full skeletal roster, not just Dr. Mohnike, ahead of navepegritide\'s EU decision',
    rationale: 'AI7 surfaced one KOL\'s shifting attention through a manual congress debrief. A systematic LP would catch similar early signals across the other 9 skeletal KOLs before they become field reports.',
  },
];
