module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // Asegúrate de que esté esta línea
    require('autoprefixer'),
  ],
};