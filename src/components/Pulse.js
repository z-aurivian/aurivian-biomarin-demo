import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Send, Sparkles, CheckCircle2, ArrowRight, TrendingUp, TrendingDown, Radio,
} from 'lucide-react';
import {
  CLIENT, MEDICAL_OBJECTIVES, INSIGHT_TO_IMPACT, EMERGING_THEMES, GAP_RADAR,
} from '../config';
import { COVERAGE_TARGETS } from '../config/strategy';
import { VEGA_IMPACT_INDEX, VEGA_SENTIMENT_VELOCITY, VEGA_CARE_GAP_CLOSURE } from '../config/vega';

// ─── Curation ───────────────────────────────────────────────────────────
// Pulse is a curated front door onto the same grounded content the agent
// workspaces already carry (MEDICAL_OBJECTIVES / INSIGHT_TO_IMPACT / etc.)
// — nothing here is invented; every card cites a real id from src/config.

const AGENT_META = {
  ARIA: { role: 'Congress Intelligence', path: '/congress' },
  LUCA: { role: 'KOL Intelligence', path: '/kol' },
  NOVA: { role: 'Medical Insights', path: '/insights' },
  VEGA: { role: 'Strategic Analytics', path: '/vega' },
};

const AGENT_ACCENT = {
  ARIA: 'text-s-info',
  LUCA: 'text-s-emerging',
  NOVA: 'text-s-new',
  VEGA: 'text-s-caution',
};

const CONFIDENCE_STYLE = {
  high: { dot: 'bg-s-new', text: 'text-s-new', label: 'High confidence' },
  medium: { dot: 'bg-s-caution', text: 'text-s-caution', label: 'Medium confidence' },
};

function directiveFor(moId) {
  const mo = MEDICAL_OBJECTIVES.find((m) => m.id === moId);
  if (!mo) return null;
  return { id: `D${moId.replace('MO', '')}`, name: mo.name, coverage: COVERAGE_TARGETS[moId] };
}

// ─── Inline copy renderer — "**bold**" segments only ───────────────────
function T({ children }) {
  const parts = String(children).split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1
    ? <b key={i} className="text-auri-text font-semibold">{p}</b>
    : <React.Fragment key={i}>{p}</React.Fragment>));
}

// ─── Small viz primitives ───────────────────────────────────────────────

function GapBar({ label, value, target, note }) {
  return (
    <div className="rounded-lg border border-auri-border bg-auri-offset p-3.5">
      <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-2">{label}</div>
      <div className="relative h-2 rounded-full bg-auri-border overflow-hidden">
        <div className="absolute inset-y-0 left-0 rounded-full bg-s-urgent" style={{ width: `${value}%` }} />
        <div className="absolute -top-1 -bottom-1 w-[2px] bg-auri-text" style={{ left: `${target}%` }} />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-semibold text-s-urgent">{value}%</span>
        <span className="text-xs text-auri-muted">target <b className="text-auri-text font-semibold">{target}%</b></span>
      </div>
      {note && <p className="text-[11px] text-auri-muted leading-relaxed mt-2">{note}</p>}
    </div>
  );
}

function BeforeAfter({ label, baseline, current, note }) {
  return (
    <div className="rounded-lg border border-auri-border bg-auri-offset p-3.5">
      <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-3">{label}</div>
      <div className="flex items-end gap-4 h-24">
        <div className="text-center">
          <div className="w-9 rounded bg-auri-border mx-auto" style={{ height: `${baseline}px` }} />
          <div className="text-[10px] text-auri-muted mt-1">Baseline · {baseline}%</div>
        </div>
        <div className="text-center">
          <div className="w-9 rounded bg-s-new mx-auto" style={{ height: `${current}px` }} />
          <div className="text-[10px] text-auri-muted mt-1">Current · {current}%</div>
        </div>
        <div className="ml-auto text-right self-center">
          <div className="text-2xl font-semibold text-s-new">+{current - baseline}pts</div>
        </div>
      </div>
      {note && <p className="text-[11px] text-auri-muted leading-relaxed mt-2">{note}</p>}
    </div>
  );
}

function SentimentTrend({ kol }) {
  const rising = kol.velocity.includes('↑');
  return (
    <div className="rounded-lg border border-auri-border bg-auri-offset p-3.5">
      <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-2">Sentiment · 30 days</div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-auri-text">{kol.score}</span>
        <span className={`text-sm font-medium ${rising ? 'text-s-new' : 'text-s-urgent'}`}>{kol.change30d} ({kol.velocity})</span>
      </div>
      <p className="text-[11px] text-auri-muted leading-relaxed mt-2">{kol.interpretation}</p>
    </div>
  );
}

