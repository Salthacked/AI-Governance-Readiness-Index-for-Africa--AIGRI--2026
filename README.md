# AIGRI 2026: AI Governance Readiness Index for Africa

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Python 3.8+](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Data: 30 African Nations](https://img.shields.io/badge/Data-30%20African%20Nations-brightgreen.svg)](#coverage)

An academically rigorous, Principal Component Analysis (PCA)-weighted indicator framework evaluating **AI safety and ethics governance readiness** across 30 African countries. AIGRI provides a governance-first, decolonial perspective on AI readiness that prioritizes regulatory capacity, data sovereignty, and civic space over commercial AI capabilities.

## 📊 Quick Start

### View the Dashboard
Open `dashboard/index.html` in a modern browser to explore:
- **Country rankings** across three governance tiers (Pioneers, Emerging, Lagging)
- **Interactive radar charts** showing performance across four pillars
- **Regional comparisons** and detailed country profiles
- **PCA methodology validation** and econometric analysis

### Run the Data Pipeline
```bash
python src/pipeline.py
```
Generates PCA-weighted indicators and exports to `dashboard/data.json`.

### Generate Publication Figures
```bash
python src/generate_plots.py
```
Creates high-resolution academic figures in `paper/figures/`.

---

## 📁 Project Structure

```
AIGRI-2026/
├── dashboard/                    # Interactive web application
│   ├── index.html               # Main dashboard UI
│   ├── app.js                   # Core interactivity & navigation
│   ├── data.js                  # Data loading for local file:// mode
│   ├── styles.css               # Publication-quality styling
│   ├── data.json                # Generated: PCA-weighted results
│   └── README.md                # Dashboard-specific documentation
│
├── data/                         # Research datasets & documentation
│   ├── raw_indicators.csv       # 16 scored indicators (30 countries)
│   ├── country_metadata.csv     # Macro-level validation variables
│   ├── indicator_sources.csv    # Data source attribution
│   ├── codebook.md              # Complete variable dictionary
│   └── desk_coding_protocol.md  # Scoring rubrics & methodology
│
├── src/                          # Data processing & visualization
│   ├── pipeline.py              # Pure Python PCA pipeline (no dependencies)
│   └── generate_plots.py        # Matplotlib/Seaborn figure generation
│
├── paper/                        # Academic paper & references
│   ├── draft.md                 # Research manuscript (Markdown)
│   ├── references.bib           # BibTeX citations
│   └── figures/                 # Generated publication figures
│
└── README.md                     # This file
```

---

## 🎯 Four Pillars of AIGRI

The index evaluates governance across four complementary dimensions:

### **Pillar 1: Regulatory Capacity** (Legal & Institutional)
- Data protection framework strength
- Regulatory enforcement mechanisms
- Independent oversight bodies
- Domestic AI safety initiatives

### **Pillar 2: Enforcement & Accountability** (Implementation)
- Operational Data Protection Authorities
- Active compliance monitoring
- Incident response capacity
- Institutional independence & budget autonomy

### **Pillar 3: Computational & Linguistic Sovereignty** (Digital Rights)
- Local data residency infrastructure
- Indigenous language AI resources (e.g., NLP datasets)
- African cloud computing capacity
- Regional technology frameworks (e.g., African Union Malabo Convention)

### **Pillar 4: Civic Space & Democratic Governance** (Rights-Based)
- Freedom of expression protections
- Civil society participation in tech policy
- Transparency & public engagement
- Democratic accountability mechanisms

---

## 📈 Key Findings

### Country Tiers
**Pioneers** (Strongest Governance Readiness)  
Egypt, Nigeria, South Africa, Kenya, Morocco

**Emerging** (Developing Frameworks)  
Algeria, Ghana, Tanzania, Ethiopia, Tunisia, Botswana, Namibia

**Lagging** (Limited Infrastructure)  
18 additional nations across all regions

### Validation
- **Strong correlation** with commercial AI adoption (Spearman ρ = 0.935, n=30)
- **Multivariate OLS regression** confirms governance readiness predicts adoption independent of GDP
- **Case study on Nigeria** demonstrates policy pathway for lagging nations

---

## 🔬 Methodology

### Principal Component Analysis (PCA)
The pipeline implements **zero-dependency PCA** in pure Python:
- Standardizes 16 indicators across mean=0, std=1
- Computes covariance matrix
- Extracts eigenvalues and eigenvectors
- Generates loadings for each pillar

### Indicator Weighting
Each of the four pillars receives equal weight (25%), with PCA loadings ensuring indicators within pillars are balanced. See [desk_coding_protocol.md](data/desk_coding_protocol.md) for full rubric details.

### Data Sources
All indicators are desk-coded from publicly available sources:
- Government policy documents
- Academic literature
- International organization databases (UNESCO, World Bank, IMF)
- NGO reports on digital rights

See [indicator_sources.csv](data/indicator_sources.csv) for complete attribution.

---

## 🛠️ Installation & Development

### Requirements
- **Dashboard:** Modern browser (Chrome, Firefox, Safari, Edge)
- **Python pipeline:** Python 3.8+
- **Figure generation:** matplotlib, seaborn, pandas, numpy

### Setup

#### Option 1: Dashboard Only (Recommended for Non-Technical Users)
```bash
# 1. Clone or download this repository
cd AIGRI-2026

# 2. Open dashboard in browser
open dashboard/index.html  # macOS
xdg-open dashboard/index.html  # Linux
start dashboard/index.html  # Windows
```

#### Option 2: Full Development Environment
```bash
# 1. Clone repository
git clone https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026.git
cd AIGRI-2026

# 2. Install Python dependencies (optional, for plotting only)
pip install matplotlib seaborn pandas numpy

# 3. Run pipeline to regenerate data.json
python src/pipeline.py

# 4. Generate publication figures
python src/generate_plots.py

# 5. Open dashboard
open dashboard/index.html
```

---

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| [codebook.md](data/codebook.md) | Complete variable dictionary with scale types and definitions |
| [desk_coding_protocol.md](data/desk_coding_protocol.md) | Scoring rubrics and decision rules for each indicator |
| [indicator_sources.csv](data/indicator_sources.csv) | Data source attribution for reproducibility |
| [paper/draft.md](paper/draft.md) | Full academic manuscript with literature review and validation |
| [dashboard/README.md](dashboard/README.md) | Dashboard-specific technical documentation |

---

## 🔄 Reproducibility

### Regenerate Results
```bash
# Run the complete pipeline
python src/pipeline.py

# Output: dashboard/data.json (PCA-weighted rankings)
```

The pipeline is deterministic and produces identical results across runs. All data sources are documented in [indicator_sources.csv](data/indicator_sources.csv).

### Validate Methodology
See **Section 3: PCA Methodology** in the dashboard (under "PCA Methodology" tab) for:
- Eigenvalue decomposition
- Scree plot (variance explained by each component)
- Indicator loadings for each pillar
- Correlation matrix heatmap

---

## 🌍 Coverage

**30 African Countries Analyzed:**
- **North Africa:** Algeria, Egypt, Libya, Morocco, Sudan, Tunisia
- **West Africa:** Benin, Burkina Faso, Côte d'Ivoire, Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Niger, Nigeria, Senegal, Sierra Leone, Togo
- **Central Africa:** Cameroon, Chad, Congo (DRC), Gabon, Equatorial Guinea
- **East Africa:** Burundi, Djibouti, Eritrea, Ethiopia, Kenya, Mauritius, Rwanda, Seychelles, Somalia, South Sudan, Tanzania, Uganda
- **Southern Africa:** Angola, Botswana, Eswatini, Lesotho, Malawi, Mozambique, Namibia, South Africa, Zambia, Zimbabwe

---

## 📝 Citation

If you use AIGRI in your research, please cite:

**BibTeX:**
```bibtex
@article{aigri2026,
  title={Measuring AI Governance Readiness in Africa: A Principal Component-Based Index of Safety and Ethics},
  author={Salami, Oluwatobi},
  year={2026},
  url={https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026}
}
```

**APA:**
Salami, O. (2026). Measuring AI Governance Readiness in Africa: A Principal Component-Based Index of Safety and Ethics. Retrieved from https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026

---

## 🤝 Contributing

We welcome contributions in the following areas:

1. **Indicator Updates:** Submit pull requests to update country scores based on new policy developments
2. **Additional Countries:** Extend coverage beyond 30 nations (requires desk coding per protocol)
3. **Translations:** Help translate dashboard UI into African languages
4. **Bug Reports:** Open issues for dashboard or pipeline errors
5. **Methodology Discussion:** Suggest improvements to pillar definitions or weighting schemes

### Contribution Workflow
1. Fork this repository
2. Create a feature branch: `git checkout -b feature/my-contribution`
3. Document all changes thoroughly
4. Submit a pull request with description

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## ⚖️ License

This work is licensed under the **Creative Commons Attribution 4.0 International License** ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).

