module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.send.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
