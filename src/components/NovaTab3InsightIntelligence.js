import React, { useState, useEffect } from 'react';
import {
  Brain, ChevronDown, ChevronUp, FileDown, Sparkles, MapPin,
  Calendar, GitBranch, Check, TrendingUp, ShieldCheck, MessageSquare,
  AlertCircle,
} from 'lucide-react';
import {
  LISTENING_PRIORITIES, INSIGHTS, ACTIONS,
} from '../config';
import { isPinned, pinInsight, unpinInsight, subscribePinned } from '../lib/journeyStore';

// ACTIONS.fromInsightRef is inconsistent across demo configs — a plain id
// ('AI1'), a '+'-joined compound id ('AI1+AI5'), or an array (['AI1','AI5'])
// where one action addresses multiple insights. Normalise before matching.
function actionCoversInsight(action, insightId) {
  const ref = action.fromInsightRef;
  if (Array.isArray(ref)) return ref.includes(insightId);
  if (typeof ref === 'string') return ref.split('+').includes(insightId);
  return false;
}

// ─── KIQ period data — grounded in config/insights.js (AI1–AI9) and the
// locked 6-person MSL roster (config/vega.js). LISTENING_PRIORITIES
// (LP1–LP8) covers all six Medical Objectives, so every row here has real
// intelligence behind it this period. ───────────────────────────────────────

