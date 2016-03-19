$.register({
  rule: [
    {
      host: /^a\.pomf\.se$/,
      path: /^\/.+\.htm$/,
      // filter lbGate
      query: /^$/,
    },
    {
      host: /^empireload\.com$/,
      path: /^\/sexy\/.+\.htm$/,
      // filter lbGate
      query: /^$/,
    },
  ],
  ready: function () {
    'use strict';

    var a = $.$('body > a');
    if (a) {
      return a.href.image();
    }
    $.removeNodes('#boxes, iframe');
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
