# BioMarin Pharmaceutical — Demo Research Summary

Consolidated from two research passes (initial sweep + KOL gap-closing). This is the factual backbone for `src/config/*` — treat as ground truth over any assumption from training data. Flags section at the bottom lists anything NOT to state as fact without further verification.

---

## 1. Company Overview

**BioMarin Pharmaceutical Inc.** (NASDAQ: BMRN) — HQ San Rafael, CA. ~3,249 employees (Mar 2026): ~61% US, ~20% Ireland, ~6% UK.

**Material recent events (should inform demo narrative):**
- **Amicus Therapeutics acquisition** — announced Dec 19, 2025, ~$4.8B all-cash ($14.50/share), expected to close Q2 2026. Adds Galafold (migalastat, Fabry) and Pombiliti+Opfolda (Pompe, ~$599M trailing revenue). **Outside the 4 demo TAs — do not build around it, but a passing "recent BD activity" reference is fair game and adds realism.**
- **ROCTAVIAN US withdrawal** — BioMarin is pulling Roctavian from the US market, availability ends **May 2026**; also exploring full divestiture. 2024 US sales only ~$26M. Part of an industry-wide hemophilia gene-therapy retreat: Pfizer already discontinued Beqvez (hemophilia B); CSL's Hemgenix (hemophilia B) has weak uptake. **User decision: keep hemophilia A as the 4th TA but tell this story honestly — MO framing should be about navigating the US exit, preserving ex-US scientific credibility, and informing the divestiture evaluation, not a fake growth narrative.**
- **VOXZOGO safety signal (Mar 2026)** — dosing/enrollment discontinued in Turner syndrome, SHOX deficiency, and ACAN-deficiency CANOPY trials after SCFE (slipped capital femoral epiphysis) events in two investigator-sponsored trials. **No SCFE cases in BioMarin-sponsored achondroplasia trials (>5,000 patients).** Noonan syndrome and idiopathic short stature (non-ACAN) trials continue. **Do not present Turner/SHOX/ACAN as active expanded indications.**
- BioMarin's two stated growth pillars: Enzyme Therapies (PKU, MPS/lysosomal) and Skeletal Conditions, targeting $4B annual revenue by 2027.
- No public BioMarin Medical Affairs org chart/leadership found — persona for this demo is generic per user decision, so this doesn't block anything.

---

## 2. Portfolio by Therapeutic Area

### PKU Franchise
| Product | Generic | MoA | Status |
|---|---|---|---|
| **KUVAN** | sapropterin dihydrochloride | Synthetic BH4 cofactor, stabilizes residual PAH activity | Approved, oral, BH4-responsive PKU |
| **PALYNZIQ** | pegvaliase-pqpz | PEGylated recombinant PAL enzyme substitution | Approved adults; **FDA approved for adolescents 12-17 in 2026** on positive pivotal PEGASUS Phase 3 (55 adolescents, blood Phe −473 vs −19 µmol/L at wk 72 vs diet alone), data at ICIEM 2025 Kyoto |
| **BMN 307** | AAV5-PAH gene therapy | One-time gene therapy | **Under FDA clinical hold since Sept 2021** (preclinical liver tumor signal). Do not depict as active/near-term pipeline without this caveat. |

Real competitor: **PTC Therapeutics' Sephience (sepiapterin)** — oral PAH activator/BH4 precursor, FDA approved Jul 28, 2025 (also EU/Japan) — direct current threat to KUVAN specifically.

### MPS / Lysosomal (Enzyme Therapies)
| Product | Generic | Indication |
|---|---|---|
| **Naglazyme** | galsulfase | MPS VI (Maroteaux-Lamy) |
| **Vimizim** | elosulfase alfa | MPS IVA (Morquio A) |
| **Aldurazyme** | laronidase | MPS I — **co-commercialized: BioMarin/Sanofi-Genzyme 50/50 JV (BioMarin/Genzyme LLC) holds IP; Genzyme/Sanofi markets and sells globally, BioMarin manufactures + receives ~39.5-50% royalty on net sales. Do not present as a wholly BioMarin-promoted product like Naglazyme/Vimizim/Brineura.** |
| **Brineura** | cerliponase alfa | CLN2 disease (Batten disease, TPP1 deficiency), intraventricular administration |

