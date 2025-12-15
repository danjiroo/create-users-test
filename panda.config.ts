import { defineConfig } from '@pandacss/dev';
import { globalCss } from './panda/';

export default defineConfig({
  preflight: true,
  outdir: 'styled-system',
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  globalCss,
  theme: {},
});
