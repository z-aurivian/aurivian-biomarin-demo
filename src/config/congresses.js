// Congress roster — BioMarin Pharmaceutical. 4 locked congresses, all
// completed relative to the demo's current date, one per TA-relevant
// cluster, plus one comingSoon placeholder. ICIEM 2025 also doubles as the
// companion Capture app's congress (per convention, real congresses do
// double duty across surfaces).

export const CONGRESS_OPTIONS = [
  {
    id: 'iciem-2025',
    name: 'ICIEM 2025',
    fullName: 'International Congress of Inborn Errors of Metabolism 2025',
    location: 'Kyoto, Japan',
    date: 'September 2025',
    available: true,
  },
  {
    id: 'espe-ese-2025',
    name: 'ESPE/ESE 2025',
    fullName: 'ESPE/ESE Joint Congress 2025',
    location: 'Copenhagen, Denmark',
    date: 'May 10–13, 2025',
    available: true,
  },
  {
    id: 'wfh-2026',
    name: 'WFH World Congress 2026',
    fullName: 'World Federation of Hemophilia World Congress 2026',
    location: 'Kuala Lumpur, Malaysia',
    date: 'Apr 19–22, 2026',
    available: true,
  },
  {
    id: 'asgct-2026',
    name: 'ASGCT 2026',
    fullName: 'American Society of Gene & Cell Therapy Annual Meeting 2026',
    location: 'Boston, MA, USA',
    date: 'May 11–15, 2026',
    available: true,
  },
  {
    id: 'worldsymposium-2027',
    name: 'WORLDSymposium 2027',
    fullName: 'WORLDSymposium 2027',
    location: 'San Diego, CA, USA',
    date: 'February 2027',
    available: false,
    comingSoon: true,
  },
];
