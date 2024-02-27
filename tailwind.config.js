/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components-landing/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      height : {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      width : {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      fontFamily: {
        poppins : ['Poppins','sans-serif']
      },
      colors : {
        darkPurple : '#241B3E',
        btnPurple : '#220772',
        lightPurple :'#6137DB',
        smallText : '#ADA9B8',
        themePurple: "#6E48D5",
        somePurple: '#2E2547',
        elementGradOne : '#0A0A0A' ,
        elementGradTwo : '#1E143A',
        smallDiv : '#0E0A18',
        lightPurpleText : "#9A79F7",
        spanBg : '#16161C',
        lightText :'#AC90FB',
        verySmallText: '#716690',
        borderColor: '#2A2538',
        goldenShade : '#EDB371',
        darkGolden : '#6E4628',
        paymentPurple: '#9A8BC3',
        darkPaymentPurple: '#3F3855',
        goldenTextColor : "#FFC27B",
        goldenLightText : '#C3A38B'
      },
      spacing :{
        '8': '3rem',
        '50':'10rem',
        '75' : '15rem',
        '100': '25rem', 
        '120': '30rem',
      },
 
    },
    screens: {
      'max-xsm': {'max': '400px'},
      'max-sm': {'max': '639px'},
      'max-md': {'max': '767px'},
      'max-lg': {'max': '1023px'},
      'max-xl': {'max': '1279px'},
      'min-md-max-lg': {'min': '768px', 'max': '1023px'},
    },
  },
  plugins: [
  ],
}

