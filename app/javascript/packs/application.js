import loadPolyfills from '../kahlu/load_polyfills';
import { start } from '../kahlu/common';

start();

loadPolyfills().then(() => {
  require('../kahlu/main').default();
}).catch(e => {
  console.error(e);
});
