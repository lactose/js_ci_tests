var env = require('system').env;
//var casper = require('casper').create({
//    clientScripts:  [
//        'lib/jquery.min.js'
//    ]
//    onError: function(self, m) {   // Any "error" level message will be written
//        console.log('FATAL:' + m); // on the console output and PhantomJS will
//        self.exit();               // terminate
//    },
//    waitTimeout: 9000
//});

casper.start(env['BHLDN_ENV'] + '/the-shop-dresses/');

casper.then(function() {
    this.test.assertExists('#content');
    this.click('a.wl-outfit-dialog');
    this.waitUntilVisible('.v-product-quickviewdetailinfo-container', function() {
        this.test.pass('dialog is open');
    });
});

casper.then(function() {
    this.test.assertExists('#logo');
});


casper.then(function() {
    var pos;
    casper.page.injectJs('htdocs/resources/_shared/js/jquery/jquery.js');
    pos = this.evaluate(function() {
        $('a.hoverzoom').trigger('mouseenter.bigImage');
        return $('.zoom-mask-dialog').css('left');
    });
    this.test.assertNotEquals(pos, '-9999px', 'the zoom image is visible on mouseeneter');
    var pos = this.evaluate(function() {
        $('a.hoverzoom').trigger('mouseleave.bigImage');
        return $('.zoom-mask-dialog').css('left');
    });
    this.test.assertEquals(pos, '-9999px', 'the zoom image is hidden on mouseleave');
});

       

casper.run(function() {
    this.test.done();
});
