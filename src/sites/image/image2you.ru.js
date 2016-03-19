$.register({
  rule: {
    host: /^image2you\.ru$/,
    path: /^\/\d+\/\d+/,
  },
  ready: function () {
    'use strict';

    var i = $.$('div.t_tips2 div > img');
    if (!i) {
      $.openLink('', {
        post: {
          _confirm: '',
        },
      });
      return;
    }
    return i.src.image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
