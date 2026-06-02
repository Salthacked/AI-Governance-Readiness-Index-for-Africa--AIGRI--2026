import json
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np
import os

# Set publication quality style
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_context("paper", font_scale=1.2)

def generate_plots():
    print("Generating high-resolution academic figures...")
    
    # Ensure directory exists
    os.makedirs('paper/figures', exist_ok=True)
    
    with open('dashboard/data.json', 'r') as f:
        data = json.load(f)
        
    profiles = pd.DataFrame(data['profiles'])
    metadata = pd.read_csv('data/country_metadata.csv')
    df = profiles.merge(metadata, on='country')
    
    # ---------------------------------------------------------
    # Figure 1: AIGRI vs AI Adoption Scatter Plot
    # ---------------------------------------------------------
    plt.figure(figsize=(8, 6))
    ax = sns.regplot(x='score_pca', y='ai_adoption_index', data=df, 
                     scatter_kws={'alpha':0.6, 's':50}, 
                     line_kws={'color':'#d62728', 'linewidth':2})
    
    # Annotate top/bottom countries and key hubs
    for idx, row in df.iterrows():
        if row['rank'] <= 3 or row['rank'] >= 28 or row['country'] in ['Nigeria', 'Kenya']:
            plt.text(row['score_pca']+0.5, row['ai_adoption_index'], row['country'], fontsize=9, alpha=0.8)
            
    plt.title('Figure 1: AI Governance Readiness vs. Commercial AI Adoption', fontsize=14, fontweight='bold', pad=15)
    plt.xlabel('AI Governance Readiness Index (AIGRI) Score', fontsize=12)
    plt.ylabel('AI Adoption Index (Tortoise Media)', fontsize=12)
    plt.tight_layout()
    plt.savefig('paper/figures/fig1_adoption_scatter.png', dpi=300)
    print("  -> Saved paper/figures/fig1_adoption_scatter.png")
    
    # ---------------------------------------------------------
    # Figure 2: Pillar Correlation Heatmap
    # ---------------------------------------------------------
    plt.figure(figsize=(7, 6))
    corr_cols = ['pillar1', 'pillar2', 'pillar3', 'pillar4']
    corr_df = df[corr_cols].corr(method='spearman')
    labels = ['Regulatory\nSafeguards', 'Enforcement\nCapacity', 'Infrastructure\nSovereignty', 'Talent &\nCivic Space']
    
    # Create mask for upper triangle
    mask = np.triu(np.ones_like(corr_df, dtype=bool))
    
    sns.heatmap(corr_df, annot=True, mask=mask, cmap='Blues', vmin=0.4, vmax=1.0, fmt=".2f", 
                xticklabels=labels, yticklabels=labels, square=True, cbar_kws={"shrink": .8})
    plt.title('Figure 2: Spearman Correlation Heatmap of Index Pillars', fontsize=14, fontweight='bold', pad=15)
    plt.tight_layout()
    plt.savefig('paper/figures/fig2_pillar_correlation.png', dpi=300)
    print("  -> Saved paper/figures/fig2_pillar_correlation.png")
    
    # ---------------------------------------------------------
    # Figure 3: Bar Chart of Rankings
    # ---------------------------------------------------------
    plt.figure(figsize=(10, 8))
    # Sort backwards for horizontal bar chart
    df_sorted = df.sort_values('score_pca', ascending=True)
    
    # Create custom color mapping based on tier
    color_map = {'Pioneers': '#1f77b4', 'Emerging': '#ff7f0e', 'Lagging': '#d62728'}
    colors = [color_map[tier] for tier in df_sorted['tier']]
    
    bars = plt.barh(df_sorted['country'], df_sorted['score_pca'], color=colors, alpha=0.8)
    
    # Add value labels to the end of bars
    for bar in bars:
        width = bar.get_width()
        plt.text(width + 0.5, bar.get_y() + bar.get_height()/2, f'{width:.1f}', 
                 ha='left', va='center', fontsize=9)
                 
    plt.xlabel('AIGRI Score (0-100)', fontsize=12)
    plt.title('Figure 3: AI Governance Readiness Index by Tier', fontsize=14, fontweight='bold', pad=15)
    
    # Add a custom legend
    from matplotlib.patches import Patch
    legend_elements = [Patch(facecolor=color_map['Pioneers'], label='Pioneers'),
                       Patch(facecolor=color_map['Emerging'], label='Emerging'),
                       Patch(facecolor=color_map['Lagging'], label='Lagging')]
    plt.legend(handles=legend_elements, loc='lower right', frameon=True)
    
    # Remove top and right spines
    sns.despine()
    
    plt.tight_layout()
    plt.savefig('paper/figures/fig3_rankings_bar.png', dpi=300)
    print("  -> Saved paper/figures/fig3_rankings_bar.png")

if __name__ == '__main__':
    generate_plots()
