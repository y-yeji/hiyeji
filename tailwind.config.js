/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KR: ["Pretendard-Regular", "sans-serif"],
        EN: ["Poppins", "serif"],
      },
      colors: {
        "red-73": "#FD7590",
        "red-57": "#E93B81",
        "red-49": "#F9004D",
        "red-48": "#DA251C",
        "red-60": "#F26241",
        "grey-20": "#333333",
        "grey-33": "#555555",
        "grey-47": "#777777",
        "grey-60": "#999999",
        "grey-97": "#FEFAF0",
        "grey-94": "#F0F0F0",
        "grey-96": "#F5F5F5",
        "grey-93": "#F0F2E9",
        "green-13": "#034001",
        "green-27": "#1A6F4E",
        "green-53": "#5CB45C",
        "green-81": "#B1EADB",
        "green-68": "#B6E179",
        "green-23": "#027333",
        "green-40": "#2EA058",
        "blue-60": "#346AFF",
        "violet-70": "#C17CEB",
      },
    },
  },
  plugins: [],
};
