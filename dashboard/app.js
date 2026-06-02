// AIGRI Dashboard Application
// Interactivity, tab navigation, search filtering, and custom SVG Radar chart drawing

let aigriData = null;
let activeCountry = "Egypt"; // default to Egyptian top performer

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial Data Load (Check for global AIGRI_DATA from data.js first to support file:// protocol)
    if (typeof AIGRI_DATA !== "undefined" && AIGRI_DATA !== null) {
        console.log("Loading AIGRI data from global JS variable (local file mode)");
        aigriData = AIGRI_DATA;
        initializeDashboard();
    } else {
        console.log("AIGRI_DATA global not found, falling back to fetch('data.json')");
        fetch("data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                aigriData = data;
                initializeDashboard();
            })
            .catch(err => {
                console.error("Failed to load dashboard data:", err);
            });
    }

    // 2. Setup Navigation Routing
    setupNavigation();
});

function setupNavigation() {
    const tabs = {
        "btn-dashboard": "dashboard-section",
        "btn-econometrics": "econometrics-section",
        "btn-methodology": "methodology-section"
    };

    Object.keys(tabs).forEach(btnId => {
        const btn = document.getElementById(btnId);
        btn.addEventListener("click", () => {
            // Remove active status from all links
            Object.keys(tabs).forEach(id => {
                document.getElementById(id).classList.remove("active");
                document.getElementById(tabs[id]).classList.add("hidden");
            });

            // Set active
            btn.classList.add("active");
            document.getElementById(tabs[btnId]).classList.remove("hidden");
        });
    });
}

function initializeDashboard() {
    if (!aigriData) return;

    // Render ranks
    renderSidebarList(aigriData.profiles);

    // Populate comparison selector dropdown
    populateCompareDropdown();

    // Setup filter controls listeners
    const searchInput = document.getElementById("search-input");
    const regionSelect = document.getElementById("region-filter-select");
    const sortSelect = document.getElementById("sort-order-select");

    const handleFilters = () => {
        const query = searchInput.value.toLowerCase();
        const region = regionSelect.value;
        const sortBy = sortSelect.value;

        // Filter profiles
        let filtered = aigriData.profiles.filter(p => {
            const matchesSearch = p.country.toLowerCase().includes(query) || 
                                 p.region.toLowerCase().includes(query);
            const matchesRegion = region === "All" || p.region === region;
            return matchesSearch && matchesRegion;
        });

        // Sort profiles
        if (sortBy === "rank-asc") {
            filtered.sort((a, b) => a.rank - b.rank);
        } else if (sortBy === "rank-desc") {
            filtered.sort((a, b) => b.rank - a.rank);
        } else if (sortBy === "name-asc") {
            filtered.sort((a, b) => a.country.localeCompare(b.country));
        }

        const countBadge = document.getElementById("country-count");
        if (countBadge) {
            countBadge.textContent = `${filtered.length} Countr${filtered.length === 1 ? 'y' : 'ies'}`;
        }

        renderSidebarList(filtered);
    };

    searchInput.addEventListener("input", handleFilters);
    regionSelect.addEventListener("change", handleFilters);
    sortSelect.addEventListener("change", handleFilters);

    // Load static econometrics data
    renderEconometrics();

    // Load static methodology weights
    renderMethodology();

    // Setup compare select listener
    const compareSelect = document.getElementById("compare-country-select");
    compareSelect.addEventListener("change", (e) => {
        const compareVal = e.target.value;
        const profile = aigriData.profiles.find(p => p.country === activeCountry);
        const compareProfile = aigriData.profiles.find(p => p.country === compareVal);
        drawRadarChart(profile, compareProfile);
    });

    // Default select highest scoring
    if (aigriData.profiles.length > 0) {
        selectCountry(aigriData.profiles[0].country);
    }
}

function populateCompareDropdown() {
    const select = document.getElementById("compare-country-select");
    if (!select) return;
    select.innerHTML = '<option value="">Compare with...</option>';
    
    // Sort profiles alphabetically by country name
    const sortedProfiles = [...aigriData.profiles].sort((a, b) => a.country.localeCompare(b.country));
    
    sortedProfiles.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.country;
        opt.textContent = p.country;
        select.appendChild(opt);
    });
}

