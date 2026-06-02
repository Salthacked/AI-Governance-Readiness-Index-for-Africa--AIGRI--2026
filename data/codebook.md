# AIGRI 2026 Dataset Codebook
## AI Governance Readiness Index for Africa — Variable Dictionary

**Version:** 1.0  
**Date:** May 21, 2026  
**Corresponds to:** `data/raw_indicators.csv` and `data/country_metadata.csv`  
**Coding Protocol:** See `data/desk_coding_protocol.md` for full scoring rubrics  

---

## Overview

This codebook documents all variables in the AIGRI 2026 dataset. Variables are divided into three categories:

1. **Structural Indicators (16)** — The 16 scored indicators used to construct the four pillars and the composite AIGRI score. Found in `raw_indicators.csv`.
2. **Validation / Metadata Variables (4)** — Macro-level proxy variables used for external validity (econometric validation). Found in `country_metadata.csv`.
3. **Derived Variables** — Computed by `src/pipeline.py`; not stored in CSVs but exported in `dashboard/data.json`.

**Scale Types:**
- **Ordinal (0–10):** Integer scores assigned by desk coder based on documented rubric criteria. See `desk_coding_protocol.md` for complete rubric.
- **Continuous:** Values taken directly from published institutional sources with no transformation by the coder.
- **Categorical-Ordinal:** Special ordinal with only three valid values ({0, 5, 10}), representing a meaningful categorical distinction.

---

## File: `data/raw_indicators.csv`

### ID Variables

| Variable | Type | Description |
|---|---|---|
| `country` | String | Full English country name |
| `region` | String (5 categories) | African regional grouping: `North`, `West`, `East`, `South`, `Central` |

**Region definitions:**
- **North:** Egypt, Morocco, Tunisia, Algeria
- **West:** Nigeria, Ghana, Senegal, Côte d'Ivoire, Cabo Verde, Togo, Benin
- **East:** Kenya, Rwanda, Mauritius, Uganda, Ethiopia, Tanzania, Madagascar, Mozambique, Malawi, Seychelles
- **South:** South Africa, Botswana, Namibia, Zambia, Zimbabwe
- **Central:** Cameroon, Angola, Gabon, DR Congo

---

### PILLAR 1: Regulatory Safeguards & Data Rights

---

#### `data_protection`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Existence and comprehensiveness of enacted national data protection and privacy legislation |
| **Primary Source** | UNCTAD Cyberlaw Tracker (2025) — https://unctad.org/page/data-protection-and-privacy-legislation-worldwide |
| **Secondary Source** | Desk review of national Official Gazettes and legislative portals |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 10 = comprehensive enacted legislation with full data subject rights, independent supervisory authority, and cross-border transfer provisions; 5 = partial/draft legislation without full rights; 0 = no legislation enacted or in force |
| **Valid Range** | {0, 5, 10} only in current dataset (rubric allows intermediate values in future editions) |
| **Missing Values** | None |
| **Notes** | Countries with enacted legislation modelled substantially on GDPR principles score 10. Countries with draft bills not yet enacted score 5. See desk_coding_protocol.md for intermediate value criteria. |

---

#### `ai_strategy`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Existence, specificity, and implementation maturity of a national AI strategy document |
| **Primary Source** | OECD AI Policy Observatory — National AI Strategies dashboard (2025) — https://oecd.ai/en/dashboards/policy-areas |
| **Secondary Source** | National Ministry of Communications / Digital Economy websites; desk review of published strategy documents |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0 = no strategy; 3 = early-stage/framework document only; 5–6 = strategy published with partial implementation; 7–8 = comprehensive strategy with dedicated budget and inter-ministerial coordination; 9–10 = strategy fully implemented with published progress reports and AI-specific budget lines |
| **Valid Range** | 0–10 integer |
| **Missing Values** | None |

---

#### `cybercrime_law`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Existence and scope of enacted cybercrime legislation covering computer fraud, unauthorised access, electronic evidence, and cyber-offences |
| **Primary Source** | UNCTAD Cyberlaw Tracker — Cybercrime Legislation (2025) — https://uctad.org/page/cybercrime-legislation-worldwide |
| **Secondary Source** | National legislative gazettes; desk review |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 10 = comprehensive, enacted law covering all major cybercrime categories with criminal penalties and electronic evidence provisions; 8 = enacted with notable gaps (e.g., no AI-specific provisions or limited evidence rules); 6 = partial or outdated legislation; 0 = no cybercrime law |
| **Valid Range** | {6, 8, 10} in current dataset |
| **Missing Values** | None |
| **Notes** | The vast majority of ECOWAS and SADC member states have enacted cybercrime laws under regional frameworks. |

---