const KIQ_PERIOD_DATA = {
  LP1: {
    status: 'urgent',
    thisPeriod: {
      summary: "Four independent field signals this cycle confirm BH4-responsive PKU prescribers are actively evaluating Sephience's oral, once-daily profile for stable KUVAN patients — the first real switching pressure KUVAN has faced since its own approval. A Med Info query from Portland and a congress debrief from ICIEM 2025 both surfaced the same pattern independently.",
      novaSynthesis: 'The intelligence picture is consistent across MSL, ad board, Med Info, and congress channels: the switching pressure is driven by simplification framing, not a demonstrated efficacy gap. No head-to-head comparative data exists on either side.',
      keyQuote: { text: 'My stable KUVAN patients are asking about Sephience because they heard it\'s "the newer one" — I don\'t have a clean answer for why they shouldn\'t switch.', msl: 'Dr. Priya Chandran', territory: 'US West — PKU/MPS', date: '2026-06-04' },
      actionPill: { insight: 'AI1', taken: true, label: 'Comparison card in development' },
    },
    cumulative: {
      summary: 'Across recent cycles, Sephience-related discussion has risen from 201 to 289 mentions (+44%) as PTC completes its first full year on market. This is the fastest-growing competitive theme on the board.',
      runningInsight: 'The question is shifting from "will Sephience enter the conversation" to "how fast will switching pressure translate into actual referrals" — an urgency, not an awareness, problem.',
    },
  },
  LP2: {
    status: 'new',
    thisPeriod: {
      summary: 'Three signals this cycle confirm pediatric geneticists cite injection-site reaction and anaphylaxis-monitoring burden — not efficacy skepticism — as the real adoption barrier for newly-eligible adolescents on PALYNZIQ, despite well-received PEGASUS data.',
      novaSynthesis: 'This is a messaging-and-materials gap, not an evidence gap: adult PALYNZIQ starter materials do not translate cleanly to adolescent families managing dose-escalation at home for the first time.',
      keyQuote: { text: 'The efficacy data is compelling — my hesitation is entirely about whether a 14-year-old and their family can manage the dose-escalation and monitoring burden at home.', msl: 'Dr. Rachel Simmons', territory: 'US Northeast — PKU/MPS/Hemophilia', date: '2026-06-08' },
      actionPill: { insight: 'AI2', taken: true, label: 'Adolescent starter guide published' },
    },
    cumulative: {
      summary: 'Adolescent PALYNZIQ discussion has grown from 138 to 214 mentions (+55%) since the 2026 approval, with sentiment improving from 0.49 to 0.61 as materials reach the field.',
      runningInsight: 'The question has moved from "is the adolescent data good enough" to "do families have what they need to start" — a field-enablement question now largely being answered.',
    },
  },
  LP3: {
    status: 'new',
    thisPeriod: {
      summary: "One high-value signal from Continental Europe confirmed real confusion — including inside BioMarin's own field team — about whether Aldurazyme supply and access questions route through BioMarin or Genzyme/Sanofi.",
      novaSynthesis: 'A single but structurally important signal: this is an internal-readiness gap, not a physician-education gap. Low volume, high strategic value given the credibility risk of an MSL answering incorrectly.',
      keyQuote: { text: 'I had a physician ask me an Aldurazyme access question and I honestly wasn\'t sure whether that routes through us or through Genzyme.', msl: 'Dr. Julian Voss', territory: 'Continental Europe — MPS/Skeletal', date: '2026-04-12' },
      actionPill: { insight: 'AI3', taken: true, label: 'Internal clarity card accepted' },
    },
    cumulative: {
      summary: 'The Aldurazyme co-marketing question has generated 2 insights across recent periods, both pointing to the same structural gap. MO3 remains at Gap coverage.',
      runningInsight: 'The question has narrowed from "is there confusion" to "is the internal field team correctly trained" — an internal-enablement question, not an external-messaging one.',
    },
  },
  LP4: {
    status: 'new',
    thisPeriod: {
      summary: 'Three signals across MSL, congress, and ad board channels confirm MPS diagnostic delay (Naglazyme, Vimizim, Brineura) remains concentrated at the community-pediatrician referral handoff — a pattern confirmed globally at ICIEM 2025, not US-specific.',
      novaSynthesis: 'The gap is consistently a screening-tool gap, not a specialist-capacity gap: community pediatricians see MPS rarely enough that they need a simple checklist, not a differential-diagnosis education program.',
      keyQuote: { text: 'I see maybe one suspected MPS case in a career — I need a simple screening checklist, not a specialist-level differential.', msl: 'Dr. Daniel Osorio', territory: 'US Central — Skeletal/MPS', date: '2026-04-30' },
      actionPill: { insight: 'AI4', taken: true, label: 'Screening checklist started' },
    },
    cumulative: {
      summary: 'MPS referral-pathway mentions have grown modestly (152 to 176, +16%) with the pattern remaining stable across periods — a chronic, not acute, gap.',
      runningInsight: 'The question has stayed consistent: "where is time being lost in the referral chain" — the answer keeps coming back to the same community-pediatrician handoff point.',
    },
  },
  LP5: {
    status: 'urgent',
    thisPeriod: {
      summary: "Two signals following CANOPY-HCH-3's positive Phase 3 readout show skeletal-dysplasia specialists proactively asking when hypochondroplasia families can expect an approved VOXZOGO option — with a real risk of off-label pressure building ahead of the Q3 2026 sNDA filing.",
      novaSynthesis: 'This is a timeline-communication gap with real access-integrity stakes: families are impatient in a way that could translate into premature off-label requests if not managed transparently.',
      keyQuote: { text: 'I have three hypochondroplasia families asking me this month whether they should just push for off-label access now rather than wait for the filing.', msl: 'Dr. Daniel Osorio', territory: 'US Central — Skeletal/MPS', date: '2026-07-02' },
      actionPill: { insight: 'AI5', taken: true, label: 'Identification checklist started' },
    },
    cumulative: {
      summary: 'Hypochondroplasia-related mentions have grown sharply (94 to 143, +52%) since the ESPE/ESE 2025 data presentation, with sentiment improving as the timeline becomes clearer.',
      runningInsight: 'The question has shifted from "will the data support expansion" to "how do we manage patient expectations responsibly until the filing clears" — a field-discipline question.',
    },
  },
  LP6: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Four independent signals this cycle — the highest volume of any KIQ — show community endocrinologists conflating the discontinued Turner/SHOX/ACAN SCFE signal with general achondroplasia safety, despite zero SCFE cases in the >5,000-patient BioMarin-sponsored achondroplasia base.',
      novaSynthesis: 'The intelligence picture is unambiguous: this is a precision-messaging problem, not a new safety finding. The distinction is scientifically clear but not landing cleanly in community practice.',
      keyQuote: { text: 'I saw the SCFE news and now I\'m double-checking — is this something I need to worry about in my achondroplasia patients too?', msl: 'Dr. Emma Whitfield', territory: 'UK & Ireland — Hemophilia/Skeletal', date: '2026-07-08' },
      actionPill: { insight: 'AI6', taken: true, label: 'Precision talking points accepted' },
    },
    cumulative: {
      summary: 'SCFE-related mentions have surged from 121 to 198 (+64%) since the March 2026 signal — the fastest-growing theme on the entire board, with sentiment dipping as confusion spreads before correction.',
      runningInsight: 'The question has moved from "what happened" to "is the correction actually landing" — the precision talking points and safety-database one-pager are both now in field distribution to test that.',
    },
  },
  LP7: {
    status: 'new',
    thisPeriod: {
      summary: "Two signals — a congress debrief and a direct MSL interaction — show one mid-tier skeletal KOL (Dr. Klaus Mohnike) engaging more closely with Ascendis's navepegritide data ahead of its Q4 2026 EU regulatory decision, a defensible, timeline-driven attention shift.",
      novaSynthesis: 'A low-volume but strategically important early-warning signal: this is exactly the kind of shift a systematic KOL competitive-attention monitoring LP (flagged in Gap Radar) would catch earlier across the full skeletal roster.',
      keyQuote: { text: 'He\'s not negative on VOXZOGO, but he\'s clearly tracking the once-weekly dosing conversation closely as the EU filing timeline gets nearer.', msl: 'Dr. Julian Voss', territory: 'Continental Europe — MPS/Skeletal', date: '2026-06-02' },
      actionPill: { insight: 'AI7', taken: false, label: 'Re-engagement not yet scheduled' },
    },
    cumulative: {
      summary: 'BMN 333-vs-navepegritide discussion has grown steadily (66 to 87 mentions, +32%) as the competitor\'s regulatory timeline advances — MO5 remains at Low coverage.',
      runningInsight: 'The question has sharpened from "is navepegritide a threat" to "which specific KOLs are showing early attention shift, and how fast" — Dr. Mohnike is currently the clearest example.',
    },
  },
  LP8: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Two distinct but related signal clusters this cycle: US hemophilia centers need a concrete written patient-transition protocol before the May 2026 withdrawal, and ex-US (UK/EU/international) treaters are seeking proactive reassurance that the US exit is not a broader retreat.',
      novaSynthesis: 'Both signals are high-confidence and time-sensitive. The WFH World Congress 2026 hallway conversation made the ex-US-credibility risk especially visible — this is exactly the kind of field intelligence that should also inform the divestiture evaluation.',
      keyQuote: { text: 'I have patients mid-evaluation right now. I need to know exactly what to tell them, and I need it in writing, not a verbal MSL summary.', msl: 'Dr. Rachel Simmons', territory: 'US Northeast — PKU/MPS/Hemophilia', date: '2026-05-11' },
      actionPill: { insight: 'AI9', taken: true, label: 'US transition protocol started' },
    },
    cumulative: {
      summary: 'ROCTAVIAN-related mentions remain elevated (168 to 231, +38%) as the withdrawal date approaches, with sentiment stabilizing slightly as the transition protocol and ex-US credibility statement reach the field.',
      runningInsight: 'The question has evolved from "what is happening" to "are both the US transition and ex-US credibility threads being managed with equal urgency" — MO6 remains at Low coverage despite high-confidence signals.',
    },
  },
};

