$.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/p\/(.+)$/,
  },
  start: function (m) {
    'use strict';

    return ('/g/' + m.path[1]).link()
  },
});

$.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/g\//,
  },
  ready: function () {
    'use strict';

    var a = $('#main-content a.btn.btn-default');
    return a.href.link()
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
