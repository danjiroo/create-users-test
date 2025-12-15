import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  '*': { boxSizing: 'border-box' },
  '*:after': { boxSizing: 'border-box' },
  '*:before': { boxSizing: 'border-box' },
  body: {
    margin: 0,
    padding: 0,
    position: 'relative',
    bg: 'white',
    color: 'grey.500',
    height: 'full',
  },
  strong: {
    fontWeight: 600,
  },
  b: {
    fontWeight: 600,
  },
  html: {
    scrollBehavior: 'smooth',
    fontSmooth: 'never',
    height: 'full',
  },
  h1: { margin: 0 },
  h2: { margin: 0 },
  h3: { margin: 0 },
  h4: { margin: 0 },
  h5: { margin: 0 },
  h6: { margin: 0 },
  p: {
    margin: 0,
  },
});