const STATUS_CONFIG = {
  new:    { badge: '● New this month',     style: 'bg-violet-50 text-violet-700 border-violet-200', rowBorder: '' },
  urgent: { badge: '● Urgent this month',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
  none:   { badge: '○ No new insights',    style: 'bg-zinc-100 text-zinc-500 border-zinc-200',      rowBorder: 'opacity-80' },
  gap:    { badge: '0 insights · MO gap',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
};

// ─── Insight card (inline — Tab 3 owns actionable insights) ───────────────

const PRIORITY_STYLE = {
  High:   'bg-rose-50 text-rose-700 border-rose-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  Low:    'bg-sky-50 text-sky-700 border-sky-200',
  Urgent: 'bg-rose-50 text-rose-700 border-rose-200',
  New:    'bg-sky-50 text-sky-700 border-sky-200',
};

const STATUS_STYLE = {
  Captured:    'bg-zinc-50 text-zinc-600 border-zinc-200',
  Triaged:     'bg-sky-50 text-sky-700 border-sky-200',
  Validated:   'bg-violet-50 text-violet-700 border-violet-200',
  Prioritised: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const BORDER_STYLE = {
  High:   'border-l-rose-400',
  Medium: 'border-l-amber-300',
  Low:    'border-l-sky-300',
  Urgent: 'border-l-rose-400',
  New:    'border-l-sky-300',
};

function InsightCard({ insight }) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(() => isPinned(insight.id));

  useEffect(() => {
    return subscribePinned((ids) => setPinned(ids.includes(insight.id)));
  }, [insight.id]);

  const handlePin = (e) => {
    e.stopPropagation();
    if (pinned) unpinInsight(insight.id);
    else pinInsight(insight.id);
  };

  return (
    <div className={`rounded-xl border-l-2 border border-auri-border bg-auri-card overflow-hidden ${BORDER_STYLE[insight.priority] || 'border-l-auri-border'} ${pinned ? 'ring-1 ring-auri-text/20' : ''}`}>
      <button className="w-full text-left p-4 hover:bg-auri-offset transition-colors" onClick={() => setOpen(!open)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-medium text-auri-muted">{insight.id}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${PRIORITY_STYLE[insight.priority] || ''}`}>{insight.priority}</span>
              {insight.lpRefs?.map((lp) => (
                <span key={lp} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-offset text-auri-muted border-auri-border">{lp}</span>
              ))}
              {insight.moRefs?.map((mo) => (
                <span key={mo} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{mo}</span>
              ))}
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_STYLE[insight.status] || ''}`}>{insight.status}</span>
              {pinned && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/10 text-auri-text border-auri-text/30 inline-flex items-center gap-1">
                  <GitBranch size={10} /> On Journey
                </span>
              )}
            </div>
            <div className="text-sm font-semibold text-auri-text mb-1 leading-snug">{insight.title}</div>
            <p className="text-sm text-auri-muted leading-relaxed">{insight.summary}</p>
          </div>
          <div className="text-right shrink-0 flex flex-col items-end gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-0.5">Confidence</div>
              <div className="text-lg font-bold text-auri-text">{Math.round(insight.confidenceScore * 100)}%</div>
            </div>
            <span
              role="button"
              tabIndex={0}
              onClick={handlePin}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePin(e); }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${pinned ? 'bg-auri-text text-auri-bg border-auri-text' : 'bg-auri-bg text-auri-muted border-auri-border hover:text-auri-text hover:border-auri-text/50'}`}
            >
              {pinned ? <><Check size={11} /> Added to Journey</> : <><GitBranch size={11} /> Add to Journey</>}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2.5 text-[11px] text-auri-muted">
          <span className="flex items-center gap-1"><TrendingUp size={11} /> Recurs {insight.recurrence}×</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {insight.recency}</span>
          <span className="flex items-center gap-1"><ShieldCheck size={11} /> {insight.provenance}</span>
          <ChevronDown size={13} className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="border-t border-auri-border bg-auri-bg p-4">
          {(() => {
            const action = ACTIONS.find((a) => actionCoversInsight(a, insight.id));
            if (!action) return null;
            const STATUS_PILL = {
              Proposed: 'bg-auri-offset text-auri-muted border-auri-border',
              Started:  'bg-sky-50 text-sky-700 border-sky-200',
              Accepted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            };
            return (
              <div className="rounded-lg border-l-2 border-l-amber-300 border border-auri-border bg-amber-50/30 p-3 mb-4">
                <div className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1.5">Proposed action · {action.id}</div>
                <p className="text-sm text-auri-text leading-relaxed mb-2">{action.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-auri-muted">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_PILL[action.status] || STATUS_PILL.Proposed}`}>{action.status}</span>
                  <span>{action.owner || 'Owner not yet assigned'}</span>
                  {action.dueBy && <span className="flex items-center gap-1"><Calendar size={11} /> {action.dueBy}</span>}
                  {action.moRef && <span className="px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{action.moRef}</span>}
                </div>
              </div>
            );
          })()}

          <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-2">Source signals ({insight.sourceInsights?.length || 0})</div>
          <div className="space-y-2">
            {insight.sourceInsights?.map((s, i) => (
              <div key={i} className="rounded-lg border border-auri-border bg-auri-card p-3">
                <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                  <MessageSquare size={10} />
                  <span className="font-medium">{s.type}</span><span>·</span>
                  <span>{s.role}</span><span>·</span>
                  <MapPin size={10} /><span>{s.location}</span>
                  <span className="ml-auto">{s.date}</span>
                </div>
                <p className="text-sm text-auri-text italic leading-relaxed">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── KIQ Matrix ────────────────────────────────────────────────────────────

function KIQMatrix() {
  const [openRow, setOpenRow] = useState(null);

  const allLPs = LISTENING_PRIORITIES;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-auri-text" />
          <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">KIQ Intelligence Matrix</h3>
          <span className="text-xs text-auri-muted">{allLPs.length} listening priorities</span>
        </div>
        <button
          onClick={() => window.alert('Export to PowerPoint — coming soon.')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
        >
          <FileDown size={12} /> Export to PPT
        </button>
      </div>

      <div className="space-y-2">
        {allLPs.map((lp) => {
          const period = KIQ_PERIOD_DATA[lp.id];
          const statusKey = period?.status || 'gap';
          const cfg = STATUS_CONFIG[statusKey];
          const isOpen = openRow === lp.id;

          return (
            <div key={lp.id} className={`rounded-xl border border-auri-border bg-auri-card overflow-hidden ${cfg.rowBorder}`}>
              {/* Row header */}
              <button
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                onClick={() => setOpenRow(isOpen ? null : lp.id)}
              >
                <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20 shrink-0">{lp.id}</span>
                  <span className="text-[10px] text-auri-muted shrink-0">{lp.moRef}</span>
                  <span className="text-sm font-medium text-auri-text truncate">{lp.name}</span>
                  <span className="text-xs text-auri-muted italic hidden md:block truncate max-w-xs">"{lp.kiq}"</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${cfg.style}`}>{cfg.badge}</span>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted" /> : <ChevronDown size={15} className="text-auri-muted" />}
                </div>
              </button>

              {/* Expanded two-column panel */}
              {isOpen && period && (
                <div className="border-t border-auri-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-auri-border">
                    {/* Left — this period */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-text mb-3">
                        This Period — <span className="text-auri-muted">June 2026</span>
                      </div>

                      {period.thisPeriod.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.thisPeriod.summary}</p>

                          {period.thisPeriod.novaSynthesis && (
                            <div className="border-l-2 border-violet-300 pl-3 bg-violet-50/40 rounded-r-lg py-2 pr-3 mb-3">
                              <span className="text-[10px] font-semibold text-violet-700 uppercase tracking-wider">Nova synthesis · </span>
                              <span className="text-xs text-auri-text">{period.thisPeriod.novaSynthesis}</span>
                            </div>
                          )}

                          {period.thisPeriod.keyQuote && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3 mb-3">
                              <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                                <MessageSquare size={10} />
                                <span>{period.thisPeriod.keyQuote.msl}</span>
                                <span>·</span>
                                <MapPin size={10} />
                                <span>{period.thisPeriod.keyQuote.territory}</span>
                                <span className="ml-auto">{period.thisPeriod.keyQuote.date}</span>
                              </div>
                              <p className="text-sm text-auri-text italic leading-relaxed">"{period.thisPeriod.keyQuote.text}"</p>
                            </div>
                          )}

                          {period.thisPeriod.actionPill && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${period.thisPeriod.actionPill.taken ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-auri-offset text-auri-muted border-auri-border'}`}>
                              {period.thisPeriod.actionPill.taken && <Check size={12} />}
                              <span>{period.thisPeriod.actionPill.insight}</span>
                              <span>→</span>
                              <span>{period.thisPeriod.actionPill.label}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <AlertCircle size={14} className="text-auri-muted mb-2" />
                          <p className="text-sm text-auri-muted leading-relaxed">{period.thisPeriod.emptyReason}</p>
                        </div>
                      )}
                    </div>

                    {/* Right — cumulative picture */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-muted mb-3">Cumulative Picture</div>

                      {period.cumulative.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.cumulative.summary}</p>
                          {period.cumulative.runningInsight && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3">
                              <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">Running Insight</div>
                              <p className="text-xs text-auri-text italic leading-relaxed">{period.cumulative.runningInsight}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <p className="text-sm text-auri-muted leading-relaxed">{period.cumulative.emptyReason || 'No cumulative intelligence to display.'}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab3InsightIntelligence() {
  return (
    <div className="space-y-8">
      {/* Nova intelligence brief */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={15} className="text-violet-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Intelligence Brief</span>
          <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
        </div>
        <p className="text-sm text-auri-text leading-relaxed">
          This period, <strong>8 of 8 KIQs</strong> generated new insights. LP1 (Sephience competitive displacement risk)
          and LP6 (SCFE safety-signal field communication) are both flagged <strong>Urgent</strong> — SCFE-related mentions
          alone are up 64% since the March 2026 signal. LP7 (BMN 333 vs. navepegritide differentiation) has the
          lowest interaction volume of the eight; directed MSL activation is recommended ahead of the EU decision.
          The highest-confidence insight this period is <strong>AI1</strong> (88% confidence, LP1/MO1 intersection).
        </p>
      </div>

      {/* KIQ Matrix */}
      <KIQMatrix />

      {/* Actionable Insights */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-auri-text" />
            <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">Actionable Insights</h3>
            <span className="text-xs text-auri-muted">{INSIGHTS.length} prioritised · refreshes every 6 hours</span>
          </div>
          <button
            onClick={() => window.alert('Export to PowerPoint — coming soon.')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
          >
            <FileDown size={12} /> Export to PPT
          </button>
        </div>
        <div className="space-y-3">
          {INSIGHTS.map((i) => <InsightCard key={i.id} insight={i} />)}
        </div>
      </section>
    </div>
  );
}