#### `malabo_ratification`
| | |
|---|---|
| **Scale** | Categorical-Ordinal, {0, 5, 10} only |
| **Measures** | Ratification status of the African Union Convention on Cyber Security and Personal Data Protection (Malabo Convention, 2014) |
| **Primary Source** | African Union Treaty Status tracker — https://au.int/en/treaties/african-union-convention-cyber-security-and-personal-data-protection |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | **10** = Treaty fully ratified and deposited; **5** = Signed (or signatory/observer) but NOT ratified as of retrieval date; **0** = Neither signed nor ratified |
| **Valid Values** | 0, 5, or 10 — no other values permitted |
| **Countries scored 10 (Ratified):** | Rwanda, Mauritius, Ghana, Senegal, Cameroon, Zimbabwe, Zambia, Angola, Côte d'Ivoire, Cabo Verde, Togo, Benin |
| **Countries scored 5 (Signed/Not Ratified):** | Egypt, South Africa, Kenya, Nigeria, Morocco, Tunisia, Botswana, Namibia, Algeria, Uganda, Tanzania, Mozambique, Malawi, Gabon, Seychelles |
| **Countries scored 0 (Neither):** | Ethiopia, DR Congo, Madagascar |
| **Missing Values** | None |

---

### PILLAR 2: Enforcement & Institutional Capacity

---

#### `dpa_active`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Operational activity and independence of the national Data Protection Authority (DPA) or equivalent supervisory body |
| **Primary Source** | National DPA official websites (desk coding); cross-referenced with OECD AI Policy Observatory |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0 = No DPA exists; 3 = Nominal DPA with no published decisions or enforcement actions; 5 = DPA exists with limited activity (< 3 published enforcement actions in past 2 years); 7 = Functioning DPA with regular publications and some enforcement; 8–9 = Actively enforcing DPA with annual reports and significant penalty decisions; 10 = Fully independent DPA with proactive regulatory guidance, public dashboards, and cross-border cooperation record |
| **Valid Range** | 0–10 integer |
| **Missing Values** | None |
| **Notes** | Mauritius (score=10) is the only country in the sample with a fully independent DPA meeting all criteria. |

---

#### `ai_safety_body`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Existence, mandate scope, and operational status of a dedicated government AI oversight or AI safety body |
| **Primary Source** | OECD AI Policy Observatory + national government AI strategy documents (2025) |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–1 = No AI-specific oversight body; 2–3 = AI mentioned in broad digital economy ministry but no dedicated unit; 4–5 = AI working group or task force established but advisory only; 6–7 = Formal AI unit with cross-ministerial mandate; 8 = Operational AI safety/ethics body with published guidelines; 9 = Formal AI Safety Board with statutory authority, published AI safety review procedures, and budget |
| **Valid Range** | 1–9 in current dataset |
| **Missing Values** | None |

---

#### `standards_agency`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Engagement of the national standards bureau with AI and ICT standardisation, including ISO participation |
| **Primary Source** | ISO Member Body Listings — https://www.iso.org/members.html; national standards bureau websites |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–2 = No national standards body or no ISO membership; 3 = ISO Correspondent Member with no AI-specific technical committees; 5–6 = ISO Member Body participating in general ICT standards; 7–8 = Active ISO Member with domestic AI standards published or in development; 9 = Full ISO Member actively chairing or co-chairing AI-relevant technical committees (e.g., ISO/IEC JTC 1/SC 42) |
| **Valid Range** | 3–9 in current dataset |
| **Missing Values** | None |

---

#### `ethical_review_process`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Existence of formal institutional procedures for ethical review of AI systems, algorithmic impact assessments, or research ethics frameworks covering AI |
| **Primary Source** | National AI strategy documents; government portals; academic research ethics frameworks (desk coding, 2025) |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–1 = No formal mechanism; 2 = Ad hoc/informal ethics considerations in government AI projects only; 3 = Research ethics boards exist but do not cover AI/algorithmic systems specifically; 5 = AI ethics framework published but no enforcement; 7 = Formal institutional ethics review with documented procedures and published reviews |
| **Valid Range** | 1–7 in current dataset |
| **Missing Values** | None |

---

### PILLAR 3: Computational & Linguistic Sovereignty

---

#### `local_datacenters`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Number and capacity of carrier-neutral commercial data centres with HPC capability within the country |
| **Primary Source** | Cloudscene Global Data Center Directory (2025) — https://www.cloudscene.com |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–2 = No commercial carrier-neutral data centres; 3 = 1–2 small facilities; 4–5 = 2–5 data centres, limited HPC capacity; 6–7 = 5–15 data centres with some Tier 2+ facilities; 8–9 = Established ecosystem, multiple Tier 3 facilities; 10 = Major continental data centre hub (South Africa only in sample) |
| **Valid Range** | 3–10 in current dataset |
| **Missing Values** | None |

---

