$.register({
  rule: {
    host: /^(www\.)?empireload\.com$/,
    path: /^(\/images(\/files\/\w)?)\/.\.php$/,
    query: /^\?link=(.+)$/,
  },
  start: function (m) {
    'use strict';

    return (m.path[1] + '/link/' + m.query[1]).image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
