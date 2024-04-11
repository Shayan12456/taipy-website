// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      code: ['var(--font-code)', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      34: '34px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      56: '56px',
      64: '64px',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      dense: '1.125',
      snugger: '1.4',
    },
    letterSpacing: {
      tighter: '-0.06em',
      tight: '-0.04em',
      snug: '-0.02em',
    },
    backgroundImage: {
      ...defaultTheme.backgroundImage,
      'gradient-border':
        'linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%), linear-gradient(182.49deg, rgba(255, 255, 255, 0.5) -7.22%, rgba(255, 255, 255, 0.0498282) 2.63%, rgba(255, 255, 255, 0) 4.07%)',
      'gradient-grey-border':
        'linear-gradient(180deg, #2A2A2D 0%,rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-center-bottom-orange-border':
        'conic-gradient(from 90deg at 55% 53%, #71C4FF00 1%, rgba(255, 102, 26, 0.25) 22%, #71C4FF00 56%, #71C4FF00 62%), linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-left-bottom-orage-border':
        'conic-gradient(from 150deg at 50% 50%, #71C4FF00 4%, rgba(255, 102, 26, 0.25) 24%, #71C4FF00 34%, #71C4FF00 56%), linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-right-top-orage-border':
        'conic-gradient(from 330deg at 50% 50%, #71C4FF00 4%, rgba(255, 102, 26, 0.25) 24%, #71C4FF00 34%, #71C4FF00 56%), linear-gradient(0deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-center-bottom-orange':
        'linear-gradient(180deg, rgba(255, 102, 26, 0) 35%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-left-bottom-orange':
        'linear-gradient(242.12deg, rgba(255, 102, 26, 0) 65%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-right-bottom-orange':
        'linear-gradient(117.88deg, rgba(255, 102, 26, 0) 75%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-right-top-orange':
        'linear-gradient(62.12deg, rgba(255, 102, 26, 0) 65%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-grey-10':
        'linear-gradient(0deg, #18181B, #18181B), radial-gradient(93.11% 55.91% at 100% 0%, rgba(148, 148, 148, 0.06) 0%, rgba(149, 149, 149, 0) 100%)',
      'gradient-grey':
        'linear-gradient(0deg, #1B1B1D, #1B1B1D), radial-gradient(93.11% 55.91% at 100% 0%, rgba(204, 204, 204, 0.09) 0%, rgba(204, 204, 204, 0) 100%)',
      'gradient-digit': 'linear-gradient(90deg, #ff462b 0%, rgba(0, 0, 0, 0) 160%)',
      'gradient-card':
        'radial-gradient(917.24% 246.32% at 47.18% 11.09%, #151518 0%, rgba(18, 18, 21, 0.72) 45.26%, rgba(17, 17, 19, 0.00) 59.74%)',
      'gradient-about-digit':
        'radial-gradient(676.47% 85.18% at 50% 50%, #FF5F47 0%, #FF3E22 30.13%, rgba(255, 70, 43, 0.30) 100%);',
    },

    boxShadow: {
      btn: '0 8px 20px 0 rgba(255, 70, 43, 0.32)',
    },

    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0b0b0e',
      white: '#ffffff',
      primary: {
        red: '#ff371a',
      },
      secondary: {
        blue: '#72bff1',
      },
      orange: {
        1: '#ff462b',
        5: 'rgba(255, 70, 43, 0.08)',
        70: '#eca979',
      },
      grey: {
        10: '#18181b',
        15: '#22222a',
        20: '#2e2e38',
        30: '#454554',
        40: '#61616b',
        50: '#797986',
        60: '#94949e',
        70: '#afafb6',
        80: '#c7c7d1',
        90: '#e2e2e9',
        94: '#ededf2',
        98: '#f9f9fb',
        99: '#131315',
      },
      code: {
        blue: '#5199f7',
        green: '#8cd8d0',
        purple: '#a57ccd',
        orange: '#e2aa80',
      },
      semitones: {
        red: '#ec6856',
        purple: '#b6c6fa',
      },
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'input-grey': 'rgba(153, 153, 153, 0.10)',
      'hero-btn-enterprise': 'rgba(176, 60, 43, 0.80)',
      'shadow-red': '#EF270A',
      'watch-btn-hover': 'rgba(255, 70, 43, 0.16)',
    }),
    screens: {
      xxl: { max: '1919px' },
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('tailwindcss-safe-area'),
    require('@tailwindcss/typography'),
  ],
};
