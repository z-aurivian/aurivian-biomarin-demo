import React, { useState } from 'react';
import {
  Layers, Target, Microscope, BookOpen, Users, FileText, BarChart2,
  Heart, TrendingUp, TrendingDown, ChevronDown, ChevronUp, FileDown,
  Sparkles, AlertCircle, MapPin, Calendar, MessageSquare, X,
  CheckCircle, ArrowRight, DollarSign, Brain, Zap, Activity,
} from 'lucide-react';
import {
  ISP_PILLARS, MEDICAL_OBJECTIVES, COVERAGE_TARGETS, EMERGING_THEMES,
  INSIGHT_SOURCES,
} from '../config';

// ─── Mock data (structural — grounded in BioMarin config: MO1–MO6, AI1–AI9,
// A1–A15. MSL/territory attributions use the locked 6-person roster:
// Dr. Rachel Simmons, Dr. Daniel Osorio, Dr. Priya Chandran, Dr. Emma
// Whitfield, Dr. Julian Voss, Dr. Amara Okafor. See config/vega.js) ────────

const TACTIC_POA = [
  { id: 'T1', name: 'Evidence Generation',      Icon: Microscope, budget: '$1.9M', pct: 27, moRefs: ['MO4','MO5'],       signalCount: 4, signalStatus: 'Active',  deliverables: ['Achondroplasia safety-database one-pager', 'Hypochondroplasia patient-identification checklist', 'BMN 333 differentiation briefing'], novaSummary: 'Signal volume is steady. Field reports continue to request the achondroplasia safety-database one-pager and hypochondroplasia readiness materials ahead of the Q3 2026 sNDA filing.' },
  { id: 'T2', name: 'Medical Education',         Icon: BookOpen,   budget: '$1.5M', pct: 21, moRefs: ['MO1','MO4'],       signalCount: 6, signalStatus: 'Alert',   deliverables: ['KUVAN-vs-Sephience comparison card', 'SCFE safety-signal precision talking points', 'BH4-responsiveness testing FAQ'], novaSummary: 'Six signals converge on the same root cause: prescribers need precise, non-defensive comparison and safety-scoping materials, not reassurance alone.' },
  { id: 'T3', name: 'Field Medical Engagement',  Icon: Users,      budget: '$1.7M', pct: 24, moRefs: ['MO2','MO3','MO6'], signalCount: 7, signalStatus: 'Alert',   deliverables: ['Adolescent PALYNZIQ starter guide', 'MPS community-pediatrician screening checklist', 'US Roctavian patient-transition protocol'], novaSummary: 'Highest signal volume of any tactic. Adolescent PALYNZIQ adoption friction and the Roctavian US-exit transition are both active this cycle.' },
  { id: 'T4', name: 'Scientific Communications', Icon: FileText,   budget: '$0.6M', pct:  8, moRefs: ['MO3','MO6'],       signalCount: 2, signalStatus: 'Monitor', deliverables: ['Peer-reviewed manuscript pipeline', 'ICIEM/ESPE-ESE/WFH/ASGCT congress poster submissions', 'Ex-US scientific-credibility statement'], novaSummary: 'Two signals this cycle, both Aldurazyme- and Roctavian-adjacent. The ex-US credibility statement scope directly supports the manuscript pipeline.' },
  { id: 'T5', name: 'HEOR',                      Icon: BarChart2,  budget: '$0.6M', pct:  9, moRefs: ['MO3','MO6'],       signalCount: 1, signalStatus: 'Monitor', deliverables: ['MPS referral-pathway digest', 'Divestiture-support field-intelligence brief'], novaSummary: 'One signal this cycle. Budget allocation reviewed against MO6 divestiture-evaluation needs; reallocation proposed.' },
  { id: 'T6', name: 'Patient Advocacy',          Icon: Heart,      budget: '$0.5M', pct: 11, moRefs: ['MO2','MO6'],       signalCount: 2, signalStatus: 'Active',  deliverables: ['Adolescent PALYNZIQ family counseling aid', 'US Roctavian patient-family transition communication plan'], novaSummary: 'Two signals: families requesting plain-language adolescent PALYNZIQ materials and honest Roctavian transition communication. Both align with in-flight deliverables.' },
];