#### `broadband_penetration`
| | |
|---|---|
| **Scale** | Continuous, positive real number |
| **Unit** | Fixed broadband subscriptions per 100 inhabitants |
| **Primary Source** | ITU World Telecommunication/ICT Indicators Database (WTID) 2024 — https://datahub.itu.int |
| **Data Year** | 2023 (latest available in 2024 WTID release) |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 34.2 (DR Congo) — 105.4 (South Africa) |
| **Notes** | Values can exceed 100 because a single person may hold multiple fixed broadband subscriptions (e.g., business and residential). South Africa's value of 105.4 is consistent with ITU published figures. This indicator is used as-is in the 0–100 normalisation pipeline, capped at the theoretical maximum of 100.0 per the OECD Min-Max formula bounds. |
| **Missing Values** | None |
| **Derived column in pipeline:** | Normalised to [0,100] via Min-Max with bounds (0, 100) before pillar averaging |

---

#### `localized_nlp_resources`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Availability and quality of localised Natural Language Processing (NLP) resources for indigenous African languages, including corpora, pre-trained models, and active research groups |
| **Primary Source** | Masakhane NLP Project Resource Tracker — https://www.masakhane.io; academic corpus surveys (desk coding, 2025) |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–2 = No indigenous language NLP resources; 3–4 = Very limited (single language with small corpus only); 5–6 = Moderate coverage (1–3 languages with usable corpora); 7–8 = Good coverage (3+ languages, pre-trained models, active local research); 9 = Extensive multi-language ecosystem with large open corpora and published models (South Africa) |
| **Valid Range** | 3–9 in current dataset |
| **Missing Values** | None |
| **Notes** | Ethiopia (score=8) scores highly despite lower overall index due to Amharic NLP investment and active research community. Seychelles (score=3) scores low due to very small language community and limited corpus development. |

---

#### `cybersecurity_index`
| | |
|---|---|
| **Scale** | Continuous, 0–100 |
| **Unit** | ITU Global Cybersecurity Index (GCI) composite score |
| **Primary Source** | ITU Global Cybersecurity Index (GCI) 4th Edition (2024) — https://www.itu.int/en/ITU-D/Cybersecurity/Pages/global-cybersecurity-index.aspx |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 42.4 (DR Congo) — 100.0 (Egypt, Mauritius) |
| **Notes** | The GCI measures five pillars: Legal, Technical, Organisational, Capacity Development, and Cooperation. Scores are taken directly from the published ITU GCI 2024 report without modification. Egypt and Mauritius both achieved the maximum GCI score of 100.0. |
| **Missing Values** | None |

---

### PILLAR 4: Talent, Human Capital & Civic Space

---

#### `ai_education_programs`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Breadth and quality of AI and machine learning degree programmes, national AI research centres, and government-funded AI skills initiatives |
| **Primary Source** | UNESCO Institute for Statistics — https://uis.unesco.org; desk coding of university programme listings (2025) |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–2 = No formal AI/ML programmes; 3 = One or two short courses only, no degree programmes; 4–5 = Bachelor-level AI courses at one or two universities; 6–7 = Multiple universities with dedicated AI/ML programmes; 8–9 = National AI research centres, multiple postgraduate programmes, international AI lab partnerships |
| **Valid Range** | 3–9 in current dataset |
| **Missing Values** | None |

---

#### `digital_literacy`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | General population digital skills and literacy level, as a composite of ICT access and skills indicators |
| **Primary Source** | ITU Digital Development Dashboard + World Bank Digital Adoption Index (DAI) (2024) — https://datahub.itu.int |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | Coder uses ITU digital skills indicator and World Bank DAI to assign score: 0–2 = Very low (<20% population with basic digital skills); 3–4 = Low (20–35%); 5–6 = Moderate (35–55%); 7–8 = High (55–75%); 9–10 = Very high (>75%) |
| **Valid Range** | 3–8 in current dataset |
| **Missing Values** | None |

---

#### `civic_space_index`
| | |
|---|---|
| **Scale** | Continuous, 0–100 |
| **Unit** | V-Dem Digital Society Survey civil liberties composite score, rescaled to 0–100 |
| **Primary Source** | V-Dem Institute — Varieties of Democracy Dataset v14 (2024) — https://www.v-dem.net/data/the-v-dem-dataset/ |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 30 (Ethiopia) — 85 (Mauritius, Seychelles, Cabo Verde) |
| **Notes** | Original V-Dem civil liberties index (v2x_civlib) is on a 0–1 scale and rescaled to 0–100 by multiplying by 100. Higher scores indicate greater freedom of civic expression, association, and digital rights advocacy. Egypt (34) and Algeria (35) score low despite strong regulatory frameworks because civil liberties restrictions limit independent AI governance advocacy. Rwanda (42) reflects the tension between strong state AI governance and restricted civil society space. |
| **Missing Values** | None |

