// Customer identity — BioMarin Pharmaceutical, Medical Affairs.
// BioMarin is an independent, publicly-traded (NASDAQ: BMRN) rare-disease
// biotechnology company headquartered in San Rafael, CA — not a subsidiary
// of any parent company.

export const CLIENT = {
  name: 'BioMarin Pharmaceutical',
  parentCompany: null,
  division: 'Medical Affairs',
  franchiseDescription:
    'Rare-disease portfolio spanning PKU, MPS/lysosomal storage disorders, skeletal conditions, and hemophilia A gene therapy',
  cloudLabel: 'your cloud',
  // Optional accent color override. Leave null to inherit the Aurivian palette.
  accentHex: null,
  // Optional logo asset path or URL (SVG preferred). Leave null to use the wordmark.
  logoSrc: null,
};

export const CAPTURE_APP_URL = 'https://aurivian-biomarin-capture-app.vercel.app';

// Pulse Brief — path to the demo's static HTML brief in /public.
// Leave null to hide the "Pulse Brief" left-rail link.
export const PULSE_BRIEF_URL = '/biomarin_pulse_brief.html';