function ThemeGrowth({ theme }) {
  return (
    <div className="rounded-lg border border-auri-border bg-auri-offset p-3.5">
      <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-2">{theme.theme}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-s-emerging">+{theme.growthRate}%</span>
        <span className="text-[11px] text-auri-muted">share of conversation</span>
      </div>
      <p className="text-[11px] text-auri-muted mt-2">First detected {theme.firstDetected} · rising</p>
    </div>
  );
}

function TimelineShift({ from, to, note }) {
  return (
    <div className="rounded-lg border border-auri-border bg-auri-offset p-3.5">
      <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-3">Proposed timeline change</div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-auri-muted line-through">{from}</span>
        <ArrowRight size={14} className="text-auri-muted" />
        <span className="font-mono text-sm text-auri-text font-medium">{to}</span>
      </div>
      {note && <p className="text-[11px] text-auri-muted leading-relaxed mt-2">{note}</p>}
    </div>
  );
}

// ─── Cards ──────────────────────────────────────────────────────────────

function CardChrome({ agent, directive, planChange, timeToImpact, confidence, hot, children }) {
  const agentPath = AGENT_META[agent]?.path || '/';
  const conf = CONFIDENCE_STYLE[confidence];
  return (
    <div className={`rounded-2xl border border-auri-border bg-auri-card p-5 mb-3.5 ${hot ? 'shadow-[inset_3px_0_0_0_rgb(var(--s-urgent))]' : ''}`}>
      <div className="flex items-center gap-2.5 flex-wrap mb-3">
        <span className={`font-michroma text-xs tracking-wider ${AGENT_ACCENT[agent] || 'text-auri-text'}`}>{agent}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-auri-muted">{AGENT_META[agent]?.role}</span>
        {directive && (
          <NavLink to="/journey" className="font-mono text-[10px] uppercase tracking-wider text-auri-muted bg-auri-offset border border-auri-border rounded px-2 py-0.5 hover:text-auri-text hover:border-auri-text/40">
            {directive.id} · {directive.name.split(' — ')[0]} ›
          </NavLink>
        )}
        {planChange && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-auri-muted border border-auri-border rounded px-2 py-0.5">Plan change</span>
        )}
        <span className="ml-auto flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-auri-muted">
          <span>Time to impact · {timeToImpact}</span>
          {conf && (
            <span className={`inline-flex items-center gap-1.5 ${conf.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${conf.dot}`} />{conf.label}
            </span>
          )}
        </span>
      </div>
      {children}
      <div className="flex items-center gap-2.5 mt-4 pt-3.5 border-t border-auri-border">
        <button className="flex items-center gap-1.5 rounded-lg bg-auri-text text-auri-bg px-4 py-2 text-xs font-semibold">
          <CheckCircle2 size={13} />{planChange ? 'Approve the change' : 'Approve as written'}
        </button>
        <button className="rounded-lg border border-auri-border px-4 py-2 text-xs font-semibold text-auri-text">Adjust</button>
        <button className="px-3 py-2 text-xs text-auri-muted">Decline</button>
        <NavLink to={agentPath} className="ml-auto text-xs text-auri-muted hover:text-auri-text flex items-center gap-1.5">
          Open in <span className={`font-michroma text-[11px] ${AGENT_ACCENT[agent]}`}>{agent}</span> →
        </NavLink>
      </div>
    </div>
  );
}

function DecisionCard({ card }) {
  return (
    <CardChrome {...card}>
      <div className="text-[16px] font-semibold text-auri-text leading-snug mb-2">{card.title}</div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4 items-start">
        <div>
          <p className="text-sm text-auri-muted leading-relaxed"><T>{card.body}</T></p>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-auri-muted mt-2.5">
            <Sparkles size={12} /> {card.evidence}
          </div>
          <div className="text-xs text-auri-muted leading-relaxed mt-2.5">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-auri-muted block mb-0.5">{card.outcomeLabel || 'Projected outcome'}</span>
            <T>{card.outcome}</T>
          </div>
        </div>
        <div>{card.viz}</div>
      </div>
    </CardChrome>
  );
}

