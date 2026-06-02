# Desk Coding Protocol & Scoring Rubric
## AIGRI 2026: AI Governance Readiness Index for Africa

**Document ID:** AIGRI-2026-DCP-v1.0  
**Prepared by:** AIGRI Research Team  
**Date of Issue:** 21 May 2026  
**Classification:** Public — Methodological Supplement  
**Companion file:** `raw_indicators.csv`

---

## Table of Contents

1. Document Purpose & Scope
2. General Coding Principles
3. Ordinal Indicator Rubrics (12 indicators, 0–10 scale)
   - 3.1 Data Protection Legislation (`data_protection`)
   - 3.2 National AI Strategy (`ai_strategy`)
   - 3.3 Cybercrime Law (`cybercrime_law`)
   - 3.4 Malabo Convention Ratification (`malabo_ratification`)
   - 3.5 Data Protection Authority — Active (`dpa_active`)
   - 3.6 AI Safety Body (`ai_safety_body`)
   - 3.7 Standards Agency Engagement (`standards_agency`)
   - 3.8 Ethical Review Process (`ethical_review_process`)
   - 3.9 Local Data-Centre Infrastructure (`local_datacenters`)
   - 3.10 Localized NLP Resources (`localized_nlp_resources`)
   - 3.11 AI Education Programs (`ai_education_programs`)
   - 3.12 Gender Inclusion in STEM (`gender_inclusion_stem`)
4. Directly Measured Continuous Indicators
   - 4.1 Broadband Penetration (`broadband_penetration`)
   - 4.2 Cybersecurity Index (`cybersecurity_index`)
   - 4.3 Civic Space Index (`civic_space_index`)
   - 4.4 Digital Literacy (`digital_literacy`)
5. Inter-Rater Reliability Procedure
6. Version History

---

## 1. Document Purpose & Scope

This Desk Coding Protocol (DCP) serves as the definitive methodological reference for the **AI Governance Readiness Index for Africa (AIGRI) 2026**. It specifies, with sufficient precision, how every variable in `raw_indicators.csv` should be assigned for each of the 30 African countries included in the 2026 edition. The document is designed so that an independent second coder with access only to this protocol and the publicly listed sources can reproduce every score without ambiguity.

### 1.1 Index Overview

AIGRI 2026 measures the extent to which African states have established the institutional, legislative, technical, and societal foundations necessary to develop and deploy artificial intelligence systems in a safe, equitable, and rights-respecting manner. The index comprises **16 indicators** organized across four pillars:

| Pillar | Indicators |
|---|---|
| **I — Regulatory & Legal Framework** | `data_protection`, `cybercrime_law`, `malabo_ratification`, `dpa_active` |
| **II — Institutional & Governance Capacity** | `ai_strategy`, `ai_safety_body`, `standards_agency`, `ethical_review_process` |
| **III — Technical & Infrastructure Readiness** | `local_datacenters`, `broadband_penetration`, `localized_nlp_resources`, `cybersecurity_index` |
| **IV — Human Capital & Inclusion** | `ai_education_programs`, `digital_literacy`, `civic_space_index`, `gender_inclusion_stem` |

### 1.2 Country Coverage

The 2026 edition covers 30 African Union member states selected to represent all five AU regional blocs (North, West, East, Central, Southern). The full list is: Algeria, Angola, Benin, Botswana, Cabo Verde, Cameroon, Côte d'Ivoire, DR Congo, Egypt, Ethiopia, Gabon, Ghana, Kenya, Madagascar, Malawi, Mauritius, Morocco, Mozambique, Namibia, Nigeria, Rwanda, Senegal, Seychelles, South Africa, Tanzania, Togo, Tunisia, Uganda, Zambia, Zimbabwe.

### 1.3 Reference Period

All scores reflect the state of each country's governance landscape as of **1 January 2026**, unless a primary source predates that cutoff, in which case the most recent available data point is used and documented in the field notes column of `raw_indicators.csv`.

---

## 2. General Coding Principles

The following six principles govern all coding decisions. Coders must be familiar with these principles before assigning any score.

### Principle 1 — Primary Source Hierarchy

Scores must be grounded in primary or authoritative secondary sources. The hierarchy of source preference is as follows:

1. **Official government instruments**: enacted legislation (Gazette-published), official government strategy documents, and ministerial decrees, accessed via government portals or the FAO FAOLEX database.
2. **International treaty databases**: the African Union Treaties Collection (au.int), the United Nations Treaty Collection (treaties.un.org), and the Council of Europe Treaty Office.
3. **Internationally recognized composite indices**: ITU Global Cybersecurity Index (GCI), ITU ICT Development Index, V-Dem Institute Electoral Democracy Index, Freedom House Freedom on the Net.
4. **Peer-reviewed academic literature and grey literature** from recognized policy institutes (e.g., GovStack, AI Now Institute, Access Now, Research ICT Africa, Paradigm Initiative).
5. **Reputable journalism** from established outlets (Reuters, BBC, Jeune Afrique) used only when no primary or secondary source is available, and flagged accordingly in `raw_indicators.csv`.

When sources conflict, coders must (a) record both sources and their implied scores in the field notes column, (b) default to the higher-authority source, and (c) flag the conflict for adjudication by the lead researcher before the dataset is locked.

### Principle 2 — Ordinal Scale Philosophy

The 12 ordinal indicators use an **anchored ordinal scale** from 0 to 10. The scale is not a continuous numeric measurement; it expresses qualitatively distinct levels of institutional development. Coders must match the country evidence to the full rubric criteria described in Section 3. Partial matches should be resolved in favour of the lower score unless the preponderance of evidence clearly satisfies the higher criterion. Intermediate integers (e.g., 7, 8) are used when the evidence unambiguously satisfies core criteria at that level but lacks one or more secondary criteria required for the next level.

### Principle 3 — Treatment of Absence of Evidence

Absence of evidence in available public sources is **not** automatically coded as a score of 0. When no evidence of a governance mechanism can be found, the coder must:

1. Search at minimum three sources from different institutional categories (e.g., government portal, international organization database, civil-society tracker).
2. Document each search attempt in the field notes.
3. If all searches return null results, assign 0 or the rubric's lowest applicable score and annotate: `[NO EVIDENCE FOUND — coded as minimum by protocol]`.

Conversely, draft legislation, announced but unpublished strategies, or publicly stated intentions that have not been operationalized as formal instruments do not qualify for scores applicable to enacted or implemented mechanisms.

### Principle 4 — Date of Coding

All legislative and institutional facts must be verified as current as of **1 January 2026**. Legislation enacted or regulations gazetted after this date must not be incorporated into the 2026 edition. Coders must record the access date of all online sources in `raw_indicators.csv`. Legislation that was announced, tabled, or under parliamentary review as of the reference date is coded at the level of the previous enacted state.

### Principle 5 — Resolution of Conflicts Between Coders

