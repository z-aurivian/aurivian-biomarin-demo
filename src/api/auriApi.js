import { queryClaudeAPI } from './claudeApi';
import { queryOpenAIAPI } from './openaiApi';
import { buildSystemPrompt } from './promptBuilder';
import { retrieveContext } from './rag';
import { KIT_SCORECARDS, COMPETITOR_DATA, KOL_DATA, PRODUCT_OPTIONS } from '../data/demoData';
import { STRATEGIC_IMPERATIVES, COMPETITIVE_LANDSCAPE, PIPELINE_INTELLIGENCE } from '../data/strategicContent';
import { PUBMED_BY_PRODUCT } from '../data/pubmedData';
import { TRIALS_BY_PRODUCT, REAL_WORLD_EVIDENCE_STUDIES } from '../data/clinicalTrialsData';
import { MOCK_INGESTION, MOCK_THEMES, MOCK_COMPETITOR_VISIBILITY, MOCK_SOCIAL } from '../data/congressData';
import { CLIENT, CONGRESS_OPTIONS } from '../config';

function keywordFallback(query, selectedProduct) {
  const q = query.toLowerCase();
  const kits = KIT_SCORECARDS[selectedProduct] || [];
  const competitors = COMPETITOR_DATA[selectedProduct] || [];
  const kols = KOL_DATA.filter(k => k.productAlignment.includes(selectedProduct));

  if (q.includes('gap') || q.includes('coverage') || q.includes('adoption')) {
    const kit = kits.find(k => k.name.toLowerCase().includes('gap') || k.name.toLowerCase().includes('adoption')) || kits[0];
    return `## Coverage & Adoption Gap\n\n${kit ? kit.aiSummaryCurrent : 'MSL field reports show real, precision-messaging and access-transition gaps across the portfolio, not evidence skepticism.'}\n\n**Key Metrics:**\n- Mentions: ${kit?.currentMentions || 'N/A'} (${kit?.percentChange > 0 ? '+' : ''}${kit?.percentChange || 'N/A'}% vs prior month)\n- Sentiment: ${kit?.currentSentiment || 'N/A'}\n- Status: ${kit?.status || 'N/A'}\n\nMSL teams report increasing HCP inquiries about the underlying messaging or access barrier.`;
  }

  if (q.includes('compet') || q.includes('threat') || q.includes('sephience') || q.includes('navepegritide')) {
    let response = '## Competitive Landscape Overview\n\n';
    if (COMPETITIVE_LANDSCAPE) {
      response += COMPETITIVE_LANDSCAPE.map(c =>
        `### ${c.name} (${c.genericName}) — ${c.company}\n${c.summary}\n- **Threat Level:** ${c.strategicThreatLevel}\n- **Approved:** ${c.approvedIndications?.join(', ') || 'Varies by market'}`
      ).join('\n\n');
    } else {
      response += competitors.map(c =>
        `### ${c.name} (${c.genericName}) — ${c.company}\n${c.aiSummaryCurrent}\n- Mentions: ${c.mentions}, Sentiment: ${c.sentiment}`
      ).join('\n\n');
    }
    return response;
  }

  if (q.includes('kol') || q.includes('opinion leader') || q.includes('expert')) {
    const topKols = kols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5);
    const productLabel = PRODUCT_OPTIONS.find(p => p.id === selectedProduct)?.name || selectedProduct;
    return `## Top KOLs for ${productLabel}\n\n${topKols.map(k =>
      `### ${k.name}\n- **Institution:** ${k.institution}, ${k.country}\n- **Specialty:** ${k.specialty}\n- **Influence Score:** ${k.influenceScore}/100\n- **Focus Areas:** ${k.focusAreas.join(', ')}\n- **Recommended Strategy:** ${k.recommendedStrategy}`
    ).join('\n\n')}\n\n*${kols.length} total KOLs tracked for this product.*`;
  }

  if (q.includes('sentiment') || q.includes('trend')) {
    return `## Sentiment & Trend Analysis\n\n${kits.map(k =>
      `- **${k.name}**: Sentiment ${k.currentSentiment}, ${k.percentChange > 0 ? '↑' : k.percentChange < 0 ? '↓' : '→'} ${Math.abs(k.percentChange)}% change. ${k.aiSummaryCurrent}`
    ).join('\n\n')}`;
  }

  if (q.includes('pipeline') || q.includes('bmn 333') || q.includes('bmn 307')) {
    if (PIPELINE_INTELLIGENCE) {
      return `## Pipeline Intelligence\n\n${PIPELINE_INTELLIGENCE.map(p =>
        `### ${p.name}\n- **Mechanism:** ${p.mechanism}\n- **Stage:** ${p.stage}\n- **Indication:** ${p.indication}\n- **Timeline:** ${p.expectedTimeline}\n- **Significance:** ${p.significance}`
      ).join('\n\n')}`;
    }
  }

  if (q.includes('strateg') || q.includes('imperative') || q.includes('priority')) {
    if (STRATEGIC_IMPERATIVES) {
      return `## Strategic Imperatives\n\n${STRATEGIC_IMPERATIVES.map(s =>
        `### ${s.name} (${s.category})\n${s.description}\n\n**Success Metrics:** ${s.successMetrics?.join(', ')}`
      ).join('\n\n')}`;
    }
  }

  if (q.includes('publi') || q.includes('paper') || q.includes('journal') || q.includes('literature') || q.includes('pubmed')) {
    const pubs = PUBMED_BY_PRODUCT[selectedProduct] || [];
    const productName = PRODUCT_OPTIONS.find(p => p.id === selectedProduct)?.name || selectedProduct;
    if (pubs.length === 0) {
      return `## Recent Publications\n\nNo dedicated pivotal-study publication is tracked for this product specifically.\n\n*Sourced via PubMed, July 2026.*`;
    }
    return `## Recent Publications — ${productName}\n\n${pubs.map((p, i) =>
      `${i + 1}. **${p.title}**\n   - ${p.authors.slice(0, 3).join(', ')}${p.authors.length > 3 ? ' et al.' : ''}\n   - *${p.journal}* (${p.pubDate})\n   - PMID: ${p.pmid || 'N/A'}${p.doi ? ` | DOI: ${p.doi}` : ''}`
    ).join('\n\n')}\n\n*${pubs.length} publication(s) tracked for this product.*`;
  }

  if (q.includes('trial') || q.includes('clinical') || q.includes('pivotal')) {
    const trials = TRIALS_BY_PRODUCT[selectedProduct] || [];
    if (trials.length === 0) {
      return `## Pivotal Studies\n\nNo dedicated pivotal study is tracked for this product in this config.`;
    }
    return `## Pivotal Studies\n\n${trials.map((t, i) =>
      `${i + 1}. **${t.title}**\n   - ${t.phase} | ${t.status}\n   - Population: ${t.population}\n   - Sponsor: ${t.sponsor} | Enrollment: ${t.enrollment ?? 'N/A'}\n   - Finding: ${t.primaryFinding}`
    ).join('\n\n')}`;
  }

  if (q.includes('real-world') || q.includes('rwe') || q.includes('pooled') || q.includes('durab')) {
    return `## Real-World / Pooled Evidence\n\n${REAL_WORLD_EVIDENCE_STUDIES.map((t, i) =>
      `${i + 1}. **${t.title}**\n   - ${t.journal} (${t.pubDate}) | ${t.molecule}\n   - Finding: ${t.keyFinding}`
    ).join('\n\n')}`;
  }

  // Congress ingestion
  if (q.includes('congress') || q.includes('ingestion') || q.includes('abstract') || q.includes('poster')) {
    const congressNames = CONGRESS_OPTIONS.filter(c => c.available).map(c => c.name).join(', ');
    return `## Congress Intelligence Overview\n\nTracked congresses: ${congressNames}\n\n**Ingestion Pipeline:**\n- Abstracts: ${MOCK_INGESTION.abstracts}\n- Posters: ${MOCK_INGESTION.posters}\n- Speakers identified: ${MOCK_INGESTION.speakers}\n- Publications linked: ${MOCK_INGESTION.publicationsLinked}\n- Agendas processed: ${MOCK_INGESTION.agendas}\n\n**Social Signals:** ${MOCK_SOCIAL.totalSignals} total signals tracked\n\nAsk me about scientific themes, competitor visibility, or sentiment trends from congress data.`;
  }

  // Congress themes
  if (q.includes('theme') || q.includes('scientific theme')) {
    return `## Scientific Themes at Congress\n\n${MOCK_THEMES.map((t, i) =>
      `${i + 1}. **${t.theme}**\n   - Momentum: ${t.momentum} | Mentions: ${t.mentions}`
    ).join('\n\n')}`;
  }

  // Congress competitor visibility
  if (q.includes('visibility')) {
    return `## Competitor Visibility at Congress\n\n${MOCK_COMPETITOR_VISIBILITY.map((c, i) =>
      `${i + 1}. **${c.product}**\n   - Share of voice: ${c.share}%\n   - Mentions: ${c.mentions}`
    ).join('\n\n')}`;
  }

  // Default response
  return `## Auri Intelligence Summary\n\nI can help you with intelligence about ${CLIENT.name}'s ${CLIENT.franchiseDescription}. Here are some areas I can address:\n\n- **KIT Performance** — ${kits.length} Key Insight Themes tracked this month\n- **Competitive Intelligence** — ${competitors.length} competitors monitored\n- **KOL Management** — ${kols.length} KOLs aligned with current product\n- **Congress Intelligence** — Ingestion pipeline, scientific themes, competitor visibility\n- **Strategic Imperatives** — Strategic priorities with field alignment data\n- **Real-World Evidence** — PEGASUS adolescent data, CANOPY-HCH-3, GENEr8-1 5-year durability\n\nTry asking about congress themes, competitor visibility, KOL engagement, or sentiment trends.`;
}

export async function queryAuri(messages, selectedProduct) {
  const lastMessage = messages[messages.length - 1]?.content || '';
  const ragContext = retrieveContext(lastMessage, selectedProduct);
  const systemPrompt = buildSystemPrompt(selectedProduct, ragContext);

  // Claude → OpenAI → Keyword fallback
  try {
    return await queryClaudeAPI(messages, systemPrompt);
  } catch (e) {
    console.log('Claude API unavailable, trying OpenAI:', e.message);
  }

  try {
    return await queryOpenAIAPI(messages, systemPrompt);
  } catch (e) {
    console.log('OpenAI API unavailable, using keyword fallback:', e.message);
  }

  return keywordFallback(lastMessage, selectedProduct);
}