const INSIGHT_LOOPS = [
  {
    id: 'IL1', tactic: 'Medical Education', moRef: 'MO4',
    signals: [
      { source: 'MSL interaction', msl: 'Dr. Emma Whitfield', territory: 'UK & Ireland — Hemophilia/Skeletal', date: '2026-07-08', text: 'Pediatric endocrinologist: "I saw the SCFE news and now I\'m double-checking — is this something I need to worry about in my achondroplasia patients too?"' },
      { source: 'Med Info query',  msl: 'Dr. Daniel Osorio', territory: 'US Central — Skeletal/MPS', date: '2026-07-14', text: 'Community endocrinologist requested confirmation of whether the SCFE cases occurred in achondroplasia patients or a different population.' },
    ],
    novaSynthesis: 'Pattern across MSL and Med Info channels: the SCFE signal is confined to discontinued Turner/SHOX/ACAN trials, but general achondroplasia safety questions are surfacing regardless. Confidence: 86%.',
    insight: { id: 'AI6', confidence: 0.86, status: 'Prioritised', title: 'SCFE safety-signal questions bleeding into achondroplasia conversations', summary: 'Despite the SCFE signal being confined to discontinued Turner/SHOX/ACAN investigator-sponsored trials, some community endocrinologists are conflating it with general achondroplasia safety.' },
    action: { title: 'Develop SCFE safety-signal precision talking points distinguishing discontinued trials from achondroplasia safety base', owner: 'Medical Comms', dueBy: '2026-Q3', moRef: 'MO4' },
    loopCondition: 'Precision talking points approved and deployed to skeletal-facing MSL tablets',
    loopMet: false,
  },
  {
    id: 'IL2', tactic: 'Field Medical Engagement', moRef: 'MO6',
    signals: [
      { source: 'MSL interaction', msl: 'Dr. Rachel Simmons', territory: 'US Northeast — PKU/MPS/Hemophilia', date: '2026-05-11', text: 'Hematologist: "I have patients mid-evaluation right now. I need to know exactly what to tell them, and I need it in writing, not a verbal MSL summary."' },
      { source: 'Med Info query',  msl: 'Dr. Rachel Simmons', territory: 'US Northeast — PKU/MPS/Hemophilia', date: '2026-05-20', text: 'Hematologist asked for the exact last date a US patient can be dosed and BioMarin\'s follow-up commitment for patients already treated.' },
    ],
    novaSynthesis: 'Two signals, one root cause: the May 2026 withdrawal date is real and near, but the field lacks a single written protocol to hand to patients. Confidence: 82%.',
    insight: { id: 'AI9', confidence: 0.82, status: 'Validated', title: 'US treaters requesting a concrete patient-transition protocol ahead of May 2026 withdrawal', summary: 'US hemophilia treatment centers report needing a concrete, honest, written protocol before the withdrawal date — the absence of one is creating inconsistent messaging across centers.' },
    action: { title: 'Finalize and distribute US patient-transition protocol ahead of May 2026 withdrawal date', owner: 'Field Medical', dueBy: '2026-Q2', moRef: 'MO6' },
    loopCondition: 'Transition protocol finalized and distributed to all US hemophilia-facing MSLs',
    loopMet: true,
  },
  {
    id: 'IL3', tactic: 'Field Medical Engagement', moRef: 'MO2',
    signals: [
      { source: 'MSL interaction', msl: 'Dr. Priya Chandran', territory: 'US West — PKU/MPS', date: '2026-06-08', text: 'Pediatric geneticist: "The efficacy data is compelling — my hesitation is entirely about whether a 14-year-old and their family can manage the dose-escalation and monitoring burden at home."' },
      { source: 'Ad board',        msl: 'Dr. Rachel Simmons', territory: 'US Northeast — PKU/MPS/Hemophilia', date: '2026-05-27', text: 'Metabolic dietitian: "Families need a plain-language adolescent-specific starter guide — the adult materials read as not-for-them."' },
    ],
    novaSynthesis: "Two independent signals, same root cause: adolescent PALYNZIQ hesitancy is about practical monitoring burden, not PEGASUS efficacy skepticism. Confidence: 83%.",
    insight: { id: 'AI2', confidence: 0.83, status: 'Validated', title: 'Adolescent PALYNZIQ initiation hesitancy despite PEGASUS data', summary: 'Pediatric geneticists cite injection-site reaction and anaphylaxis-monitoring burden as the real adoption barrier for newly-eligible adolescents.' },
    action: { title: 'Publish adolescent-specific PALYNZIQ starter guide with plain-language monitoring protocol', owner: 'Medical Comms', dueBy: '2026-Q3', moRef: 'MO2' },
    loopCondition: 'Starter guide approved and deployed to PKU field team',
    loopMet: true,
  },
  {
    id: 'IL4', tactic: 'Scientific Communications', moRef: 'MO3',
    signals: [
      { source: 'MSL interaction', msl: 'Dr. Julian Voss', territory: 'Continental Europe — MPS/Skeletal', date: '2026-04-22', text: 'MSL (internal): "I had a physician ask me an Aldurazyme access question and I honestly wasn\'t sure whether that routes through us or through Genzyme."' },
    ],
    novaSynthesis: 'Single but high-value signal — low volume but a distinct internal readiness gap, not a physician-education gap. Confidence: 74%.',
    insight: { id: 'AI3', confidence: 0.74, status: 'Triaged', title: 'MSLs and physicians both underinformed on Aldurazyme\'s co-marketing structure', summary: 'Real confusion — including inside BioMarin\'s own field team — about whether BioMarin or Genzyme/Sanofi is the right first call for Aldurazyme questions.' },
    action: { title: 'Develop internal MSL-facing Aldurazyme co-marketing clarity card', owner: 'Field Medical', dueBy: '2026-Q3', moRef: 'MO3' },
    loopCondition: 'Clarity card developed, approved and deployed to MPS field team',
    loopMet: true,
  },
];

