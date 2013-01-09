/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(apod) {

    /*
     ======== A Handy Little QUnit Reference ========
     http://docs.jquery.com/QUnit

     Test methods:
     expect(numAssertions)
     stop(increment)
     start(decrement)
     Test assertions:
     ok(value, [message])
     equal(actual, expected, [message])
     notEqual(actual, expected, [message])
     deepEqual(actual, expected, [message])
     notDeepEqual(actual, expected, [message])
     strictEqual(actual, expected, [message])
     notStrictEqual(actual, expected, [message])
     raises(block, [expected], [message])
     */

    test('is creatable', 2, function() {
        var scraper = new apod.Scraper({
            cache: true,
            url: "test"
        });

        equal(scraper.options.cache, true, "should pass a cache option");
        equal(scraper.options.url, "test", "should pass a url option");
    });

    test('default options', 2, function() {
        var scraper = new apod.Scraper();

        equal(scraper.options.url, "http://apod.nasa.gov/apod/ap", "should have a default apod url");
        equal(scraper.options.cache, true, "should have a default caching option of true");
    });

    test('depth of scrapes', 4, function() {
        var scraper = new apod.Scraper();

        equal(scraper.scrape(), null, 'should return null if no scrape depth specified');
        equal(scraper.scrape(0), null, 'should return null if depth is 0');
        equal(scraper.scrape(3).length, 3, 'should scrape to a depth of 3');
        equal(scraper.scrape(50).length, 50, 'should scrape to a depth of 50');
    });


}(apod));
