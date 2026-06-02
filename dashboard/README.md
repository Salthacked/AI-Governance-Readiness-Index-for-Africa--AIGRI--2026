# AIGRI Dashboard

Interactive web-based visualization of the AI Governance Readiness Index for Africa.

## 🚀 Quick Start

### 1. **Local File Mode** (Recommended)
```bash
# Simply open in your browser
open dashboard/index.html  # macOS
```

The dashboard runs entirely in the browser with no server required.

### 2. **With Local Server** (Optional)
If you encounter issues opening `file://` URLs in your browser:

```bash
# Python 3
python -m http.server 8000 --directory dashboard

# Then visit: http://localhost:8000/index.html
```

---

## 📊 Dashboard Features

### **Dashboard Tab**
- **Country Rankings:** Complete list of 30 nations sorted by AIGRI score
- **Search & Filter:** Find countries by name or filter by region
- **Radar Chart:** Visual profile of country's performance across 4 pillars
- **Tier Classification:** Visual indicator (Pioneers, Emerging, Lagging)
- **Key Metrics:** Breakdown of scores for each pillar

### **Econometric Validation Tab**
- **Scatter Plot:** Correlation between AIGRI score and commercial AI adoption
- **Regression Results:** Multivariate OLS controlling for GDP
- **Statistical Summary:** Spearman correlation, R², significance tests
- **Case Study:** Nigeria example showing policy pathways

### **PCA Methodology Tab**
- **Scree Plot:** Variance explained by each principal component
- **Correlation Matrix:** Heatmap of indicator correlations
- **Component Loadings:** How each indicator contributes to pillars
- **Eigenvalues:** Mathematical validation of model

---

## 🛠️ Technical Architecture

### **Data Flow**
```
raw_indicators.csv + country_metadata.csv
         ↓
   pipeline.py (PCA analysis)
         ↓
   data.json (generated output)
         ↓
   app.js (load & visualize)
         ↓
   index.html (render dashboard)
```

### **Key Files**

| File | Purpose |
|------|---------|
| `index.html` | Main HTML template with DOM structure |
| `app.js` | Core JavaScript: data loading, navigation, interactivity |
| `data.js` | Fallback data loading for file:// protocol |
| `styles.css` | Publication-quality responsive design |
| `data.json` | Generated PCA-weighted results (run pipeline.py to update) |

### **Browser Compatibility**
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (responsive design)

---

## 🎨 Customization

### Change Dashboard Title
Edit `index.html` line 7:
```html
<title>AIGRI | AI Governance Readiness Index for Africa</title>
```

### Modify Color Scheme
Edit `styles.css` CSS variables (top of file):
```css
:root {
    --color-primary: #2563eb;    /* Change pillar colors */
    --color-accent: #dc2626;     /* Change highlights */
    --color-bg: #ffffff;         /* Background */
}
```

### Update Dashboard Content
Edit `index.html` to add new sections or modify existing HTML.

---

## 📱 Responsive Design

The dashboard uses CSS Grid and Flexbox for mobile responsiveness:
- **Desktop (1200px+):** Sidebar + main content
- **Tablet (768px-1199px):** Collapsed sidebar with hamburger menu
- **Mobile (< 768px):** Full-width stacked layout

Test with browser DevTools: **F12 → Toggle Device Toolbar**

---

## 🔄 Updating Data

After modifying `data/raw_indicators.csv`:

1. **Regenerate results:**
   ```bash
   python src/pipeline.py
   ```

2. **Refresh dashboard in browser:**
   - Press `Ctrl+Shift+R` (hard refresh)
   - Or clear browser cache

3. **Verify changes:**
   - Check that country rankings updated
   - Verify new data appears in radar charts

---

## 🐛 Troubleshooting

### **Dashboard Won't Load**
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing mode
- Check browser console for errors (F12)

### **Data Not Updating**
- Verify `dashboard/data.json` exists
- Regenerate: `python src/pipeline.py`
- Hard refresh browser (Ctrl+Shift+R)

