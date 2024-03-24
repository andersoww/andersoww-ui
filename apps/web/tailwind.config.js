/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "node_modules/@andersoww/roque-ui/dist/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

