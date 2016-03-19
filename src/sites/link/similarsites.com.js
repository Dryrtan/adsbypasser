$.register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/,
  },
  start: function (m) {
    'use strict';

    var l = m.path[1];
    if (!/^https?:\/\//.test(l)) {
      l = 'http://' + l;
    }

    return l.link();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
