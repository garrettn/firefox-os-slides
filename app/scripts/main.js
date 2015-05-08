/* jshint devel:true */
/* global Reveal, hljs, Datamap */

'use strict';

Reveal.initialize({
  history: true
});

document.addEventListener('DOMContentLoaded', function () {
  hljs.initHighlightingOnLoad();
});

Reveal.addEventListener('on-map-slide', function () {
  window.deviceMap = window.deviceMap || new Datamap({
    element: document.querySelector('.map-ffos-devices'),
    projection: 'mercator',
    fills: {
      hasDevice: '#fc8d59',
      defaultFill: '#abdda4'
    },
    data: {
      ARG: {fillKey: 'hasDevice', devices: 1},
      AUS: {fillKey: 'hasDevice', devices: 1},
      BGD: {fillKey: 'hasDevice', devices: 1},
      BEL: {fillKey: 'hasDevice', devices: 1},
      BRA: {fillKey: 'hasDevice', devices: 2},
      CHL: {fillKey: 'hasDevice', devices: 2},
      COL: {fillKey: 'hasDevice', devices: 3},
      CRI: {fillKey: 'hasDevice', devices: 1},
      CZE: {fillKey: 'hasDevice', devices: 1},
      SLV: {fillKey: 'hasDevice', devices: 1},
      FRA: {fillKey: 'hasDevice', devices: 1},
      DEU: {fillKey: 'hasDevice', devices: 3},
      GRC: {fillKey: 'hasDevice', devices: 2},
      GTM: {fillKey: 'hasDevice', devices: 1},
      HUN: {fillKey: 'hasDevice', devices: 1},
      IND: {fillKey: 'hasDevice', devices: 4},
      ITA: {fillKey: 'hasDevice', devices: 1},
      JPN: {fillKey: 'hasDevice', devices: 1},
      LUX: {fillKey: 'hasDevice', devices: 1},
      MKD: {fillKey: 'hasDevice', devices: 1},
      MEX: {fillKey: 'hasDevice', devices: 4},
      MNE: {fillKey: 'hasDevice', devices: 2},
      MMR: {fillKey: 'hasDevice', devices: 1},
      NIC: {fillKey: 'hasDevice', devices: 1},
      PAN: {fillKey: 'hasDevice', devices: 1},
      PER: {fillKey: 'hasDevice', devices: 4},
      PHL: {fillKey: 'hasDevice', devices: 1},
      POL: {fillKey: 'hasDevice', devices: 2},
      RUS: {fillKey: 'hasDevice', devices: 2},
      SRB: {fillKey: 'hasDevice', devices: 1},
      ZAF: {fillKey: 'hasDevice', devices: 1},
      ESP: {fillKey: 'hasDevice', devices: 2},
      CHE: {fillKey: 'hasDevice', devices: 1},
      GBR: {fillKey: 'hasDevice', devices: 1},
      URY: {fillKey: 'hasDevice', devices: 4},
      VEN: {fillKey: 'hasDevice', devices: 2}
    }
  });
});
