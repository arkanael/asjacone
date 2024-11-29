/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: '#11324d',
        customBlue2: '#3f5f7a',
      },
      screens: {
        'xs': '480px',  // Adiciona um novo breakpoint para telas extra pequenas
        'sm': '640px',  // Tela pequena padrão do Tailwind
        'md': '768px',  // Tela média padrão do Tailwind
        'lg': '1024px', // Tela grande padrão do Tailwind
        'xl': '1280px', // Tela extra grande padrão do Tailwind
        '2xl': '1536px', // Tela 2x extra grande padrão do Tailwind
      },
    },
  },
  plugins: [],
}
