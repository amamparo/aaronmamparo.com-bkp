import {sveltekit} from '@sveltejs/kit/vite';
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.cjs'

const config = {
  plugins: [sveltekit()],
  css: {
    postcss: {
      plugins: [tailwindcss(tailwindConfig), autoprefixer()],
    },
  }
};

export default config;