---

#### `gender_inclusion_stem`
| | |
|---|---|
| **Scale** | Ordinal, integer, 0–10 |
| **Measures** | Female share of tertiary STEM enrolment as a proxy for gender inclusion in technical education pipelines |
| **Primary Source** | UNESCO Institute for Statistics — STEM Enrolment by Gender (2024) — https://uis.unesco.org |
| **Retrieval Date** | May 21, 2026 |
| **Score Interpretation** | 0–3 = Female share < 20% of STEM tertiary; 4 = 20–25%; 5 = 25–30%; 6 = 30–35%; 7 = 35–40%; 8 = 40–45%; 9 = ≥ 45% (near-parity or above) |
| **Valid Range** | 4–9 in current dataset |
| **Notes** | Rwanda (score=9) achieves near-parity female STEM enrolment, reflecting deliberate government policy. Angola, DR Congo, Madagascar, Mozambique (score=4) reflect low female tertiary education participation broadly. |
| **Missing Values** | None |

---

## File: `data/country_metadata.csv`

### `gdp_per_capita`
| | |
|---|---|
| **Scale** | Continuous, positive real number |
| **Unit** | Current USD, 2024 estimates |
| **Primary Source** | World Bank World Development Indicators (WDI) 2025 — https://data.worldbank.org/indicator/NY.GDP.PCAP.CD |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 550 (Madagascar) — 17,200 (Seychelles) |
| **Notes** | Used in OLS regression as log(gdp_per_capita) to control for national wealth. 2024 estimates used as 2025 final data not yet published at time of collection. |

---

### `ai_adoption_index`
| | |
|---|---|
| **Scale** | Continuous, 0–100 (rescaled) |
| **Primary Source** | Tortoise Media — The Global AI Index 2025 — https://www.tortoisemedia.com/intelligence/global-ai/ |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 18 (DR Congo, Malawi) — 82 (South Africa) |
| **Notes** | Used as the dependent variable in the OLS regression model. Original Tortoise scores rescaled to 0–100. Measures commercial AI adoption across infrastructure, operating environment, research, development, government strategy, and commercial venture dimensions. |

---

### `ai_investment_usd_m`
| | |
|---|---|
| **Scale** | Continuous, positive real number |
| **Unit** | Private AI investment, USD millions, 2024 |
| **Primary Source** | Stanford HAI — AI Index Annual Report 2025 — https://aiindex.stanford.edu/report/ |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 3.2 (Malawi) — 260.2 (South Africa) |
| **Notes** | Measures private sector AI investment flows. Used for econometric correlation validation (Pearson r=0.611, Spearman ρ=0.811 with AIGRI). |

---

### `ict_development_index`
| | |
|---|---|
| **Scale** | Continuous, 0–100 |
| **Primary Source** | ITU ICT Development Index (IDI) 2024 — https://www.itu.int/en/ITU-D/Statistics/Pages/IDI/default.aspx |
| **Retrieval Date** | May 21, 2026 |
| **Range in Dataset** | 22.4 (DR Congo) — 85.2 (Seychelles) |
| **Notes** | Composite of ICT access, use, and skills sub-indices. Used for econometric correlation validation (Pearson r=0.834, Spearman ρ=0.804 with AIGRI). |

---

## Derived Variables (Computed by `src/pipeline.py`)

These variables are not stored in the input CSVs but are exported in `dashboard/data.json`:

| Variable | Description |
|---|---|
| `pillar1` (0–100) | Mean of 4 normalised Pillar 1 indicators |
| `pillar2` (0–100) | Mean of 4 normalised Pillar 2 indicators |
| `pillar3` (0–100) | Mean of 4 normalised Pillar 3 indicators |
| `pillar4` (0–100) | Mean of 4 normalised Pillar 4 indicators |
| `score_ewi` (0–100) | Equal-weighted composite: mean of 4 pillar scores |
| `score_pca` (0–100) | PCA-weighted composite: weighted sum using PC1 loadings |
| `score_infra` (0–100) | Infrastructure-dropped composite: mean of Pillars 1, 2, 4 only |
| `tier` | K-Means cluster label: `Pioneers`, `Emerging`, or `Lagging` |
| `tier_ewi` | K-Means cluster label on EWI scores |
| `rank` | Country rank 1–30 by `score_pca` descending |
| `rank_pca` | Rank under PCA weighting |
| `rank_ewi` | Rank under Equal Weighting |
| `rank_infra` | Rank under Infrastructure-Dropped weighting |

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | May 21, 2026 | Initial release covering 30 countries, 16 indicators, May 2026 retrieval |

---

*For full scoring rubrics and decision trees for each ordinal indicator, see `data/desk_coding_protocol.md`.*  
*For the complete source provenance table, see `data/indicator_sources.csv`.*
