$.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/,
  },
  start: function () {
    'use strict';

    $.window._impspcabe = 0;
  },
  ready: function () {
    'use strict';

    var l = $('#skip .bt');
    return l.href.link();
  },
});

$.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /=(.+)$/,
  },
  start: function (m) {
    'use strict';

    return m.path[1].link();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
