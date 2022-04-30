module.exports = {
  // 이 아래 적는 내용은 Tailwind에게 우리가 어떤 파일에서 tailwind를 사용했는지 알려준다.
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'media', //class
  plugins: [],
};
