casper.start('http://twitter.github.com/bootstrap/javascript.html#dropdowns', function() {
    this.test.assertExists('#navbar-example');
    this.click('#dropdowns .nav-pills .dropdown:last-of-type a.dropdown-toggle');
    this.waitUntilVisible('#dropdowns .nav-pills .open', function() {
        this.test.pass('Dropdown is open');
    });
});

casper.run(function() {
    this.test.done();
});
