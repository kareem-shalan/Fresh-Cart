/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { zIndex: {
      '50000': '50000',
    }},
   
    
  },
  plugins: [],
};
