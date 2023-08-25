import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        container: "1520px",
        contentContainer: "1280px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2x1": "1400px",
      },
      boxShadow: {
        bannerShadow: "0 1px 2px 1px #00000026",
        containerShadow: "0 1px 2px 1px #00000026"
      },
    },
  },
  fonts: [
    {
      name: 'Exo 2',
      files: {
        regular: '/fonts/exo2-regular.woff2', // Путь к файлу шрифта
      },
      styles: {
        regular: {
          normal: {
            weight: 400,
            style: 'normal',
          },
        },
      },
    },
    // Добавьте блоки для других стилей шрифта (жирный, курсив и т.д.), если они нужны
  ],
  plugins: [],
}
export default config