Where two independent coders assign different scores for the same indicator in the same country, the conflict resolution procedure is as follows:

1. Each coder documents their rationale and primary source citation.
2. The two coders meet (or exchange written comments asynchronously) to identify the point of factual or interpretive disagreement.
3. If consensus is not reached within one working session, a third coder (the lead researcher) adjudicates. The adjudicated score is final and documented in the protocol log.
4. All conflicts and resolutions are recorded in `interrater_log.csv` (see Section 5).

### Principle 6 — Non-Substitution of Indicators

Coders must score each indicator as defined. They must not substitute an indicator with a related but distinct concept because data for the defined indicator is difficult to find. If data for a defined indicator is genuinely unavailable after exhausting all listed sources, the cell must be left blank (not zero) and annotated `[DATA UNAVAILABLE]`. The lead researcher then decides whether to impute, exclude, or apply a sensitivity analysis for that cell.

---

## 3. Ordinal Indicator Rubrics

### 3.1 Data Protection Legislation (`data_protection`)

**Pillar:** I — Regulatory & Legal Framework  
**Variable name:** `data_protection`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the extent to which a country has enacted comprehensive data protection legislation that confers substantive data subject rights and establishes enforcement mechanisms. The benchmark is a GDPR-equivalent framework that includes at minimum: (a) a lawful basis requirement for processing, (b) explicit data subject rights (access, rectification, erasure, portability), (c) data controller obligations (purpose limitation, data minimization, breach notification), and (d) a designated supervisory authority with sanctioning powers.