### **Charts Not Displaying**
- Check browser console (F12) for SVG errors
- Ensure `data.json` has correct structure
- Try different browser (Chrome, Firefox)

### **Mobile Layout Broken**
- Verify viewport meta tag in `index.html` line 5
- Test with DevTools mobile emulation
- Check CSS media queries in `styles.css`

---

## 🚀 Advanced: Adding New Features

### Add a New Visualization

1. **Add HTML element** in `index.html`:
```html
<section id="new-feature-section" class="main-panel">
    <h2>New Feature</h2>
    <div id="chart-container"></div>
</section>
```

2. **Add JavaScript function** in `app.js`:
```javascript
function renderNewChart(data) {
    const container = document.getElementById('chart-container');
    // Your visualization code
}
```

3. **Call in initialization** after `initializeDashboard()`:
```javascript
renderNewChart(aigriData);
```

### Add a New Data Field

1. **Update `data.json` structure** (requires modifying `src/pipeline.py`)
2. **Access in JavaScript:**
```javascript
const value = aigriData.countries[0].new_field;
```

---

## 📊 Data Structure (data.json)

```json
{
  "metadata": {
    "version": "1.0",
    "date": "2026-05-21",
    "countries_count": 30
  },
  "countries": [
    {
      "id": 1,
      "name": "Egypt",
      "region": "North",
      "rank": 1,
      "aigri_score": 7.8,
      "tier": "Pioneer",
      "pillar_scores": {
        "regulatory_capacity": 8.2,
        "enforcement": 7.5,
        "sovereignty": 7.8,
        "civic_space": 7.5
      },
      "indicators": [
        {"name": "Data Protection Law", "value": 9},
        ...
      ]
    },
    ...
  ],
  "pca_analysis": {
    "eigenvalues": [...],
    "loadings": {...},
    "scree_plot_data": [...]
  },
  "econometric_validation": {
    "correlation": 0.935,
    "p_value": 0.001,
    "regression_results": {...}
  }
}
```

---

## 🎓 Adding Tooltips and Help Text

Add descriptive tooltips to dashboard elements:

```html
<span class="tooltip" title="AIGRI Score: Combined assessment of all 4 pillars">
    ℹ️ Help
</span>
```

Style in `styles.css`:
```css
.tooltip {
    cursor: help;
    border-bottom: 1px dotted;
}

.tooltip:hover::after {
    content: attr(title);
    display: block;
    background: #333;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
}
```

---

## 🔐 Security Considerations

- **No user authentication** - dashboard is read-only
- **No backend API** - all data in `data.json`
- **No cookies/tracking** - pure HTML/CSS/JS
- **No external dependencies** - runs offline

Safe to host on any static hosting service (GitHub Pages, Netlify, Vercel).

---

## 📈 Performance

- **Bundle size:** ~50KB (all-in-one)
- **Load time:** < 1 second on 3G
- **Charts:** Rendered with native SVG (no canvas)
- **Memory:** < 10MB for full dataset

Optimizations:
- Lazy-load images
- Minify CSS/JS for production
- Cache data.json in browser storage (optional)

---

## 🌍 Internationalization (i18n)

To add multi-language support:

1. **Create language object in `app.js`:**
```javascript
const translations = {
  en: {
    title: "Country Rankings",
    search: "Search..."
  },
  sw: {
    title: "Ukadiriaji wa Nchi",
    search: "Tafuta..."
  }
};
```

2. **Update HTML dynamically:**
```javascript
function setLanguage(lang) {
  document.querySelector('h2').textContent = translations[lang].title;
}
```

---

## 📞 Support

- **Dashboard Issues:** Open [GitHub Issue](https://github.com/Salthacked/AI-Governance-Readiness-Index-for-Africa--AIGRI--2026/issues)
- **Feature Requests:** GitHub Discussions
- **Lead Researcher:** Oluwatobi Salami (salamitobimi@gmail.com)

---

**Lead Researcher:** Oluwatobi Salami | **Email:** salamitobimi@gmail.com

Last Updated: June 2026  
See [../README.md](../README.md) for project-wide documentation.
