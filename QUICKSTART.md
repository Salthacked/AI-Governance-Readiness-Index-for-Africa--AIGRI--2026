# AIGRI 2026 — Quick Reference Guide

## 📊 At a Glance

| Aspect | Details |
|--------|---------|
| **What is AIGRI?** | AI Governance Readiness Index evaluating 30 African countries |
| **How many countries?** | 30 nations across all African regions |
| **What's measured?** | AI safety, ethics, regulatory capacity, data sovereignty |
| **Methodology** | Principal Component Analysis (PCA) on 16 indicators |
| **Tiers** | Pioneers (5 countries), Emerging (7), Lagging (18) |
| **Key finding** | Strong correlation with commercial AI adoption (ρ = 0.935) |

## 🚀 Getting Started (3 Steps)

### 1. View the Dashboard
```bash
open dashboard/index.html
```
Explore interactive rankings, pillar breakdowns, and regional comparisons.

### 2. Explore the Data
Read [data/codebook.md](data/codebook.md) for complete variable definitions.

### 3. Understand the Methodology
Check the **"PCA Methodology"** tab in the dashboard for technical details.

---

## 📁 File Guide

### I want to...

**...view the dashboard**
→ Open [dashboard/index.html](dashboard/index.html)

**...understand what's measured**
→ Read [data/codebook.md](data/codebook.md)

**...see raw data**
→ Open [data/raw_indicators.csv](data/raw_indicators.csv)

**...read the academic paper**
→ Read [paper/draft.md](paper/draft.md)

**...regenerate results from scratch**
→ Run: `python src/pipeline.py`

**...update country scores**
→ Edit [data/raw_indicators.csv](data/raw_indicators.csv) and re-run pipeline

**...contribute**
→ Read [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🎯 The Four Pillars Explained

| Pillar | What It Measures | Example Indicators |
|--------|------------------|-------------------|
| **Regulatory Capacity** | Legal frameworks and institutions | Data protection laws, AI ethics boards, compliance requirements |
| **Enforcement** | Implementation and oversight | Active regulators, budget, incident response capacity |
| **Sovereignty** | Data protection and digital independence | Local datacenters, indigenous language AI, regional tech frameworks |
| **Civic Space** | Democratic participation and rights | Freedom of expression, civil society engagement, transparency |

---

## 🏆 Top 5 Countries (Pioneers)

1. **Egypt** — AIGRI Score: 7.8
2. **Nigeria** — AIGRI Score: 7.6
3. **South Africa** — AIGRI Score: 7.5
4. **Kenya** — AIGRI Score: 7.3
5. **Morocco** — AIGRI Score: 7.1

---

## 🔬 Key Statistics

- **Total countries:** 30
- **Total indicators:** 16
- **Regional coverage:** All 5 African regions
- **Correlation with AI adoption:** 0.935 (very strong)
- **Data source:** Desk coding from public sources
- **Methodology:** Principal Component Analysis (PCA)

---

## 💡 Common Questions

**Q: Where does the data come from?**  
A: Public sources (government websites, academic databases, NGO reports). See [data/indicator_sources.csv](data/indicator_sources.csv) for attribution.

**Q: How often is the data updated?**  
A: Quarterly when new policy developments occur. Contribute updates at [CONTRIBUTING.md](CONTRIBUTING.md).

**Q: Can I use AIGRI in my research?**  
A: Yes! It's under CC BY 4.0 license. Just cite it properly. See [README.md](README.md) for citation format.

**Q: Why only 30 countries?**  
A: Comprehensive desk coding requires significant resources. We're expanding coverage—help us! See [CONTRIBUTING.md](CONTRIBUTING.md).

**Q: Does high AIGRI score mean a country has good AI policy?**  
A: Yes, it measures governance **readiness**. It reflects legal frameworks, enforcement capacity, and sovereignty—not necessarily current AI adoption or economic wealth.

---

## 🔧 Common Tasks

### Update a Country Score
1. Open [data/raw_indicators.csv](data/raw_indicators.csv)
2. Find the country and indicator
3. Update value (0–10 scale) with evidence
4. Run: `python src/pipeline.py`
5. Dashboard updates automatically

### Add a New Country
1. Follow [data/desk_coding_protocol.md](data/desk_coding_protocol.md)
2. Score all 16 indicators
3. Add row to [data/raw_indicators.csv](data/raw_indicators.csv)
4. Update [data/country_metadata.csv](data/country_metadata.csv)
5. Run: `python src/pipeline.py`
6. Test dashboard

### Generate Publication Figures
```bash
python src/generate_plots.py
```
Creates academic-quality charts in `paper/figures/`

---

## 📚 Further Reading

**Academic Foundations:**
- Mohamed, S., Png, M., & Isaac, W. (2020). "Decolonial AI"
- Jasanoff, S., & Kim, S. (2015). "Dreamscapes of Modernity"
- Majone, G. (1997). "From the Positive to the Regulatory State"

**Related Indices:**
- [Oxford Insights Government AI Readiness Index](https://www.oxfordinsights.com/)
- [Tortoise Media Global AI Index](https://www.tortoisemedia.com/)
- [Stanford HAI AI Index](https://aiindex.stanford.edu/)

---

## 🤝 Support

- **Questions?** Open a [GitHub Issue](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026/issues)
- **Want to contribute?** See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Found a bug?** Report it with browser/Python version
- **Lead Researcher:** Oluwatobi Salami (salamitobimi@gmail.com)

---

**Last Updated:** June 2026  
**Repository:** [github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026)  
**Lead Researcher:** Oluwatobi Salami (salamitobimi@gmail.com)
