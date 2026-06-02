# Contributing to AIGRI 2026

Thank you for your interest in contributing to the AI Governance Readiness Index for Africa! This document provides guidelines for contributing to the project.

## 🎯 Ways to Contribute

### 1. **Update Country Indicators**
The most common contribution is updating country indicator scores as new policy developments occur.

**Steps:**
1. Identify the country and indicator to update in [data/raw_indicators.csv](../data/raw_indicators.csv)
2. Find the supporting documentation in [data/desk_coding_protocol.md](../data/desk_coding_protocol.md)
3. Document the new evidence (link to policy, publication date, source URL)
4. Submit a pull request with:
   - Updated CSV value
   - Clear changelog entry noting the policy change
   - Links to evidence sources
5. Explain how the new data meets the scoring rubric

### 2. **Expand Country Coverage**
Help us add more African nations beyond the current 30.

**Requirements:**
- Complete desk coding following [desk_coding_protocol.md](../data/desk_coding_protocol.md)
- Document all 16 indicators with evidence
- Add country to [country_metadata.csv](../data/country_metadata.csv)
- Include economic indicators (GDP, internet penetration) for validation

### 3. **Improve Methodology**
Suggest refinements to the framework:
- Pillar definitions
- Indicator selection
- Weighting schemes
- PCA methodology

**Process:**
1. Open a GitHub Discussion explaining your proposal
2. Provide theoretical justification
3. Show how it affects existing rankings
4. Document trade-offs

### 4. **Enhance the Dashboard**
Improve the web interface:
- Fix bugs or improve responsiveness
- Add new visualizations
- Enhance accessibility (WCAG compliance)
- Add regional/sector filters

**Technical Requirements:**
- Vanilla JavaScript (no frameworks required)
- CSS Grid/Flexbox for responsive design
- Pure SVG for charts (no D3.js dependencies)
- Test in Chrome, Firefox, Safari, Edge

### 5. **Translate Dashboard**
Help localize AIGRI for African languages:
- Arabic (العربية)
- Swahili (Kiswahili)
- Yoruba (Yorùbá)
- Amharic (አማርኛ)
- French (Français)
- Portuguese (Português)

**Process:**
- Fork and create branch: `i18n/[language-code]`
- Modify [dashboard/index.html](../dashboard/index.html) and [dashboard/app.js](../dashboard/app.js)
- Add language selector to header
- Test all interactive features
- Submit PR with language identifier

### 6. **Bug Reports & Fixes**
Found an issue? Help us fix it!

**Report:**
1. Check [existing issues](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026/issues)
2. Create new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs. actual behavior
   - Browser/Python version
   - Screenshots if applicable

**Fix:**
1. Fork repository
2. Create branch: `bugfix/[issue-number]`
3. Include test cases if modifying pipeline
4. Reference issue in pull request: `Fixes #123`

### 7. **Documentation Improvements**
Enhance clarity and completeness:
- Fix typos or unclear explanations
- Add examples or diagrams
- Translate documentation
- Improve codebook details

---

## 📋 Contribution Checklist

Before submitting a pull request, ensure:

### For Data Updates
- [ ] CSV values valid (0–10 integer or documented continuous range)
- [ ] Evidence documented with URLs and access dates
- [ ] Codebook.md reflects any new variable interpretations
- [ ] pipeline.py runs without errors → regenerates data.json
- [ ] Dashboard displays correctly with updated data

### For Code Changes
- [ ] No new external dependencies (maintain pure Python for pipeline.py)
- [ ] Code is readable and commented
- [ ] Tested in multiple browsers (dashboard) or Python versions (scripts)
- [ ] Backwards compatible with existing data/workflows

### For All Contributions
- [ ] Commit messages follow: `type(scope): description`  
  Examples: `data(nigeria): update data protection authority`, `docs(readme): clarify pillar definitions`
- [ ] Pull request title clearly describes changes
- [ ] Description explains **why** the change matters
- [ ] References related issues or discussions
- [ ] Licensed under CC BY 4.0 (implied by contributing)

---

## 🔄 Pull Request Process

1. **Fork** the repository to your GitHub account
2. **Clone** your fork locally: `git clone https://github.com/YOUR-USERNAME/AIGRI-2026.git`
3. **Create a feature branch**: `git checkout -b feature/your-feature`
4. **Make your changes** with clear, descriptive commits
5. **Test thoroughly**:
   - Dashboard: Check layout, interactivity, data display
   - Pipeline: Run `python src/pipeline.py` successfully
   - Data: Validate against codebook definitions
6. **Push** to your fork: `git push origin feature/your-feature`
7. **Open a pull request** on the main repository with:
   - Clear title summarizing changes
   - Detailed description of what and why
   - Screenshots for UI changes
   - Reference to related issues

### Review Process
- Maintainers will review within 5 business days
- Feedback provided as inline comments
- Once approved, maintainers will merge

---

## 🎓 Coding Standards

### Python (`src/pipeline.py`, `src/generate_plots.py`)
```python
# Pure Python standard library for pipeline.py
import os
import csv
import json
import math

# OK: Pure standard library
# Not OK: numpy, pandas, scikit-learn (breaks reproducibility)

# Comment explaining complex calculations
def pearson_correlation(lst1, lst2):
    """Compute Pearson correlation coefficient without numpy."""
    s1, s2 = std_dev(lst1), std_dev(lst2)
    if s1 == 0 or s2 == 0:
        return 0.0
    return cov(lst1, lst2) / (s1 * s2)
```

### JavaScript (`dashboard/app.js`)
```javascript
// Vanilla JavaScript, no frameworks
// Descriptive variable names
const activeCountry = "Egypt";

// Clear function purposes
function initializeDashboard() {
    // Implementation
}

// Test in browsers without build tools
```

### Documentation (Markdown)
- Clear section headers (H1, H2, H3)
- Bullet points for lists
- Code blocks with language specification
- Links to related documentation
- Plain language explanations

---

## 💡 Contribution Ideas

### Easy (Good for First-Time Contributors)
- [ ] Fix typos in README or documentation
- [ ] Add country links to governance websites in codebook
- [ ] Improve CSS styling for better accessibility
- [ ] Add examples to dashboard tooltips

### Medium
- [ ] Add regional comparison charts to dashboard
- [ ] Create summary statistics table for each pillar
- [ ] Improve error handling in pipeline.py
- [ ] Document how to add new indicators

### Hard
- [ ] Implement time-series tracking (2023–2026)
- [ ] Create API for external researchers
- [ ] Add policy simulation tool
- [ ] Expand framework to non-African regions

---

## 🚀 Getting Help

- **Questions?** Open a GitHub Discussion
- **Need guidance?** Email salamitobimi@gmail.com
- **Found a bug?** Create an Issue with reproducible steps
- **Want to collaborate?** Reach out to the lead researcher

---

## 📜 Licensing

By contributing to AIGRI 2026, you agree that your contributions are licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

This means:
- Your work is publicly attributed to you
- Others can use, adapt, and build upon your work
- Everyone must maintain the same CC BY 4.0 license

---

## 🙏 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors.

**Expected Behavior:**
- Be respectful and constructive
- Assume good faith
- Accept criticism gracefully
- Focus on ideas, not individuals

**Unacceptable Behavior:**
- Harassment or discrimination
- Offensive language
- Trolling or insulting comments
- Advocating for exclusion

Violations can be reported to salamitobimi@gmail.com. All reports are confidential.

---

**Thank you for contributing to better AI governance in Africa! 🌍**

Last Updated: June 2026
