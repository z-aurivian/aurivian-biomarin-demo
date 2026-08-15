// Background signals — BioMarin Pharmaceutical. Feeds the Insight Journey
// kanban's Captured-lane "fresh signal" cards.

export const SIGNALS = [
  {
    agent: 'NOVA',
    timestamp: '2026-07-14T11:00:00Z',
    headline: 'Recurrence threshold hit: SCFE-vs-achondroplasia messaging confusion (AI6 — 4th source)',
    context: 'AI6 now at 4× recurrence, Prioritised status, confidence 86%. A9 (precision talking points) Accepted, A10 (safety-database one-pager) Started.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'ARIA',
    timestamp: '2026-07-09T09:30:00Z',
    headline: 'ASGCT 2026 hallway appetite for a one-page SCFE-vs-achondroplasia distinction document',
    context: 'Skeletal dysplasia specialists at ASGCT 2026 (Boston) confirmed real appetite for the precision-messaging document Gap Radar has already flagged.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-06-10T15:20:00Z',
    headline: 'MO3 (MPS field excellence) — Gap status, Aldurazyme co-marketing confusion confirmed inside BioMarin\'s own field team',
    context: 'AI3 shows the confusion isn\'t only physician-facing — MSLs themselves are unsure of the correct routing. Gap Radar recommends an internal-training-specific LP.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-06-02T08:45:00Z',
    headline: 'Dr. Klaus Mohnike remains the roster\'s clearest sentiment-shift watch ahead of the navepegritide EU decision',
    context: 'Congress and field signals both show growing attention to competitor data — a defensible, timeline-driven shift worth a proactive re-engagement (A12).',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    agent: 'ARIA',
    timestamp: '2026-04-21T16:10:00Z',
    headline: 'WFH World Congress 2026 hallway conversation dominated by Roctavian US-withdrawal questions',
    context: 'Ex-US hemophilia treaters directly asked whether the US news signals a broader retreat. Relevant to MO6 and action A13.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
];