No confirmed MPS II asset in BioMarin's portfolio.

Real competitor/pipeline: **Denali Therapeutics** — tividenofusp alfa/DNL310 (MPS II, BLA under review, PDUFA ~Apr 2026), DNL126 (MPS IIIA/Sanfilippo A).

### Skeletal Conditions
| Product | Status |
|---|---|
| **VOXZOGO (vosoritide)** | Approved achondroplasia (down to <5 yrs). **Hypochondroplasia**: Phase 3 CANOPY-HCH-3 met primary endpoint; sNDA planned Q3 2026, potential 2027 launch. **Idiopathic short stature (non-ACAN)**: Phase 2 ongoing, primary completion ~Jun 2026. **Turner/SHOX/ACAN**: dosing discontinued Mar 2026 (SCFE signal) — do not present as active. **Noonan**: Phase 2 continues. |
| **BMN 333** | Long-acting CNP, successor to vosoritide. Phase 1 healthy-adult data positive (weekly dosing). Phase 2/3 registration-enabling study enrolling since Apr 2025, comparative vs. vosoritide. Data update expected 2027; early data at ENDO 2026. |

Real competitor: **Ascendis Pharma's navepegritide (TransCon CNP)** — once-weekly CNP prodrug, pivotal ApproaCH trial met primary endpoint, US NDA under review (PDUFA extended to Feb 28, 2026), EU decision Q4 2026. This is a live, regulatory-stage competitive threat — treat as more advanced than "emerging."

### Hemophilia A / Gene Therapy
| Product | Status |
|---|---|
| **ROCTAVIAN (valoctocogene roxaparvovec-rvox)** | FDA approved Jun 29, 2023 — first gene therapy for adult severe hemophilia A. Pivotal GENEr8-1 (134 adults); 5-yr data ~80.8% off prophylaxis, durable, no new safety signals. List price $2.9M. **Weak US commercial performance (~$26M 2024 sales); US market withdrawal effective end of May 2026; divestiture under exploration.** |

Competitive/market context: Hemgenix (CSL, hemophilia **B**, not A) and Beqvez (Pfizer, hemophilia **B** — Pfizer has discontinued it) are NOT direct Roctavian competitors (different disease) but establish the real, industry-wide pattern of hemophilia gene therapy commercial struggle. Keep the hemophilia A/B distinction precise in all copy.

---

## 3. Locked KOL Roster (32 real, sourced names)

Organized by primary TA. `productAlignment` should be TA-level/broad (not narrow per-molecule) given 8 products across 4 TAs — e.g. an MPS KOL aligns to Naglazyme/Vimizim/Aldurazyme/Brineura broadly unless their real focus is molecule-specific (Brineura/CLN2 specialists → tag Brineura primarily, but most MPS generalists → all 4).

### PKU / Biochemical Genetics (4)
1. **Jerry Vockley, MD, PhD, FACMG** — U Pittsburgh / UPMC Children's Hospital of Pittsburgh — Pittsburgh, PA, USA
2. **Nicola Longo, MD, PhD** — University of Utah — Salt Lake City, UT, USA
3. **Cary O. Harding, MD** — Oregon Health & Science University (OHSU) — Portland, OR, USA
4. **Harvey Levy, MD** — Boston Children's Hospital / Harvard Medical School — Boston, MA, USA (newborn screening/PKU pioneer)

### MPS / Lysosomal Storage Disorders (9)
5. **Joseph Muenzer, MD, PhD** — UNC Chapel Hill — Chapel Hill, NC, USA
6. **Christian J. Hendriksz, MD** — institution unconfirmed as of research date (see flags) — use TA/focus only, avoid stating a specific current institution
7. **Nathalie Guffon, MD** — Hôpital Femme Mère Enfant — Lyon, France
8. **Angela Schulz, MD, PhD** — University Medical Center Hamburg-Eppendorf — Hamburg, Germany
9. **Paul Harmatz, MD** — UCSF Benioff Children's Hospital Oakland — Oakland, CA, USA
10. **Barbara K. Burton, MD** — Ann & Robert H. Lurie Children's Hospital / Northwestern Feinberg — Chicago, IL, USA
11. **Roberto Giugliani, MD, PhD** — UFRGS / Hospital de Clínicas de Porto Alegre — Porto Alegre, Brazil
12. **Christina Lampe, MD** — Dr. Horst Schmidt Klinik, Center for Rare Diseases — Wiesbaden, Germany
13. **Stephanie Sacharow, MD** — Boston Children's Hospital / Harvard Medical School — Boston, MA, USA (dual PKU/lysosomal — also PEGASUS/pegvaliase adolescent trial author)