**You are free to:**
- Share, adapt, and build upon this work
- Use for commercial and non-commercial purposes

**Under the condition that you:**
- Provide appropriate attribution to the original authors
- Link to the license

---

## 📧 Contact & Support

- **Issues & Questions:** Open a [GitHub Issue](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026/issues)
- **Lead Researcher:** Oluwatobi Salami
- **Email:** salamitobimi@gmail.com
- **GitHub:** [Salthacked](https://github.com/Salthacked)
- **Repository:** [AIGRI 2026 on GitHub](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026)

---

## 🙏 Acknowledgments

AIGRI 2026 is built on the theoretical foundations of:
- **Regulatory State Capacity** (Majone, 1997; Braithwaite, 2008)
- **Decolonial AI & Digital Sovereignty** (Mohamed et al., 2020)
- **Socio-Technical Imaginaries** (Jasanoff & Kim, 2015)

We thank:
- The African Union for policy frameworks
- Regional technology communities for localized insights
- All 30 participating countries' governments and civil society organizations for data access

---

## 🗺️ Roadmap

**Q3 2026:**
- [ ] Expand to 50+ African nations
- [ ] Add time-series tracking (2023–2026)
- [ ] Develop country-specific policy recommendations
- [ ] Launch multilingual dashboard (Swahili, Yoruba, Amharic, French)

**Q4 2026:**
- [ ] API for external researchers
- [ ] Integration with global indices (World Bank, UN)
- [ ] Interactive policy simulation tool

---

## 📚 Further Reading

### Core Papers
- Mohamed, S., Png, M. T., & Isaac, W. (2020). "Decolonial AI: Machine Learning and the Politics of Knowledge." arXiv preprint.
- Jasanoff, S., & Kim, S. H. (2015). "Dreamscapes of Modernity." University of Chicago Press.
- Majone, G. (1997). "From the Positive to the Regulatory State." Journal of Institutional and Theoretical Economics.

### Related Indices
- Oxford Insights Government AI Readiness Index
- Tortoise Global AI Index
- Stanford HAI AI Index

---

**Last Updated:** June 2026  
**Repository:** [github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026)  
**Lead Researcher:** Oluwatobi Salami  
**Contact:** salamitobimi@gmail.com
