var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

var toolkit = require('./misc/toolkit.js');

var image = require('../src/util/image.js');

var factory = toolkit.createFactory(image);


describe('image', function () {
  'use strict';

  before(function (done) {
    this.browser = new Browser();
    this.server = toolkit.createServer(done);
  });

  after(function () {
    this.server.close();
  });

  afterEach(function () {
    this.browser.tabs.closeAll();
  });


  describe('$.openImage', function () {

    // TODO: I don't think this test case is needed anymore
    it('should not accept invalid URL', undefined, function (done) {
      var self = this;
      this.browser.visit(toolkit.page1).catch(function (error) {
        done(error);
      }).then(function () {
        var $ = factory(self.browser);

        $.openImage(null);

        return self.browser.wait();
      }).then(function () {
        self.browser.window.location.toString().should.equals(toolkit.page1);
        done();
      });
    });

    it('should not open image if redirect_image is disabled', function (done) {
      var self = this;
      this.browser.visit(toolkit.page1).catch(function (error) {
        done(error);
      }).then(function () {
        var $ = factory(self.browser, {
          redirect_image: false,
        });

        var redirection = 'does_not_exist'.image();
        redirection();

        return self.browser.wait();
      }).then(function () {
        self.browser.window.location.toString().should.equals(toolkit.page1);
        done();
      });
    });

    describe('redirect', function () {
      it('should open image by default', function (done) {
        var path = '/does_not_exist';
        var self = this;

        this.browser.visit(toolkit.page1).catch(function (error) {
          done(error);
        }).then(function () {
          var $ = factory(self.browser);

          var redirection = path.image({
            replace: false,
          });
          redirection();

          return self.browser.wait();
        }).catch(function () {
          // excepted 404
          self.browser.window.location.pathname.should.equals(path);
          done();
        });
      });
    });

    describe('replace', function () {
      it('should replace document.body');
    });

  });

});


// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
