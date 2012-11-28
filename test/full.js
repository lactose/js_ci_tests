casper.start('http://local.bhldn.weblinc.com/the-shop-dresses/', function() {
    this.test.assertExists('#content');
    this.click('a.wl-outfit-dialog');
    this.waitUntilVisible('.v-product-quickviewdetailinfo-container', function() {
        this.test.pass('dialog is open');
    });
});

casper.run(function() {
    this.test.done();
});
