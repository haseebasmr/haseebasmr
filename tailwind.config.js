/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pallet1: "#27374D",
        pallet2: "#526D82",
        pallet3: "#9DB2BF",
        pallet4: "#DDE6ED",
        tempbg: "#999d9e",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('/src/assets/images/backgroundPic.jpg')",
      },
    },
  },
  plugins: [],
};
