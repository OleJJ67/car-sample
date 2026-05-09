@import "tailwindcss";

@theme {
  --color-primary: #C5A059; /* Gold */
  --color-on-primary: #121212;
  --color-primary-container: rgba(197, 160, 89, 0.1);
  --color-on-primary-container: #C5A059;
  
  --color-secondary: #E0DCD5; /* Cream */
  --color-on-secondary: #121212;
  
  --color-surface: #121212;
  --color-surface-container: rgba(255, 255, 255, 0.02);
  --color-surface-container-low: #0e0e0e;
  --color-surface-container-high: rgba(255, 255, 255, 0.05);
  --color-surface-container-highest: rgba(255, 255, 255, 0.08);
  
  --color-outline: rgba(255, 255, 255, 0.1);
  --color-outline-variant: rgba(197, 160, 89, 0.3);
  
  --font-display: "Playfair Display", serif;
  --font-serif: "Playfair Display", serif;
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --spacing-gutter: 24px;
  --spacing-margin-desktop: 80px;
  --spacing-margin-mobile: 20px;
  --spacing-section-gap: 120px;
}

@layer base {
  body {
    @apply bg-surface text-secondary font-sans antialiased;
  }
}

@layer utilities {
  .glass-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
  }
  
  .vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .gold-text {
    color: #C5A059;
  }

  .tint-gradient {
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.98) 100%);
  }
}
