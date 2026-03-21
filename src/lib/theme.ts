/**
 * MODULAR THEME SYSTEM
 * ---
 * To switch themes: change `activeTheme` at the bottom.
 * To add a theme: add a new entry to `themes` object.
 */

export type Theme = {
  name: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  accent1: string;
  accent2: string;
  accent3: string;
  gradientHero: string;
  gradientButton: string;
  gradientCard: string;
  gradientBody: string;
  navBg: string;
  navBorder: string;
  navButtonGradient: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  glowColor: string;
  glowColorRgb: string;
};

const themes: Record<string, Theme> = {
  /** ━━━ OBSIDIAN EMERALD ━━━  Rich dark with emerald + warm gold */
  obsidianEmerald: {
    name: 'Obsidian Emerald',
    bgPrimary: '#0a0f0d',
    bgSecondary: 'rgba(255,255,255,0.035)',
    bgTertiary: 'rgba(255,255,255,0.07)',
    accent1: '#34d399',    // emerald-400
    accent2: '#fbbf24',    // amber-400
    accent3: '#a78bfa',    // violet-400
    gradientHero: 'linear-gradient(135deg, #34d399, #10b981, #059669)',
    gradientButton: 'linear-gradient(135deg, #059669, #10b981, #34d399)',
    gradientCard: 'linear-gradient(135deg, rgba(52,211,153,0.08), rgba(16,185,129,0.08))',
    gradientBody: 'radial-gradient(ellipse at 15% 25%, #0d2818 0%, #0a1a12 30%, #0a0f0d 60%, #080d0b 100%)',
    navBg: 'rgba(10,15,13,0.85)',
    navBorder: 'rgba(52,211,153,0.1)',
    navButtonGradient: 'linear-gradient(135deg, #059669, #10b981)',
    textPrimary: '#f0fdf4',
    textSecondary: '#a7f3d0',
    textMuted: '#6ee7b7',
    glowColor: '#10b981',
    glowColorRgb: '16,185,129',
  },

  /** ━━━ MIDNIGHT AURORA ━━━  Deep blue-violet with electric teal */
  midnightAurora: {
    name: 'Midnight Aurora',
    bgPrimary: '#06081a',
    bgSecondary: 'rgba(255,255,255,0.04)',
    bgTertiary: 'rgba(255,255,255,0.08)',
    accent1: '#38bdf8',
    accent2: '#818cf8',
    accent3: '#c084fc',
    gradientHero: 'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)',
    gradientButton: 'linear-gradient(135deg, #38bdf8, #6366f1)',
    gradientCard: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))',
    gradientBody: 'radial-gradient(ellipse at 20% 30%, #1e1b4b 0%, #0f172a 40%, #06081a 70%, #020617 100%)',
    navBg: 'rgba(6,8,26,0.75)',
    navBorder: 'rgba(56,189,248,0.12)',
    navButtonGradient: 'linear-gradient(135deg, #38bdf8, #6366f1)',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    glowColor: '#6366f1',
    glowColorRgb: '99,102,241',
  },

  /** ━━━ CYBER NEON ━━━  Dark with hot pink + electric teal */
  cyberNeon: {
    name: 'Cyber Neon',
    bgPrimary: '#0a0a0f',
    bgSecondary: 'rgba(255,255,255,0.04)',
    bgTertiary: 'rgba(255,255,255,0.08)',
    accent1: '#22d3ee',
    accent2: '#f43f5e',
    accent3: '#a3e635',
    gradientHero: 'linear-gradient(135deg, #22d3ee, #f43f5e, #a3e635)',
    gradientButton: 'linear-gradient(135deg, #f43f5e, #ec4899)',
    gradientCard: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(244,63,94,0.15))',
    gradientBody: 'radial-gradient(ellipse at 30% 40%, #1a0a2e, #0f0a1a 45%, #0a0a0f 80%, #050510 100%)',
    navBg: 'rgba(10,10,15,0.8)',
    navBorder: 'rgba(244,63,94,0.15)',
    navButtonGradient: 'linear-gradient(135deg, #f43f5e, #ec4899)',
    textPrimary: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    glowColor: '#f43f5e',
    glowColorRgb: '244,63,94',
  },
};

// ──────────────────────────────────────────────
// 🎨 CHANGE THEME HERE
// Options: 'obsidianEmerald' | 'midnightAurora' | 'cyberNeon'
// ──────────────────────────────────────────────
export const activeTheme: Theme = themes.obsidianEmerald;

export default themes;
