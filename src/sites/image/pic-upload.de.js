$.register({
  rule: 'http://www.pic-upload.de/view-*.html',
  ready: function () {
    'use strict';

    $.removeNodes('.advert');
    var i = $('img.preview_picture_2b, img.original_picture_2b');
    return i.src.image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
