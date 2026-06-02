# AIGRI 2026 Project Documentation Map

## 📚 Complete Documentation Structure

This document provides a complete guide to all documentation files in the AIGRI project.

---

## 🎯 Start Here

### **New to AIGRI?**
1. **[README.md](README.md)** — Main project overview (start here!)
2. **[QUICKSTART.md](QUICKSTART.md)** — 5-minute quick reference guide
3. **[dashboard/README.md](dashboard/README.md)** — How to use the dashboard

### **Want to Contribute?**
1. **[CONTRIBUTING.md](CONTRIBUTING.md)** — Contribution guidelines
2. **[data/desk_coding_protocol.md](data/desk_coding_protocol.md)** — How to score indicators
3. **[data/codebook.md](data/codebook.md)** — Complete variable dictionary

### **Academic/Research Use?**
1. **[paper/draft.md](paper/draft.md)** — Full academic manuscript
2. **[paper/references.bib](paper/references.bib)** — Citation database
3. **[LICENSE.md](LICENSE.md)** — Citation and usage rights (CC BY 4.0)

---

## 📄 File Directory

### **Root Level Documentation**

| File | Purpose | Read Time |
|------|---------|-----------|
| [README.md](README.md) | Complete project overview, features, quick start | 15 min |
| [QUICKSTART.md](QUICKSTART.md) | Fast reference guide and FAQ | 5 min |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute code, data, or improvements | 10 min |
| [LICENSE.md](LICENSE.md) | CC BY 4.0 license, attribution guidelines | 5 min |
| [DOCUMENTATION_MAP.md](DOCUMENTATION_MAP.md) | This file—navigation guide | 3 min |

### **Dashboard Documentation**

| File | Purpose |
|------|---------|
| [dashboard/README.md](dashboard/README.md) | Dashboard features, customization, troubleshooting |
| [dashboard/index.html](dashboard/index.html) | HTML template (view source for structure) |
| [dashboard/app.js](dashboard/app.js) | JavaScript code (interactivity, navigation) |
| [dashboard/data.js](dashboard/data.js) | Data loading for file:// protocol |
| [dashboard/styles.css](dashboard/styles.css) | Responsive design and theming |
| [dashboard/data.json](dashboard/data.json) | Generated: PCA-weighted results |

### **Data Documentation**

| File | Purpose | Audience |
|------|---------|----------|
| [data/codebook.md](data/codebook.md) | Complete variable dictionary | Researchers, analysts |
| [data/desk_coding_protocol.md](data/desk_coding_protocol.md) | Scoring rubrics and decision rules | Contributors updating data |
| [data/indicator_sources.csv](data/indicator_sources.csv) | Data source attribution | Verification, replication |
| [data/raw_indicators.csv](data/raw_indicators.csv) | Raw 16 indicators (30 countries) | Analysis, data work |
| [data/country_metadata.csv](data/country_metadata.csv) | Economic context (GDP, etc.) | Econometric validation |

### **Source Code Documentation**

| File | Purpose |
|------|---------|
| [src/pipeline.py](src/pipeline.py) | PCA pipeline (pure Python, no dependencies) |
| [src/generate_plots.py](src/generate_plots.py) | Publication figure generator |

### **Academic Output**

| File | Purpose |
|------|---------|
| [paper/draft.md](paper/draft.md) | Full academic manuscript with findings |
| [paper/references.bib](paper/references.bib) | BibTeX reference database |
| [paper/figures/](paper/figures/) | Generated publication-quality charts |

### **Version Control**

| File | Purpose |
|------|---------|
| [.gitignore](.gitignore) | Git exclusion rules |

---

## 🗂️ Documentation by Use Case

### **I want to...**