function WatchCard({ w }) {
  const directive = w.moRef ? directiveFor(w.moRef) : null;
  return (
    <div className="rounded-xl border border-auri-border bg-auri-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`font-michroma text-xs tracking-wider ${AGENT_ACCENT[w.agent]}`}>{w.agent}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-auri-muted">{w.kicker}</span>
        {directive && (
          <NavLink to="/journey" className="ml-auto font-mono text-[10px] uppercase tracking-wider text-auri-muted bg-auri-offset border border-auri-border rounded px-2 py-0.5">
            {directive.id} ›
          </NavLink>
        )}
      </div>
      <div className="text-sm font-semibold text-auri-text leading-snug mb-1.5">{w.title}</div>
      <p className="text-xs text-auri-muted leading-relaxed"><T>{w.body}</T></p>
      <div className="flex items-center gap-2.5 mt-3">
        {w.trend ? (
          <>
            <span className="font-mono text-[10px] uppercase tracking-wider text-auri-muted bg-auri-offset border border-auri-border rounded px-2 py-0.5">{w.tag}</span>
            <span className="ml-auto font-mono text-xs text-s-caution flex items-center gap-1">
              {w.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {w.trend}
            </span>
          </>
        ) : (
          <>
            <button className="rounded-lg border border-auri-border px-3 py-1.5 text-[11px] font-semibold text-auri-text">Make this a directive</button>
            <button className="px-2 py-1.5 text-[11px] text-auri-muted">Dismiss</button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Content ────────────────────────────────────────────────────────────

const DECIDE_CARDS = [
  {
    agent: 'NOVA', hot: true, directive: directiveFor('MO4'), timeToImpact: '0–3 mo', confidence: 'high',
    title: 'Approve accelerated distribution of the SCFE-vs-achondroplasia precision one-pager',
    body: "Community endocrinologists are conflating the discontinued Turner/SHOX/ACAN SCFE signal with general achondroplasia safety — flagged **4×** this cycle, the highest-recurrence insight in play (AI6, 86% confidence). The safety-database one-pager (>5,000 patients, zero SCFE cases) is drafted and started; this accelerates it to the full skeletal-facing MSL roster ahead of Q3 congress season.",
    evidence: 'MSL interactions (2) · Ad board, London · ICIEM & ASGCT 2026 congress debriefs',
    outcome: 'Precision-messaging correctness rises toward the **74%** level already reached in early-adopter accounts (i2i-4, +27pts in 6 weeks) — applied here to the full roster. If declined: conflation risk carries into peak congress season.',
    viz: <GapBar label="SCFE-vs-achondroplasia precision" value={47} target={74} note="Baseline 47% pre-messaging · 74% already achieved in tracked early-adopter accounts" />,
  },
  {
    agent: 'VEGA', hot: true, directive: directiveFor('MO6'), timeToImpact: '3–6 mo', confidence: 'medium',
    title: 'Approve a standing monthly divestiture-intelligence rollup for MO6',
    body: 'Ex-US KOL sentiment (AI8) and US patient-transition status (AI9) are both high-confidence, high-recurrence signals feeding a real business decision — the ROCTAVIAN divestiture evaluation — but MO6 remains at **Low coverage** with no formal mechanism routing this intelligence to leadership on a regular cadence.',
    evidence: 'Gap Radar · MO6 coverage gap · VEGA Internal Ecosystem Impact 68/80',
    outcome: 'A monthly rollup closes the coverage gap driving VEGA\'s lowest impact-index dimension (Internal ecosystem, 68 vs. target 80). If declined: divestiture evaluation continues without a standing field-intelligence channel.',
    viz: <GapBar label="Internal ecosystem impact (VEGA Impact Index)" value={68} target={80} note="Lowest-scoring dimension — MO3 and MO4 also still at Gap coverage" />,
  },
  {
    agent: 'LUCA', hot: true, directive: directiveFor('MO5'), timeToImpact: '3–6 mo', confidence: 'medium',
    title: 'Approve a proactive BMN 333 scientific exchange with Dr. Klaus Mohnike',
    body: "Dr. Mohnike's sentiment has cooled measurably (score 63, **-4.1** over 30 days) as he engages more closely with Ascendis's navepegritide data ahead of its Q4 2026 EU decision (AI7) — a defensible, timeline-driven shift, not a rupture, but worth a proactive BMN 333 conversation before the decision lands.",
    evidence: 'ESPE/ESE 2025 congress debrief · Field Medical, Continental Europe · VEGA sentiment velocity',
    outcome: 'A scheduled exchange before the EU decision protects one of only 10 skeletal-roster KOLs currently showing engagement drift. If declined: risk of losing a mid-tier European voice right as navepegritide reaches decision.',
    viz: <SentimentTrend kol={VEGA_SENTIMENT_VELOCITY.find((k) => k.kol.includes('Mohnike'))} />,
  },
  {
    agent: 'NOVA', directive: directiveFor('MO4'), planChange: true, timeToImpact: 'Field shifted', confidence: 'medium',
    title: 'Pull the hypochondroplasia field-readiness briefing forward ahead of the Q3 2026 sNDA filing',
    body: "Following CANOPY-HCH-3's positive Phase 3 readout, skeletal-dysplasia specialists are proactively asking when hypochondroplasia families can expect an approved VOXZOGO option — MSLs report a real risk of off-label pressure building before the filing (AI5). The off-label-pressure theme is growing **52%** since first detected in June.",
    evidence: 'ESPE/ESE 2025 congress debrief · Clinical geneticist, Baltimore · Emerging Themes (et-2)',
    outcomeLabel: 'If approved',
    outcome: 'Field-readiness briefing moves ahead of the sNDA filing instead of waiting for it — giving MSLs a precise, non-overclaiming answer before off-label pressure builds further.',
    viz: <TimelineShift from="Post-filing (Q3 2026)" to="Pre-filing (now)" note="No new budget required — reprioritizes existing MO4 workstream" />,
  },
  {
    agent: 'ARIA', directive: directiveFor('MO1'), timeToImpact: '0–6 mo', confidence: 'high',
    title: 'Approve field materials addressing self-directed Sephience switching conversations',
    body: "Stable KUVAN patients and families are increasingly raising Sephience themselves before their physician does — a self-directed-switching pattern up **44%** since first detected in May, and the first real switching pressure KUVAN has faced since its own approval (et-4, AI1).",
    evidence: 'MSL interactions (2) · Ad board · Med Info query · ICIEM 2025 congress debrief',
    outcome: 'Materials get ahead of the conversation rather than just responding to it — reinforcing the comparison card already lifting prescriber confidence from 38% to 61% (i2i-1).',
    viz: <ThemeGrowth theme={EMERGING_THEMES.find((t) => t.id === 'et-4')} />,
  },
];

const OUTCOME_CARD = (() => {
  const impact = INSIGHT_TO_IMPACT.find((i) => i.id === 'i2i-5');
  const gap = VEGA_CARE_GAP_CLOSURE.find((g) => g.linkedMO === 'MO6');
  return { impact, gap };
})();

const WATCH_ITEMS = [
  {
    agent: 'NOVA', kicker: 'Competitive early-warning', moRef: 'MO1',
    title: 'Sephience-driven switching conversations continuing to build ahead of its first full year',
    body: "MSL interactions show BH4-responsive PKU prescribers still actively evaluating Sephience's oral, once-daily profile for stable KUVAN patients (ps-3) — held here until it crosses the threshold for a new decision.",
    tag: 'KUVAN vs. SEPHIENCE', trend: '↑ rising', trendUp: true,
  },
  {
    agent: 'ARIA', kicker: 'Congress signal', moRef: null,
    title: 'Hypochondroplasia off-label-pressure watch continuing to grow',
    body: 'Families and specialists keep asking about early VOXZOGO access ahead of the Q3 2026 filing (et-2) — not decision-grade beyond the briefing already pulled forward above, but worth tracking through the filing window.',
  },
  {
    agent: 'VEGA', kicker: 'Emerging gap', moRef: 'MO5',
    title: 'Skeletal KOL competitive-attention monitoring beyond Dr. Mohnike',
    body: GAP_RADAR.find((g) => g.moRef === 'MO5')?.suggestion || '',
    tag: 'SKELETAL ROSTER', trend: '9 KOLs unmonitored', trendUp: false,
  },
];

// ─── Page ───────────────────────────────────────────────────────────────

export default function Pulse() {
  const [directiveInput, setDirectiveInput] = useState('');
  const gapMOCount = Object.values(COVERAGE_TARGETS).filter((v) => v === 'Gap').length;
  const eyebrow = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="max-w-[980px]">
      {/* Page header */}
      <div className="pb-2">
        <div className="font-mono text-[11px] uppercase tracking-wider text-auri-muted mb-3">{eyebrow}</div>
        <h1 className="text-[28px] font-semibold text-auri-text tracking-tight leading-tight">What to decide today</h1>
        <p className="text-sm text-auri-muted mt-2 leading-relaxed max-w-2xl">
          {CLIENT?.name}'s agentic team read the landscape and prepared decisions for you to review. Each carries its evidence, a drafted action, and the outcome it expects.
        </p>
        <div className="flex gap-9 mt-5 pb-5 border-b border-auri-border">
          <div>
            <div className="text-xl font-semibold text-auri-text">{DECIDE_CARDS.length} <span className="text-sm font-medium text-auri-muted">ready</span></div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-auri-muted mt-1">Decisions today</div>
          </div>
          <div>
            <div className="text-xl font-semibold text-auri-text">{VEGA_IMPACT_INDEX.overall} <span className="text-sm font-medium text-s-new">{VEGA_IMPACT_INDEX.vsQ4}</span></div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-auri-muted mt-1">VEGA Impact Index · vs. Q4</div>
          </div>
          <div>
            <div className="text-xl font-semibold text-auri-text">{gapMOCount} <span className="text-sm font-medium text-auri-muted">of {Object.keys(COVERAGE_TARGETS).length}</span></div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-auri-muted mt-1">Objectives at Gap coverage</div>
          </div>
        </div>
      </div>

      {/* Direct the team */}
      <form
        className="flex items-center gap-3 bg-auri-card border border-auri-border rounded-xl pl-4 pr-2 py-2.5 my-5"
        onSubmit={(e) => {
          e.preventDefault();
          const text = directiveInput.trim();
          if (!text) return;
          window.dispatchEvent(new CustomEvent('auri:directive', { detail: text }));
          setDirectiveInput('');
        }}
      >
        <Sparkles size={16} className="text-auri-muted shrink-0" />
        <input
          type="text"
          value={directiveInput}
          onChange={(e) => setDirectiveInput(e.target.value)}
          placeholder='Or direct the team — "Weigh the Sephience switching signal against the MO1 plan."'
          className="flex-1 bg-transparent text-sm text-auri-text placeholder:text-auri-muted focus:outline-none"
        />
        <button type="submit" className="flex items-center gap-1.5 rounded-lg bg-auri-text text-auri-bg px-4 py-2 text-xs font-semibold">
          <Send size={13} />Direct
        </button>
      </form>

      {/* To decide today */}
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-auri-muted mt-8 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-s-urgent" />To decide today
      </div>
      {DECIDE_CARDS.map((c, i) => <DecisionCard key={i} card={c} />)}

      {/* Decision outcomes */}
      {OUTCOME_CARD.impact && (
        <>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-auri-muted mt-8 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-s-new" />Decision outcomes
          </div>
          <div className="rounded-2xl border border-auri-border bg-auri-card p-5 mb-3.5">
            <div className="flex items-center gap-2.5 flex-wrap mb-3">
              <span className={`font-michroma text-xs tracking-wider ${AGENT_ACCENT.VEGA}`}>VEGA</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-auri-muted">Closed-loop measurement</span>
              <NavLink to="/journey" className="font-mono text-[10px] uppercase tracking-wider text-auri-muted bg-auri-offset border border-auri-border rounded px-2 py-0.5">
                {directiveFor('MO6')?.id} · ROCTAVIAN US exit ›
              </NavLink>
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-s-new">
                <CheckCircle2 size={12} />Impact {OUTCOME_CARD.impact.impactScore} / 10
              </span>
            </div>
            <div className="text-[16px] font-semibold text-auri-text leading-snug mb-2">The US patient-transition protocol is moving the number it promised</div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4 items-start">
              <div>
                <p className="text-sm text-auri-muted leading-relaxed">{OUTCOME_CARD.impact.action}</p>
                <div className="text-xs text-auri-muted leading-relaxed mt-2.5">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-auri-muted block mb-0.5">Measured outcome</span>
                  {OUTCOME_CARD.impact.outcome} {OUTCOME_CARD.gap?.patientsImpacted && `— ${OUTCOME_CARD.gap.patientsImpacted}.`}
                </div>
              </div>
              <BeforeAfter
                label="US Roctavian transition-messaging consistency"
                baseline={41}
                current={72}
                note={`Measured over ${OUTCOME_CARD.impact.timeframe}`}
              />
            </div>
          </div>
        </>
      )}

      {/* Standing watch */}
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-auri-muted mt-8 mb-3.5">
        <Radio size={11} className="text-s-info" />Standing watch
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {WATCH_ITEMS.map((w, i) => <WatchCard key={i} w={w} />)}
      </div>
    </div>
  );
}
