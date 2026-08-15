// Outcome Volume (RaaS) — BioMarin Pharmaceutical.
// Powers the persistent header chip. Results-as-a-Service: customers
// pre-commit to an outcome volume; we show real-time consumed/remaining.

export const OUTCOME_VOLUME = {
  period: 'Q3 2026',
  committed: 1400,
  consumed: 916,
  byAgent: {
    aria: { committed: 467, consumed: 298 },
    luca: { committed: 467, consumed: 312 },
    nova: { committed: 466, consumed: 306 },
  },
  momentumNote: null,
};
