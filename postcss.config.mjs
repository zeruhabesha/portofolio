// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer'; // Added import

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(), // Added autoprefixer
  ],
};