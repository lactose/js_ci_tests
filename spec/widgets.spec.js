describe("A suite", function() {

    beforeEach(function() {
        var $newA = $('<a id="testa" class="dialog" href="#testid">Dialog</a>'),
            $newD = $('<div id="testid">Some content</div>');
        $('body').append($newD);
        $('body').append($newA);

    });

    it("contains spec with an expectation", function() {
        expect(false).toBe(true);
    });




});


