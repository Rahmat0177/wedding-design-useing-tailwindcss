module.exports = {
  mode: "jit",
  content: [
    "./public/*.html",
    "./public/**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        'old-rose-color' : '#c28b7c',
        'Mud-color'  : '#735241',
      },
      fontFamily:{
        SpaceMonoRegular: ["SpaceMono-Regular, sans-serif"],
        SpaceMonoItalic: ["SpaceMono-Italic, sans-serif"],
        SpaceMonoBold: ["SpaceMono-Bold, sans-serif"],
        SpaceMonoBoldItalic: ["SpaceMono-BoldItalic, sans-serif"],

        BioRhymeLight: ["BioRhyme-Light, sans-serif"],
        BioRhymeExtraLight: ["BioRhyme-ExtraLight, sans-serif"],
        BioRhymeRegular: ["BioRhyme-Regular, sans-serif"],
        BioRhymeBold: ["BioRhyme-Bold, sans-serif"],
        BioRhymeExtraBold: ["BioRhyme-ExtraBold, sans-serif"]

      },
    },
  },
  plugins: [],
}
