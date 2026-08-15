import { KIT_SCORECARDS, COMPETITOR_DATA, KOL_DATA, PRODUCT_OPTIONS } from '../data/demoData';
import { STRATEGIC_IMPERATIVES, COMPETITIVE_LANDSCAPE, RARE_DISEASE_PORTFOLIO_SCIENCE, PIPELINE_INTELLIGENCE, MARKET_ACCESS_INTELLIGENCE } from '../data/strategicContent';
import { PUBMED_BY_PRODUCT, PUBMED_KOL } from '../data/pubmedData';
import { TRIALS_BY_PRODUCT, REAL_WORLD_EVIDENCE_STUDIES } from '../data/clinicalTrialsData';
import { MOCK_TREND_SENTIMENT, MOCK_INGESTION, MOCK_THEMES, MOCK_COMPETITOR_VISIBILITY, MOCK_SOCIAL } from '../data/congressData';
import { CONGRESS_OPTIONS } from '../config';

function formatPub(p) {
  return `"${p.title}" — ${p.authors.slice(0, 3).join(', ')}${p.authors.length > 3 ? ' et al.' : ''}, *${p.journal}* (${p.pubDate})${p.doi ? `, DOI: ${p.doi}` : ''}${p.pmid ? ` [PMID: ${p.pmid}]` : ''}`;
}

function formatTrial(t) {
  return `"${t.title}" — ${t.status}, ${t.phase || 'N/A'}, Sponsor: ${t.sponsor}, n=${t.enrollment ?? 'N/A'}. Finding: ${t.primaryFinding}`;
}

function formatRWEStudy(t) {
  return `"${t.title}" — ${t.journal} (${t.pubDate}), ${t.molecule}. Finding: ${t.keyFinding}`;
}