### Skeletal Conditions / Pediatric Endocrinology (10)
14. **Ravi Savarirayan, MD** — Murdoch Children's Research Institute / Royal Children's Hospital — Melbourne, Australia (lead investigator, vosoritide pivotal trial + consensus guidelines)
15. **Melita Irving, MD** — Guy's and St Thomas' NHS Foundation Trust / Evelina London Children's Hospital — London, UK
16. **Julie Hoover-Fong, MD, PhD** — Johns Hopkins University (Greenberg Center for Skeletal Dysplasias) — Baltimore, MD, USA
17. **Klaus Mohnike, MD** — Otto-von-Guericke University Magdeburg — Magdeburg, Germany
18. **Bradley S. Miller, MD, PhD** — University of Minnesota Medical School — Minneapolis, MN, USA
19. **Valérie Cormier-Daire, MD, PhD** — Hôpital Necker-Enfants Malades / Institut Imagine, Université Paris Cité — Paris, France
20. **Mohamad Maghnie, MD** — IRCCS Istituto Giannina Gaslini / University of Genoa — Genoa, Italy
21. **Philippe Backeljauw, MD** — Cincinnati Children's Hospital Medical Center — Cincinnati, OH, USA
22. **Keiichi Ozono, MD, PhD** — Osaka University Graduate School of Medicine — Osaka, Japan
23. **Svein Otto Fredwall, MD, PhD** — TRS National Resource Centre / Oslo University Hospital Rikshospitalet — Oslo, Norway

### Hemophilia A / Gene Therapy (9)
24. **Steven W. Pipe, MD** — University of Michigan, C.S. Mott Children's Hospital — Ann Arbor, MI, USA
25. **Barbara A. Konkle, MD** — Bloodworks Northwest / Washington Center for Bleeding Disorders — Seattle, WA, USA
26. **Frank W.G. Leebeek, MD, PhD** — Erasmus University Medical Center — Rotterdam, Netherlands
27. **Johnny Mahlangu, MD** — University of the Witwatersrand — Johannesburg, South Africa
28. **Stacy E. Croteau, MD, MMS** — Boston Children's Hospital / Boston Hemophilia Center — Boston, MA, USA
29. **Margareth C. Ozelo, MD, PhD** — University of Campinas (UNICAMP) — Campinas, Brazil
30. **K. John Pasi, MD, PhD** — Barts and The London School of Medicine, QMUL — London, UK
31. **Michael Laffan, MD** — Imperial College London / Imperial College Healthcare NHS Trust — London, UK
32. **Andrew D. Leavitt, MD** — UCSF — San Francisco, CA, USA