#### ...understand what AIGRI is
→ Read: [README.md](README.md#aigri-2026-ai-governance-readiness-index-for-africa)

#### ...view the dashboard
→ Open: [dashboard/index.html](dashboard/index.html)  
→ Learn: [dashboard/README.md](dashboard/README.md)

#### ...understand the four pillars
→ Read: [README.md](README.md#-four-pillars-of-aigri)

#### ...find quick answers
→ Read: [QUICKSTART.md](QUICKSTART.md)

#### ...understand what each indicator measures
→ Read: [data/codebook.md](data/codebook.md)

#### ...see how indicators are scored
→ Read: [data/desk_coding_protocol.md](data/desk_coding_protocol.md)

#### ...understand the methodology
→ Read: [README.md](README.md#-methodology)  
→ View: Dashboard "PCA Methodology" tab

#### ...cite AIGRI correctly
→ Read: [LICENSE.md](LICENSE.md#how-to-properly-attribute-aigri)

#### ...update country scores
→ Follow: [CONTRIBUTING.md](CONTRIBUTING.md#1-update-country-indicators)  
→ Reference: [data/desk_coding_protocol.md](data/desk_coding_protocol.md)

#### ...add a new country
→ Follow: [CONTRIBUTING.md](CONTRIBUTING.md#2-expand-country-coverage)

#### ...improve the dashboard
→ Follow: [CONTRIBUTING.md](CONTRIBUTING.md#4-enhance-the-dashboard)  
→ Learn: [dashboard/README.md](dashboard/README.md#-customization)

#### ...contribute code
→ Read: [CONTRIBUTING.md](CONTRIBUTING.md)  
→ Check: [CONTRIBUTING.md](CONTRIBUTING.md#-coding-standards)

#### ...understand the research
→ Read: [paper/draft.md](paper/draft.md)

#### ...use AIGRI in my research
→ Read: [LICENSE.md](LICENSE.md)  
→ Cite using: [LICENSE.md](LICENSE.md#how-to-properly-attribute-aigri)

#### ...report a bug
→ Open: GitHub Issue (link in [README.md](README.md#-contact--support))  
→ Reference: [CONTRIBUTING.md](CONTRIBUTING.md#6-bug-reports--fixes)

#### ...get help
→ See: [README.md](README.md#-contact--support)

---

## 📊 Documentation Statistics

| Category | Count | Example Files |
|----------|-------|----------------|
| **README files** | 3 | Main, Dashboard, Quick Start |
| **Data docs** | 4 | Codebook, Protocol, Sources, Metadata |
| **Guides** | 3 | Contributing, License, Documentation Map |
| **Code** | 2 | Pipeline, Plot Generator |
| **Data files** | 5 | CSV files (indicators, metadata, sources) |

---

## 🔄 Reading Paths for Different Audiences

### **Path 1: Dashboard User** (20 minutes)
1. [QUICKSTART.md](QUICKSTART.md) (5 min)
2. Open dashboard and explore (10 min)
3. [dashboard/README.md](dashboard/README.md) for troubleshooting (5 min)

### **Path 2: Researcher** (1 hour)
1. [README.md](README.md) overview (20 min)
2. [paper/draft.md](paper/draft.md) academic content (30 min)
3. [data/codebook.md](data/codebook.md) variable reference (10 min)

### **Path 3: Data Contributor** (2 hours)
1. [CONTRIBUTING.md](CONTRIBUTING.md) (15 min)
2. [data/desk_coding_protocol.md](data/desk_coding_protocol.md) (30 min)
3. Practice updating one indicator (30 min)
4. [README.md](README.md#-reproducibility) verification (15 min)

### **Path 4: Developer** (1.5 hours)
1. [README.md](README.md#-installation--development) setup (20 min)
2. [dashboard/README.md](dashboard/README.md) architecture (20 min)
3. [CONTRIBUTING.md](CONTRIBUTING.md#-coding-standards) standards (15 min)
4. Explore `src/pipeline.py` code (15 min)
5. Suggest improvement on GitHub (15 min)

---

## 📋 Quick Lookup Table

| Question | File | Section |
|----------|------|---------|
| What is AIGRI? | README.md | Top introduction |
| How to view dashboard? | QUICKSTART.md | Getting Started |
| What are the 4 pillars? | README.md | Four Pillars section |
| How to interpret scores? | data/codebook.md | Scale Types section |
| How to score indicators? | data/desk_coding_protocol.md | Complete rubric |
| What countries are included? | README.md | Coverage section |
| How is it validated? | paper/draft.md | Validation section |
| How to contribute? | CONTRIBUTING.md | Ways to Contribute |
| How to cite? | LICENSE.md | Attribution section |
| License terms? | LICENSE.md | Summary section |
| How to regenerate results? | README.md | Reproducibility |
| Dashboard features? | dashboard/README.md | Dashboard Features |

---

## 🔗 Cross-References

### Common Links

- **GitHub Issues:** [Create issue](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026/issues)
- **Project Home:** [Salthacked/AIGRI-2026](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026)
- **CC BY 4.0 License:** [creativecommons.org](https://creativecommons.org/licenses/by/4.0/)
- **Lead Researcher:** Oluwatobi Salami (salamitobimi@gmail.com)

### Related Indices

- [Oxford Insights Government AI Readiness Index](https://www.oxfordinsights.com/)
- [Tortoise Global AI Index](https://www.tortoisemedia.com/)
- [Stanford HAI AI Index](https://aiindex.stanford.edu/)

---

## 🎓 Learning Objectives by File

### After reading [README.md](README.md), you will understand:
- What AIGRI is and why it matters
- The four governance pillars
- Project structure and components
- How to get started
- Key findings and methodology

### After reading [QUICKSTART.md](QUICKSTART.md), you will know:
- At-a-glance project facts
- Where to find specific information
- Common questions and answers
- File quick reference

### After reading [data/codebook.md](data/codebook.md), you will understand:
- Every variable in the dataset
- Scale types and scoring
- Data sources and attribution
- How to interpret values

### After reading [paper/draft.md](paper/draft.md), you will understand:
- Academic background and motivation
- Literature review and gap
- Theoretical framework
- Methodology in detail
- Key findings and implications

---

## 🆘 Troubleshooting Documentation

| Problem | Solution | File |
|---------|----------|------|
| Dashboard won't load | See troubleshooting | [dashboard/README.md](dashboard/README.md#-troubleshooting) |
| Data won't update | See reproducibility | [README.md](README.md#-reproducibility) |
| How to update scores? | See contribution guide | [CONTRIBUTING.md](CONTRIBUTING.md#1-update-country-indicators) |
| Bug in dashboard | Report issue | [CONTRIBUTING.md](CONTRIBUTING.md#6-bug-reports--fixes) |
| Can I use commercially? | See license | [LICENSE.md](LICENSE.md#what-about-commercial-use) |

---

## 📈 Document Maintenance

Last Updated: **June 2026**

| Document | Last Updated | Maintainer |
|----------|------|-----------|
| README.md | June 2026 | Project Lead |
| QUICKSTART.md | June 2026 | Documentation |
| CONTRIBUTING.md | June 2026 | Community Lead |
| LICENSE.md | June 2026 | Legal |
| dashboard/README.md | June 2026 | Tech Lead |
| data/codebook.md | June 2026 | Data Manager |

---

## ✅ Checklist for New Users

- [ ] Read [README.md](README.md) introduction
- [ ] Review [QUICKSTART.md](QUICKSTART.md)
- [ ] Open [dashboard/index.html](dashboard/index.html) and explore
- [ ] Decide if you want to contribute
- [ ] If contributing, read [CONTRIBUTING.md](CONTRIBUTING.md)
- [ ] Bookmark this documentation map for future reference

---

**This Documentation Map helps you navigate the AIGRI project efficiently.**  
**If you can't find what you're looking for, [open an issue on GitHub](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026/issues).**

**Lead Researcher:** Oluwatobi Salami | **Email:** salamitobimi@gmail.com

Last Updated: June 2026
