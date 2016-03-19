(function () {
  'use strict';

  function hostMapper (host) {
    switch (host) {
    case 'bk-ddl.net':
    case 'disingkat.in':
      return function () {
        var a = $('a.btn-block.redirect');
        return a.href;
      };
    case 'link.animagz.org':
      return function () {
        var a = $('a.redirect');
        a = a.onclick.toString();
        a = a.match(/window\.open \('([^']+)'\)/);
        return a[1];
      };
    case 'coeg.in':
      return function () {
        var a = $('.link a');
        return a.href;
      };
    default:
      return null;
    }
  }

  $.register({
    rule: {
      host: [
        /^bk-ddl\.net$/,
        /^link\.animagz\.org$/,
        /^coeg\.in$/,
        /^disingkat\.in$/,
      ],
      path: /^\/\w+$/,
    },
    ready: function (m) {
      var mapper = hostMapper(m.host[0]);
      var b64 = mapper().match(/\?r=(\w+={0,2}?)/);

      return atob(b64[1]).link();
    },
  });

})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