export function retrieveContext(query, selectedProduct) {
  const q = query.toLowerCase();
  const product = PRODUCT_OPTIONS.find(p => p.id === selectedProduct);
  let context = [];

  if (product) {
    context.push(`Current product context: ${product.name} (${product.generic}). Indications: ${product.indications.join(', ')}.`);
  }

  // KIT data
  if (q.includes('kit') || q.includes('insight') || q.includes('theme') || q.includes('gap') || q.includes('competitor') || q.includes('coverage') || q.includes('adoption')) {
    const kits = KIT_SCORECARDS[selectedProduct];
    if (kits) {
      context.push('## Key Insight Themes (KITs)\n' + kits.map(k =>
        `- **${k.name}**: ${k.currentMentions} mentions (${k.percentChange > 0 ? '+' : ''}${k.percentChange}%), sentiment: ${k.currentSentiment}, relevance: ${k.relevanceScore}/100, status: ${k.status}. ${k.aiSummaryCurrent}`
      ).join('\n'));
    }
  }

  // Competitor data
  if (q.includes('compet') || q.includes('rival') || q.includes('threat') || q.includes('sephience') || q.includes('sepiapterin') || q.includes('navepegritide') || q.includes('ascendis') || q.includes('denali') || q.includes('tividenofusp') || q.includes('hemgenix') || q.includes('beqvez')) {
    const comps = COMPETITOR_DATA[selectedProduct];
    if (comps && comps.length > 0) {
      context.push('## Competitive Intelligence\n' + comps.map(c =>
        `- **${c.name} (${c.genericName})** by ${c.company}: ${c.mentions} mentions, sentiment: ${c.sentiment}. ${c.aiSummaryCurrent}`
      ).join('\n'));
    }
    if (COMPETITIVE_LANDSCAPE) {
      context.push('## Competitive Landscape\n' + COMPETITIVE_LANDSCAPE.map(c =>
        `- **${c.name} (${c.genericName})** — ${c.company}: ${c.summary} Threat: ${c.strategicThreatLevel}.`
      ).join('\n'));
    }
  }

  // KOL data
  if (q.includes('kol') || q.includes('opinion leader') || q.includes('expert') || q.includes('investigator') || q.includes('engagement')) {
    const kols = KOL_DATA.filter(k => k.productAlignment.includes(selectedProduct)).slice(0, 10);
    context.push('## Key Opinion Leaders\n' + kols.map(k =>
      `- **${k.name}** (${k.institution}, ${k.country}): ${k.specialty}, ${k.engagementTier}, influence: ${k.influenceScore}/100, focus: ${k.focusAreas.join(', ')}`
    ).join('\n'));
  }

  // Strategic imperatives
  if (q.includes('strateg') || q.includes('imperative') || q.includes('priority') || q.includes('access') || q.includes('leadership')) {
    if (STRATEGIC_IMPERATIVES) {
      context.push('## Strategic Imperatives\n' + STRATEGIC_IMPERATIVES.map(s =>
        `- **${s.name}** (${s.category}): ${s.description}`
      ).join('\n'));
    }
  }

  // Rare-disease portfolio science & guideline context
  if (q.includes('pegasus') || q.includes('canopy') || q.includes('scfe') || q.includes('aldurazyme') || q.includes('sephience') || q.includes('roctavian') || q.includes('hypochondroplasia') || q.includes('achondroplasia') || q.includes('portfolio')) {
    if (RARE_DISEASE_PORTFOLIO_SCIENCE) {
      context.push(`## Rare-Disease Portfolio Science\n${RARE_DISEASE_PORTFOLIO_SCIENCE.overview}\nSephience competitive context: ${RARE_DISEASE_PORTFOLIO_SCIENCE.sephienceCompetitiveContext}\nPEGASUS adolescent data: ${RARE_DISEASE_PORTFOLIO_SCIENCE.pegasusAdolescentData}\nAldurazyme co-marketing nuance: ${RARE_DISEASE_PORTFOLIO_SCIENCE.aldurazymeCoMarketingNuance}\nSCFE safety signal: ${RARE_DISEASE_PORTFOLIO_SCIENCE.scfeSafetySignal}\nROCTAVIAN US exit: ${RARE_DISEASE_PORTFOLIO_SCIENCE.roctavianUSExit}`);
    }
    if (MARKET_ACCESS_INTELLIGENCE) {
      context.push(`## Market Access Intelligence\n${MARKET_ACCESS_INTELLIGENCE.pricingContext}`);
    }
  }

  // Pipeline
  if (q.includes('pipeline') || q.includes('bmn 333') || q.includes('bmn 307') || q.includes('development')) {
    if (PIPELINE_INTELLIGENCE) {
      context.push('## Pipeline Intelligence\n' + PIPELINE_INTELLIGENCE.map(p =>
        `- **${p.name}**: ${p.mechanism}, ${p.stage}, ${p.indication}. ${p.significance}`
      ).join('\n'));
    }
  }

  // Real publications (PubMed) — product-specific
  if (q.includes('publi') || q.includes('paper') || q.includes('journal') || q.includes('evidence') || q.includes('literature') || q.includes('study') || q.includes('research') || q.includes('pubmed')) {
    const pubs = PUBMED_BY_PRODUCT[selectedProduct] || [];
    if (pubs.length > 0) {
      context.push('## Recent Publications (PubMed)\n' + pubs.map(formatPub).join('\n'));
    }
  }

  // KOL-specific publications
  const kolNames = Object.keys(PUBMED_KOL);
  const matchedKol = kolNames.find(name => q.includes(name));
  if (matchedKol && PUBMED_KOL[matchedKol]) {
    context.push(`## Publications by ${matchedKol.charAt(0).toUpperCase() + matchedKol.slice(1)}\n` + PUBMED_KOL[matchedKol].map(formatPub).join('\n'));
  }

  // Pivotal comparative studies — product-specific
  if (q.includes('trial') || q.includes('clinical') || q.includes('pivotal') || q.includes('phase') || q.includes('gener8') || q.includes('canopy') || q.includes('pegasus') || q.includes('mor-004')) {
    const trials = TRIALS_BY_PRODUCT[selectedProduct] || [];
    if (trials.length > 0) {
      context.push('## Pivotal Comparative Studies\n' + trials.map(formatTrial).join('\n'));
    }
  }

  // Real-world / pooled evidence studies
  if (q.includes('real-world') || q.includes('rwe') || q.includes('pooled') || q.includes('follow-up') || q.includes('durab')) {
    context.push('## Real-World / Pooled Evidence Studies\n' + REAL_WORLD_EVIDENCE_STUDIES.map(formatRWEStudy).join('\n'));
  }

  // Congress & ingestion data
  if (q.includes('congress') || q.includes('ingestion') || q.includes('abstract') || q.includes('poster') || q.includes('session') || q.includes('agenda')) {
    const congressNames = CONGRESS_OPTIONS.filter(c => c.available).map(c => c.name).join(', ');
    context.push(`## Congress Intelligence\nTracked congresses: ${congressNames}\nIngestion stats: ${MOCK_INGESTION.abstracts} abstracts, ${MOCK_INGESTION.posters} posters, ${MOCK_INGESTION.speakers} speakers, ${MOCK_INGESTION.publicationsLinked} publications linked, ${MOCK_INGESTION.agendas} agendas.`);
  }

  // Trend / sentiment (congress-level)
  if (q.includes('trend') || q.includes('sentiment') || q.includes('social signal')) {
    const sciPeriods = MOCK_TREND_SENTIMENT.scientific;
    if (sciPeriods.length > 0) {
      const latest = sciPeriods[sciPeriods.length - 1];
      const keys = Object.keys(latest).filter(k => k !== 'period');
      context.push('## Latest Scientific Sentiment\nPeriod: ' + latest.period + '\n' + keys.map(k => `- ${k}: ${latest[k]}/100`).join('\n'));
    }
    context.push(`## Social Signals\nTotal signals: ${MOCK_SOCIAL.totalSignals}.`);
  }

  // Themes
  if (q.includes('theme') || q.includes('topic') || q.includes('scientific theme')) {
    context.push('## Scientific Themes at Congress\n' + MOCK_THEMES.map(t =>
      `- **${t.theme}**: ${t.mentions} mentions, momentum ${t.momentum}`
    ).join('\n'));
  }

  // Congress competitor visibility
  if (q.includes('visibility') || (q.includes('congress') && q.includes('compet'))) {
    context.push('## Competitor Visibility at Congress\n' + MOCK_COMPETITOR_VISIBILITY.map(c =>
      `- **${c.product}**: ${c.share}% share, ${c.mentions} mentions`
    ).join('\n'));
  }

  return context.join('\n\n');
}