const MAO_METRICS = [
  { label: 'Total signals ingested',              value: '298', sub: 'this cycle',          alert: false },
  { label: 'Actionable insights generated',       value: '9',   sub: '+4 vs prior cycle',   alert: false },
  { label: 'Actions initiated',                   value: '8',   sub: '8 of 15 actions',      alert: false },
  { label: 'Tactical POA areas reshaped by AI',   value: '4',   sub: 'of 6 tactics',         alert: false },
  { label: 'MOs with critical coverage gaps',     value: '2',   sub: 'MO3, MO4 · Gap',       alert: true  },
];

const MAO_TABLE = [
  { mo: 'MO1', name: 'KUVAN retention amid Sephience oral-competitor entry', signalsIn: 58, breakdown: 'MSL 45% · Congress 28% · Med Info 17% · Ad board 10%', insightIds: 'AI1', actionsCount: 2, actionsInitiated: 1, coverage: 'Low', aiImpact: 'Partial', impactDesc: 'KUVAN-vs-Sephience comparison card in development; BH4-responsiveness FAQ still proposed.' },
  { mo: 'MO2', name: 'PALYNZIQ adolescent (PEGASUS) adoption',              signalsIn: 41, breakdown: 'MSL 51% · Ad board 27% · Med Info 22%',              insightIds: 'AI2', actionsCount: 2, actionsInitiated: 2, coverage: 'Sufficient', aiImpact: 'Reshaped', impactDesc: 'Adolescent starter guide and monitoring-protocol comparison both approved and deployed.' },
  { mo: 'MO3', name: 'MPS field excellence & Aldurazyme co-marketing clarity', signalsIn: 37, breakdown: 'MSL 46% · Med Info 30% · Congress 24%',            insightIds: 'AI3, AI4', actionsCount: 3, actionsInitiated: 2, coverage: 'Gap', aiImpact: 'Partial', impactDesc: 'Internal co-marketing clarity card accepted; MPS screening checklist started; referral-pathway digest still proposed.' },
  { mo: 'MO4', name: 'VOXZOGO hypochondroplasia readiness & SCFE safety-signal communication', signalsIn: 71, breakdown: 'MSL 44% · Med Info 25% · Ad board 18% · Congress 13%', insightIds: 'AI5, AI6', actionsCount: 3, actionsInitiated: 2, coverage: 'Gap', aiImpact: 'Partial', impactDesc: 'SCFE precision talking points accepted; safety-database one-pager started; patient-identification checklist started.' },
  { mo: 'MO5', name: 'BMN 333 successor positioning vs. Ascendis navepegritide', signalsIn: 24, breakdown: 'Congress 50% · MSL 50%',                          insightIds: 'AI7', actionsCount: 2, actionsInitiated: 0, coverage: 'Low', aiImpact: 'Not yet', impactDesc: 'No plan change documented. Differentiation briefing and KOL re-engagement both still proposed.' },
  { mo: 'MO6', name: 'ROCTAVIAN US-exit navigation & divestiture-support intelligence', signalsIn: 67, breakdown: 'MSL 46% · Congress 31% · Ad board 23%',   insightIds: 'AI8, AI9', actionsCount: 3, actionsInitiated: 2, coverage: 'Low', aiImpact: 'Reshaped', impactDesc: 'US patient-transition protocol started; ex-US credibility statement accepted; divestiture intelligence brief still proposed.' },
];

