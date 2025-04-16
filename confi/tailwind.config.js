module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // Añadir esta línea
    require('autoprefixer'),
  ],
}