'use strict';

import loadPolyfills from '../kahlu/load_polyfills';
import { start } from '../kahlu/common';

start();

function loaded() {
  const TimelineContainer = require('../kahlu/containers/timeline_container').default;
  const React             = require('react');
  const ReactDOM          = require('react-dom');
  const mountNode         = document.getElementById('kahlu-timeline');

  if (mountNode !== null) {
    const props = JSON.parse(mountNode.getAttribute('data-props'));
    ReactDOM.render(<TimelineContainer {...props} />, mountNode);
  }
}

function main() {
  const ready = require('../kahlu/ready').default;
  ready(loaded);
}

loadPolyfills().then(main).catch(error => {
  console.error(error);
});