const AUDIT_TRAILS = {
  MO4: {
    rawSignals: [
      { source: 'MSL interaction', msl: 'Dr. Emma Whitfield', territory: 'UK & Ireland — Hemophilia/Skeletal', date: '2026-07-08', text: 'Pediatric endocrinologist: "I saw the SCFE news and now I\'m double-checking — is this something I need to worry about in my achondroplasia patients too?"' },
      { source: 'Med Info query',  msl: 'Dr. Daniel Osorio', territory: 'US Central — Skeletal/MPS', date: '2026-07-14', text: 'Community endocrinologist asked for confirmation of whether the SCFE cases occurred in achondroplasia patients specifically.' },
    ],
    synthesis: { text: 'Pattern across MSL and Med Info channels: the SCFE signal is precisely confined to the discontinued Turner/SHOX/ACAN investigator-sponsored trials, but general achondroplasia safety questions are still surfacing in the field.', confidence: 0.86, checks: ['MSL field reports', 'Med Info query log', 'CANOPY program safety disclosures'] },
    insight: { id: 'AI6', confidence: 0.86, status: 'Prioritised', title: 'SCFE safety-signal questions bleeding into achondroplasia conversations', summary: 'A precision-of-messaging problem, not a new achondroplasia signal — no SCFE cases exist in the >5,000-patient BioMarin-sponsored achondroplasia safety base.' },
    action: { title: 'Develop SCFE safety-signal precision talking points distinguishing discontinued Turner/SHOX/ACAN trials from achondroplasia safety base', owner: 'Medical Comms', date: '2026-Q3', mos: ['MO4'] },
    planChange: { when: 'July 2026', effect: 'Medical Education budget prioritized the SCFE precision talking points; the achondroplasia safety-database one-pager (A10) added as a companion field asset.', condition: 'Precision talking points approved and deployed' },
  },
  MO6: {
    rawSignals: [
      { source: 'MSL interaction', msl: 'Dr. Rachel Simmons', territory: 'US Northeast — PKU/MPS/Hemophilia', date: '2026-05-11', text: 'Hematologist: "I have patients mid-evaluation right now. I need to know exactly what to tell them, and I need it in writing."' },
      { source: 'Congress debrief', msl: 'Dr. Emma Whitfield', territory: 'UK & Ireland — Hemophilia/Skeletal', date: '2026-04-20', text: 'WFH World Congress 2026 hallway conversation dominated by the US-withdrawal news — ex-US colleagues want to know this isn\'t the first domino.' },
    ],
    synthesis: { text: 'US and ex-US signals converge on two distinct but related needs: US centers need a concrete written transition protocol; ex-US KOLs need proactive credibility reassurance.', confidence: 0.83, checks: ['MSL field reports', 'WFH 2026 congress debrief corpus', 'Med Info query log'] },
    insight: { id: 'AI9', confidence: 0.82, status: 'Validated', title: 'US treaters requesting a concrete patient-transition protocol ahead of May 2026 withdrawal', summary: 'Absence of a single, clear field-facing transition document is creating inconsistent center-by-center messaging.' },
    action: { title: 'Finalize and distribute US patient-transition protocol ahead of May 2026 withdrawal date', owner: 'Field Medical', date: '2026-Q2', mos: ['MO6'] },
    planChange: { when: 'May 2026', effect: 'Field Medical Engagement budget prioritized the US transition protocol; ex-US credibility statement (A13) commissioned in parallel given WFH 2026 signal.', condition: 'Transition protocol distributed and messaging-consistency rate improves' },
  },
};

const ROI_METRICS = [
  { label: 'Total ISP Budget', value: '$7.1M', sub: '2024–2026' },
  { label: 'Insight affirmation score', value: '76 / 100', sub: '+7 pts vs Q2 2026' },
  { label: 'AI-proposed reallocation', value: '$265K', sub: 'pending approval' },
  { label: 'Actions taken from insights', value: '8 / 15', sub: '53% actioned this cycle' },
];

const ROI_TACTICS = [
  { tactic: 'Field Medical Engagement', budget: '$1.7M', pct: 24, delta: 'up',     note: 'Increase by 4% — highest signal ROI this cycle (PALYNZIQ adolescent, Roctavian transition)' },
  { tactic: 'Evidence Generation',       budget: '$1.9M', pct: 27, delta: 'stable', note: 'Maintain allocation — signal volume steady across MO4/MO5' },
  { tactic: 'Medical Education',          budget: '$1.5M', pct: 21, delta: 'up',     note: 'Increase by 3% — Sephience and SCFE precision-messaging gaps confirmed' },
  { tactic: 'Scientific Communications', budget: '$0.6M', pct:  8, delta: 'down',   note: 'Decrease by 2% — lower signal return this cycle' },
  { tactic: 'HEOR',                       budget: '$0.6M', pct:  9, delta: 'up',     note: 'Increase by 3% — divestiture-support intelligence brief prioritized' },
  { tactic: 'Patient Advocacy',           budget: '$0.5M', pct: 11, delta: 'up',     note: 'Increase by 2% — adolescent PALYNZIQ and Roctavian family communication needs' },
];

// ─── Shared helpers ────────────────────────────────────────────────────────

const COVERAGE_STYLE = {
  Sufficient: { chip: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-500', pct: 100 },
  Low:        { chip: 'bg-amber-50 text-amber-700 border-amber-200',       bar: 'bg-amber-500',   pct: 55  },
  Gap:        { chip: 'bg-rose-50 text-rose-700 border-rose-200',          bar: 'bg-rose-500',    pct: 20  },
};

const SIGNAL_STYLE = {
  Alert:   'bg-rose-50 text-rose-700 border-rose-200',
  Active:  'bg-emerald-50 text-emerald-700 border-emerald-200',
  Monitor: 'bg-amber-50 text-amber-700 border-amber-200',
};

const IMPACT_STYLE = {
  Reshaped: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Partial:  'bg-amber-50 text-amber-700 border-amber-200',
  'Not yet':'bg-zinc-50 text-zinc-600 border-zinc-200',
};

function SectionHeader({ icon: Icon, label, sub, right }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-auri-text" />
        <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">{label}</h3>
        {sub && <span className="text-xs text-auri-muted">{sub}</span>}
      </div>
      {right}
    </div>
  );
}

