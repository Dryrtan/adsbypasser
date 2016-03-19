(function () {
  'use strict';

  $.register({
    rule: {
      host: /^(www\.)?fundurl\.com$/,
      query: /i=([^&]+)/,
    },
    start: function (m) {
      return m.query[1].link();
    },
  });

  $.register({
    rule: {
      host: /^(www\.)?fundurl\.com$/,
      path: /^\/(go-\w+|load\.php)$/,
    },
    ready: function () {
      var f = $('iframe[name=fpage3]');
      return f.src.link();
    },
  });

})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