function renderSidebarList(profilesList) {
    const container = document.getElementById("rankings-container");
    container.innerHTML = "";

    if (profilesList.length === 0) {
        container.innerHTML = `<div class="rec-text" style="padding: 2rem; text-align: center; color: var(--text-muted);">No results found</div>`;
        return;
    }

    profilesList.forEach(p => {
        const item = document.createElement("div");
        item.className = `rank-item ${p.country === activeCountry ? 'active' : ''}`;
        
        let tierClass = "badge-lagging";
        if (p.tier === "Pioneers") tierClass = "badge-pioneer";
        else if (p.tier === "Emerging") tierClass = "badge-emerging";

        item.innerHTML = `
            <div class="rank-item-left">
                <span class="rank-number">${p.rank}</span>
                <div>
                    <div class="country-name">${p.country}</div>
                    <div class="country-subtext">${p.region} region</div>
                </div>
            </div>
            <div class="rank-item-right">
                <span class="rank-score">${p.score_pca.toFixed(1)}</span>
                <span class="tier-badge ${tierClass}">${p.tier}</span>
            </div>
        `;

        item.addEventListener("click", () => {
            selectCountry(p.country);
        });

        container.appendChild(item);
    });
}

function selectCountry(countryName) {
    activeCountry = countryName;
    const profile = aigriData.profiles.find(p => p.country === countryName);
    if (!profile) return;

    // 1. Update active state in sidebar ranks
    document.querySelectorAll(".rank-item").forEach(el => {
        const nameEl = el.querySelector(".country-name");
        if (nameEl && nameEl.textContent === countryName) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    // 2. Text Details
    document.getElementById("active-rank").textContent = `#${profile.rank}`;
    document.getElementById("active-country-name").textContent = profile.country;
    document.getElementById("active-region").textContent = `Region: ${profile.region}`;
    
    const tierBadge = document.getElementById("active-tier");
    tierBadge.textContent = profile.tier;
    tierBadge.className = "tier-badge";
    if (profile.tier === "Pioneers") tierBadge.classList.add("badge-pioneer");
    else if (profile.tier === "Emerging") tierBadge.classList.add("badge-emerging");
    else tierBadge.classList.add("badge-lagging");

    // 3. Numerical Indices
    document.getElementById("val-pca").textContent = profile.score_pca.toFixed(1);
    document.getElementById("val-ewi").textContent = profile.score_ewi.toFixed(1);

    // 4. Progress Fill Animations
    animateProgressBar("fill-p1", "score-p1", profile.pillar1);
    animateProgressBar("fill-p2", "score-p2", profile.pillar2);
    animateProgressBar("fill-p3", "score-p3", profile.pillar3);
    animateProgressBar("fill-p4", "score-p4", profile.pillar4);

    // 5. Recommendation Boxes
    document.getElementById("active-weakest-pillar").textContent = profile.weakest_pillar;
    document.getElementById("active-policy-recommendation").innerHTML = profile.policy_recommendation;

    // 6. Reset Compare Select and Draw Radar
    const compareSelect = document.getElementById("compare-country-select");
    if (compareSelect) {
        compareSelect.value = "";
        Array.from(compareSelect.options).forEach(opt => {
            if (opt.value === countryName) {
                opt.disabled = true;
                opt.style.display = "none";
            } else {
                opt.disabled = false;
                opt.style.display = "block";
            }
        });
    }

    drawRadarChart(profile);
}

function animateProgressBar(fillId, textId, targetVal) {
    const fill = document.getElementById(fillId);
    const text = document.getElementById(textId);
    if (fill) fill.style.width = targetVal + "%";
    if (text) text.textContent = targetVal.toFixed(1) + "%";
}

function drawRadarChart(profile, compareProfile = null) {
    const container = document.getElementById("radar-chart-container");
    if (!container) return;
    container.innerHTML = "";

    const w = 320;
    const h = 280;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = 90; // maximum radius representing 100%

    const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
    const scores = [profile.pillar1, profile.pillar2, profile.pillar3, profile.pillar4];
    const labels = ["Regulatory", "Enforcement", "Infrastructure", "Talent/Civic"];

    // Compute coordinates for active country data vertices
    const points = [];
    for (let i = 0; i < 4; i++) {
        const val = scores[i] / 100.0;
        const r = val * maxR;
        const x = cx + r * Math.cos(angles[i]);
        const y = cy + r * Math.sin(angles[i]);
        points.push({ x, y });
    }

    // Compute coordinates for compare country data vertices if selected
    let comparePoints = [];
    if (compareProfile) {
        const compareScores = [compareProfile.pillar1, compareProfile.pillar2, compareProfile.pillar3, compareProfile.pillar4];
        for (let i = 0; i < 4; i++) {
            const val = compareScores[i] / 100.0;
            const r = val * maxR;
            const x = cx + r * Math.cos(angles[i]);
            const y = cy + r * Math.sin(angles[i]);
            comparePoints.push({ x, y });
        }
    }

    // Build SVG Content
    let svgHtml = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow: visible;">`;
    
    // Draw concentric scale rings (25%, 50%, 75%, 100%)
    const ringLevels = [0.25, 0.50, 0.75, 1.0];
    ringLevels.forEach(level => {
        const r = level * maxR;
        let d = "";
        for (let i = 0; i < 4; i++) {
            const rx = cx + r * Math.cos(angles[i]);
            const ry = cy + r * Math.sin(angles[i]);
            d += `${i === 0 ? 'M' : 'L'} ${rx} ${ry} `;
        }
        d += "Z";
        svgHtml += `<path d="${d}" fill="none" stroke="hsla(222, 20%, 30%, 0.4)" stroke-dasharray="3,3" stroke-width="1"/>`;
    });

    // Draw axis lines extending from center
    for (let i = 0; i < 4; i++) {
        const rx = cx + maxR * Math.cos(angles[i]);
        const ry = cy + maxR * Math.sin(angles[i]);
        svgHtml += `<line x1="${cx}" y1="${cy}" x2="${rx}" y2="${ry}" stroke="hsla(222, 20%, 30%, 0.4)" stroke-width="1" />`;
    }

    // Draw Compare Data Polygon first (so active is drawn on top)
    if (compareProfile && comparePoints.length > 0) {
        let compPolyPath = "";
        comparePoints.forEach((p, idx) => {
            compPolyPath += `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y} `;
        });
        compPolyPath += "Z";

        svgHtml += `
            <defs>
                <linearGradient id="compPolyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--color-secondary)" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="var(--color-secondary)" stop-opacity="0.15" />
                </linearGradient>
            </defs>
            <path d="${compPolyPath}" fill="url(#compPolyGrad)" stroke="var(--color-secondary)" stroke-width="2" stroke-dasharray="4,4" filter="drop-shadow(0 0 4px rgba(255, 0, 255, 0.2))"/>
        `;
    }

    // Draw Active Data Polygon
    let polyPath = "";
    points.forEach((p, idx) => {
        polyPath += `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y} `;
    });
    polyPath += "Z";

    // Polygon Fill & Glow Stroke
    svgHtml += `
        <defs>
            <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.25" />
                <stop offset="100%" stop-color="var(--color-secondary)" stop-opacity="0.25" />
            </linearGradient>
        </defs>
        <path d="${polyPath}" fill="url(#polyGrad)" stroke="var(--color-primary)" stroke-width="2.5" filter="drop-shadow(0 0 6px var(--color-primary-glow))"/>
    `;

    // Draw comparison data vertex points
    if (compareProfile) {
        comparePoints.forEach(p => {
            svgHtml += `<circle cx="${p.x}" cy="${p.y}" r="3" fill="#ffffff" stroke="var(--color-secondary)" stroke-width="1"/>`;
        });
    }

    // Draw active data vertex points
    points.forEach(p => {
        svgHtml += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#ffffff" stroke="var(--color-primary)" stroke-width="1.5"/>`;
    });

    // Render Axis Labels
    const labelOffsets = [
        { x: 0, y: -12 },   // Top
        { x: 10, y: 4 },    // Right
        { x: 0, y: 16 },    // Bottom
        { x: -10, y: 4 }    // Left
    ];

    for (let i = 0; i < 4; i++) {
        const rx = cx + (maxR + 10) * Math.cos(angles[i]) + labelOffsets[i].x;
        const ry = cy + (maxR + 10) * Math.sin(angles[i]) + labelOffsets[i].y;
        
        let anchor = "middle";
        if (i === 1) anchor = "start";
        if (i === 3) anchor = "end";

        svgHtml += `<text x="${rx}" y="${ry}" fill="var(--text-secondary)" font-size="11" font-weight="600" text-anchor="${anchor}">${labels[i]}</text>`;
    }

    svgHtml += `</svg>`;
    container.innerHTML = svgHtml;
}

function renderEconometrics() {
    if (!aigriData) return;

    const corrs = aigriData.correlations;
    const reg = aigriData.regression_coefficients;

    // Pearson / Spearman scores
    document.getElementById("corr-adoption-pearson").textContent = corrs.ai_adoption_index.pearson.toFixed(3);
    document.getElementById("corr-adoption-spearman").textContent = corrs.ai_adoption_index.spearman.toFixed(3);
    
    document.getElementById("corr-ict-pearson").textContent = corrs.ict_development_index.pearson.toFixed(3);
    document.getElementById("corr-ict-spearman").textContent = corrs.ict_development_index.spearman.toFixed(3);
    
    document.getElementById("corr-investment-pearson").textContent = corrs.ai_investment_usd_m.pearson.toFixed(3);
    document.getElementById("corr-investment-spearman").textContent = corrs.ai_investment_usd_m.spearman.toFixed(3);

    // OLS Equation Text
    document.getElementById("regression-formula").textContent = 
        `AI_Adoption = ${reg.intercept.coef.toFixed(2)} + (${reg.aigri_coef.coef.toFixed(3)} · AIGRI) + (${reg.log_gdp_coef.coef.toFixed(2)} · Log_GDP_Capita)`;
        
    // Optionally add significance data if a container exists
    const statsContainer = document.getElementById("regression-stats");
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 10px;">
                <p><strong>AIGRI Coefficient:</strong> $\\beta_1 = ${reg.aigri_coef.coef.toFixed(3)}$ (SE: ${reg.aigri_coef.se.toFixed(3)}, p: ${reg.aigri_coef.p.toFixed(4)})</p>
                <p><strong>Log_GDP Coefficient:</strong> $\\beta_2 = ${reg.log_gdp_coef.coef.toFixed(3)}$ (SE: ${reg.log_gdp_coef.se.toFixed(3)}, p: ${reg.log_gdp_coef.p.toFixed(4)})</p>
            </div>
        `;
    }
    // Sensitivity Analysis Rendering
    if (aigriData.sensitivity_analysis) {
        const sens = aigriData.sensitivity_analysis;
        const rankCorrs = sens.rank_correlations;
        
        document.getElementById("sens-pca-vs-ewi").textContent = rankCorrs.pca_vs_ewi.toFixed(4);
        document.getElementById("sens-pca-vs-infra").textContent = rankCorrs.pca_vs_infra_dropped.toFixed(4);
        document.getElementById("sens-ewi-vs-infra").textContent = rankCorrs.ewi_vs_infra_dropped.toFixed(4);
        
        const tierChangesCount = sens.tier_changes_pca_vs_ewi;
        const countEl = document.getElementById("sens-tier-changes-count");
        if (countEl) {
            countEl.textContent = tierChangesCount;
        }

        const containerEl = document.getElementById("sens-changes-detail-container");
        const listEl = document.getElementById("sens-changes-list");
        if (containerEl && listEl) {
            if (tierChangesCount > 0 && sens.tier_changes_detail && sens.tier_changes_detail.length > 0) {
                containerEl.style.display = "block";
                listEl.innerHTML = "";
                sens.tier_changes_detail.forEach(change => {
                    const li = document.createElement("li");
                    li.style.color = "var(--text-secondary)";
                    li.style.fontSize = "0.9rem";
                    li.innerHTML = `• <strong>${change.country}</strong>: PCA Tier: <span class="tier-label" style="color: var(--color-primary); font-weight:600;">${change.pca_tier}</span> → EWI Tier: <span class="tier-label" style="color: var(--color-secondary); font-weight:600;">${change.ewi_tier}</span>`;
                    listEl.appendChild(li);
                });
            } else {
                containerEl.style.display = "none";
                listEl.innerHTML = "";
            }
        }
    }
}

function renderMethodology() {
    if (!aigriData) return;

    document.getElementById("pca-variance-text").textContent = aigriData.pca_variance_explained_pc1.toFixed(1) + "%";

    const weightsContainer = document.getElementById("pca-weights-list");
    if (!weightsContainer) return;
    weightsContainer.innerHTML = "";

    const labels = {
        "Pillar_1_Regulatory_Safeguards": "Pillar 1: Regulatory Safeguards & Data Rights",
        "Pillar_2_Enforcement_Capacity": "Pillar 2: Enforcement & Institutional Capacity",
        "Pillar_3_Infrastructure_Sovereignty": "Pillar 3: Infrastructural & Linguistic Sovereignty",
        "Pillar_4_Talent_Civic_Space": "Pillar 4: Talent, Human Capital & Civic Space"
    };

    Object.keys(aigriData.weights).forEach(k => {
        const val = aigriData.weights[k] * 100.0;
        const row = document.createElement("div");
        row.className = "weight-row";
        row.innerHTML = `
            <div class="weight-labels">
                <span class="weight-name">${labels[k]}</span>
                <span class="weight-value">${val.toFixed(1)}%</span>
            </div>
            <div class="weight-track">
                <div class="weight-fill" style="width: ${val}%"></div>
            </div>
        `;
        weightsContainer.appendChild(row);
    });
}