function ExportBtn({ label = 'Export to PPT' }) {
  return (
    <button
      onClick={() => window.alert('Export to PowerPoint — coming soon.')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all shrink-0"
    >
      <FileDown size={12} />
      {label}
    </button>
  );
}

// ─── Section components ────────────────────────────────────────────────────

function NovaStrategicBrief() {
  return (
    <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={15} className="text-violet-600" />
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Strategic Brief</span>
        <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
      </div>
      <p className="text-sm text-auri-text leading-relaxed">
        The strategy-to-action score stands at <strong>76/100</strong>, up 7 points from last cycle.
        SCFE safety-signal precision messaging (MO4) remains the highest-signal theme — field reports
        this cycle confirmed the barrier is messaging precision, not a new safety finding. The
        Roctavian US-exit patient-transition need (MO6) is emerging as the #2 priority. Two coverage
        gaps persist: MO3 (MPS field excellence & Aldurazyme co-marketing clarity) and MO4 remain
        at Gap status this cycle.
      </p>
    </div>
  );
}

function ISPPillars() {
  return (
    <section>
      <SectionHeader icon={Layers} label="Tier 1 — Integrated Strategic Plan" sub="2024–2026" right={<ExportBtn />} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {ISP_PILLARS.map((p) => (
          <div key={p.id} className="rounded-xl border border-auri-border bg-auri-card p-4">
            <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-1">Pillar · {p.id.toUpperCase()}</div>
            <div className="text-sm font-semibold text-auri-text leading-snug mb-1.5">{p.title}</div>
            <p className="text-xs text-auri-muted leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MedicalObjectivesTier2() {
  return (
    <section>
      <SectionHeader icon={Target} label="Tier 2 — Medical Objectives" sub="Plan of Action · coverage status" right={<ExportBtn />} />
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium w-16">ID</th>
              <th className="text-left px-4 py-2.5 font-medium">Objective</th>
              <th className="text-left px-4 py-2.5 font-medium w-32">Coverage</th>
              <th className="text-left px-4 py-2.5 font-medium w-40">Progress</th>
            </tr>
          </thead>
          <tbody>
            {MEDICAL_OBJECTIVES.map((mo) => {
              const score = COVERAGE_TARGETS[mo.id] || 'Low';
              const style = COVERAGE_STYLE[score];
              return (
                <tr key={mo.id} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{mo.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-auri-text text-sm">{mo.name}</div>
                    <div className="text-xs text-auri-muted mt-0.5">{mo.description}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${style.chip}`}>{score}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-full h-1.5 bg-auri-border rounded-full overflow-hidden">
                      <div className={`h-full ${style.bar} transition-all`} style={{ width: `${style.pct}%` }} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TacticalPOA() {
  return (
    <section>
      <SectionHeader icon={Activity} label="Tier 3 — Medical Affairs Tactical POA" sub="six tactic areas" right={<ExportBtn />} />
      {/* Pillar-to-MO mapping bar */}
      <div className="flex gap-1 mb-4 text-[10px] font-medium">
        {MEDICAL_OBJECTIVES.map((mo) => {
          const score = COVERAGE_TARGETS[mo.id] || 'Low';
          const style = COVERAGE_STYLE[score];
          return (
            <div key={mo.id} className={`flex-1 px-2 py-1.5 rounded text-center border ${style.chip}`}>
              {mo.id}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {TACTIC_POA.map((t) => {
          const { Icon } = t;
          return (
            <div key={t.id} className="rounded-xl border border-auri-border bg-auri-card p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Icon size={15} className="text-auri-muted shrink-0" />
                  <span className="text-sm font-semibold text-auri-text leading-snug">{t.name}</span>
                </div>
                <span className="text-[10px] font-semibold text-auri-muted bg-auri-offset border border-auri-border px-2 py-0.5 rounded shrink-0">{t.budget} · {t.pct}%</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2.5">
                {t.moRefs.map((mo) => (
                  <span key={mo} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{mo}</span>
                ))}
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ml-auto ${SIGNAL_STYLE[t.signalStatus]}`}>
                  {t.signalCount} signal{t.signalCount !== 1 ? 's' : ''} · {t.signalStatus}
                </span>
              </div>
              <ul className="text-xs text-auri-muted space-y-0.5 mb-3">
                {t.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5"><span className="text-auri-border mt-0.5">—</span>{d}</li>
                ))}
              </ul>
              <div className="border-l-2 border-violet-300 pl-2.5 text-xs text-auri-muted italic leading-relaxed">{t.novaSummary}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function InsightLoop() {
  const [openLoop, setOpenLoop] = useState(null);

  return (
    <section>
      <SectionHeader icon={Zap} label="Tier 4 — Insight Loop" sub="signal → insight → action → loop closure" right={<ExportBtn />} />
      <div className="space-y-2">
        {INSIGHT_LOOPS.map((loop) => {
          const isOpen = openLoop === loop.id;
          return (
            <div key={loop.id} className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                onClick={() => setOpenLoop(isOpen ? null : loop.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-auri-text">{loop.tactic}</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{loop.moRef}</span>
                  <span className="text-xs text-auri-muted">{loop.signals.length} signal{loop.signals.length !== 1 ? 's' : ''} · AI{loop.insight.id.replace('AI','')} → {loop.action.owner || 'pending'}</span>
                </div>
                <div className="flex items-center gap-2">
                  {loop.loopMet && <CheckCircle size={14} className="text-emerald-600" />}
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted" /> : <ChevronDown size={15} className="text-auri-muted" />}
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-auri-border p-4 space-y-4">
                  {/* Stage 1 — Incoming signals */}
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-muted mb-2">Stage 1 — Incoming Signals</div>
                    <div className="space-y-2 mb-2">
                      {loop.signals.map((s, i) => (
                        <div key={i} className="rounded-lg border border-auri-border bg-auri-bg p-3">
                          <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1">
                            <span className="font-medium text-auri-text">{s.source}</span>
                            <span>·</span><MapPin size={10} /><span>{s.territory}</span>
                            <span>·</span><span>{s.msl}</span>
                            <span className="ml-auto">{s.date}</span>
                          </div>
                          <p className="text-xs text-auri-text italic leading-relaxed">"{s.text}"</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-l-2 border-violet-300 pl-3 bg-violet-50/50 rounded-r-lg py-2 pr-3">
                      <span className="text-[10px] font-semibold text-violet-700 uppercase tracking-wider">Nova synthesis · </span>
                      <span className="text-xs text-auri-text">{loop.novaSynthesis}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-auri-muted"><ArrowRight size={14} /><span className="text-[10px] uppercase tracking-wider">Stage 2 — Actionable Insight</span></div>

                  {/* Stage 2 — Insight */}
                  <div className="rounded-lg border border-auri-border bg-auri-bg p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-semibold text-auri-muted">{loop.insight.id}</span>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-violet-50 text-violet-700 border-violet-200">{loop.insight.status}</span>
                      <span className="text-[10px] text-auri-muted ml-auto">Confidence {Math.round(loop.insight.confidence * 100)}%</span>
                    </div>
                    <div className="text-sm font-semibold text-auri-text mb-1">{loop.insight.title}</div>
                    <p className="text-xs text-auri-muted leading-relaxed">{loop.insight.summary}</p>
                  </div>

                  <div className="flex items-center gap-2 text-auri-muted"><ArrowRight size={14} /><span className="text-[10px] uppercase tracking-wider">Stage 3 — Proposed Action</span></div>

                  {/* Stage 3 — Action */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
                    <div className="text-sm font-medium text-auri-text mb-1.5">{loop.action.title}</div>
                    <div className="flex items-center gap-3 text-[10px] text-auri-muted">
                      <span>{loop.action.owner || 'Owner TBD'}</span>
                      <span>·</span>
                      <Calendar size={10} />
                      <span>{loop.action.dueBy}</span>
                      <span>·</span>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{loop.action.moRef}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-auri-muted"><ArrowRight size={14} /><span className="text-[10px] uppercase tracking-wider">Stage 4 — Close the Loop</span></div>

                  {/* Stage 4 — Closure */}
                  <div className={`rounded-lg border p-3 flex items-center gap-3 ${loop.loopMet ? 'border-emerald-200 bg-emerald-50/50' : 'border-auri-border bg-auri-bg'}`}>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${loop.loopMet ? 'bg-emerald-500' : 'bg-auri-muted'}`} />
                    <div>
                      <div className="text-xs text-auri-text">{loop.loopCondition}</div>
                      <div className={`text-[10px] font-medium mt-0.5 ${loop.loopMet ? 'text-emerald-600' : 'text-auri-muted'}`}>{loop.loopMet ? 'Condition met — loop closed' : 'In progress'}</div>
                    </div>
                    {loop.loopMet && <CheckCircle size={16} className="text-emerald-500 ml-auto" />}
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

function MAODashboard() {
  const [openTrail, setOpenTrail] = useState(null);

  return (
    <section>
      <SectionHeader icon={Brain} label="MAO Intelligence Dashboard" sub="AI-driven impact on strategy" right={<ExportBtn />} />

      {/* Metric strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
        {MAO_METRICS.map((m) => (
          <div key={m.label} className={`rounded-xl border p-3 ${m.alert ? 'border-rose-200 bg-rose-50/60' : 'border-auri-border bg-auri-card'}`}>
            <div className={`text-xl font-bold mb-0.5 ${m.alert ? 'text-rose-600' : 'text-auri-text'}`}>{m.value}</div>
            <div className="text-[10px] text-auri-muted leading-snug">{m.label}</div>
            <div className={`text-[10px] font-medium mt-0.5 ${m.alert ? 'text-rose-500' : 'text-auri-muted'}`}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Per-MO table with audit trail */}
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium w-48">Medical Objective</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Signals In</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Insights</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Actions</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Coverage</th>
              <th className="text-left px-4 py-2.5 font-medium">AI-Driven Impact</th>
            </tr>
          </thead>
          <tbody>
            {MAO_TABLE.map((row) => {
              const covStyle = COVERAGE_STYLE[row.coverage] || COVERAGE_STYLE.Low;
              const impStyle = IMPACT_STYLE[row.aiImpact] || IMPACT_STYLE['Not yet'];
              const trailData = AUDIT_TRAILS[row.mo];
              const isOpen = openTrail === row.mo;
              return (
                <React.Fragment key={row.mo}>
                  <tr
                    className={`border-t border-auri-border ${trailData ? 'cursor-pointer hover:bg-auri-offset' : ''} transition-colors`}
                    onClick={() => trailData && setOpenTrail(isOpen ? null : row.mo)}
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium text-auri-text">{row.mo}</div>
                      <div className="text-xs text-auri-muted">{row.name}</div>
                      {trailData && <div className="text-[10px] text-violet-600 mt-0.5">Click to view audit trail</div>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-auri-text">{row.signalsIn}</div>
                      <div className="text-[10px] text-auri-muted leading-snug mt-0.5">{row.breakdown}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-auri-muted">{row.insightIds}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-auri-text">{row.actionsInitiated}</span>
                      <span className="text-xs text-auri-muted"> / {row.actionsCount}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${covStyle.chip}`}>{row.coverage}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border mr-2 ${impStyle}`}>{row.aiImpact}</span>
                      <span className="text-xs text-auri-muted">{row.impactDesc}</span>
                    </td>
                  </tr>

                  {/* Inline audit trail */}
                  {isOpen && trailData && (
                    <tr className="border-t border-violet-200 bg-violet-50/40">
                      <td colSpan={6} className="px-4 py-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Sparkles size={14} className="text-violet-600" />
                            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Insight-to-Change Audit Trail — {row.mo}</span>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); setOpenTrail(null); }} className="text-auri-muted hover:text-auri-text transition-colors">
                            <X size={14} />
                          </button>
                        </div>

                        <div className="relative pl-6 space-y-4">
                          <div className="absolute left-2 top-0 bottom-0 w-px bg-violet-200" />

                          {/* Raw signals */}
                          <div>
                            <div className="absolute left-0 w-4 h-4 rounded-full bg-auri-muted flex items-center justify-center -translate-x-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-auri-muted mb-2">Raw Signals</div>
                            <div className="space-y-1.5">
                              {trailData.rawSignals.map((s, i) => (
                                <div key={i} className="rounded-lg border border-auri-border bg-auri-bg p-2.5">
                                  <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1">
                                    <MessageSquare size={10} /><span className="font-medium">{s.source}</span>
                                    <span>·</span><span>{s.msl}</span><span>·</span><span>{s.territory}</span>
                                    <span className="ml-auto">{s.date}</span>
                                  </div>
                                  <p className="text-xs text-auri-text italic">"{s.text}"</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Nova synthesis */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-violet-700 mb-2">Nova Synthesis</div>
                            <div className="border-l-2 border-violet-400 pl-3 bg-white/60 rounded-r-lg py-2 pr-3">
                              <p className="text-xs text-auri-text mb-1">{trailData.synthesis.text}</p>
                              <div className="flex items-center gap-3 text-[10px] text-auri-muted">
                                <span>Confidence: <strong className="text-violet-700">{Math.round(trailData.synthesis.confidence * 100)}%</strong></span>
                                <span>Cross-checks: {trailData.synthesis.checks.join(' · ')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Actionable insight */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-auri-muted mb-2">Actionable Insight</div>
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-2.5">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-semibold text-auri-muted">{trailData.insight.id}</span>
                                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-violet-50 text-violet-700 border-violet-200">{trailData.insight.status}</span>
                                <span className="text-[10px] text-auri-muted ml-auto">{Math.round(trailData.insight.confidence * 100)}% confidence</span>
                              </div>
                              <div className="text-sm font-medium text-auri-text mb-0.5">{trailData.insight.title}</div>
                              <p className="text-xs text-auri-muted">{trailData.insight.summary}</p>
                            </div>
                          </div>

                          {/* Proposed action */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-auri-muted mb-2">Proposed Action</div>
                            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-2.5">
                              <div className="text-sm font-medium text-auri-text mb-1">{trailData.action.title}</div>
                              <div className="flex items-center gap-3 text-[10px] text-auri-muted">
                                <span>{trailData.action.owner}</span><span>·</span>
                                <Calendar size={10} /><span>{trailData.action.date}</span><span>·</span>
                                {trailData.action.mos.map((m) => <span key={m} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{m}</span>)}
                              </div>
                            </div>
                          </div>

                          {/* Plan change */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 mb-2">Plan Change</div>
                            <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/60 p-2.5">
                              <div className="flex items-center gap-2 mb-1.5">
                                <CheckCircle size={13} className="text-emerald-600" />
                                <span className="text-[10px] font-semibold text-emerald-700">{trailData.planChange.when}</span>
                              </div>
                              <p className="text-xs text-auri-text mb-1.5">{trailData.planChange.effect}</p>
                              <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Loop closure: {trailData.planChange.condition}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function EmergingThemesSection() {
  if (!EMERGING_THEMES || EMERGING_THEMES.length === 0) return null;
  return (
    <section>
      <SectionHeader icon={TrendingUp} label="Emerging Themes" sub="growth-ranked · all source channels" right={<ExportBtn />} />
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium">Theme</th>
              <th className="text-left px-4 py-2.5 font-medium w-20">Growth</th>
              <th className="text-left px-4 py-2.5 font-medium w-32">First detected</th>
              <th className="text-left px-4 py-2.5 font-medium w-40">Related KIT</th>
              <th className="text-left px-4 py-2.5 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {EMERGING_THEMES.map((t) => {
              const heat = t.growthRate > 50 ? 'text-emerald-700 font-semibold' : t.growthRate > 20 ? 'text-emerald-600' : 'text-auri-text';
              return (
                <tr key={t.id} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{t.theme}</td>
                  <td className={`px-4 py-3 ${heat}`}>+{t.growthRate}%</td>
                  <td className="px-4 py-3 text-auri-muted">{t.firstDetected}</td>
                  <td className="px-4 py-3 text-auri-text">{t.relatedKIT}</td>
                  <td className="px-4 py-3 text-xs text-auri-muted leading-snug">{t.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InsightSourceMatrix() {
  if (!INSIGHT_SOURCES || INSIGHT_SOURCES.length === 0) return null;
  return (
    <section>
      <SectionHeader icon={Target} label="Insight Source Value Matrix" sub="volume · quality · ROI" right={<ExportBtn />} />
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium">Source</th>
              <th className="text-left px-4 py-2.5 font-medium w-24">Volume</th>
              <th className="text-left px-4 py-2.5 font-medium w-32">Quality</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Leads to action</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Cost / insight</th>
              <th className="text-left px-4 py-2.5 font-medium w-24">ROI score</th>
            </tr>
          </thead>
          <tbody>
            {INSIGHT_SOURCES.map((s) => {
              const qColor = s.qualityScore >= 80 ? 'bg-emerald-500' : s.qualityScore >= 60 ? 'bg-amber-500' : 'bg-rose-500';
              const roiColor = s.roiScore >= 8 ? 'text-emerald-600' : s.roiScore >= 5 ? 'text-amber-600' : 'text-rose-600';
              return (
                <tr key={s.id} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{s.source}</td>
                  <td className="px-4 py-3 text-auri-text">{s.volume.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-auri-border rounded-full overflow-hidden">
                        <div className={`h-full ${qColor}`} style={{ width: `${s.qualityScore}%` }} />
                      </div>
                      <span className="text-xs text-auri-muted">{s.qualityScore}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-auri-text">{s.leadsToActionPct}%</td>
                  <td className="px-4 py-3 text-auri-muted">${s.costPerInsight.toLocaleString()}</td>
                  <td className={`px-4 py-3 font-semibold ${roiColor}`}>{s.roiScore.toFixed(1)}/10</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ROICalculator() {
  return (
    <section>
      <SectionHeader icon={DollarSign} label="Medical ROI Calculator" sub="budget allocation · insight affirmation" right={<ExportBtn />} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {ROI_METRICS.map((m) => (
          <div key={m.label} className="rounded-xl border border-auri-border bg-auri-card p-3">
            <div className="text-xl font-bold text-auri-text mb-0.5">{m.value}</div>
            <div className="text-xs text-auri-muted">{m.label}</div>
            <div className="text-[10px] text-auri-muted mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium">Tactic</th>
              <th className="text-left px-4 py-2.5 font-medium w-24">Budget</th>
              <th className="text-left px-4 py-2.5 font-medium w-40">Allocation</th>
              <th className="text-left px-4 py-2.5 font-medium w-20">Signal</th>
              <th className="text-left px-4 py-2.5 font-medium">Nova reallocation note</th>
            </tr>
          </thead>
          <tbody>
            {ROI_TACTICS.map((t) => {
              const deltaEl = t.delta === 'up'
                ? <TrendingUp size={13} className="text-emerald-600" />
                : t.delta === 'down'
                ? <TrendingDown size={13} className="text-rose-600" />
                : <span className="w-3 h-px bg-auri-muted inline-block" />;
              return (
                <tr key={t.tactic} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{t.tactic}</td>
                  <td className="px-4 py-3 text-auri-text">{t.budget}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-auri-border rounded-full overflow-hidden">
                        <div className="h-full bg-auri-text" style={{ width: `${(t.pct / 28) * 100}%` }} />
                      </div>
                      <span className="text-xs text-auri-muted">{t.pct}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{deltaEl}</td>
                  <td className="px-4 py-3 text-xs text-auri-muted">{t.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <AlertCircle size={14} className="text-amber-600" />
          <span className="text-xs font-semibold text-amber-700">Nova Reallocation Recommendation</span>
        </div>
        <p className="text-xs text-auri-text">
          Based on signal ROI analysis, Nova recommends reallocating <strong>$120K</strong> from Scientific Communications to Field Medical Engagement and <strong>$60K</strong> to Medical Education.
          Combined reallocation of <strong>$180K</strong> is projected to increase MO2 coverage from <strong>Sufficient → Confirmed</strong> within 2 cycles.
          Pending Medical Affairs leadership approval.
        </p>
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab1MedicalStrategy() {
  return (
    <div className="space-y-8">
      <NovaStrategicBrief />
      <ISPPillars />
      <MedicalObjectivesTier2 />
      <TacticalPOA />
      <InsightLoop />
      <MAODashboard />
      <EmergingThemesSection />
      <InsightSourceMatrix />
      <ROICalculator />
    </div>
  );
}