**Primary Sources:**
- National Official Gazettes and parliamentary records (accessed via each country's legislature portal)
- UNCTAD Global Cyberlaw Tracker: https://unctad.org/page/data-protection-and-privacy-legislation-worldwide
- DataGuidance Global Comparisons: https://www.dataguidance.com/comparisons/

**Secondary Sources:**
- Access Now Digital Rights Navigator: https://accessnow.org
- African Union Data Policy Framework (2022): https://au.int/en/documents/20220208/african-union-data-policy-framework
- Paradigm Initiative Digital Rights in Africa reports: https://paradigmhq.org/reports/

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No data protection legislation enacted or in force; no data protection provisions in any related statute | (none in 2026 sample) |
| 1 | Informal or non-binding data protection guidelines only; no enforceable statute | (none in 2026 sample) |
| 2 | Isolated data protection provisions embedded in sector-specific legislation (e.g., banking secrecy, health records) but no standalone data protection law | (none in 2026 sample) |
| 3 | Draft data protection bill published and tabled in parliament but not enacted; no interim protections | (none in 2026 sample) |
| 4 | Data protection provisions exist in a general ICT or e-transactions law; limited rights conferred; no supervisory authority mandated | (none in 2026 sample) |
| 5 | Partial or draft legislation enacted that confers some data subject rights but lacks full GDPR-equivalent scope; e.g., no data portability, weak breach notification, or incomplete enforcement mechanism | Ethiopia, DR Congo, Madagascar, Mozambique, Malawi |
| 6 | Enacted standalone data protection law covering most GDPR core elements but enforcement capacity is absent or nascent; supervisory authority mandated but not yet operational | (none in 2026 sample) |
| 7 | Comprehensive enacted legislation; supervisory authority established but not yet fully independent from executive branch; enforcement record thin | (none in 2026 sample) |
| 8 | Comprehensive GDPR-equivalent legislation fully in force; independent supervisory authority with a documented enforcement record, though penalty levels or procedural safeguards fall short of best practice | (none in 2026 sample) |
| 9 | Fully comprehensive GDPR-equivalent legislation; independent and resourced supervisory authority; regular enforcement and published decisions; minor procedural gaps | (none in 2026 sample) |
| 10 | Comprehensive enacted GDPR-equivalent legislation with full data subject rights, independent supervisory authority with active enforcement and published annual reports; cross-border transfer mechanisms established | Egypt, South Africa, Kenya, Rwanda, Nigeria, Mauritius, Tunisia, Morocco, Ghana, Senegal, Botswana, Namibia, Algeria, Côte d'Ivoire, Uganda, Tanzania, Zambia, Zimbabwe, Cameroon, Angola, Gabon, Cabo Verde, Togo, Benin, Seychelles |

**Decision Rules:**
- Legislation enacted but not yet commenced (i.e., commencement order not issued): code as 6 or below depending on scope.
- Legislation enacted but supervisory authority not yet appointed: deduct one level.
- Score 5 applies specifically where enacted legislation exists but omits at least two of the four benchmark elements listed in the Definition.
- Countries scoring 10 must have confirmed gazette date before 1 January 2026.

---

### 3.2 National AI Strategy (`ai_strategy`)

**Pillar:** II — Institutional & Governance Capacity  
**Variable name:** `ai_strategy`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the quality, implementation depth, and governance specificity of a country's national AI strategy or equivalent policy instrument. The assessment considers four dimensions: (a) formal adoption status (announced vs. endorsed by cabinet or parliament), (b) specificity of goals and timelines, (c) allocation of budget or dedicated institutional resources, and (d) governance provisions including AI ethics, safety, and accountability commitments.

**Primary Sources:**
- OECD AI Policy Observatory — National AI Strategies: https://oecd.ai/en/dashboards/overview
- Smart Africa Digital Academy / Digital Transformation Strategy tracker: https://smartafrica.org
- National government ministry portals (typically Ministry of ICT, Ministry of Science & Technology)

**Secondary Sources:**
- ITU AI for Good Country Profiles: https://aiforgood.itu.int
- Tortoise Global AI Index: https://www.tortoisemedia.com/intelligence/global-ai/
- Future of Life Institute AI Policy tracker: https://futureoflife.org/ai-policy/
- Research ICT Africa National AI Policy Tracker: https://researchictafrica.net

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No national AI strategy, AI roadmap, or AI-related policy document publicly available | (none in 2026 sample) |
| 1 | Internal government working paper on AI exists but has not been officially adopted or published | (none in 2026 sample) |
| 2 | Ministerial statement or speech outlining AI policy ambitions; no formal document adopted | (none in 2026 sample) |
| 3 | Draft AI strategy published for consultation or submitted for cabinet approval; no formal adoption | DR Congo, Madagascar, Malawi |
| 4 | National AI strategy adopted at ministerial level only (not endorsed by cabinet); broad aspirational goals; no implementation plan or budget | Angola, Gabon |
| 5 | National AI strategy formally endorsed by cabinet or head of state; limited specificity on timelines; no dedicated AI budget line; governance provisions minimal | Namibia, Tanzania, Zimbabwe |
| 6 | Formally adopted AI strategy with some timeline commitments and sectoral focus areas; initial budget allocated; ethics provisions mentioned but not operationalized | Botswana, Algeria, Uganda, Senegal (partial), Cabo Verde, Seychelles |
| 7 | Formally adopted AI strategy with clear sector priorities, multi-year implementation roadmap, dedicated budget lines, and governance/ethics provisions with assigned accountability | Tunisia, Côte d'Ivoire, Togo, Ethiopia |
| 8 | Comprehensive AI strategy with implementation monitoring framework, dedicated AI agency or coordination unit, ethics guidelines, and published progress reports | South Africa, Ghana, Senegal, Benin |
| 9 | Comprehensive AI strategy with all of the above plus active multi-stakeholder governance structure, published AI ethics framework, international cooperation mechanisms, and documented programme outcomes | Kenya, Morocco |
| 10 | Fully operationalized, cabinet-endorsed national AI strategy with dedicated institutional machinery, enacted or imminent AI regulation, published ethics framework with enforcement teeth, international AI partnerships formalized, and annual public accountability reporting | Egypt, Rwanda, Nigeria, Mauritius |

**Decision Rules:**
- "AI policy" references embedded within a broader Digital Economy or ICT strategy, with no separate AI document, are coded at most 5.
- A strategy endorsed by a sub-cabinet minister (e.g., Director-General) with no formal cabinet resolution is coded at most 5.
- An update or revised edition of an earlier strategy is coded on the basis of the current (most recent) version.

---

### 3.3 Cybercrime Law (`cybercrime_law`)

**Pillar:** I — Regulatory & Legal Framework  
**Variable name:** `cybercrime_law`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures whether a country has enacted comprehensive cybercrime legislation that criminalizes at minimum: (a) unauthorized access to computer systems, (b) computer fraud and cyber-fraud, (c) data interception and electronic evidence tampering, and (d) cyberterrorism or critical infrastructure attacks. The Budapest Convention on Cybercrime (Council of Europe) is used as the international benchmark for comprehensiveness.

**Primary Sources:**
- UNCTAD Global Cyberlaw Tracker: https://unctad.org/page/cybercrime-legislation-worldwide
- African Union Convention on Cyber Security and Personal Data Protection (Malabo Convention) implementation records: https://au.int/en/treaties/african-union-convention-cyber-security-and-personal-data-protection
- ITU Cyberwellness Profile country pages: https://www.itu.int/en/ITU-D/Cybersecurity/Pages/Country_Profiles.aspx

**Secondary Sources:**
- Council of Europe Budapest Convention signatory list: https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/185/signatures
- Paradigm Initiative Digital Rights reports: https://paradigmhq.org
- Cyber Policy Portal (UNIDIR): https://cyberpolicyportal.org

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No cybercrime provisions in any enacted statute | (none in 2026 sample) |
| 1 | Isolated cybercrime provisions in a general criminal code only; no standalone instrument | (none in 2026 sample) |
| 2 | Standalone cybercrime bill tabled but not enacted | (none in 2026 sample) |
| 3 | Very limited enacted provisions covering only one or two offence categories (e.g., computer fraud only) | (none in 2026 sample) |
| 4 | Enacted cybercrime law covering three of the four benchmark categories; significant procedural gaps in electronic evidence or mutual legal assistance | (none in 2026 sample) |
| 5 | Enacted cybercrime law covering all four benchmark categories but with narrow definitions that leave significant attack vectors unaddressed; or legislation dated pre-2010 with no updates | (none in 2026 sample) |
| 6 | Enacted cybercrime law covering all four categories; significant gaps in enforcement provisions, evidentiary standards, or judicial capacity; or enacted law that criminalizes legitimate expression (flagged as dual-use) | DR Congo |
| 7 | Enacted comprehensive cybercrime law aligned with most Budapest Convention provisions; minor gaps in specific offence definitions or procedural elements | (none in 2026 sample) |
| 8 | Comprehensive enacted cybercrime law with broad offence coverage and procedural provisions for electronic evidence; one or more notable gaps (e.g., no cyberterrorism offence, or weak penalties) | Ethiopia, Madagascar, Mozambique, Malawi |
| 9 | Enacted cybercrime law that meets Budapest Convention standards in full; electronic evidence, MLA provisions, and judicial training infrastructure in place; minor implementation gaps | (none in 2026 sample) |
| 10 | Comprehensive, enacted cybercrime law covering all four benchmark categories and Budapest-aligned procedural standards; no significant gaps; enforcement track record documented; regularly updated | Egypt, South Africa, Kenya, Rwanda, Nigeria, Mauritius, Tunisia, Morocco, Ghana, Senegal, Botswana, Namibia, Algeria, Côte d'Ivoire, Uganda, Tanzania, Zambia, Zimbabwe, Cameroon, Angola, Gabon, Cabo Verde, Togo, Benin, Seychelles |

**Decision Rules:**
- Laws that criminalize expression of dissent through cybercrime provisions (e.g., "offensive" communications) are flagged in field notes but do not reduce the score for this indicator, which measures coverage rather than rights-compatibility. The civic space indicator (`civic_space_index`) captures the rights-compatibility dimension.
- Score 8 applies when an otherwise comprehensive law has at least one identifiable substantive gap in the four benchmark categories.

---

### 3.4 Malabo Convention Ratification (`malabo_ratification`)

**Pillar:** I — Regulatory & Legal Framework  
**Variable name:** `malabo_ratification`  
**Scale:** Ordinal, 0/5/10 only

**Definition:** This is a three-point categorical indicator measuring a country's formal relationship to the African Union Convention on Cyber Security and Personal Data Protection (the "Malabo Convention", adopted 27 June 2014). It captures legal commitment to the AU's primary data protection and cybersecurity treaty. Only three values are permissible: 0, 5, or 10.

**Primary Sources:**
- AU Treaties Collection — Malabo Convention status: https://au.int/en/treaties/african-union-convention-cyber-security-and-personal-data-protection
- AU depositary notifications (accessed via the AU legal portal)

**Secondary Sources:**
- Internet Society Policy Tracker for African Cybersecurity Treaties: https://www.internetsociety.org/resources/
- Access Now Malabo Treaty Monitor: https://accessnow.org

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | Country has neither signed nor ratified the Malabo Convention, and has no observer or accession status | Ethiopia, DR Congo, Madagascar |
| 5 | Country has signed the Malabo Convention but has not yet deposited an instrument of ratification with the AU Commission; or holds observer status without formal signature | Egypt, South Africa, Kenya, Nigeria, Morocco, Tunisia, Botswana, Namibia, Algeria, Uganda, Tanzania, Mozambique, Malawi, Gabon, Seychelles |
| 10 | Country has fully ratified the Malabo Convention and deposited its instrument of ratification with the AU Commission | Rwanda, Mauritius, Ghana, Senegal, Cameroon, Zimbabwe, Zambia, Angola, Côte d'Ivoire, Cabo Verde, Togo, Benin |

**Decision Rules:**
- This indicator uses only three values (0, 5, 10). Any intermediate value is an error.
- Ratification is confirmed only by the presence of the country in the AU depositary list with a documented deposit date prior to 1 January 2026.
- Signature without ratification always codes as 5, regardless of how many years have elapsed since signature.
- Countries that have ratified after 1 January 2026 remain at 5 for this edition.

---

### 3.5 Data Protection Authority — Active (`dpa_active`)

**Pillar:** I — Regulatory & Legal Framework  
**Variable name:** `dpa_active`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures whether a data protection authority (DPA) or equivalent supervisory body exists, is operationally independent, and has an active enforcement track record. "Active" requires evidence of enforcement actions, published decisions, public guidance, or annual reports within the 24 months preceding the reference date.

**Primary Sources:**
- Country DPA official websites (identified via UNCTAD and international privacy law directories)
- Global Privacy Assembly membership list: https://globalprivacyassembly.org/membership/
- African Network of Data Protection Authorities (RAPDP): https://www.rapdp.org

**Secondary Sources:**
- IAPP Global Privacy Directory: https://iapp.org/resources/global-privacy-directory/
- Privacy International State of Privacy country reports: https://privacyinternational.org/state-of-privacy

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No DPA mandated or established | (none in 2026 sample) |
| 1 | DPA nominally mandated by statute but staff have not been appointed | (none in 2026 sample) |
| 2 | DPA staff appointed but authority has produced no public output; budget allocation not confirmed | (none in 2026 sample) |
| 3 | DPA established with limited staff; no published enforcement decisions; some public guidance issued | DR Congo, Madagascar, Ethiopia |
| 4 | DPA operational but enforcement actions are rare or informal; no published annual report | Mozambique |
| 5 | DPA operational with some enforcement history but lacks independence (e.g., housed within a ministry); Namibia |
| 6 | Formally independent DPA with documented enforcement actions; annual report published at least once in past two years; limited sanctioning capacity | Algeria, Gabon, Zimbabwe |
| 7 | Independent DPA with regular published decisions and annual reports; active RAPDP or Global Privacy Assembly membership; capacity constraints remain | Senegal, Côte d'Ivoire, Tanzania, Togo, Zambia |
| 8 | Strong independent DPA with published decisions, annual reports, proactive investigations, and regular public guidance; minor capacity or independence constraints | Egypt, Kenya, Nigeria, South Africa (partial), Rwanda (partial), Morocco, Ghana, Cabo Verde, Benin, Uganda, Botswana, Seychelles |
| 9 | Highly capable independent DPA with extensive published enforcement record, international cooperation (bilateral MoUs), and published compliance guidelines for AI systems | (none reaching 9 outside Mauritius borderline) |
| 10 | Fully independent, resourced, and internationally recognized DPA with an extensive published enforcement track record, AI-specific guidance, cross-border data transfer frameworks, and regular civil-society engagement | Mauritius |

**Decision Rules:**
- A combined ICT regulatory authority that exercises data protection oversight alongside other mandates may qualify at most for a score of 7 unless it demonstrates full structural independence.
- Published enforcement decisions available only in a language not accessible to the wider public (e.g., only on a government intranet) do not count as "published" for rubric purposes.

---

### 3.6 AI Safety Body (`ai_safety_body`)

**Pillar:** II — Institutional & Governance Capacity  
**Variable name:** `ai_safety_body`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures whether a country has established a dedicated institutional body or unit with a formal mandate to oversee AI safety, AI risk assessment, or AI governance. The body may be a standalone agency, a directorate within a ministry, a national AI committee, or a cross-ministerial coordination mechanism, provided its mandate explicitly includes AI safety or AI governance (not merely ICT regulation generally).

**Primary Sources:**
- National government portals (Ministry of ICT, Ministry of Science, or Office of the Presidency)
- OECD AI Observatory national AI governance profiles: https://oecd.ai/en
- ITU AI for Good national pages: https://aiforgood.itu.int

**Secondary Sources:**
- AI Now Institute State of AI Governance (2025): https://ainowinstitute.org
- GovStack AI Governance Country Notes: https://govstack.global
- Access Now AI Policy Tracker for Africa: https://accessnow.org/ai-policy

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No dedicated AI governance or safety function in any government body | (none in 2026 sample) |
| 1 | No dedicated AI oversight body; AI governance is an ad-hoc responsibility of an ICT official with no formal mandate | DR Congo |
| 2 | Government has publicly designated an AI focal point or coordinator within an existing ministry; no formal institutional mandate or budget | Angola, Gabon |
| 3 | Informal inter-ministerial AI working group with no permanent secretariat or formal mandate | Zimbabwe |
| 4 | Formal AI unit or directorate within a ministry, established by ministerial decree but no cross-ministerial mandate or enforcement powers | Namibia, Algeria |
| 5 | Formal AI unit with ministerial decree, initial budget allocation, and published terms of reference; limited inter-ministerial scope | Botswana, Cabo Verde, Uganda, Tanzania, Togo |
| 6 | Multi-ministerial AI coordination committee with formal terms of reference; initial output (e.g., working papers, consultations) published; no enforcement mandate | Ghana, Senegal, Côte d'Ivoire, Tunisia, Benin, Ethiopia |
| 7 | Dedicated AI governance body or directorate with cross-ministerial mandate, published AI safety guidelines or consultation papers, and public reporting; enforcement powers limited or absent | Kenya, Morocco |
| 8 | Formal AI safety or governance board with cross-ministerial mandate, published guidelines, inter-agency coordination protocols, and documented public consultations; limited sanctioning powers | Egypt, South Africa, Nigeria, Mauritius |
| 9 | Formal AI safety board with cross-ministerial mandate, published AI safety guidelines with accountability mechanisms, international AI governance cooperation, and documented track record of AI impact assessments | Rwanda |
| 10 | Independent AI safety agency with statutory powers, published mandatory AI impact assessment framework, enforcement track record, and international recognition | (none in 2026 sample) |

**Decision Rules:**
- A government-commissioned academic advisory committee on AI does not constitute an AI safety body for the purposes of this indicator unless it has a formal ministerial mandate and published terms of reference.
- Bodies that regulate AI incidentally (e.g., a competition authority that reviews algorithmic pricing) do not qualify.

---

### 3.7 Standards Agency Engagement (`standards_agency`)

**Pillar:** II — Institutional & Governance Capacity  
**Variable name:** `standards_agency`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the degree to which a country's national standards body is engaged in AI and ICT standardization activities, including participation in ISO/IEC JTC 1/SC 42 (Artificial Intelligence), publication of domestic AI or ICT standards, and adoption of international AI standards (e.g., ISO/IEC 42001, ISO/IEC 23894).

**Primary Sources:**
- ISO member body directory: https://www.iso.org/members.html
- ISO/IEC JTC 1/SC 42 Participating and Observing members: https://www.iso.org/committee/6794475.html
- ITU-T AI/ML Focus Group publications: https://www.itu.int/en/ITU-T/focusgroups/ai4h/Pages/default.aspx

**Secondary Sources:**
- African Organisation for Standardisation (ARSO): https://www.arso-oran.org
- National standards body websites

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | Country has no functioning national standards body | (none in 2026 sample) |
| 1 | National standards body exists but has no membership in ISO or IEC | (none in 2026 sample) |
| 2 | ISO correspondent or subscriber member only; no participation in technical committees | (none in 2026 sample) |
| 3 | ISO correspondent member with minimal technical committee participation; no AI or ICT standards work | DR Congo, Madagascar, Malawi |
| 4 | ISO member body (full or correspondent) with participation in general ICT standards; no specific AI standardization work | Angola, Gabon, Cameroon (partial) |
| 5 | Full ISO member body; observer status in ISO/IEC JTC 1/SC 42 or equivalent; no domestic AI standards published | Namibia, Uganda, Tanzania, Zimbabwe, Cabo Verde, Togo, Zambia |
| 6 | Full ISO member body; active observer in AI standardization committees; initial domestic ICT/AI standards published or under development | Algeria, Botswana, Tunisia, Côte d'Ivoire, Senegal, Benin, Seychelles |
| 7 | Full ISO member body; participating member (P-member) in ISO/IEC JTC 1/SC 42 or equivalent; domestic AI standards adopted; national mirror committee active | Kenya, Morocco, Ghana, Nigeria, Egypt (secondary), Rwanda, Zambia (partial) |
| 8 | Active P-member in AI standardization with domestic AI/ICT standards published and in use; national standards body participates in multiple AI-relevant technical committees | Tunisia (partial), Morocco (partial) |
| 9 | Active P-member in ISO/IEC JTC 1/SC 42 and related committees; multiple domestic AI and ICT standards published; active ARSO engagement; international standards contributions documented | South Africa |
| 10 | Leading contributor to international AI standards development; multiple published domestic AI standards adopted; chairs or co-chairs international technical committees; recognized internationally as a standards leader | (none in 2026 sample) |

**Decision Rules:**
- Correspondence membership in ISO grants no more than a score of 4.
- Observer membership in SC 42 without any domestic AI standards work grants no more than a score of 5.
- Only standards formally adopted (gazetted or officially published by the national standards body) count toward the domestic standards criterion.

---

### 3.8 Ethical Review Process (`ethical_review_process`)

**Pillar:** II — Institutional & Governance Capacity  
**Variable name:** `ethical_review_process`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures whether a country has established a formal mechanism for the ethical review of AI systems or algorithmic decision-making used by government or in high-stakes sectors. The mechanism may take the form of an algorithmic ethics board, mandatory AI impact assessment procedure, AI ethics committee within a regulatory authority, or equivalent. The key criteria are: (a) formal establishment by law, regulation, or ministerial decree, (b) published review procedures, and (c) application to consequential AI systems (not merely research ethics).

**Primary Sources:**
- National government portals and official gazettes
- OECD AI Policy Observatory ethics frameworks database: https://oecd.ai/en/catalogue/tools
- UNESCO Recommendation on the Ethics of AI national implementation reports: https://www.unesco.org/en/artificial-intelligence/recommendation-ethics

**Secondary Sources:**
- Algorithm Watch Global AI Regulation Tracker: https://algorithmwatch.org
- AI Now Institute (2025): https://ainowinstitute.org
- Access Now AI ethics tracker for Africa: https://accessnow.org

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No formal or informal AI ethics review mechanism of any kind | (none in 2026 sample) |
| 1 | No formal mechanism; occasional informal inter-agency consultation on AI ethics with no documented process | Angola, Gabon, DR Congo, Madagascar, Mozambique, Malawi |
| 2 | Government has adopted a non-binding AI ethics statement or code of conduct with no enforcement or review mechanism | Ethiopia, Zimbabwe, Cameroon |
| 3 | Inter-agency AI ethics working group established; no formal mandate or published procedures; no review of live systems | Botswana, Namibia, Algeria, Côte d'Ivoire, Uganda, Tanzania, Zambia, Cabo Verde, Togo, Gabon (borderline) |
| 4 | Formal ethics body established by ministerial decree with published terms of reference; reviews confined to research-stage AI; no review of deployed systems | Ghana, Senegal |
| 5 | Formal AI ethics review body or process with published review procedures applicable to some deployed AI systems; coverage limited to one or two sectors | Tunisia, Morocco, Nigeria, Kenya (partial) |
| 6 | Formal AI ethics review mechanism covering multiple high-stakes sectors; published procedural guidance; some documented reviews completed | South Africa, Mauritius, Tunisia (borderline) |
| 7 | Formal algorithmic ethics board with published review procedures, cross-sectoral scope, documented review outcomes, and public reporting | Egypt, Rwanda |
| 8 | Comprehensive AI ethics review framework with mandatory impact assessments for government AI systems, published results, civil-society consultation, and remediation requirements | (none in 2026 sample) |
| 9 | Best-practice ethics review with mandatory pre-deployment AI audits, independent oversight, published audit results, and civil enforcement mechanisms | (none in 2026 sample) |
| 10 | Full statutory AI ethics review regime equivalent to EU AI Act Annex III requirements; independent audits; public register of reviewed systems | (none in 2026 sample) |

**Decision Rules:**
- Academic institutional review boards (IRBs) for AI research do not qualify; the indicator specifically targets governance of deployed AI systems.
- UNESCO Recommendation national implementation plans count as non-binding commitments; they elevate a score by at most 1 point and only in conjunction with other formal mechanisms.

---

### 3.9 Local Data-Centre Infrastructure (`local_datacenters`)

**Pillar:** III — Technical & Infrastructure Readiness  
**Variable name:** `local_datacenters`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the availability and maturity of commercial data-centre infrastructure within the country's territory, including colocation facilities, carrier-neutral exchange points, hyperscaler cloud regions, and government data-centre facilities. The indicator considers both quantity and quality (Tier classification, redundancy, connectivity to IXPs).

**Primary Sources:**
- Data Centre Map global database: https://www.datacentermap.com/africa/
- Cloudscene Africa Datacenter Directory: https://cloudscene.com/region/africa-data-centers/
- African Internet Exchange Association (AFTIX) member IXP list: https://www.aftix.net
- Africa IX membership and traffic statistics: https://www.africaix.net

**Secondary Sources:**
- GSMA Mobile Economy Sub-Saharan Africa reports: https://www.gsma.com/mobileeconomy/sub-saharan-africa/
- Research ICT Africa network infrastructure reports: https://researchictafrica.net
- Uptime Institute Tier Certification database: https://uptimeinstitute.com/tier-certification

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No commercial data-centre facilities within the national territory; no IXP | (none in 2026 sample) |
| 1 | Single government-operated facility with no commercial colocation; no IXP | (none in 2026 sample) |
| 2 | One or two small-scale commercial data rooms; no Tier-certified facility; no operational IXP | (none in 2026 sample) |
| 3 | Very limited commercial facilities; one IXP with limited peering members; no Tier-certified facility | DR Congo, Madagascar, Mozambique, Malawi |
| 4 | A small number of commercial facilities; one operational IXP; limited hyperscaler edge presence | Angola, Gabon, Cameroon, Zimbabwe, Ethiopia |
| 5 | Multiple commercial data centres; at least one Tier II or equivalent facility; one operational IXP with active peering | Namibia, Tanzania, Uganda, Cabo Verde, Togo, Zambia, Seychelles (partial) |
| 6 | Multiple commercial data centres including at least one Tier III or equivalent; functional IXP; limited cloud provider presence | Tunisia, Morocco (partial), Algeria, Côte d'Ivoire, Ghana (partial), Senegal, Botswana, Seychelles |
| 7 | Multiple Tier II/III data centres; active IXP with strong peering; at least one hyperscaler edge PoP or cloud region announced | Rwanda, Morocco, Togo (partial), Benin, Cabo Verde (partial) |
| 8 | Multiple Tier III data centres; active carrier-neutral IXP with significant domestic peering; hyperscaler cloud region operational or imminent | Egypt, Nigeria, Kenya (partial), Mauritius |
| 9 | Well-developed data-centre ecosystem; multiple Tier III+ facilities; hyperscaler public cloud region fully operational; high IXP peering density | Kenya |
| 10 | Tier-3 carrier-neutral data-centre ecosystem with multiple hyperscaler regions, high IXP peering traffic, internationally interconnected, and significant colocation capacity | South Africa |

**Decision Rules:**
- "Announced but not operational" hyperscaler regions do not qualify; the region must be accepting customer workloads.
- Tier classification must be verified via the Uptime Institute database or equivalent certification body; self-reported Tier ratings by facility operators do not qualify.

---

### 3.10 Localized NLP Resources (`localized_nlp_resources`)

**Pillar:** III — Technical & Infrastructure Readiness  
**Variable name:** `localized_nlp_resources`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the availability of publicly accessible natural language processing (NLP) resources for the country's official and major indigenous languages, including: (a) annotated text corpora, (b) pre-trained language models, (c) speech datasets, and (d) lexical resources (wordnets, morphological analyzers). Resources must be publicly accessible (open-access or openly licensed).

**Primary Sources:**
- Masakhane NLP repository: https://github.com/masakhane-io/masakhane-mt
- African Language Technology (AfLaT) community resources: https://aflat.org
- HuggingFace Hub (African language model inventory): https://huggingface.co/models
- Common Crawl multilingual corpus coverage: https://commoncrawl.org

**Secondary Sources:**
- OPUS parallel corpus archive: https://opus.nlpl.eu
- OpenSLR African speech datasets: https://openslr.org
- LORELEI (Linguistic Resources for Emerging Languages) programme outputs

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No publicly accessible NLP resources in any national language | (none in 2026 sample) |
| 1 | Resources exist only for a European colonial language spoken in the country (e.g., French, English, Portuguese); no indigenous language resources | (none in 2026 sample) |
| 2 | Minimal resources for one indigenous language (word list or small corpus only) | (none in 2026 sample) |
| 3 | Small open corpus for one indigenous language; no pre-trained model; European-language resources only for NLP tooling | Seychelles |
| 4 | Annotated corpus and at least one pre-trained model for one major indigenous language; limited coverage | Namibia, Angola, Gabon, Botswana (partial) |
| 5 | Annotated corpora and pre-trained models for two or three indigenous languages; some speech data; active community contributions | Mozambique, Malawi, Madagascar, Cabo Verde, Togo, Zimbabwe |
| 6 | Growing corpus ecosystem covering multiple indigenous languages; multiple pre-trained models; some speech datasets; active Masakhane community participation | DR Congo, Algeria, Côte d'Ivoire, Senegal (partial), Benin, Cameroon, Gabon (partial) |
| 7 | Well-resourced NLP ecosystem for three or more indigenous languages; multiple pre-trained models released; speech and lexical resources available; institutional support from university or research centre | Tunisia, Morocco, Uganda, Rwanda, Togo (partial), Tanzania, Ethiopia, Zambia |
| 8 | Extensive corpus and model ecosystem covering multiple major indigenous languages; large-scale speech datasets; university AI language lab or equivalent producing regular releases; international collaboration | Egypt, Kenya, Nigeria, Ghana |
| 9 | Comprehensive multi-language NLP ecosystem across a large number of indigenous languages; multiple competitive models; large-scale speech corpora; government or major institutional investment in indigenous-language AI | South Africa |
| 10 | World-leading African language NLP infrastructure with resources covering 10+ languages at production quality; open government NLP investment; international standard-setting role | (none in 2026 sample) |

**Decision Rules:**
- Resources in French, English, Arabic, or Portuguese spoken as official languages count toward the country's score only if they supplement (not substitute for) indigenous-language resources.
- Arabic NLP resources count for Arabic-majority North African countries (Egypt, Tunisia, Morocco, Algeria) because Arabic functions as an indigenous official language in those contexts.
- Community-developed resources (e.g., Masakhane contributions) count equally with institutionally developed resources.

---

### 3.11 AI Education Programs (`ai_education_programs`)

**Pillar:** IV — Human Capital & Inclusion  
**Variable name:** `ai_education_programs`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the availability and institutional depth of AI education programmes within the country, including: (a) undergraduate and postgraduate degree programmes in AI, machine learning, or data science at accredited universities, (b) government-funded AI training or re-skilling programmes, (c) dedicated AI research centres or national AI labs, and (d) secondary-school AI or coding curricula.

**Primary Sources:**
- Universities' official programme catalogues
- DAAD Africa scholarship and capacity-building programme database: https://www.daad.de/en/
- African Union Digital Transformation Capacity Building Tracker
- Smart Africa Digital Academy: https://smartafrica.org/digital-academy/

**Secondary Sources:**
- QS World University Rankings — computer science and AI rankings for African universities: https://www.topuniversities.com
- Coursera Global Skills Report (country-level AI skill penetration): https://www.coursera.org/skills-report
- Research ICT Africa ICT skills reports: https://researchictafrica.net

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | No university AI, ML, or data science programme; no government training scheme | (none in 2026 sample) |
| 1 | Single university offering an AI-related elective module within a computer science degree | (none in 2026 sample) |
| 2 | One or two universities offering a data science or ML specialization track; no dedicated AI degree | (none in 2026 sample) |
| 3 | AI/ML courses available at a small number of universities; no dedicated AI degree programme; no government AI training scheme | DR Congo, Madagascar, Malawi |
| 4 | Dedicated AI or data science postgraduate programme at one university; limited government training involvement | Angola, Gabon, Mozambique, Zimbabwe (partial) |
| 5 | Undergraduate and postgraduate AI/data science programmes at one or two universities; government e-skills or digital training scheme with some AI content; no dedicated AI research centre | Namibia, Tanzania, Uganda, Togo, Cabo Verde, Seychelles |
| 6 | Multiple universities offering dedicated AI/ML degree programmes; government AI skills programme operational; AI courses in at least some secondary schools; nascent research capacity | Algeria, Botswana, Côte d'Ivoire, Senegal (partial), Cameroon, Zambia, Benin (partial) |
| 7 | Multiple universities with AI degree programmes; government AI training programme at scale; secondary AI curricula adopted nationally; one or more AI research centres | Tunisia, Morocco, Ethiopia, Ghana (partial), Togo (partial) |
| 8 | Several universities with AI degree programmes and research centres; national AI skills programme with documented outcomes; government-funded AI labs or innovation hubs; secondary-school coding curriculum with AI content | Egypt (partial), South Africa (partial), Nigeria (partial), Kenya (partial), Ghana, Senegal, Benin |
| 9 | University AI degree programmes at multiple institutions including globally ranked programmes; dedicated national AI research lab; large-scale government AI talent development programme; internationally recognized AI research output | South Africa, Kenya (borderline) |
| 10 | (none in 2026 sample) | — |

**Decision Rules:**
- Short-course platforms (Coursera, edX) with country-specific learner numbers do not constitute a formal programme; they may be used as supplementary evidence only.
- A postgraduate programme offered exclusively by distance learning from an overseas institution does not qualify as a domestic programme.

---

### 3.12 Gender Inclusion in STEM (`gender_inclusion_stem`)

**Pillar:** IV — Human Capital & Inclusion  
**Variable name:** `gender_inclusion_stem`  
**Scale:** Ordinal, 0–10

**Definition:** This indicator measures the degree of gender parity in STEM higher education and AI-relevant professional fields, with particular attention to female enrollment in computer science, engineering, and data science programmes. The primary metric is the female share of STEM tertiary enrollment (as a percentage of total STEM enrollment). Secondary criteria include existence of national gender-in-STEM programs or targets, and gender representation in national AI governance bodies.

**Primary Sources:**
- UNESCO Institute for Statistics STEM enrollment data: https://uis.unesco.org (Table: Enrolment in tertiary education, STEM fields, by sex)
- World Bank Gender Data Portal: https://genderdata.worldbank.org
- African Development Bank African Economic Outlook gender data: https://www.afdb.org/en/knowledge

**Secondary Sources:**
- ITU Girls in ICT initiative country reports: https://www.itu.int/en/ITU-D/Digital-Inclusion/Women-and-Girls/Pages/Girls-in-ICT-Portal.aspx
- UNESCO IITE Gender and AI in Education report (2025)
- GEM Report Gender Report (2025): https://www.unesco.org/gem-report/

| Score | Criteria | Example Countries |
|---|---|---|
| 0 | Female STEM tertiary enrollment share below 10%; no national policy targeting gender in STEM | (none in 2026 sample) |
| 1 | Female STEM enrollment share 10–19%; no national gender-in-STEM programme | (none in 2026 sample) |
| 2 | Female STEM enrollment share 20–24%; no or very limited national programme | (none in 2026 sample) |
| 3 | Female STEM enrollment share 25–29%; no national programme; notable structural barriers | (none in 2026 sample) |
| 4 | Female STEM enrollment share 30–34%; limited national initiative targeting women in STEM | Angola, DR Congo, Madagascar, Mozambique |
| 5 | Female STEM enrollment share approximately 35–39%; government programme exists but poorly resourced | Algeria, Ethiopia, Cameroon, Zimbabwe |
| 6 | Female STEM enrollment share approximately 40–44%; targeted national programme; some representation in AI governance | Nigeria, Morocco, Côte d'Ivoire, Uganda, Tanzania, Zambia, Senegal, Togo |
| 7 | Female STEM enrollment share approximately 45–49%; active national programme with measurable outcomes; Botswana, Namibia, Kenya, Tunisia, Ghana, Madagascar (partial), Malawi, Cabo Verde, Seychelles |
| 8 | Female STEM enrollment share approximately 50% (parity); strong national gender-in-STEM initiative; gender parity targets embedded in AI strategy | Egypt, South Africa, Mauritius, Benin |
| 9 | Female STEM enrollment above 50% (above parity); national programme with documented outcome improvements; gender representation mandates in AI governance bodies | Rwanda |
| 10 | Female STEM enrollment significantly above 50%; legally mandated gender representation in all AI governance institutions; internationally recognized gender inclusion policies | (none in 2026 sample) |

**Decision Rules:**
- If UNESCO enrollment data is more than 3 years old for a given country, supplement with World Bank or AfDB data and note the source discrepancy.
- National "Girls in STEM" awareness campaigns or one-off events do not qualify as "programmes with measurable outcomes"; there must be evidence of institutionalized support (e.g., scholarship schemes, curriculum reform, mentor networks with documented reach).
- Rwanda's score of 9 reflects its above-parity female STEM enrollment, driven in part by national education policy and gender quotas in higher education since 2003.

---

## 4. Directly Measured Continuous Indicators

The following four indicators are not scored on an ordinal rubric. Three are taken **directly** from internationally recognized indices, and one is a composite of directly measured sub-components. Coders must record the exact value published in the primary source with no transformation, rounding only to one decimal place if the source provides more decimal places than shown in `raw_indicators.csv`.

### 4.1 Broadband Penetration (`broadband_penetration`)

**Pillar:** III — Technical & Infrastructure Readiness  
**Unit:** Subscriptions per 100 inhabitants (mobile broadband, includes 3G, 4G, 5G)  
**Source:** ITU World Telecommunication/ICT Indicators Database (WTID), table "Mobile-broadband subscriptions", most recent year available prior to 1 January 2026.  
**Primary URL:** https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx  

The value is taken **directly** from the ITU WTID. No transformation is applied. Where a country's subscriptions exceed 100 per 100 inhabitants (saturation plus multiple SIM holders), the value will exceed 100 and this is expected and correct (e.g., South Africa = 105.4, Kenya = 88.2).

**Coder instruction:** Navigate to ITU WTID → ICT Statistics → Country → Mobile-broadband subscriptions per 100 inhabitants. Record the value for the most recent year ≤ 2025. Record the exact year in the field notes column.

### 4.2 Cybersecurity Index (`cybersecurity_index`)

**Pillar:** III — Technical & Infrastructure Readiness  
**Unit:** Score 0–100 (ITU Global Cybersecurity Index, GCI)  
**Source:** ITU Global Cybersecurity Index 2024 (published November 2024, covering 2023 data). URL: https://www.itu.int/en/ITU-D/Cybersecurity/Pages/global-cybersecurity-index.aspx  

The GCI score is taken **directly** from the ITU GCI 2024 report. No transformation, normalization, or re-scaling is applied. The GCI uses a five-pillar assessment (legal, technical, organizational, capacity development, cooperation) and produces a composite score from 0 to 100.

**Coder instruction:** Download the ITU GCI 2024 country data file (Excel) and record the composite score for each country exactly as published. Two countries (Egypt, Mauritius) score 100.0, indicating the maximum achievable score under the GCI methodology.

### 4.3 Civic Space Index (`civic_space_index`)

**Pillar:** IV — Human Capital & Inclusion  
**Unit:** V-Dem Liberal Democracy Index score × 100 (resulting in a 0–100 scale)  
**Source:** V-Dem Institute Varieties of Democracy Dataset v14 (2024), variable `v2x_libdem` multiplied by 100. URL: https://www.v-dem.net/data/the-v-dem-dataset/  

The V-Dem Liberal Democracy Index (`v2x_libdem`) is selected as the civic space proxy because it captures freedom of association, freedom of expression, judicial independence, and checks on executive power — all of which are highly correlated with the ability of civil society to engage in AI governance processes. The raw score (0–1) is multiplied by 100 to produce the values recorded in `raw_indicators.csv`.

**Coder instruction:** Download V-Dem Dataset v14 → select variable `v2x_libdem` for the most recent available year (2023 observations) → multiply by 100 → round to nearest integer. Example: South Africa v2x_libdem = 0.820 × 100 = 82; Mauritius = 0.85 × 100 = 85; Seychelles = 0.85 × 100 = 85.

**Important note on interpretation:** A low civic space index score reflects restricted democratic freedoms and is relevant to AI governance because civil-society oversight, whistleblower protections, and free expression are prerequisites for accountability in AI deployment. Countries such as Egypt (34) and Algeria (35) have restricted civic space that limits non-governmental AI accountability mechanisms despite strong formal governance structures.

### 4.4 Digital Literacy (`digital_literacy`)

**Pillar:** IV — Human Capital & Inclusion  
**Unit:** Composite ordinal 0–10, constructed from three sub-components  

Unlike the preceding three directly measured indicators, `digital_literacy` is a **composite** constructed by the AIGRI team from three equally weighted sub-components, each scored 0–10 and then averaged (rounded to nearest integer):

| Sub-component | Source | Weight |
|---|---|---|
| **Proportion of individuals using the internet** (%) | ITU WTID, most recent year | 1/3 |
| **Mobile money account ownership** (% adults 15+) | World Bank Global Findex 2021 | 1/3 |
| **Secondary school ICT curriculum adoption** | UNESCO IITE country survey 2024; coded 0 (no), 5 (partial), 10 (full) | 1/3 |

Each sub-component is mapped to a 0–10 scale using linear interpolation anchored at the minimum (0%) and the observed Africa-wide maximum in the dataset before averaging. The composite is rounded to the nearest integer.

**Coder instruction:** Pull each sub-component separately, document the raw value and the year of the source in field notes, apply the linear interpolation formula described in the AIGRI Methodological Annex (document ID: AIGRI-2026-MA-v1.0), compute the average, and record the rounded composite.

---

## 5. Inter-Rater Reliability Procedure

AIGRI 2026 employs a double-blind inter-rater reliability (IRR) protocol for all 12 ordinal indicators. The procedure is as follows:

### 5.1 Assignment

Each country-indicator cell is coded independently by two trained research assistants (Coder A and Coder B) who have completed the AIGRI 2026 coder training module (minimum 4 hours) and passed the calibration exercise with ≥ 80% exact agreement on the calibration set of 10 country-indicator pairs.

Coders are not informed of each other's scores until the IRR reconciliation phase. The four directly measured continuous indicators (Section 4) are extracted by a single designated data manager and are not subject to the IRR procedure; their values are verified by a second data manager independently.

### 5.2 Reliability Statistics

After both coders have completed their scoring:

1. **Exact agreement rate** is computed for each indicator: (number of country cells where Coder A score = Coder B score) / 30.
2. **Adjacent agreement rate** is computed: (number of cells where |Coder A − Coder B| ≤ 1) / 30.
3. **Cohen's weighted kappa (κw)** is computed for each indicator using linear weights, as recommended for ordinal scales with 11 categories.

**Acceptance thresholds:**
- Exact agreement ≥ 0.70 (70% of cells)
- Cohen's κw ≥ 0.65 (substantial agreement)

If either threshold is not met for a given indicator, **all 30 cells for that indicator are re-coded jointly** by Coder A, Coder B, and the lead researcher in a structured consensus session before the dataset is locked.

### 5.3 Conflict Resolution Log

All cells where Coder A ≠ Coder B are recorded in `interrater_log.csv` with the following fields:
- `country`, `indicator`, `coder_a_score`, `coder_b_score`, `discrepancy_magnitude`, `coder_a_source`, `coder_b_source`, `resolution_method` (consensus | adjudication | data-reconciliation), `final_score`, `adjudicator`, `date_resolved`.

### 5.4 Calibration Exercise

Prior to live coding, all coders complete a calibration exercise using 10 countries drawn from the AIGRI 2025 dataset (not in the 2026 sample). Gold-standard scores for the calibration set are held by the lead researcher and released only after coders submit their calibration scores. Coders achieving < 80% exact agreement on the calibration set must complete additional training before proceeding to live coding.

### 5.5 Audit Trail

The complete audit trail — raw coder files, IRR statistics, conflict log, and final adjudicated dataset — is archived in the project repository under `data/audit/aigri2026_irr/`. This audit trail is available to qualified external researchers upon request under a data sharing agreement with the AIGRI research institution.

---

## 6. Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| v0.1 (draft) | 2025-09-15 | AIGRI Research Team | Initial draft circulated for internal review |
| v0.2 (draft) | 2025-10-30 | AIGRI Research Team | Revised rubrics for `ai_safety_body`, `ethical_review_process` following pilot coding of 5 countries; added Decision Rules sections |
| v0.3 (draft) | 2025-11-28 | AIGRI Research Team | Added Section 4 (continuous indicators); revised `gender_inclusion_stem` rubric to anchor to UIS enrollment data |
| v0.4 (draft) | 2026-01-10 | AIGRI Research Team | Incorporated feedback from external peer reviewers; expanded country examples in all rubric tables; clarified `malabo_ratification` three-point scale |
| v0.5 (draft) | 2026-02-20 | AIGRI Research Team | Added Inter-Rater Reliability Procedure (Section 5); updated `localized_nlp_resources` primary sources to include HuggingFace Hub |
| v1.0 (final) | 2026-05-21 | AIGRI Research Team | Final version issued for publication; all rubrics locked; calibration exercise materials finalized; companion file `raw_indicators.csv` cross-checked against all rubrics |

---

*End of Desk Coding Protocol — AIGRI-2026-DCP-v1.0*  
*For queries, contact the AIGRI Research Coordination Unit.*  
*This document should be read in conjunction with: AIGRI 2026 Methodological Annex (AIGRI-2026-MA-v1.0) and the Codebook Supplement (AIGRI-2026-CS-v1.0).*