**Divergence-KOL candidate**: none of these were flagged as shifting sentiment in research (unlike prior demos' real-divergence stories) — recommend a synthetic sentiment-shift moment on a mid-tier KOL per standard demo pattern, OR consider Christian Hendriksz given the institutional uncertainty around his career (could support a "MSL lost track of him after a move" field-coverage-gap narrative rather than a sentiment story). Build agent to decide with a defensible in-universe rationale.

---

## 4. Congress Landscape + Capture App Decision

| Cluster | Congress | Dates | Location | Status |
|---|---|---|---|---|
| PKU/Metabolic & Lysosomal | **ICIEM 2025** | Sept 2025 (verify full multi-day span before use — search results suggested a short span, likely incomplete) | Kyoto, Japan | Completed. **BioMarin presented positive pivotal PALYNZIQ adolescent Phase 3 (PEGASUS) data here.** |
| PKU/Metabolic (alt) | WORLDSymposium 2026 | Feb 2-6, 2026 | San Diego, CA, USA | Completed |
| Skeletal/Endocrinology | ESPE/ESE Joint Congress 2025 | May 10-13, 2025 | Copenhagen, Denmark | Completed. BioMarin presented VOXZOGO data; Ascendis also presented navepegritide — head-to-head. |
| Skeletal/Endocrinology (alt) | ENDO 2026 | 2026 (exact dates not captured) | USA | BioMarin presented 3-yr hypochondroplasia + BMN 333 early data |
| Hemophilia/Gene Therapy | ISTH 2026 | Jul 11-15, 2026 | Paris, France | Very recent/near-term relative to demo "current" date |
| Hemophilia/Gene Therapy (alt) | WFH World Congress 2026 | Apr 19-22, 2026 | Kuala Lumpur, Malaysia | Completed |
| Cross-Rare Disease/Genetic Medicine | ASGCT 2026 Annual Meeting | May 11-15, 2026 | Boston, MA, USA | Completed |

**Capture app congress: ICIEM 2025 (Kyoto, Sept 2025).** Rationale: completed/real, PKU is BioMarin's flagship/founding franchise (richest KOL bench), and the PALYNZIQ adolescent approval is a genuinely strong "hero moment" — safer ground than skeletal (active competitor + recent safety signal) or hemophilia A (product being withdrawn).

**Main demo congresses (recommend using 3-4 across the other clusters for ARIA's dataset):** ESPE/ESE 2025 (skeletal, includes Ascendis head-to-head), WFH World Congress 2026 (hemophilia — completed, more usable than ISTH's near-future date), ASGCT 2026 (cross-rare-disease/genetic medicine, ties all 4 TAs together thematically), plus ICIEM 2025 itself should also appear in ARIA even though it's also the capture app's congress (real congresses do double duty across surfaces in past demos).

---

## 5. Competitive Landscape by TA

- **PKU**: PTC Therapeutics' Sephience (sepiapterin) — approved US/EU/Japan 2025, direct current threat to KUVAN.
- **MPS/Lysosomal**: Denali Therapeutics (tividenofusp alfa/DNL310 for MPS II — BLA under review, PDUFA ~Apr 2026; DNL126 for MPS IIIA). No confirmed Chiesi or Sio Gene Therapies activity — do not state as fact.
- **Skeletal/Achondroplasia**: Ascendis Pharma navepegritide (TransCon CNP) — regulatory-stage, real, current. BMN 333 is BioMarin's explicit response/successor play.
- **Hemophilia A gene therapy**: No direct hemophilia-A competitor exists (Hemgenix/Beqvez are hemophilia B). Real story is category-wide commercial struggle, not head-to-head competition — keep the A/B distinction precise.

---

## 6. Flags / Unverified — do not state as fact without further verification

1. Full author list of the vosoritide consensus guidelines paper is the source for 5 skeletal KOLs (Cormier-Daire, Maghnie, Backeljauw, Ozono, Fredwall) — cross-checked, high confidence, but if anyone re-verifies, re-check against the primary Nat Rev Endocrinol PMID 39757323 directly.
2. **Christian Hendriksz's current institution is genuinely unresolved** (UK vs. South Africa sources conflict) — use his name/TA focus (MPS IVA/Morquio, Vimizim pivotal trial) without asserting a specific current institution, or treat the ambiguity itself as an in-universe field-coverage-gap narrative device (see KOL roster note above).
3. "Andrews A" and "Burrow TA" (partial PEGASUS abstract co-author names) — could not be verified, do NOT add to roster.
4. ICIEM 2025's exact multi-day date range is likely incomplete in search results (a single-day span looked artifactual) — verify before stating precise dates in copy, or keep dates approximate ("September 2025").
5. Roctavian "EU launch struggles" — sourced only from a secondary Benzinga commentary, not a primary source. Treat only the confirmed US withdrawal as fact; don't assert EU-specific failure.
6. No BioMarin Medical Affairs org chart/leadership found — not a blocker since persona is generic, but don't invent named BioMarin internal leadership.
7. BMN 351 (DMD) and BMN 349 (alpha-1 antitrypsin) are real BioMarin pipeline programs outside the 4 demo TAs — not researched, not to be used, but worth knowing they exist if the demo ever needs to acknowledge "our pipeline goes beyond these four areas."
8. Aldurazyme's BioMarin/Sanofi-Genzyme co-marketing arrangement (see Portfolio section) — confirmed via SEC filings/BioMarin materials, no 2025-2026 restructuring found, treated as current — but flagging since it changes how confidently MSL/commercial copy can be written for that one product vs. the other three MPS products.
